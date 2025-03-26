'use client';

import styles from './MessagesList.module.css';
import dayjs from 'dayjs';
import { useAtomValue } from 'jotai';
import { messagesAtom } from '../globalStates/atoms';

export function MessagesList() {
  const messages = useAtomValue(messagesAtom);

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
