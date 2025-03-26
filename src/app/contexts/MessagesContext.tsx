'use client';

import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from 'react';

export type Message = {
  id: string;
  content: string;
  createdAt: number;
};

const MessagesContext = createContext<Message[]>([]);
const SetMessagesContext = createContext<Dispatch<SetStateAction<Message[]>>>(() => {});

export const MessagesProvider = ({ children }: PropsWithChildren) => {
  const [messages, setMessages] = useState<Message[]>([]);

  return (
    <MessagesContext.Provider value={messages}>
      <SetMessagesContext.Provider value={setMessages}>{children}</SetMessagesContext.Provider>
    </MessagesContext.Provider>
  );
};

export const useMessages = () => useContext(MessagesContext);
export const useSetMessages = () => useContext(SetMessagesContext);

export const useAddMessage = () => {
  const setMessages = useSetMessages();
  return (content: string) => {
    const contentTrimmed = content.trim();
    if (contentTrimmed === '') return null;
    const message: Message = {
      id: crypto.randomUUID(),
      content: contentTrimmed,
      createdAt: Date.now(),
    };
    setMessages((prev) => [...prev, message]);
    return message;
  };
};
