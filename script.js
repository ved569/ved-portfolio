/* =========================
   BASIC RESET
========================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


html {
    scroll-behavior: smooth;
}


body {
    font-family: 'Poppins', sans-serif;
    background: #f7faf9;
    color: #17211f;
    line-height: 1.6;
}


/* =========================
   COLORS
========================= */

:root {
    --primary: #087f5b;
    --primary-dark: #055c42;
    --secondary: #dff5ec;
    --dark: #17211f;
    --gray: #66736f;
    --white: #ffffff;
    --light: #f7faf9;
    --border: #dce8e3;
}


/* =========================
   NAVBAR
========================= */

.header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.94);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--border);
}


.navbar {
    max-width: 1200px;
    margin: auto;
    padding: 18px 30px;

    display: flex;
    justify-content: space-between;
    align-items: center;
}


.logo {
    font-size: 28px;
    font-weight: 700;
    color: var(--dark);
}


.logo span,
.footer h3 span {
    color: var(--primary);
}


.nav-links {
    list-style: none;

    display: flex;
    gap: 30px;
}


.nav-links a {
    text-decoration: none;
    color: var(--dark);
    font-size: 14px;
    font-weight: 500;

    transition: 0.3s;
}


.nav-links a:hover {
    color: var(--primary);
}


.menu-btn {
    display: none;

    border: none;
    background: none;

    font-size: 25px;
    cursor: pointer;
}


/* =========================
   HERO
========================= */

.hero {
    min-height: 100vh;
    max-width: 1200px;

    margin: auto;
    padding: 150px 30px 80px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 70px;
}


.hero-content {
    flex: 1;

    animation: slideLeft 1s ease;
}


.small-title {
    color: var(--primary);
    font-weight: 600;
    letter-spacing: 3px;
    font-size: 14px;
}


.hero h1 {
    font-size: clamp(50px, 8vw, 90px);
    line-height: 1;
    margin: 15px 0;
}


.hero h2 {
    font-size: 25px;
    font-weight: 500;
    color: var(--primary);
}


.hero-text {
    max-width: 600px;
    margin: 25px 0;

    color: var(--gray);
    font-size: 17px;
}


.hero-buttons {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}


/* =========================
   BUTTONS
========================= */

.btn {
    display: inline-block;

    padding: 13px 25px;

    border-radius: 8px;

    text-decoration: none;

    font-weight: 600;

    transition: 0.3s;
}


.primary-btn {
    background: var(--primary);
    color: white;

    border: 2px solid var(--primary);
}


.primary-btn:hover {
    background: var(--primary-dark);
    transform: translateY(-3px);
}


.secondary-btn {
    color: var(--primary);
    border: 2px solid var(--primary);
}


.secondary-btn:hover {
    background: var(--primary);
    color: white;
}


/* =========================
   HERO IMAGE
========================= */

.hero-image {
    flex: 0 0 400px;

    display: flex;
    justify-content: center;

    animation: slideRight 1s ease;
}


.image-circle {
    width: 350px;
    height: 350px;

    border-radius: 50%;

    padding: 10px;

    background: var(--secondary);

    box-shadow: 0 20px 50px rgba(8, 127, 91, 0.15);
}


.image-circle img {
    width: 100%;
    height: 100%;

    object-fit: cover;

    border-radius: 50%;
}


/* =========================
   SECTIONS
========================= */

.section {
    max-width: 1200px;
    margin: auto;

    padding: 100px 30px;
}


.section-title {
    text-align: center;
    margin-bottom: 60px;
}


.section-title p {
    color: var(--primary);

    font-size: 13px;
    font-weight: 600;

    letter-spacing: 3px;
}


.section-title h2 {
    font-size: 42px;
    margin-top: 8px;
}


/* =========================
   ABOUT
========================= */

.about-container {
    display: grid;

    grid-template-columns: 350px 1fr;

    gap: 70px;

    align-items: center;
}


.about-image img {
    width: 100%;

    border-radius: 20px;

    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
}


.about-content h3 {
    font-size: 30px;

    margin-bottom: 20px;
}


.about-content p {
    color: var(--gray);

    margin-bottom: 15px;
}


.about-info {
    margin-top: 30px;

    display: grid;

    gap: 12px;
}


.about-info div {
    display: flex;

    gap: 10px;
}


.about-info strong {
    min-width: 80px;
}


/* =========================
   EDUCATION
========================= */

.timeline {
    max-width: 800px;

    margin: auto;

    position: relative;
}


.timeline::before {
    content: '';

    position: absolute;

    left: 12px;

    top: 0;
    bottom: 0;

    width: 2px;

    background: var(--primary);
}


.timeline-item {
    position: relative;

    padding-left: 50px;

    margin-bottom: 40px;
}


.timeline-dot {
    position: absolute;

    left: 4px;
    top: 8px;

    width: 18px;
    height: 18px;

    background: var(--primary);

    border-radius: 50%;

    border: 4px solid var(--secondary);
}


.timeline-card {
    background: white;

    padding: 30px;

    border-radius: 15px;

    border: 1px solid var(--border);

    transition: 0.3s;
}


.timeline-card:hover {
    transform: translateY(-5px);

    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
}


.year {
    color: var(--primary);

    font-size: 13px;

    font-weight: 600;
}


.timeline-card h3 {
    margin: 8px 0;
}


