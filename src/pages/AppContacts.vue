<script>
export default {
  name: "AppContacts",
};
</script>

<template>
  <div class="contacts-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-image-wrapper">
        <img src="/public/FE973051.jpg" alt="Contatti" class="hero-image" />
      </div>
      
      <div class="hero-overlay"></div>
      
      <div class="hero-content" data-aos="fade-up" data-aos-delay="200">
        <h1 class="hero-title">{{ $t("contacts2") }}</h1>
        <div class="hero-divider"></div>
        <p class="hero-subtitle">{{ $t("contactsSubtitle") }}</p>
      </div>

      <div class="scroll-indicator">
        <div class="mouse"></div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="main-content">
      <div class="container">
        <div class="contacts-grid">
          <!-- Contact Info Column -->
          <div class="contact-info" data-aos="fade-right" data-aos-delay="200">
            <div class="section-header">
              <h2>{{ $t("help") }}</h2>
              <div class="header-divider"></div>
            </div>
            
            <p class="intro-text">
              {{ $t("infoContacts") }}
            </p>

            <!-- Contact Cards -->
            <div class="contact-cards">
              <a href="mailto:padelalghero@gmail.com" class="contact-card" data-aos="zoom-in" data-aos-delay="300">
                <div class="card-icon email">
                  <i class="fa-solid fa-envelope"></i>
                </div>
                <div class="card-content">
                  <h4>Email</h4>
                  <p>padelalghero@gmail.com</p>
                </div>
              </a>

              <a href="tel:+393454821835" class="contact-card" data-aos="zoom-in" data-aos-delay="350">
                <div class="card-icon phone">
                  <i class="fa-solid fa-phone"></i>
                </div>
                <div class="card-content">
                  <h4>{{ $t("phone1Label") }}</h4>
                  <p>+39 345 482 1835</p>
                </div>
              </a>

              <a href="tel:+393501421000" class="contact-card" data-aos="zoom-in" data-aos-delay="400">
                <div class="card-icon phone">
                  <i class="fa-solid fa-phone"></i>
                </div>
                <div class="card-content">
                  <h4>{{ $t("phone2Label") }}</h4>
                  <p>+39 350 142 1000</p>
                </div>
              </a>

              <a 
                href="https://playtomic.io/padel-club-alghero/a1eaa271-dbc0-49a8-824b-84c6b9b94252?q=PADEL~2024-05-23~~~" 
                class="contact-card playtomic" 
                data-aos="zoom-in" 
                data-aos-delay="450"
              >
                <div class="card-icon playtomic-icon">
                  <img src="../../public/playtomic2.png" alt="Playtomic" />
                </div>
                <div class="card-content">
                  <h4>{{ $t("buttonPlaytomic") }}</h4>
                  <p>{{ $t("playtomicDescription") }}</p>
                </div>
              </a>
            </div>

            <!-- Location & Social -->
            <div class="info-boxes">
              <div class="info-box" data-aos="fade-up" data-aos-delay="500">
                <div class="info-icon">
                  <i class="fa-solid fa-location-dot"></i>
                </div>
                <h4>{{ $t("where") }}</h4>
                <a href="https://www.google.it/maps/place/Padel+Club+Alghero/@40.575007,8.3162001,18z/data=!4m15!1m8!3m7!1s0x12dcf1f9e7851add:0xbf96a93a594c1d9c!2sViale+Europa,+07041+Alghero+SS!3b1!8m2!3d40.577633!4d8.3155993!16s%2Fg%2F1v79yj6_!3m5!1s0x12dcf1f65ab63d2b:0x72a4e977da2d13db!8m2!3d40.5748764!4d8.3176214!16s%2Fg%2F11qqvp8y6d?entry=ttu">
                  <p>{{ $t("addressLine1") }}<br />{{ $t("addressLine2") }}</p>
                </a>
              </div>

              <div class="info-box" data-aos="fade-up" data-aos-delay="550">
                <div class="info-icon">
                  <i class="fa-solid fa-hashtag"></i>
                </div>
                <h4>Social</h4>
                <div class="social-links">
                  <a href="https://www.instagram.com/padelalghero/" class="social-link instagram">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                  <a href="https://www.facebook.com/padelalghero/?locale=it_IT" class="social-link facebook">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Image Column -->
          <div class="contact-image" data-aos="fade-left" data-aos-delay="300">
            <div class="image-wrapper">
              <img src="/public/FE972520.jpg" alt="Padel Club Alghero" loading="lazy" />
              <div class="image-overlay">
                <div class="overlay-content">
                  <i class="fa-solid fa-location-dot"></i>
                  <p>{{ $t("visitUsText") }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
  background: linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.6) 100%);
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
  background: #faf9f7;
  padding: 6rem 2rem;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

