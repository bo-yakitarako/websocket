'use client';

import styles from './MessagesList.module.css';
import { useMessages } from '../contexts/MessagesContext';
import dayjs from 'dayjs';

export function MessagesList() {
  const messages = useMessages();

  return (
    <div className={styles.container}>
      {messages.map((message) => (
        <div key={message.id} className={styles.message}>
          <span className={styles.messageText}>{message.content}</span>
          <span className={styles.time}>{dayjs(message.createdAt).format('HH:mm')}</span>
        </div>
      ))}
    </div>
  );
}
