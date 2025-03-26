import type { NextApiRequest, NextApiResponse } from 'next';
import cors from 'cors';

import type { Socket as NetSocket } from 'net';
import type { Server as HttpServer } from 'http';
import { Server as SocketServer } from 'socket.io';

// Next.jsの型定義を拡張してSocket.IOの型定義を追加
type ReseponseWebSocket = NextApiResponse & {
  socket: NetSocket & { server: HttpServer & { io?: SocketServer } };
};

const corsMiddleware = cors();

export default function SocketHandler(req: NextApiRequest, res: ReseponseWebSocket) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }
  if (res.socket.server.io) {
    return res.send('already-set-up');
  }
  const io = new SocketServer(res.socket.server, {
    addTrailingSlash: false,
  });

  io.on('connection', (socket) => {
    const clientId = socket.id;
    console.log(`オイオイオイ、イカした${clientId}がやってきたぜ`);

    socket.on('message', (data) => {
      io.emit('message', data);
      console.log(`なんだって？「${data}」だってよ。仕方ねえなぁ`);
    });

    socket.on('disconnect', () => {
      console.log('じゃあな✋');
    });
  });

  corsMiddleware(req, res, () => {
    res.socket.server.io = io;
    res.end();
  });
}
