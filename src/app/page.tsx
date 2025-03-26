import { Input } from './components/Input';
import { MessagesList } from './components/MessagesList';
import { Title } from './components/Title';

export default function Home() {
  return (
    <>
      <Title />
      <Input />
      <MessagesList />
    </>
  );
}
