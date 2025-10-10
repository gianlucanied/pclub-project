<script>
export default {
  name: "AppAbout",
};
</script>

<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-slideshow">
        <img src="/public/FE973089.jpg" alt="Padel Club Alghero" class="hero-image" />
      </div>
      
      <div class="hero-overlay"></div>
      
      <div class="hero-content" data-aos="fade-up" data-aos-delay="200">
        <h1 class="hero-title">{{ $t("about2") || "Chi Siamo" }}</h1>
        <div class="hero-divider"></div>
        <p class="hero-subtitle">La nostra storia, la nostra passione</p>
      </div>

      <div class="scroll-indicator">
        <div class="mouse"></div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="main-content">
      <div class="container">
        <!-- About Section -->
        <section class="content-section" data-aos="fade-up">
          <div class="section-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          
          <h2>{{ $t("suDiNoi") || "Su di Noi" }}</h2>
          
          <div class="content-card">
            <div class="content-text" v-html="$t('pAbout') || 'Siamo un club dedicato alla passione del padel...'"></div>
          </div>
        </section>

        <!-- Why Section -->
        <section class="content-section why-section" data-aos="fade-up" data-aos-delay="100">
          <div class="section-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          </div>
          
          <h2>{{ $t("why") || "Perché Sceglierci" }}</h2>
          
          <div class="content-card">
            <div class="content-text" v-html="$t('secondPAbout') || 'Offriamo un ambiente unico...'"></div>
          </div>
        </section>

        <!-- Features Grid -->
        <section class="features-section" data-aos="fade-up">
          <h2 class="features-title">I Nostri Punti di Forza</h2>
          
          <div class="features-grid">
            <div class="feature-card" data-aos="zoom-in" data-aos-delay="100">
              <div class="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <h3>Struttura Moderna</h3>
              <p>Campi professionali con copertura e illuminazione di ultima generazione</p>
            </div>

            <div class="feature-card" data-aos="zoom-in" data-aos-delay="200">
              <div class="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3>Community Attiva</h3>
              <p>Una comunità di appassionati sempre pronta ad accogliere nuovi giocatori</p>
            </div>

            <div class="feature-card" data-aos="zoom-in" data-aos-delay="300">
              <div class="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                  <path d="M4 22h16"></path>
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                </svg>
              </div>
              <h3>Tornei & Eventi</h3>
              <p>Organizziamo regolarmente tornei ed eventi per tutti i livelli</p>
            </div>

            <div class="feature-card" data-aos="zoom-in" data-aos-delay="400">
              <div class="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3>Orari Flessibili</h3>
              <p>Aperti 7 giorni su 7 con orari prolungati per massima comodità</p>
            </div>

            <div class="feature-card" data-aos="zoom-in" data-aos-delay="500">
              <div class="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3>Posizione Strategica</h3>
              <p>Situati nel cuore di Alghero, facilmente raggiungibili</p>
            </div>

            <div class="feature-card" data-aos="zoom-in" data-aos-delay="600">
              <div class="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3>Prezzi Competitivi</h3>
              <p>Tariffe accessibili con abbonamenti vantaggiosi per tutti</p>
            </div>
          </div>
        </section>

        <!-- CTA Section -->
        <section class="cta-section" data-aos="fade-up">
          <div class="cta-content">
            <h2>Pronto a Giocare con Noi?</h2>
            <p>Unisciti alla nostra community e vivi la passione del padel</p>
            <div class="cta-buttons">
              <router-link to="/contacts" class="cta-button primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                Contattaci
              </router-link>
              <a href="https://playtomic.io/padel-club-alghero" class="cta-button secondary" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                Prenota Online
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Hero Section */
.hero-section {
  position: relative;
  height: 85vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-slideshow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(16, 30, 57, 0.8) 0%, rgba(16, 30, 57, 0.5) 100%);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  padding: 2rem;
  max-width: 800px;
}

.hero-title {
  font-size: 5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  letter-spacing: -2px;
  line-height: 1.1;
}

