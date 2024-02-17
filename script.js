// var swiper = new Swiper(".slider-container", {
//   slidesPerView: "auto", // Adjust the number of visible slides as needed
//   spaceBetween: 30,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

function switchLanguage() {
  var languageSelector = document.getElementById("languageSelector");
  var selectedLanguage = languageSelector.value;

  if (selectedLanguage === "es") {
    document.getElementById("Home").innerText = "Casa";
    document.getElementById("About").innerText = "Acerca de";
    document.getElementById("Courses").innerText = " Cursos";
    document.getElementById("Services").innerText = "Servicios";
    document.getElementById("Contact").innerText = "Contacto";
    document.getElementById("loginSignup").innerText = "Registrarse / Iniciar sesión";

    // Hero Section translation to Spanish
    document.getElementById("heroTitle").innerText = "¡Desata tu potencial con nosotros!";
    document.getElementById("heroSubtitle").innerText = "Libera tu potencial con nuestros cursos de aprendizaje cautivadores diseñados para inspirar y potenciar. Únete a nosotros en un viaje de descubrimiento y crecimiento.";
    document.getElementById("heroButton").innerText = "Empezar";
    //   document.getElementById('pageContent').innerText = 'Este es el contenido de mi sitio web.';
  } 
  else if (selectedLanguage === "en") {
    document.getElementById("Home").innerText = "Home";
    document.getElementById("About").innerText = "About";
    document.getElementById("Courses").innerText = "Courses";
    document.getElementById("Services").innerText = "Services";
    document.getElementById("Contact").innerText = "Contact";
    document.getElementById("loginSignup").innerText = "SignUp / Login";

    // Hero Section translation to English
    document.getElementById("heroTitle").innerText = "Unleash your potential with us";
    document.getElementById("heroSubtitle").innerText = "Unleash your potential with our engaging learning courses designed to inspire and empower. Join us on a journey of discovery and growth.";
    document.getElementById("heroButton").innerText = "Get Started";
  }
  else {
    document.getElementById("pageTitle").innerText = "Welcome to My Website";
    document.getElementById("pageContent").innerText =
      "This is the content of my website.";
  }
  // Add more language options and translations as needed
}
