import ContactList from './component/ContactList/ContactList';
import ChatContainer from './component/ChatContainer';
import './App.css';
import { useAppContext } from './Context';

function App() {
  const { isMobileView, selectedContact } = useAppContext();

  return (
    <>
      {!isMobileView ? (
        <div className='App-wrapper'>
          <ContactList />
          <ChatContainer />
        </div>
      ) : (
        <div className='App-wrapper'>
          {!selectedContact ? <ContactList /> : <ChatContainer />}
        </div>
      )}
    </>
  );
}

export default App;
