import "./navigation.scss";
import Search from "../Search/Search";
import MainNavigate from "../MainNavigate/MainNavigate";
import Social from "@/components/Social/Social";

export default function Navigation() {
  return (
    <nav className="nav">
      <MainNavigate />
      <Search />
      <Social />
    </nav>
  );
}
