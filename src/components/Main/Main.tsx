import "./main.scss";
import Developer from "../Developer/Developer";
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";

export default function Main() {
  return (
    <main className="main">
      <Developer />
      <AboutMe />
      <Skills />
    </main>
  );
}
