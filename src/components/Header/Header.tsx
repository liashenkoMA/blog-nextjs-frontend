import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import "./header.scss";

export default function Header() {
  return (
    <header className="header">
      <section className="header__content">
        <Logo />
        <Navigation />
      </section>
    </header>
  );
}
