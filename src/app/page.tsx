import { Input } from './components/Input';
import { MessagesList } from './components/MessagesList';
import { Title } from './components/Title';
import { MessagesProvider } from './contexts/MessagesContext';

export default function Home() {
  return (
    <MessagesProvider>
      <Title />
      <Input />
      <MessagesList />
    </MessagesProvider>
  );
}
