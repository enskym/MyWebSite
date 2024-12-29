import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Enes Kaymaz</h1>
            <h2 className="subtitle">Full Stack .NET Developer</h2>
            <div className="hero-links">
              <a href="https://github.com/enskym" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-github"></i> GitHub
              </a>
              <a href="mailto:eneskaymaz3425@gmail.com" className="social-link">
                <i className="fas fa-envelope"></i> Email
              </a>
              <a href="https://twitter.com/enesskaymazz" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </div>
          </div>
        </div>
      </section>

      <main className="main-content">
        {/* About Section */}
        <section className="about" id="about">
          <h2>Hakkımda</h2>
          <div className="about-content">
            <p>
              Merhaba! Ben Enes Kaymaz. Full Stack .NET Developer olarak çalışıyorum.
              .NET Core ve .NET Framework teknolojileri üzerinde uzmanlaşmış bir yazılım geliştiricisiyim.
              Mebasoft Software Consultancy'de yazılım geliştirici olarak çalışmaktayım.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills" id="skills">
          <h2>Yetenekler</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Backend</h3>
              <div className="skill-items">
                <div className="skill-item">.NET Core</div>
                <div className="skill-item">.NET Framework</div>
                <div className="skill-item">C#</div>
                <div className="skill-item">Entity Framework</div>
                <div className="skill-item">Web API</div>
              </div>
            </div>
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skill-items">
                <div className="skill-item">HTML5</div>
                <div className="skill-item">CSS3</div>
                <div className="skill-item">JavaScript</div>
              </div>
            </div>
            <div className="skill-category">
              <h3>Veritabanı & Araçlar</h3>
              <div className="skill-items">
                <div className="skill-item">SQL Server</div>
                <div className="skill-item">Git</div>
                <div className="skill-item">VS Code</div>
                <div className="skill-item">Postman</div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="projects" id="projects">
          <h2>Projeler</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Excel-Crm-Transfer</h3>
              <p>Excel dosyalarını okuyup LOGO muhasebe servisine fatura satırı oluşturan .NET Framework projesi.</p>
              <div className="project-links">
                <a href="https://github.com/enskym/Excel-Crm-Transfer" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i> GitHub
                </a>
              </div>
            </div>
            <div className="project-card">
              <h3>Xml-Transfer</h3>
              <p>XML dosyalarını otomatik olarak okuyan .NET Framework projesi.</p>
              <div className="project-links">
                <a href="https://github.com/enskym/Xml-Transfer" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i> GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Enes Kaymaz. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