.contacts-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  align-items: start;
}

/* Contact Info */
.contact-info {
  background: white;
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0ebe3;
}

.section-header h2 {
  font-size: 2.5rem;
  color: #111;
  margin-bottom: 1rem;
  font-weight: 800;
  letter-spacing: -0.5px;
}

.header-divider {
  width: 50px;
  height: 3px;
  background: #f7931e;
  border-radius: 2px;
  margin-bottom: 2rem;
}

.intro-text {
  font-size: 1.2rem;
  color: #666;
  line-height: 1.8;
  margin-bottom: 3rem;
}

/* Contact Cards */
.contact-cards {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.25rem;
  background: #faf9f7;
  border-radius: 12px;
  border: 1px solid #f0ebe3;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
  text-decoration: none;
  color: inherit;
}

.contact-card:hover {
  transform: translateX(5px);
  border-color: #f7931e;
  background: white;
  box-shadow: 0 4px 20px rgba(247, 147, 30, 0.12);
}

.card-icon {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.card-icon.email {
  background: #f7931e;
  color: white;
}

.card-icon.phone {
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
}

.card-icon.playtomic-icon {
  background: white;
  border: 2px solid #f0f0f0;
}

.card-icon.playtomic-icon img {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.card-content h4 {
  font-size: 0.85rem;
  font-weight: 700;
  color: #111;
  margin-bottom: 0.3rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.card-content p {
  font-size: 1.1rem;
  color: #666;
  margin: 0;
}

/* Info Boxes */
.info-boxes {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  padding-top: 3rem;
  border-top: 2px solid #f0f0f0;
}

.info-box {
  text-align: center;
}

.info-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, rgba(247, 147, 30, 0.1), rgba(255, 107, 53, 0.1));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-size: 1.5rem;
  color: #f7931e;
}

.info-box h4 {
  font-size: 1.3rem;
  font-weight: 700;
  color: #101e39;
  margin-bottom: 1rem;
}

.info-box a {
  text-decoration: none;
  color: #666;
  transition: color 0.3s ease;
}

.info-box a:hover {
  color: #f7931e;
}

.info-box p {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  margin: 0;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-link {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  color: white;
}

.social-link.instagram {
  background: linear-gradient(135deg, #f7931e, #ff6b35);
}

.social-link.facebook {
  background: #1877f2;
}

.social-link:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

/* Contact Image */
.contact-image {
  position: sticky;
  top: 2rem;
}

.image-wrapper {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.12);
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.image-wrapper:hover img {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent);
  padding: 2rem;
  transform: translateY(100%);
  transition: transform 0.4s ease;
}

.image-wrapper:hover .image-overlay {
  transform: translateY(0);
}

.overlay-content {
  text-align: center;
  color: white;
}

.overlay-content i {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #f7931e;
}

.overlay-content p {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
}

/* Responsive */
@media (max-width: 1200px) {
  .contacts-grid {
    grid-template-columns: 1fr;
  }

  .contact-image {
    position: relative;
    top: 0;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 3rem;
    letter-spacing: 4px;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .main-content {
    padding: 4rem 1rem;
  }

  .contact-info {
    padding: 2rem;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .info-boxes {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .contact-card {
    flex-direction: column;
    text-align: center;
  }

  .contact-card:hover {
    transform: translateY(-5px);
  }
}
</style>