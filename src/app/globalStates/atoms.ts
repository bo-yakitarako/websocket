import { atom } from 'jotai';
import { Socket } from 'socket.io-client';

export type Message = {
  id: string;
  content: string;
  createdAt: number;
};

export const socketAtom = atom<Socket | null>(null);
export const messagesAtom = atom<Message[]>([]);

export const addMessageAtom = atom(null, (get, set, content: string) => {
  const message = {
    id: crypto.randomUUID(),
    content,
    createdAt: Date.now(),
  };
  set(messagesAtom, (prev) => [...prev, message]);
});
