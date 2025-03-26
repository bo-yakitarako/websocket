'use client';

import { useWebSocket } from '../hooks/useWebSocket';

export const Title: React.FC = () => {
  useWebSocket();
  return (
    <header style={{ textAlign: 'center' }}>
      <h1>二度もぶった</h1>
      <p>親父にもぶたれたことないのに</p>
    </header>
  );
};
