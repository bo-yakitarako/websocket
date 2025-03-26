'use client';

import { useState, KeyboardEvent } from 'react';
import styles from './Input.module.css';
import { useAtomValue } from 'jotai';
import { socketAtom } from '../globalStates/atoms';

export function Input() {
  const [message, setMessage] = useState('');
  const socket = useAtomValue(socketAtom);

  const handleSubmit = () => {
    if (message.trim()) {
      socket?.emit('message', message);
      setMessage('');
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="メッセージを入力してください..."
        className={styles.input}
      />
      <button onClick={handleSubmit} className={styles.button}>
        送信
      </button>
    </div>
  );
}
