<script setup>
import { reactive, ref } from 'vue';

const form = reactive({
  name: '',
  email: '',
  message: ''
});

const successMessage = ref('');
const isSubmitting = ref(false);

const submitForm = async () => {
  if (!form.name || !form.email || !form.message) {
    successMessage.value = 'Per favore, compila tutti i campi.';
    setTimeout(() => { successMessage.value = ''; }, 5000);
    return;
  }
  
  isSubmitting.value = true;
  try {
    const response = await fetch('https://formspree.io/f/mldgnyzr', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    if (response.ok) {
      successMessage.value = 'Messaggio inviato con successo! Ti risponderemo al più presto.';
      form.name = '';
      form.email = '';
      form.message = '';
    } else {
      successMessage.value = 'Si è verificato un errore. Riprova più tardi.';
    }
  } catch (error) {
    successMessage.value = 'Errore di connessione. Controlla la tua rete e riprova.';
  } finally {
    isSubmitting.value = false;
    setTimeout(() => {
      successMessage.value = '';
    }, 5000);
  }
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
        <h1 class="hero-title">SPONSOR</h1>
        <div class="hero-divider"></div>
        <p class="hero-subtitle">I nostri partner che rendono possibile tutto questo</p>
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
          <h2>{{ $t("hSponsor") || "Partner Principali" }}</h2>
          
          <div class="main-sponsors-grid">
            <div class="main-sponsor-card" data-aos="zoom-in" data-aos-delay="100">
              <div class="sponsor-card-wrapper">
                <img src="/public/sponsor-2/sponsor-1.jpg" alt="Sponsor principale 1" />
                <div class="sponsor-overlay">
                  <div class="sponsor-badge">Partner Principale</div>
                </div>
              </div>
            </div>
            
            <div class="main-sponsor-card" data-aos="zoom-in" data-aos-delay="200">
              <div class="sponsor-card-wrapper">
                <img src="/public/sponsor-2/sponsor-3.jpg" alt="Sponsor principale 2" />
                <div class="sponsor-overlay">
                  <div class="sponsor-badge">Partner Principale</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Contact Form Section -->
        <section class="form-section" data-aos="fade-up">
          <div class="form-container">
            <div class="form-header">
              <div class="form-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h3>{{ $t("h2Sponsor") || "Diventa Nostro Sponsor" }}</h3>
              <p class="form-description">Compila il form e ti contatteremo per discutere le opportunità di partnership</p>
            </div>

            <div class="contact-form">
              <div class="form-group">
                <label for="name">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  {{ $t("nameForm") || "Nome" }}
                </label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name" 
                  placeholder="Il tuo nome o azienda"
                />
              </div>

              <div class="form-group">
                <label for="email">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  placeholder="tua@email.com"
                />
              </div>

              <div class="form-group">
                <label for="message">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  {{ $t("messageForm") || "Messaggio" }}
                </label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  rows="5"
                  placeholder="Raccontaci della tua azienda e del tuo interesse..."
                ></textarea>
              </div>

              <button @click="submitForm" class="submit-button" :disabled="isSubmitting">
                <span v-if="!isSubmitting">
                  Invia Richiesta
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </span>
                <span v-else>Invio in corso...</span>
              </button>

              <transition name="fade">
                <div v-if="successMessage" class="success-message" :class="{ error: successMessage.includes('errore') || successMessage.includes('compila') }">
                  <svg v-if="!successMessage.includes('errore') && !successMessage.includes('compila')" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="15" y1="9" x2="9" y2="15"></line>
                    <line x1="9" y1="9" x2="15" y2="15"></line>
                  </svg>
                  {{ successMessage }}
                </div>
              </transition>
            </div>
          </div>
        </section>

        <!-- All Sponsors Grid -->
        <section class="all-sponsors-section" data-aos="fade-up">
          <h2>{{ $t("sponsor") || "I Nostri Sponsor" }}</h2>
          <p class="section-subtitle">Grazie a tutti i partner che sostengono il Padel Club Alghero</p>
          
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

/* Form Section */
.form-section {
  margin-bottom: 8rem;
}

.form-container {
  max-width: 700px;
  margin: 0 auto;
  background: white;
  padding: 3rem;
  border-radius: 30px;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.15);
  border: 2px solid rgba(247, 147, 30, 0.2);
}

.form-header {
  text-align: center;
  margin-bottom: 3rem;
}

.form-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, rgba(247, 147, 30, 0.1), rgba(255, 107, 53, 0.1));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-icon svg {
  color: #f7931e;
}

.form-header h3 {
  font-size: 2rem;
  color: #101e39;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.form-description {
  color: #666;
  font-size: 1.1rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  color: #101e39;
  font-size: 1rem;
}

.form-group label svg {
  color: #f7931e;
}

.form-group input,
.form-group textarea {
  padding: 1rem 1.2rem;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: inherit;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #f7931e;
  box-shadow: 0 0 0 4px rgba(247, 147, 30, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-button {
  padding: 1.2rem 2rem;
  background: linear-gradient(135deg, #f7931e, #ff6b35);
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(247, 147, 30, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(247, 147, 30, 0.4);
}

.submit-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.submit-button svg {
  transition: transform 0.3s ease;
}

.submit-button:hover:not(:disabled) svg {
  transform: translateX(3px);
}

.success-message {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 1.5rem;
  background: #10b981;
  color: white;
  border-radius: 12px;
  font-weight: 600;
  margin-top: 1rem;
}

.success-message.error {
  background: #ef4444;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
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

  .form-container {
    padding: 2rem;
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

  .form-container {
    padding: 1.5rem;
  }

  .sponsors-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}
</style>