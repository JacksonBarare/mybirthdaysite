import './LocationRSVP.css';
import confetti from 'canvas-confetti';

export default function LocationRSVP() {
  const handleSubmit = (e) => {
    e.preventDefault();
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
    });
    alert('RSVP submitted 🎉');
  };

  return (
    <section className="rsvp-section" id="rsvp">
      <h2 className="rsvp-title">📍 Location & RSVP</h2>
      <div className="rsvp-container">
        {/* Location Info */}
        <div className="location-info">
          <h3>🎈 Kabuki’s House</h3>
          <p>
            Located in country the place, full of love, snacks, and cake. Address shared privately on invite.
          </p>

          <h3>🎉 Casablanca Club</h3>
          <p>
            Gather here from 8:30 PM Friday – Dress to party and bring your energy! 🪩
          </p>

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

          {/* Option: Replace this form with your Google Form action URL */}
          <form
  action="https://docs.google.com/forms/d/e/1FAIpQLSdI5BWK26V0I1NvSjjYRqXKmsOlVctPe8z1jWx8Bt5vmOiBeA/formResponse"
  method="POST"
  target="_blank"
>
  <input name="entry.1881542481" type="text" placeholder="Your Name" required />
  <input name="entry.167433247" type="text" placeholder="Your Phone or Email" />
  <textarea name="entry.1120664169" placeholder="Message or gift note..." rows="3"></textarea>
  <button type="submit">I'm Coming!</button>
</form>


          <a
            href="https://wa.me/254796540822?text=Hey!%20I%27ll%20be%20joining%20Kabuki%27s%20birthday%20celebration%20🥳"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-btn"
          >
            📲 RSVP via WhatsApp
          </a>
        </div>
      </div>

      {/* Floating gift icon */}
      <a href="#rsvp" className="gift-float" title="RSVP Now 🎁">
        🎁
      </a>
    </section>
  );
}
