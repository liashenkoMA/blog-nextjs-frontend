import "./aboutme.scss";

import Developer from "@/components/Developer/Developer";
import AboutMe from "@/components/AboutMe/AboutMe";
import Skills from "@/components/Skills/Skills";
import Contatc from "@/components/Contact/Contact";

export default function Page() {
  return (
    <main className="main">
      <Developer />
      <AboutMe />
      <Skills />
      <Contatc />
    </main>
  );
}
