import './LandingPage.css';

export default function LandingPage({ setActiveSection }) {
  return (
    <div className="landing-container">

      {/* Background Video */}
      <video
        className="landing-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/src/assets/video/hotel.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="overlay"></div>

      <div className="landing-content">
        <h1 className="title">Unlock Operational Excellence</h1>
        <p className="subtitle">
          Optimize room inventory, elevate guest experiences, and master every booking cycle.
        </p>

        <button
          className="cta-button"
          onClick={() => setActiveSection('rooms')}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
