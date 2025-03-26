import { useEffect, useRef } from 'react';

const available = false;

export function useWebSocket(url: string) {
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    if (!available) return;

    ws.current = new WebSocket(url);

    ws.current.onopen = () => {
      console.log('WebSocket接続が確立されましたわ');
    };

    ws.current.onerror = (error) => {
      console.error('WebSocketエラーが発生いたしましたわ:', error);
    };

    ws.current.onclose = () => {
      console.log('WebSocket接続が閉じられましたわ');
    };

    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, [url]);

  const sendMessage = (message: string) => {
    if (ws.current?.readyState === WebSocket.OPEN) {
      ws.current.send(message);
    } else {
      console.error('WebSocketが接続されていませんわ');
    }
  };

  return { sendMessage };
}
