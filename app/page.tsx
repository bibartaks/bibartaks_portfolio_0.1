import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Landing from "./components/Landing/Landing";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

export default function Home() {
  // const locomotiveScroll = new LocomotiveScroll();

  return (
    <div>
      <svg
        className="pointer-events-none fixed isolate z-50 opacity-90 mix-blend-soft-light"
        width="100%"
        height="100%"
      >
        <filter id="pedroduarteisalegend">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.80"
            numOctaves="4"
            stitchTiles="stitch"
          ></feTurbulence>
        </filter>
        <rect
          width="100%"
          height="100%"
          filter="url(#pedroduarteisalegend)"
        ></rect>
      </svg>
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}
