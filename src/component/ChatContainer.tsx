import { useContext } from 'react';
import Chat from './Chat/Chat';
// import { AppContext } from '../Context';
import Default from './Default';
import { useAppContext } from '../Context';
const ChatContainer = () => {
 const { selectedContact } = useAppContext();
 console.log(selectedContact)
   return selectedContact ? <Chat/> : <Default />;
};

export default ChatContainer;
