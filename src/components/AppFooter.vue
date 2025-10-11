<script>
export default {
  name: "AppFooter",
};
</script>

<template>
  <footer class="app-footer">

    <div class="footer-content">
      <div class="container">
        <!-- Logo Section -->
        <div class="footer-logo-section" data-aos="fade-up">
          <img
            src="/public/db548ce9-9c0d-4174-8d4d-0e5146bffbe0-removebg-preview.png"
            alt="Padel Club Alghero"
            class="footer-logo"
          />
          <p class="footer-tagline">{{ $t("footerTagline") }}</p>
        </div>

        <!-- Main Footer Content -->
        <div class="footer-grid">
          <!-- Address Section -->
          <div class="footer-column" data-aos="fade-up" data-aos-delay="100">
            <h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              {{ $t("address") }}
            </h3>
            <a
              href="https://www.google.it/maps/place/Padel+Club+Alghero/@40.575007,8.3162001,18z/data=!4m15!1m8!3m7!1s0x12dcf1f9e7851add:0xbf96a93a594c1d9c!2sViale+Europa,+07041+Alghero+SS!3b1!8m2!3d40.577633!4d8.3155993!16s%2Fg%2F1v79yj6_!3m5!1s0x12dcf1f65ab63d2b:0x72a4e977da2d13db!8m2!3d40.5748764!4d8.3176214!16s%2Fg%2F11qqvp8y6d?entry=ttu"
              class="footer-link location-link"
              target="_blank"
              rel="noopener"
            >
              <div class="link-content">
                <span class="link-text">
                  {{ $t("addressLine1") }}<br />
                  {{ $t("addressLine2") }}<br />
                  Italy
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="link-arrow">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </a>
          </div>

          <!-- Contact Section -->
          <div class="footer-column" data-aos="fade-up" data-aos-delay="200">
            <h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              {{ $t("information") }}
            </h3>
            <a href="mailto:padelalghero@gmail.com" class="footer-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              padelalghero@gmail.com
            </a>
            <a href="tel:+393454821835" class="footer-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              +39 345 482 1835
            </a>
            <a href="tel:+393501421000" class="footer-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              +39 350 142 1000
            </a>
          </div>

          <!-- Social Section -->
          <div class="footer-column" data-aos="fade-up" data-aos-delay="300">
            <h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              {{ $t("social") }}
            </h3>
            <div class="social-links">
              <a href="https://www.instagram.com/padelalghero/" class="social-link instagram" target="_blank" rel="noopener">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram</span>
              </a>
              <a href="https://www.facebook.com/padelalghero/?locale=it_IT" class="social-link facebook" target="_blank" rel="noopener">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="footer-bottom">
          <div class="footer-bottom-content">
            <div class="credits" data-aos="fade-up">
              <p class="credit-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
                {{ $t("photosBy") }} <a href="https://www.instagram.com/campusfederico/" target="_blank" rel="noopener"><strong>Federico Campus</strong></a>
              </p>
              <div class="separator">•</div>
              <p class="credit-item">
                {{ $t("madeWith") }} 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#f7931e" stroke="none" class="heart-icon">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                {{ $t("by") }} <a href="https://gianlucanieddu.netlify.app/" target="_blank" rel="noopener"><strong>gianlucanied</strong></a>
              </p>
            </div>
            <div class="copyright" data-aos="fade-up" data-aos-delay="100">
              <p>{{ $t("copyright") }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  background: linear-gradient(135deg, #101e39 0%, #1a2d50 100%);
  color: white;
  position: relative;
  overflow: hidden;
}

/* Wave Divider */
.footer-wave {
  position: absolute;
  top: -1px;
  left: 0;
  width: 100%;
  height: 100px;
  color: white;
  transform: rotate(180deg);
}

.footer-wave svg {
  width: 100%;
  height: 100%;
  display: block;
}

/* Footer Content */
.footer-content {
  position: relative;
  padding: 6rem 2rem 2rem;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

/* Logo Section */
.footer-logo-section {
  text-align: center;
  margin-bottom: 4rem;
}

.footer-logo {
  max-width: 300px;
  height: auto;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 4px 20px rgba(247, 147, 30, 0.3));
  transition: transform 0.4s ease;
  background-color: #ffff;
  padding: 20px;
  border-radius: 30px;
}

.footer-logo:hover {
  transform: scale(1.05);
}

.footer-tagline {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 300;
  max-width: 600px;
  margin: 0 auto;
}

/* Footer Grid */
.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-bottom: 4rem;
}