.hero-divider {
  width: 120px;
  height: 4px;
  background: linear-gradient(90deg, transparent, #f7931e, transparent);
  margin: 0 auto 1.5rem;
  border-radius: 2px;
}

.hero-subtitle {
  font-size: 1.4rem;
  font-weight: 300;
  opacity: 0.95;
  letter-spacing: 0.5px;
}

.scroll-indicator {
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}

.mouse {
  width: 30px;
  height: 50px;
  border: 3px solid rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  position: relative;
  animation: mouse-scroll 2s infinite;
}

.mouse::before {
  content: '';
  width: 6px;
  height: 6px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  animation: mouse-wheel 2s infinite;
}

@keyframes mouse-scroll {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

@keyframes mouse-wheel {
  0% { top: 10px; }
  50% { top: 20px; }
  100% { top: 10px; }
}

/* Main Content */
.main-content {
  background-image: url("/public/Animated-Shape10.svg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 6rem 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Content Sections */
.content-section {
  margin-bottom: 6rem;
  position: relative;
}

.section-icon {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.section-icon svg {
  color: #f7931e;
  filter: drop-shadow(0 4px 15px rgba(247, 147, 30, 0.3));
}

.content-section h2 {
  text-align: center;
  font-size: 3rem;
  color: #101e39;
  margin-bottom: 3rem;
  font-weight: 800;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}

.content-section h2::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #ff6b35, #f7931e);
  border-radius: 2px;
}

.content-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 3rem;
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  border: 2px solid rgba(247, 147, 30, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.content-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.15);
  border-color: #f7931e;
}

.content-text {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #333;
}

.content-text :deep(p) {
  margin-bottom: 1.5rem;
}

.content-text :deep(b),
.content-text :deep(strong) {
  color: #f7931e;
  font-weight: 700;
}

/* Features Section */
.features-section {
  margin: 8rem 0;
}

.features-title {
  text-align: center;
  font-size: 3rem;
  color: #101e39;
  margin-bottom: 4rem;
  font-weight: 800;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}

.features-title::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #ff6b35, #f7931e);
  border-radius: 2px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
}

.feature-card {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 2px solid transparent;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #ff6b35, #f7931e);
  transform: scaleX(0);
  transition: transform 0.4s ease;
}

.feature-card:hover::before {
  transform: scaleX(1);
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(247, 147, 30, 0.2);
  border-color: #f7931e;
}

.feature-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, rgba(247, 147, 30, 0.1), rgba(255, 107, 53, 0.1));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
}

.feature-icon svg {
  color: #f7931e;
  transition: transform 0.4s ease;
}

.feature-card:hover .feature-icon {
  background: linear-gradient(135deg, #f7931e, #ff6b35);
  transform: scale(1.1);
}

.feature-card:hover .feature-icon svg {
  color: white;
  transform: rotate(10deg);
}

.feature-card h3 {
  font-size: 1.4rem;
  color: #101e39;
  margin-bottom: 1rem;
  font-weight: 700;
}

.feature-card p {
  color: #666;
  line-height: 1.7;
  font-size: 1rem;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #f7931e, #ff6b35);
  border-radius: 30px;
  padding: 5rem 3rem;
  text-align: center;
  margin-top: 6rem;
  box-shadow: 0 25px 80px rgba(247, 147, 30, 0.3);
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: movePattern 20s linear infinite;
}

@keyframes movePattern {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}

.cta-content {
  position: relative;
  z-index: 1;
}

.cta-section h2 {
  color: white;
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 800;
}

.cta-section h2::after {
  display: none;
}

.cta-section p {
  color: rgba(255, 255, 255, 0.95);
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
}

.cta-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-button {
  padding: 1.2rem 2.5rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.1rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;
}

.cta-button.primary {
  background: white;
  color: #f7931e;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.cta-button.primary:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.cta-button.secondary {
  background: transparent;
  color: white;
  border-color: white;
}

.cta-button.secondary:hover {
  background: white;
  color: #f7931e;
  transform: translateY(-3px);
}

.cta-button svg {
  transition: transform 0.3s ease;
}

.cta-button:hover svg {
  transform: translateX(3px);
}

/* Responsive */
@media (max-width: 992px) {
  .hero-title {
    font-size: 3.5rem;
  }

  .content-section h2,
  .features-title,
  .cta-section h2 {
    font-size: 2.5rem;
  }

  .features-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .main-content {
    padding: 4rem 1rem;
  }

  .content-card {
    padding: 2rem 1.5rem;
  }

  .content-text {
    font-size: 1.1rem;
  }

  .content-section h2,
  .features-title {
    font-size: 2.2rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .cta-section {
    padding: 3rem 2rem;
  }

  .cta-section h2 {
    font-size: 2rem;
  }

  .cta-buttons {
    flex-direction: column;
  }

  .cta-button {
    width: 100%;
    justify-content: center;
  }
}
</style>