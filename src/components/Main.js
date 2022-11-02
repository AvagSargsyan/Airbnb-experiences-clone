import heroImg from '../assets/hero-img.png';

export default function Main() {
  return (
    <main>
      <img src={heroImg} alt="Hero" className="hero-img" />
      <h1 className="main-heading">Online Experiences</h1>
      <p className="main-text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </main>
  );
}
