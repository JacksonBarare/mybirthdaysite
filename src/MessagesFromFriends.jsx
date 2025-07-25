import './MessagesFromFriends.css';

const messages = [
 {
    name: 'Eddy',
    avatar: '/images/eddy.jpeg',
    message: "Happy Birthday, sis! Watching you grow into the incredible woman you are makes me proud every day. Let's celebrate you today and always!",
  },
  {
    name: 'Jack',
    avatar: '/images/jb.jpeg',
    message: "BettyK, every moment with you is magic. You light up my world in ways I never knew possible. Happy Birthday — here’s to your beautiful heart and everything ahead. 💜",
  },
  {
    name: 'Risper',
    avatar: '/images/risper.jpeg',
    message: "Happy Birthday babe! Your energy is unmatched and your laughter is contagious. Keep shining, we love you always!",
  },
  {
    name: 'Sally',
    avatar: '/images/sally.jpeg',
    message: "You’re such a gem Betty! Life’s better with you in it. Here’s to good vibes, louder laughs, and forever memories!",
  },
  {
    name: 'Chellah',
    avatar: '/images/chellah.jpeg',
    message: "My girl! Wishing you a day as bold, beautiful, and unforgettable as you are. Let’s make more crazy memories together!",
  },
  {
    name: 'Claire',
    avatar: '/images/claire.jpeg',
    message: "To the realest and sweetest girl I know — Happy Birthday Kabuki! You make friendship feel like home. Love you always!",
  },
  {
    name: 'Darlene',
    avatar: '/images/darlene.jpeg',
    message: "Happy Birthday sunshine! Your kindness and fun spirit make life better for all of us. Never change!",
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
