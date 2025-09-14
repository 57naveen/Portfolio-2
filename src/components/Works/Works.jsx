import React from "react";
import "./Work.css";

const projects = [
 {
    id: 1,
    title: "DevTinder 👨‍💻",
    description:
      "A social networking platform for developers to connect, collaborate, and share knowledge. Features secure JWT auth, encrypted passwords, and scalable microservices architecture.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    code: "https://github.com/57naveen/devTinderWeb",
    demo: "http://16.170.231.228/login",
    img: "/assets/DevTinder.png"
  },
   {
    id: 2,
    title: "Vision.AI 🎨",
    description:
      "An AI-powered SaaS app that generates high-quality images from text prompts in real-time. Built with a sleek, responsive landing page and interactive preview UI.",
    tech: ["React", "Tailwind", "AI Model Integration"],
    code: "https://github.com/57naveen/Text_To_Image_Client",
    demo: "https://vision-ai-2f5ca.web.app/",
    img: "/assets/Vision.png"
  },
   {
    id: 3,
    title: "Mansion Leafs 🌱",
    description:
      "A green-themed SaaS landing page featuring immersive 3D plant visuals, eco-friendly design, and mobile-first responsiveness for fast performance.",
    tech: ["React", "Tailwind", "3D Assets"],
    code: "https://github.com/57naveen/Responsive-Plants",
    demo: "https://mansionleafs.web.app/",
    img: "/assets/mansion.png"
  }
];

const Works = () => {
  return (
    <section className="work section" id="portfolio">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most recent works</span>

      <div className="work__container container grid">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`work__card ${
              index % 2 === 0 ? "left" : "right"
            }`}
          >
            <div className="work__image">
              <img src={project.img} alt={project.title} />
            </div>
            <div className="work__content">
              <h3 className="work__title">{project.title}</h3>
              <p className="work__description">{project.description}</p>
              <p className="work__tech">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech">{t}</span>
                ))}
              </p>
              <div className="work__links">
                <a href={project.code} target="_blank" rel="noreferrer">Code</a>
                <a href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
