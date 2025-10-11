<script>
export default {
  name: "AppSponsor",
};
</script>

<template>
  <div class="sponsor-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-image-wrapper">
        <img src="/public/sponsor-2/jumbo-sponsor.jpg" alt="Sponsor" class="hero-image" />
      </div>
      
      <div class="hero-overlay"></div>
      
      <div class="hero-content" data-aos="fade-up" data-aos-delay="200">
        <h1 class="hero-title">{{ $t("sponsorHeroTitle") }}</h1>
        <div class="hero-divider"></div>
        <p class="hero-subtitle">{{ $t("sponsorHeroSubtitle") }}</p>
      </div>

      <div class="scroll-indicator">
        <div class="mouse"></div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="main-content">
      <div class="container">
        <!-- Main Sponsors Section -->
        <section class="main-sponsors-section" data-aos="fade-up">
          <h2>{{ $t("hSponsor") }}</h2>
          
          <div class="main-sponsors-grid">
            <div class="main-sponsor-card" data-aos="zoom-in" data-aos-delay="100">
              <div class="sponsor-card-wrapper">
                <img src="/public/sponsor-2/sponsor-1.jpg" alt="Sponsor principale 1" />
                <div class="sponsor-overlay">
                  <div class="sponsor-badge">{{ $t("mainPartnerBadge") }}</div>
                </div>
              </div>
            </div>
            
            <div class="main-sponsor-card" data-aos="zoom-in" data-aos-delay="200">
              <div class="sponsor-card-wrapper">
                <img src="/public/sponsor-2/sponsor-3.jpg" alt="Sponsor principale 2" />
                <div class="sponsor-overlay">
                  <div class="sponsor-badge">{{ $t("mainPartnerBadge") }}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Contact Email Section -->
        <section class="contact-section" data-aos="fade-up">
          <div class="contact-container">
            <div class="contact-header">
              <div class="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <h3>{{ $t("h2Sponsor") }}</h3>
              <p class="contact-description">{{ $t("sponsorDescription") }}</p>
            </div>

            <a href="mailto:padelalghero@gmail.com" class="email-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              padelalghero@gmail.com
            </a>
          </div>
        </section>

        <!-- All Sponsors Grid -->
        <section class="all-sponsors-section" data-aos="fade-up">
          <h2>{{ $t("allSponsorsTitle") }}</h2>
          <p class="section-subtitle">{{ $t("allSponsorsSubtitle") }}</p>
          
          <div class="sponsors-grid">
            <div class="sponsor-item" data-aos="zoom-in" data-aos-delay="50">
              <img src="/public/sponsor/aragon-removebg-preview.png" alt="Aragon" />
            </div>
            <div class="sponsor-item" data-aos="zoom-in" data-aos-delay="100">
              <img src="/public/sponsor/De-filippis-removebg-preview.png" alt="De Filippis" />
            </div>
            <div class="sponsor-item" data-aos="zoom-in" data-aos-delay="150">
              <img src="/public/sponsor/hotel-florida-removebg-preview.png" alt="Hotel Florida" />
            </div>
            <div class="sponsor-item" data-aos="zoom-in" data-aos-delay="200">
              <img src="/public/sponsor/vibra-removebg-preview.png" alt="Vibra" />
            </div>
            <div class="sponsor-item" data-aos="zoom-in" data-aos-delay="250">
              <img src="/public/sponsor/Rent_a_Car_express_Alghero-removebg-preview.png" alt="Rent a Car Express" />
            </div>
            <div class="sponsor-item" data-aos="zoom-in" data-aos-delay="300">
              <img src="/public/sponsor/logudoro.png" alt="Logudoro" />
            </div>
            <div class="sponsor-item" data-aos="zoom-in" data-aos-delay="350">
              <img src="/public/sponsor/nautilus-Logo-02.png" alt="Nautilus" />
            </div>
            <div class="sponsor-item" data-aos="zoom-in" data-aos-delay="400">
              <img src="/public/sponsor/mp-finance-removebg-preview.png" alt="MP Finance" />
            </div>
            <div class="sponsor-item" data-aos="zoom-in" data-aos-delay="450">
              <img src="/public/sponsor/businco-removebg-preview.png" alt="Businco" />
            </div>
            <div class="sponsor-item" data-aos="zoom-in" data-aos-delay="500">
              <img src="/public/sponsor/trova-removebg-preview.png" alt="Trova" />
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