.timeline-card p {
    color: var(--gray);
}


/* =========================
   SKILLS
========================= */

.skills-container {
    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 25px;
}


.skill-card {
    background: white;

    border: 1px solid var(--border);

    padding: 35px 25px;

    border-radius: 15px;

    text-align: center;

    transition: 0.3s;
}


.skill-card:hover {
    transform: translateY(-8px);

    border-color: var(--primary);

    box-shadow: 0 15px 35px rgba(8, 127, 91, 0.1);
}


.skill-icon {
    width: 65px;
    height: 65px;

    margin: auto;

    display: flex;

    justify-content: center;
    align-items: center;

    border-radius: 15px;

    background: var(--secondary);

    color: var(--primary);

    font-weight: 700;

    margin-bottom: 20px;
}


.skill-card p {
    color: var(--gray);

    font-size: 14px;

    margin-top: 8px;
}


/* =========================
   PROJECTS
========================= */

.project-container {
    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 25px;
}


.project-card {
    background: white;

    border: 1px solid var(--border);

    border-radius: 18px;

    padding: 30px;

    transition: 0.3s;
}


.project-card:hover {
    transform: translateY(-8px);

    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
}


.project-number {
    color: var(--primary);

    font-size: 14px;

    font-weight: 700;

    margin-bottom: 20px;
}


.project-content h3 {
    font-size: 21px;

    margin-bottom: 15px;
}


.project-content p {
    color: var(--gray);

    font-size: 14px;
}


.project-tags {
    display: flex;

    flex-wrap: wrap;

    gap: 8px;

    margin-top: 20px;
}


.project-tags span {
    padding: 5px 10px;

    background: var(--secondary);

    color: var(--primary);

    border-radius: 20px;

    font-size: 12px;

    font-weight: 600;
}


/* =========================
   CONTACT
========================= */

.contact-container {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 60px;

    align-items: start;
}


.contact-info h3 {
    font-size: 30px;

    margin-bottom: 15px;
}


.contact-info > p {
    color: var(--gray);

    margin-bottom: 30px;
}


.contact-item {
    display: flex;

    flex-direction: column;

    margin-bottom: 20px;
}


.contact-item strong {
    color: var(--primary);
}


.contact-item span {
    color: var(--gray);
}


.contact-form {
    display: flex;

    flex-direction: column;

    gap: 15px;
}


.contact-form input,
.contact-form textarea {
    width: 100%;

    padding: 15px;

    border: 1px solid var(--border);

    border-radius: 8px;

    font-family: inherit;

    outline: none;

    transition: 0.3s;
}


.contact-form input:focus,
.contact-form textarea:focus {
    border-color: var(--primary);

    box-shadow: 0 0 0 3px var(--secondary);
}


.contact-form textarea {
    resize: vertical;
}


.contact-form button {
    cursor: pointer;

    font-family: inherit;
}


/* =========================
   FOOTER
========================= */

.footer {
    background: var(--dark);

    color: white;

    text-align: center;

    padding: 50px 20px;
}


.footer h3 {
    font-size: 30px;
}


.footer p {
    color: #aebbb6;

    margin-top: 10px;
}


.social-links {
    display: flex;

    justify-content: center;

    gap: 25px;

    margin: 20px 0;
}


.social-links a {
    color: white;

    text-decoration: none;

    transition: 0.3s;
}


.social-links a:hover {
    color: #61d8ad;
}


.copyright {
    font-size: 13px;
}


/* =========================
   ANIMATIONS
========================= */

@keyframes slideLeft {

    from {
        opacity: 0;
        transform: translateX(-50px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }

}


@keyframes slideRight {

    from {
        opacity: 0;
        transform: translateX(50px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }

}


/* =========================
   MOBILE
========================= */

@media (max-width: 850px) {

    .nav-links {

        position: absolute;

        top: 70px;
        left: 0;

        width: 100%;

        background: white;

        flex-direction: column;

        align-items: center;

        gap: 20px;

        padding: 25px;

        display: none;

        border-bottom: 1px solid var(--border);
    }


    .nav-links.active {
        display: flex;
    }


    .menu-btn {
        display: block;
    }


    .hero {

        flex-direction: column-reverse;

        text-align: center;

        padding-top: 130px;
    }


    .hero-buttons {
        justify-content: center;
    }


    .hero-image {
        flex: auto;
    }


    .image-circle {
        width: 280px;
        height: 280px;
    }


    .about-container {

        grid-template-columns: 1fr;

        text-align: center;
    }


    .about-image {

        max-width: 300px;

        margin: auto;
    }


    .about-info {

        text-align: left;
    }


    .skills-container {

        grid-template-columns: repeat(2, 1fr);
    }


    .project-container {

        grid-template-columns: 1fr;
    }


    .contact-container {

        grid-template-columns: 1fr;
    }

}


@media (max-width: 550px) {

    .navbar {
        padding: 15px 20px;
    }


    .hero {

        padding-left: 20px;
        padding-right: 20px;
    }


    .hero h1 {
        font-size: 55px;
    }


    .hero h2 {
        font-size: 20px;
    }


    .section {
        padding: 75px 20px;
    }


    .section-title h2 {
        font-size: 34px;
    }


    .skills-container {
        grid-template-columns: 1fr;
    }


    .timeline-item {
        padding-left: 40px;
    }

}