.footer-column {
  position: relative;
}

.footer-column h3 {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #f7931e;
  padding-bottom: 1rem;
  border-bottom: 2px solid rgba(247, 147, 30, 0.3);
}

.footer-column h3 svg {
  color: #f7931e;
}

/* Footer Links */
.footer-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  padding: 0.8rem 0;
  transition: all 0.3s ease;
  font-size: 1rem;
  line-height: 1.6;
}

.footer-link svg {
  color: #f7931e;
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.footer-link:hover {
  color: #f7931e;
  padding-left: 0.5rem;
}

.footer-link:hover svg {
  transform: translateX(-3px);
}

.location-link {
  display: block;
}

.link-content {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;
}

.link-arrow {
  opacity: 0;
  transition: all 0.3s ease;
}

.location-link:hover .link-arrow {
  opacity: 1;
  transform: translate(3px, -3px);
}

/* Social Links */
.social-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  color: white;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
}

.social-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.5s;
}

.social-link:hover::before {
  left: 100%;
}

.social-link.instagram:hover {
  background: linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045);
  border-color: #fd1d1d;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(253, 29, 29, 0.4);
}

.social-link.facebook:hover {
  background: #1877f2;
  border-color: #1877f2;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(24, 119, 242, 0.4);
}

.social-link svg {
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease;
}

.social-link:hover svg {
  transform: scale(1.2) rotate(5deg);
}

.social-link span {
  font-weight: 600;
  font-size: 1.1rem;
}

/* Footer Bottom */
.footer-bottom {
  border-top: 1px solid rgba(247, 147, 30, 0.3);
  padding-top: 2rem;
}

.footer-bottom-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
}

.credits {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
}

.credit-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

.credit-item svg {
  color: #f7931e;
  flex-shrink: 0;
}

.heart-icon {
  animation: heartbeat 1.5s ease-in-out infinite;
  margin: 0 0.3rem;
}

@keyframes heartbeat {
  0%, 100% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.2);
  }
  50% {
    transform: scale(1);
  }
}

.credit-item a {
  color: #f7931e;
  text-decoration: none;
  transition: all 0.3s ease;
}

.credit-item a:hover {
  color: #ff6b35;
  text-decoration: underline;
}

.separator {
  color: rgba(255, 255, 255, 0.3);
}

.copyright {
  text-align: center;
}

.copyright p {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  margin: 0;
}

/* Responsive */
@media (max-width: 992px) {
  .footer-content {
    padding: 4rem 1.5rem 2rem;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .footer-column {
    text-align: center;
  }

  .footer-column h3 {
    justify-content: center;
  }

  .footer-link {
    justify-content: center;
  }

  .location-link .link-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .social-links {
    align-items: center;
    max-width: 400px;
    margin: 0 auto;
  }

  .credits {
    flex-direction: column;
    text-align: center;
  }

  .separator {
    display: none;
  }
}

@media (max-width: 768px) {
  .footer-logo {
    max-width: 200px;
  }

  .footer-tagline {
    font-size: 1rem;
  }

  .footer-column h3 {
    font-size: 1.1rem;
  }

  .footer-link {
    font-size: 0.95rem;
  }

  .social-link {
    padding: 0.8rem 1.2rem;
  }
}

@media (max-width: 480px) {
  .footer-content {
    padding: 3rem 1rem 1.5rem;
  }

  .footer-grid {
    gap: 2rem;
  }

  .credit-item {
    font-size: 0.85rem;
  }
}
</style>