.hero-image-wrapper {
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
  letter-spacing: 8px;
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
  background-image: url("/public/Animated-Shape-2.svg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 6rem 2rem;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

/* Main Sponsors Section */
.main-sponsors-section {
  margin-bottom: 8rem;
}

.main-sponsors-section h2 {
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

.main-sponsors-section h2::after {
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

.main-sponsors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 3rem;
}

.main-sponsor-card {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.main-sponsor-card:hover {
  transform: translateY(-15px);
  box-shadow: 0 30px 80px rgba(247, 147, 30, 0.3);
}

.sponsor-card-wrapper {
  position: relative;
  padding-bottom: 66.67%;
  overflow: hidden;
}

.sponsor-card-wrapper img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.main-sponsor-card:hover .sponsor-card-wrapper img {
  transform: scale(1.1);
}

.sponsor-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(16, 30, 57, 0.9), transparent);
  padding: 2rem;
  transform: translateY(100%);
  transition: transform 0.4s ease;
}

.main-sponsor-card:hover .sponsor-overlay {
  transform: translateY(0);
}

.sponsor-badge {
  display: inline-block;
  background: linear-gradient(135deg, #f7931e, #ff6b35);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.9rem;
}

/* Contact Section */
.contact-section {
  margin-bottom: 8rem;
}

.contact-container {
  max-width: 700px;
  margin: 0 auto;
  background: white;
  padding: 4rem 3rem;
  border-radius: 30px;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.15);
  border: 2px solid rgba(247, 147, 30, 0.2);
  text-align: center;
}

.contact-header {
  margin-bottom: 3rem;
}

.contact-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, rgba(247, 147, 30, 0.1), rgba(255, 107, 53, 0.1));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-icon svg {
  color: #f7931e;
}

.contact-header h3 {
  font-size: 2rem;
  color: #101e39;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.contact-description {
  color: #666;
  font-size: 1.1rem;
}

.email-button {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 3rem;
  background: linear-gradient(135deg, #f7931e, #ff6b35);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: 700;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 25px rgba(247, 147, 30, 0.3);
}

.email-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(247, 147, 30, 0.5);
}

.email-button svg {
  transition: transform 0.3s ease;
}

.email-button:hover svg {
  transform: scale(1.1);
}

/* All Sponsors Section */
.all-sponsors-section {
  margin-top: 8rem;
}

.all-sponsors-section h2 {
  text-align: center;
  font-size: 3rem;
  color: #101e39;
  margin-bottom: 1rem;
  font-weight: 800;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}

.all-sponsors-section h2::after {
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

.section-subtitle {
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 4rem;
  margin-top: 2rem;
}

.sponsors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  background: rgba(255, 255, 255, 0.9);
  padding: 4rem 3rem;
  border-radius: 24px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
}

.sponsor-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background: white;
  border-radius: 16px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;
}

.sponsor-item:hover {
  transform: scale(1.15);
  box-shadow: 0 15px 40px rgba(247, 147, 30, 0.2);
  border-color: #f7931e;
  z-index: 10;
}

.sponsor-item img {
  max-width: 100%;
  height: auto;
  max-height: 100px;
  object-fit: contain;
  filter: grayscale(100%);
  transition: filter 0.3s ease;
}

.sponsor-item:hover img {
  filter: grayscale(0%);
}

/* Responsive */
@media (max-width: 992px) {
  .hero-title {
    font-size: 3.5rem;
  }

  .main-sponsors-grid {
    grid-template-columns: 1fr;
  }

  .contact-container {
    padding: 3rem 2rem;
  }

  .sponsors-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 2rem;
    padding: 3rem 2rem;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .main-content {
    padding: 4rem 1rem;
  }

  .main-sponsors-section h2,
  .all-sponsors-section h2 {
    font-size: 2.2rem;
  }

  .contact-container {
    padding: 2rem 1.5rem;
  }

  .email-button {
    font-size: 1rem;
    padding: 1.2rem 2rem;
  }

  .sponsors-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}
</style>