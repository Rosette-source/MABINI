document.addEventListener('DOMContentLoaded', () => {
    const homeLink = document.getElementById('homeLink');
    const homeSection = document.getElementById('home');

    homeLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default anchor link behavior

        // Remove any existing highlight class
        document.querySelectorAll('.highlight').forEach(element => {
            element.classList.remove('highlight');
        });

        // Add highlight class to the home section
        homeSection.classList.add('highlight');

        // Optionally, you can scroll the page to the top if needed
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

document.getElementById('menuToggle').addEventListener('click', function() {
    var navMenu = document.getElementById('navMenu');
    if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
    } else {
        navMenu.classList.add('active');
    }
});

function updateHeaderHeight() {
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;
    document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
}

// Call the function on page load
window.addEventListener('load', updateHeaderHeight);

// Call the function on window resize
window.addEventListener('resize', updateHeaderHeight);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const header = document.querySelector('header');
        const headerHeight = header.offsetHeight;

        const target = document.querySelector(this.getAttribute('href'));
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});


const toggleTranslation = document.getElementById('toggle-translation');
const messageText = document.getElementById('message-text');

const englishMessage = `
    Dear Residents of Barangay Mabini,<br><br>
    Welcome to our official Barangay Mabini webpage! This platform is dedicated to keeping you informed about our community's latest news, events, and announcements. Here, you will find important updates, community resources, and highlights of our barangay's vibrant culture and activities.<br><br>
    We encourage all residents to regularly visit this page to stay connected and engaged with our community. Your participation and feedback are vital to the continued growth and success of Barangay Mabini.<br><br>
    Together, let us work hand in hand to foster a stronger, more united, and progressive community. Thank you for your continued support and cooperation.<br><br>
    Mabuhay ang Barangay Mabini!<br><br>
    Sincerely,<br>
    Glimerson Laverinto<br>
    <i>Barangay Captain<i>
`;

const tagalogMessage = `
    Mga Minamahal na Residente ng Barangay Mabini,<br><br>
    Maligayang pagdating sa opisyal na webpage ng ating Barangay Mabini! Ang platapormang ito ay nakalaan upang magbigay sa inyo ng mga pinakabagong balita, kaganapan, at anunsyo ng ating komunidad. Dito ninyo matatagpuan ang mahahalagang updates, mga mapagkukunan ng komunidad, at mga tampok na aktibidad na nagpapakita ng makulay na kultura ng ating barangay.<br><br>
    Inaanyayahan namin ang lahat ng residente na regular na bisitahin ang pahinang ito upang manatiling konektado at aktibo sa ating komunidad. Ang inyong pakikilahok at puna ay mahalaga para sa patuloy na paglago at tagumpay ng Barangay Mabini.<br><br>
    Sama-sama, magtulungan tayo upang palakasin, pagkaisahin, at paunlarin ang ating komunidad. Maraming salamat sa inyong patuloy na suporta at kooperasyon.<br><br>
    Mabuhay ang Barangay Mabini!<br><br>
    Taos-pusong sumasainyo,<br>
    Glimerson Laverinto<br>
    <i>Punong Barangay<i>
`;

let isEnglish = true;

toggleTranslation.addEventListener('click', () => {
    if (isEnglish) {
        messageText.innerHTML = tagalogMessage;
        toggleTranslation.textContent = 'Show in English';
    } else {
        messageText.innerHTML = englishMessage;
        toggleTranslation.textContent = 'Show in Tagalog';
    }
    isEnglish = !isEnglish;
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

        // Optionally, you can add code here to send the form data to a server

    // Show the success message
    document.getElementById('successMessage').style.display = 'block';

    // Optionally, you can hide the form after submission
    document.getElementById('contactForm').reset(); // Reset the form fields
});

const navLinks = document.querySelectorAll('.nav ul li a');

// Add click event listeners to each link
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remove the 'active' class from all links
        navLinks.forEach(link => link.classList.remove('active'));
        // Add the 'active' class to the clicked link
        this.classList.add('active');
    });
});

