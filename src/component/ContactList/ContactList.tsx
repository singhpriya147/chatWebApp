import { contacts } from '../../data/contacts';
import Contact from '../Contact/Contact';
import './ContactList.css';
import { useAppContext } from '../../Context';
const ContactList = () => {
const {handleContactSelect} =useAppContext();

  return (
    <div className='ContactList'>
      <h3>YOUR CHATS</h3>
      {contacts.map((item) => (
        <Contact item={item} onContactSelect={handleContactSelect} />
      ))}
    </div>
  );
};

export default ContactList;
