
import './App.css';
import profileImg from './assets/profile.jpg';
import resume from './assets/Pabitra_Gouda_Resume.pdf';

function App() {
  const skills = [
    {
      title: 'Programming',
      items: ['Java', 'SQL']
    },
    {
      title: 'Backend Development',
      items: ['Spring Boot', 'Spring MVC', 'REST APIs', 'JDBC']
    },
    {
      title: 'Frontend Development',
      items: ['HTML5', 'CSS3', 'JavaScript', 'React.js']
    },
    {
      title: 'Database',
      items: ['Oracle', 'MySQL', 'PostgreSQL']
    },
    {
      title: 'Tools',
      items: ['Eclipse', 'Git', 'GitHub', 'Postman']
    },
    {
      title: 'Core Concepts',
      items: [
        'OOP',
        'Collections',
        'Exception Handling',
        'Multithreading',
        'DSA'
      ]
    }
  ];

  const projects = [
    {
      number: '01',
      title: 'Autophile Yatra',
      subtitle: 'Travel & Trip Booking Management System',
      description:
        'A full-stack travel booking application with separate Customer, Admin and Driver modules. It includes booking management, OTP verification, payment workflows and trip management.',
      technologies: [
        'Java',
        'Spring Boot',
        'React',
        'Oracle',
        'REST API',
        'Hibernate'
      ],
      github: 'https://github.com/Pabitra-x/autophile-yatra',
      linkText: 'View GitHub Repository ↗'
    },
    {
      number: '02',
      title: 'Student Management System',
      subtitle: 'Student Records Administration',
      description:
        'A student management application designed to manage student enrollment, student records, CRUD operations and database integration using Spring Boot and REST APIs.',
      technologies: [
        'Java',
        'Spring Boot',
        'Spring MVC',
        'SQL',
        'REST API'
      ],
      github: 'https://github.com/Pabitra-x',
      linkText: 'View GitHub Profile ↗'
    }
  ];

  return (
    <div className="portfolio">

      {/* NAVIGATION */}

      <nav className="navbar">
        <a href="#home" className="logo">
          PABITRA<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#architecture">Architecture</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>

        {/* 1. HOME SECTION */}

        <section id="home" className="hero-section">

          <div className="hero-content">

            <p className="eyebrow">
              JAVA DEVELOPER PORTFOLIO
            </p>

            <h1>
              Hi, I'm <span>Pabitra Gouda</span>
            </h1>

            <h2>Full Stack Java Developer</h2>

            <p className="hero-description">
              I build web applications using Java, Spring Boot,
              REST APIs and modern frontend technologies.
              I enjoy learning, solving technical problems and
              turning ideas into practical software solutions.
            </p>

            <div className="hero-buttons">

              <a href="#projects" className="btn primary">
                Explore My Work
              </a>

              <a
                href={resume}
                download="Pabitra_Gouda_Resume.pdf"
                className="btn secondary"
              >
                Download Resume ↓
              </a>

            </div>

            <div className="social-links">

              <a
                href="https://github.com/Pabitra-x"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/pabitra-gouda-14b8a9328"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://leetcode.com/u/pabitragouda/"
                target="_blank"
                rel="noreferrer"
              >
                LeetCode ↗
              </a>

            </div>

          </div>

          <div className="hero-profile">

            <div className="profile-card">

              <img src={profileImg} alt="Pabitra Gouda" />

              <h3>Pabitra Gouda</h3>

              <p>Full Stack Java Developer</p>

              <div className="profile-tags">
                <span>Java</span>
                <span>Spring Boot</span>
                <span>React</span>
                <span>Oracle</span>
              </div>

            </div>

          </div>

        </section>

        {/* 2. PROJECTS SECTION */}

        <section id="projects" className="section">

          <p className="eyebrow">SELECTED WORK</p>

          <h2 className="section-title">Projects</h2>

          <div className="projects-grid">

            {projects.map((project) => (

              <article
                className="project-card"
                key={project.number}
              >

                <span className="project-number">
                  {project.number}
                </span>

                <h3>{project.title}</h3>

                <h4>{project.subtitle}</h4>

                <p>{project.description}</p>

                <div className="project-tech">

                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}

                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.linkText}
                </a>

              </article>

            ))}

          </div>

        </section>

        {/* 3. SYSTEM ARCHITECTURE */}

        <section id="architecture" className="section">

          <p className="eyebrow">APPLICATION DESIGN</p>

          <h2 className="section-title">
            System Architecture
          </h2>

          <p className="architecture-description">
            Autophile Yatra uses a layered application architecture
            connecting the React frontend with Java Spring Boot
            services and Oracle Database.
          </p>

          <div className="architecture-container">

            <div className="architecture-box frontend-box">

              <h3>Frontend Layer</h3>

              <p>React · HTML · CSS · JavaScript</p>

              <span>Customer | Admin | Driver</span>

            </div>

            <div className="architecture-arrow">
              ↓ REST APIs ↓
            </div>

            <div className="architecture-box backend-box">

              <h3>Backend Layer</h3>

              <p>Java 17 · Spring Boot</p>

            </div>

            <div className="architecture-arrow">
              ↓
            </div>

            <div className="architecture-layers">

              <div className="architecture-box">
                <h3>Controller Layer</h3>
                <p>HTTP request handling</p>
              </div>

              <div className="architecture-box">
                <h3>Service Layer</h3>
                <p>Application business logic</p>
              </div>

              <div className="architecture-box">
                <h3>Repository Layer</h3>
                <p>Data access operations</p>
              </div>

            </div>

            <div className="architecture-arrow">
              ↓
            </div>

            <div className="architecture-box database-box">

              <h3>Persistence Layer</h3>

              <p>Spring Data JPA · Hibernate</p>

            </div>

            <div className="architecture-arrow">
              ↓
            </div>

            <div className="architecture-box oracle-box">

              <h3>Oracle Database</h3>

              <p>Relational data storage</p>

            </div>

          </div>

        </section>

        {/* 4. SKILLS SECTION */}

        <section id="skills" className="section">

          <p className="eyebrow">MY TECHNICAL TOOLKIT</p>

          <h2 className="section-title">Technical Skills</h2>

          <div className="skills-grid">

            {skills.map((group) => (

              <div className="skill-card" key={group.title}>

                <h3>{group.title}</h3>

                <div className="skill-tags">

                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* 5. EDUCATION SECTION */}

        <section id="education" className="section">

          <p className="eyebrow">ACADEMIC BACKGROUND</p>

          <h2 className="section-title">Education</h2>

          <div className="education-list">

            <div className="education-card">

              <span>Currently Pursuing</span>

              <h3>
                Master of Business Administration (MBA)
              </h3>

              <p>
                Roland Institute of Technology, Berhampur
              </p>

            </div>

            <div className="education-card">

              <span>2020 – 2023</span>

              <h3>Bachelor of Arts (B.A.)</h3>

              <p>Berhampur University, Odisha</p>

              <p>CGPA: 7.3 / 10.0</p>

            </div>

          </div>

        </section>

        {/* 6. ABOUT SECTION */}

        <section id="about" className="section">

          <p className="eyebrow">INTRODUCTION</p>

          <h2 className="section-title">About Me</h2>

          <div className="about-content">

            <p>
              I am Pabitra Gouda from Odisha, currently based in
              Hyderabad. I completed my Bachelor of Arts and am
              pursuing an MBA at Roland Institute of Technology.
            </p>

            <p>
              My technical focus is Full Stack Java Development,
              including Core Java, Object-Oriented Programming,
              Spring Boot, Spring MVC, REST APIs and relational
              databases.
            </p>

            <p>
              I have developed application projects involving
              travel booking workflows and student record
              management. I enjoy learning new technologies
              and improving my problem-solving skills.
            </p>

          </div>

        </section>

        {/* 7. CONTACT SECTION */}

        <section id="contact" className="section contact-section">

          <p className="eyebrow">GET IN TOUCH</p>

          <h2 className="section-title">Let's Connect</h2>

          <p className="contact-intro">
            For professional opportunities, project discussions
            or collaboration, feel free to contact me.
          </p>

          <div className="contact-card">

            <div className="contact-item">

              <span>Email Address</span>

              <a href="mailto:pabitrag9861@gmail.com">
                pabitrag9861@gmail.com
              </a>

            </div>

            <div className="contact-item">

              <span>Phone Number</span>

              <a href="tel:+916371027214">
                +91 6371027214
              </a>

            </div>

            <div className="contact-buttons">

              <a
                href="mailto:pabitrag9861@gmail.com"
                className="btn primary"
              >
                Send Email
              </a>

              <a
                href="tel:+916371027214"
                className="btn secondary"
              >
                Call Me
              </a>

            </div>

          </div>

        </section>

      </main>

      {/* FOOTER */}

      <footer className="footer">

        <p>
          © 2026 Pabitra Gouda. All rights reserved.
        </p>

        <p>
          Built with React and Java technologies.
        </p>

      </footer>

    </div>
  );
}

export default App;
