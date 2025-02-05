<script>
export default {
    name: "AppSponsor",
    data() {
        return {
            form: {
                name: '',
                email: '',
                message: ''
            },
            successMessage: ''
        };
    },
    methods: {
        async submitForm() {
            try {
                const response = await fetch('https://formspree.io/f/mldgnyzr', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(this.form)
                });
                if (response.ok) {
                    this.successMessage = 'Messaggio inviato con successo! Ti risponderemo al più presto.';
                    this.form.name = '';
                    this.form.email = '';
                    this.form.message = '';
                } else {
                    this.successMessage = 'Si è verificato un errore. Riprova più tardi.';
                }
            } catch (error) {
                this.successMessage = 'Errore di connessione. Controlla la tua rete e riprova.';
            }
        }
    }
};

</script>

<template>
    <div class="jumbotron container-fluid d-flex align-items-center justify-content-center">
        <div class="row">
            <div data-aos="fade-up" data-aos-delay="100" class="col-12 text-center">
                SPONSOR
            </div>
        </div>
    </div>
    <div class="macro-container-sponsor" data-aos="fade-up">
        <div class="section-sponsor container">
            <div class="title container">{{ $t("hSponsor") }}</div>
            <div class="row">
                <div
                    class="col-12 col-md-6 col-lg-6 sponsor d-flex align-items-center justify-content-center single-sponsor">
                    <img src="/public/sponsor-2/sponsor-1.jpg" alt="">
                </div>
                <!-- <div
                    class="col-12 col-md-4 col-lg-4 sponsor d-flex align-items-center justify-content-center single-sponsor">
                    <img src="/public/sponsor-2/sponsor-2.jpg" alt="">
                </div> -->
                <div
                    class="col-12 col-md-6 col-lg-6 sponsor d-flex align-items-center justify-content-center single-sponsor">
                    <img src="/public/sponsor-2/sponsor-3.jpg" alt="">
                </div>
            </div>
        </div>

        <!-- Form di Contatto -->
        <div class="form-container container" data-aos="fade-up">
            <h3>{{ $t("h2Sponsor") }}</h3>
            <form @submit.prevent="submitForm">
                <div class="mb-3">
                    <label for="name" class="form-label">{{ $t("nameForm") }}</label>
                    <input type="text" id="name" name="name" v-model="form.name" class="form-control" required>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" id="email" name="email" v-model="form.email" class="form-control" required>
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label">{{ $t("messageForm") }}</label>
                    <textarea id="message" name="message" v-model="form.message" class="form-control" rows="4"
                        required></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Invia</button>
            </form>
            <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
        </div>
        <div class="sponsor-container container" data-aos="fade-up">
            <h3>
                <b>{{ $t("sponsor") }}</b>
            </h3>
            <div class="row justify-content-center">
                <div class="col-6 col-md-4 col-lg-4 sponsor d-flex align-items-center justify-content-center">
                    <img src="/public/sponsor/aragon-removebg-preview.png" alt="" />
                </div>
                <div class="col-6 col-md-4 col-lg-4 sponsor d-flex align-items-center justify-content-center">
                    <img src="/public/sponsor/De-filippis-removebg-preview.png" alt="" />
                </div>
                <div class="col-6 col-md-4 col-lg-4 sponsor d-flex align-items-center justify-content-center">
                    <img src="/public/sponsor/hotel-florida-removebg-preview.png" alt="" />
                </div>
                <div class="col-6 col-md-4 col-lg-4 sponsor d-flex align-items-center justify-content-center">
                    <img src="/public/sponsor/vibra-removebg-preview.png" alt="" />
                </div>
                <div class="col-6 col-md-4 col-lg-4 sponsor d-flex align-items-center justify-content-center">
                    <img src="/public/sponsor/Rent_a_Car_express_Alghero-removebg-preview.png" alt="" />
                </div>
                <div class="col-6 col-md-4 col-lg-4 sponsor d-flex align-items-center justify-content-center">
                    <img src="/public/sponsor/logudoro.png" alt="" />
                </div>
                <div class="col-6 col-md-4 col-lg-4 sponsor d-flex align-items-center justify-content-center">
                    <img src="/public/sponsor/nautilus-Logo-02.png" alt="" />
                </div>
                <div class="col-6 col-md-4 col-lg-4 sponsor d-flex align-items-center justify-content-center">
                    <img src="/public/sponsor/mp-finance-removebg-preview.png" alt="" />
                </div>
                <div class="col-6 col-md-4 col-lg-4 sponsor d-flex align-items-center justify-content-center">
                    <img src="/public/sponsor/businco-removebg-preview.png" alt="" />
                </div>
                <div class="col-6 col-md-4 col-lg-4 sponsor d-flex align-items-center justify-content-center">
                    <img src="/public/sponsor/trova-removebg-preview.png" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.jumbotron {
    position: relative;
    background-image: url("/public/sponsor-2/jumbo-sponsor.jpg");
    height: 85vh;
    color: white;
    font-size: 4rem;
    background-size: cover;
    background-position: center;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.text-center {
    position: relative;
    z-index: 1;
    border-bottom: 1px solid white;
}

.macro-container-sponsor {
    background-image: url("/public/Animated-Shape-2.svg");
    height: auto;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding-bottom: 50px;
}

.form-container {
    background: rgba(255, 255, 255, 0.9);
    padding: 50px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    margin-bottom: 150px;
    width: 50%;
}

.form-label {
    font-weight: bold;
}

.btn-primary {
    background-color: #f1e400;
    border: none;
    color: black;
}

.success-message {
    margin-top: 10px;
    color: green;
    font-weight: bold;
}

.title {
    text-decoration: underline;
    text-align: center;
    font-size: 30px;
}

.section-sponsor img {
    width: 100%;
    max-width: 500px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.section-sponsor {
    padding: 200px 0 100px 0;
}

.section-sponsor img:hover {
    transform: scale(1.05);
}

.single-sponsor {
    padding: 50px;
}

.sponsor-container {
    height: auto;
    width: 80%;
    background-color: rgba(0, 0, 0, 0.2);
    padding: 20px;
    margin-bottom: 200px;
    border-radius: 20px;
    margin-top: 50px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    h3 {
        text-align: center;
        text-decoration: underline;
        font-size: 2rem;
        margin: 30px 0px;
    }

    img {
        width: 100%;
        max-width: 200px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
}

.sponsor-container img:hover {
    transform: scale(1.4);
}

@media screen and (max-width: 768px) {
    .form-container {
        width: 90%;
    }
}
</style>
