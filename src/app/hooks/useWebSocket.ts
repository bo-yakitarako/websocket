'use client';

import { useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { io } from 'socket.io-client';
import { addMessageAtom, socketAtom } from '../globalStates/atoms';

export function useWebSocket() {
  const setSocket = useSetAtom(socketAtom);
  const addMessage = useSetAtom(addMessageAtom);

  useEffect(() => {
    fetch('/api/sockets', { method: 'POST' }).then(() => {
      const socket = io({ autoConnect: false });
      socket.connect();
      setSocket(socket);

      socket.on('connect', () => {
        console.log('connected');
      });

      socket.on('message', (data: string) => {
        addMessage(data);
      });
    });
  }, []);
}
