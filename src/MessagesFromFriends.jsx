import './MessagesFromFriends.css';

const messages = [
  {
    name: 'Jack',
    avatar: '/images/img6.jpg',
    message: 'Happy Birthday Kabuki! You’re such a bright light in all our lives. Wishing you joy and success always!',
  },
  {
    name: 'Risper',
    avatar: '/images/img7.jpg',
    message: 'Hope this year brings you as much happiness as you’ve brought to everyone around you. Enjoy your day!',
  },
  {
    name: 'Sally',
    avatar: '/images/img8.jpg',
    message: 'Sending you smiles, love, and cake! Have a fabulous birthday Kabuki!',
  },
  {
    name: 'Chellah',
    avatar: '/images/about.jpg',
    message: 'Cheers to another year of awesomeness! You deserve every bit of joy today and always.',
  },
    {
    name: 'claire',
    avatar: '/images/img5.jpg',
    message: 'Cheers to another year of awesomeness! You deserve every bit of joy today and always.',
  },
    {
    name: 'eddy',
    avatar: '/images/img4.jpg',
    message: 'Cheers to another year of awesomeness! You deserve every bit of joy today and always.',
  },
];

export default function MessagesFromFriends() {
  return (
    <section className="messages-section">
      <h2 className="messages-title">Messages from Friends</h2>
      <div className="messages-grid">
        {messages.map((msg, index) => (
          <div className="message-card" key={index}>
            <img src={msg.avatar} alt={msg.name} className="avatar" />
            <h3>{msg.name}</h3>
            <p>"{msg.message}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}
