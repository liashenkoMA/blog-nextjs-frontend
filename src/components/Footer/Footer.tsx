import Social from "@/components/Social/Social";
import "./footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__copyright">© 2023 Created by <span className="footer__copyright_type_color">LyashenkoMA</span></p>
        <Social />
      </div>
    </footer>
  );
}
