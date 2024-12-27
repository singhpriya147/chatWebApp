import './Contact.css'

const Contact = ({ item, onContactSelect  }) => {
 

  const handleClick = () => {
   
     onContactSelect(item);
  };

 
  return (
    <div onClick={handleClick} className='contact'>
      <div  className='img-container'>
        <img src={item.image} alt=''  />
      </div>
      <span>{item.name}</span>
    </div>
  );
};

export default Contact