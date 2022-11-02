import logo from '../assets/airbnb-logo.png';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="Airbnb logo" className='logo' />
    </header>
  );
}
