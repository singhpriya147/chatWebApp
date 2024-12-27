import './Chat.css';
import { IoArrowBack,IoSend } from 'react-icons/io5';
import { init, id } from '@instantdb/react';
import { useAppContext } from '../../Context';
const db = init({
  appId: 'ba48680e-2f23-4c8b-8685-f25dfcb5ecc2',
  devtool: false,
});



function Chat() {
  const { selectedContact, setSelectedContact, isMobileView } = useAppContext();

  const handleBack = () => {
    console.log("back button is clicked")
    setSelectedContact(null); 
  };
  const { isLoading, error, data } = db.useQuery({ messages: {} });
  if (isLoading) return <div>Fetching data...</div>;
  if (error) return <div>Error fetching data: {error.message}</div>;
  const { messages } = data;



  function addMessage(text: string) {
    db.transact(
      db.tx.messages[id()].update({
        contactId: selectedContact.id,
        text,
        createdAt: new Date(),
      })
    );
  }
  const filteredMessages = messages.filter(
    (message) => message.contactId === selectedContact.id
  );

  const sortedMessages = filteredMessages.sort(
    (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
  );

  return (
    <div className='chat-wrapper'>
      {isMobileView && (
        <button className='back-button' onClick={handleBack}>
          <IoArrowBack /> Back
        </button>
      )}
      <div className='chat-header'>
        <div className='img-container'>
          <img src={selectedContact.image} alt='' />
        </div>
        <h3>{selectedContact.name}</h3>
      </div>
      <div className='msg-container'>
        {sortedMessages.map((message) => (
          <div key={message.id} className='message'>
            {message.text}
            <span className='date'>
              {new Date(message.createdAt).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </span>
          </div>
        ))}
      </div>

      <form
        onSubmit={(e: any) => {
          e.preventDefault();
          addMessage(e.target[0].value);
          e.target[0].value = '';
        }}
        className='form'
      >
        <input
          placeholder='Start Typing...'
          type='text'
          className='input-field'
        />
        <button type='submit'>
          <IoSend />
        </button>
      </form>
    </div>
  );
}

export default Chat;
