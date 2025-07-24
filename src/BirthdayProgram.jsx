import './BirthdayProgram.css';

export default function BirthdayProgram() {
  return (
    <section className="program-section">
      <h2 className="program-title">🎊 Upcoming Birthday Program</h2>

      {/* Friday Events */}
      <div className="program-day">
        <h3>📅 Friday – Pre-Birthday Bash</h3>
        <ul className="program-list">
          <li>
            <span className="time">4:00 PM</span>
            <span className="desc">Friends arrive at Kabuki’s house, shots & <strong>Do or Drink</strong> game</span>
          </li>
          <li>
            <span className="time">7:00 PM</span>
            <span className="desc">Supper is served 🍽️</span>
          </li>
          <li>
            <span className="time">8:30 PM</span>
            <span className="desc">Meet at <strong>Casablanca Club</strong> and party till late 🎶</span>
          </li>
        </ul>
      </div>

      {/* Monday Events */}
      <div className="program-day">
        <h3>🎂 Monday – The Big Day</h3>
        <ul className="program-list">
          <li>
            <span className="time">From 2:00 PM</span>
            <span className="desc">Meet at Kabuki’s house for snacks, cake cutting 🎂, gift giving 🎁, and vibes ✨</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
