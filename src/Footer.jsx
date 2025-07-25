import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="love-note">
        <p>Made with 💜 for <span>Kabuki</span></p>
      </div>

      <div className="developer-cta">
        <p>✨ Want your own beautiful website like this?</p>
        <a
          href="https://wa.me/254741179804?text=Hi!%20I%20loved%20Kabuki%27s%20birthday%20site%20and%20would%20like%20one%20too!"
          target="_blank"
          rel="noreferrer"
        >
          Contact the Developer
        </a>
        <a href="https://jacksonbarare.vercel.app" target="_blank" rel="noreferrer">
          View Portfolio
        </a>
      </div>
    </footer>
  );
}
