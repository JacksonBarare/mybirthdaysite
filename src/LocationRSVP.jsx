import './LocationRSVP.css';

export default function LocationRSVP() {
  return (
    <section className="rsvp-section">
      <h2 className="rsvp-title">📍 Location & RSVP</h2>
      <div className="rsvp-container">
        {/* Location Info */}
        <div className="location-info">
          <h3>🎈 Kabuki’s House</h3>
          <p>Located in [Your Area/City], full of love, snacks, and cake. Address shared privately on invite.</p>

          <h3>🎉 Casablanca Club</h3>
          <p>Gather here from 8:30 PM Friday – Dress to party and bring your energy! 🪩</p>

          {/* Optional map link */}
          <a
            href="https://www.google.com/maps/search/casablanca+club"
            target="_blank"
            rel="noreferrer"
            className="map-link"
          >
            📍 View on Google Maps
          </a>
        </div>

        {/* RSVP Form */}
        <div className="rsvp-form">
          <h3>🎁 RSVP / Send Your Love</h3>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" required />
            <input type="text" placeholder="Your Phone or Email" />
            <textarea placeholder="Message or gift note..." rows="3"></textarea>
            <button type="submit">I'm Coming!</button>
          </form>
        </div>
      </div>
    </section>
  );
}
