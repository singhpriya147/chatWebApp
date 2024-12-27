import heroImg from '../assets/heroImg.jpg'

const Default = () => {
  return (
    <div style={{ height: '100vh', width: '75%' }}>
      <img
        src={heroImg}
        alt=''
        style={{ height: '100vh', width: '100%', objectFit: 'contain' }}
      />
    </div>
  );
}

export default Default