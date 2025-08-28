// app/page.tsx
import Navbar from "../components/Navbar";
import About from "./about";
import Contact from "./contact";
import Experience from "./experience";
import Projects from "./projects";
import Skills from "./skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 dark:from-black dark:to-gray-900 transition-colors">
      <Navbar />
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="experience"><Experience /></section>
        <section id="contact"><Contact /></section>
      {/* Add other sections/components as needed */}
    </main>
  );
}
