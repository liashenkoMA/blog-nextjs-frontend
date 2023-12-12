import "./main.scss";
import Developer from "../Developer/Developer";
import AboutMe from "../AboutMe/AboutMe";

export default function Main() {
  return (
    <main className="main">
      <Developer />
      <AboutMe />
    </main>
  );
}
