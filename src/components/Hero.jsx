import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-desc">
          <h1 className="title">Little Lemon</h1>
          <h2 className="subtitle">Chicago</h2>
          <p className="desc">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to="/booking">
            <button className="reserve-btn btn">Reserve a table</button>
          </Link>
        </div>
        <div className="img-wrapper">
          <img
            className="hero-img"
            src={require("../assets/hero.png")}
            alt="Hero"
          />
        </div>
      </div>
    </section>
  );
}
