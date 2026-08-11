import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectsSection from "./components/ProjectsSection";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  const skills = {
    Frontend: ["JavaScript", "React", "Tailwind CSS", "HTML/CSS"],
    Backend: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "REST APIs",
      "MongoDB",
      "Java",
    ],
    "AI / Tools": ["OpenAI API", "Git", "Figma"],
  };

  const projects = [
    {
      featured: true,
      title: "WeGro --In progress",
      subtitle: "AI-powered agricultural platform",
      description:
        "A platform connecting smallholder farmers with AI-driven crop recommendations, market price data, and agricultural advisory — reducing information asymmetry across Sub-Saharan Africa.",
      stack: [
        "Next.js",
        "Python",
        "FastAPI",
        "OpenAI",
        "PostgreSQL",
        "Tailwind",
      ],

      repoUrl: "https://github.com",
      imageBg: "linear-gradient(135deg, #f0f4ff 0%, #e8f5e9 100%)",
    },
    {
      title: "Student Path Guide",
      subtitle: "Academic planning tool for CS students",
      description:
        "A course planning and progress-tracking tool built for TUT Computer Science students. Visualises degree requirements, prerequisite chains, and semester load balancing.",
      stack: ["React", "TypeScript", "Node.js", "SQLite"],
      repoUrl: "https://github.com",
      imageBg: "linear-gradient(135deg, #f0f4ff 0%, #ede9fe 100%)",
    },
  ];

  return (
    <div style={{ backgroundColor: "#FAFAF8", minHeight: "100vh" }}>
      <Nav
        navLinks={navLinks}
        scrolled={scrolled}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <Hero />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ height: "1px", backgroundColor: "#E4E4E1" }} />
      </div>

      <About skills={skills} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ height: "1px", backgroundColor: "#E4E4E1" }} />
      </div>

      <ProjectsSection projects={projects} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ height: "1px", backgroundColor: "#E4E4E1" }} />
      </div>

      <Education />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ height: "1px", backgroundColor: "#E4E4E1" }} />
      </div>

      <Contact />

      <Footer />

      <style>{`
        @media (max-width: 720px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 721px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </div>
  );
}
