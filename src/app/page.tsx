import Footer from "./layout/Footer";
import Goals from "./layout/Goals";
import Hero from "./layout/Hero";
import Projects from "./layout/Projects";
import Skills from "./layout/Skills";
export default function Home() {
    return (
        <div>
            <Hero />
            <Skills />
            <Goals />
            <Projects />
            <Footer />
        </div>
    );
}
