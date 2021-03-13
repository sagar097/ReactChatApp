import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import { credentials, getCredToLocalStorage } from './Constant/constant';
import './App.css';

const App = () => {
  if (!getCredToLocalStorage('username')) return <LoginForm />;
  const { projectID } = credentials;
  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={getCredToLocalStorage('username')}
      userSecret={getCredToLocalStorage('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;