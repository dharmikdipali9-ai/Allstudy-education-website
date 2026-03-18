// ===============================
// Search Course
// ===============================
function searchCourse() {

    const category = document.getElementById("category")?.value;
    const level = document.getElementById("level")?.value;
    const keyword = document.getElementById("keyword")?.value;
    const result = document.getElementById("result");

    if (!result) return;

    result.innerHTML = `
    Searching courses for:<br>
    Category: ${category || "Any"} <br>
    Level: ${level || "Any"} <br>
    Keyword: ${keyword || "None"}
    `;
}


// ===============================
// Popular Courses
// ===============================
function viewCourses() {
    alert("All Courses Page Coming Soon!");
}


// ===============================
// Counter Section
// ===============================
const counters = document.querySelectorAll('.counter-number');

function animateCounters() {

    const speed = 200;

    counters.forEach(counter => {

        const updateCount = () => {

            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            const increment = Math.ceil(target / speed);

            if (count < target) {

                counter.innerText = count + increment;

                setTimeout(updateCount, 20);

            } else {

                counter.innerText = target;

            }

        };

        updateCount();

    });

}

const counterSection = document.querySelector('.counter-section');

if (counterSection && counters.length > 0) {

    const observer = new IntersectionObserver(entries => {

        if (entries[0].isIntersecting) {

            animateCounters();
            observer.disconnect();

        }

    }, { threshold: 0.5 });

    observer.observe(counterSection);

}


// ===============================
// Gallery Section
// ===============================
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');
const galleryGrid = document.getElementById('galleryGrid');
const viewMoreBtn = document.getElementById('viewMoreBtn');

if (filterBtns.length > 0 && galleryItems.length > 0) {

    filterBtns.forEach(btn => {

        btn.addEventListener('click', () => {

            const filter = btn.getAttribute('data-filter');

            galleryItems.forEach(item => {

                if (filter === 'all' || item.getAttribute('data-category') === filter) {

                    item.style.display = 'block';

                } else {

                    item.style.display = 'none';

                }

            });

        });

    });

}

if (viewMoreBtn && galleryGrid) {

    viewMoreBtn.addEventListener('click', () => {

        const newItems = `
        <div class="gallery-item" data-category="photography"><img src="https://via.placeholder.com/400x250?text=Photography+2"></div>
        <div class="gallery-item" data-category="packing"><img src="https://via.placeholder.com/400x250?text=Packing+2"></div>
        <div class="gallery-item" data-category="branding"><img src="https://via.placeholder.com/400x250?text=Branding+3"></div>
        `;

        galleryGrid.insertAdjacentHTML('beforeend', newItems);

    });

}


// ===============================
// Testimonial Carousel
// ===============================
const carousel = document.querySelector('#testimonialCarousel');

let bsCarousel;

if (carousel) {

    bsCarousel = new bootstrap.Carousel(carousel);

}

function nextSlide() {

    if (bsCarousel) bsCarousel.next();

}

function prevSlide() {

    if (bsCarousel) bsCarousel.prev();

}


// ===============================
// Events Section
// ===============================
const eventBtns = document.querySelectorAll(".eventsJoinBtn");

if (eventBtns.length > 0) {

    eventBtns.forEach(btn => {

        btn.addEventListener("click", () => {

            alert("You joined this event!");

        });

    });

}


// ===============================
// Newsletter
// ===============================
function subscribeNewsletter() {

    const emailInput = document.getElementById("newsletterEmail");

    if (!emailInput) return;

    const email = emailInput.value;

    if (email === "") {

        alert("Please enter your email!");
        return;

    }

    alert("Subscribed successfully!");

}


// ===============================
// Pricing Section
// ===============================
function purchasePlan(plan) {

    alert("You selected the " + plan + " plan.");

    console.log("Plan purchased:", plan);

}


// ===============================
// Contact Form
// ===============================
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");
    const msg = document.getElementById("formMsg");

    if (!form || !msg) return;

    const scriptURL = "https://script.google.com/macros/s/AKfycbwdws5fw4_Ni94l3ti6KgFIFknqrjtyqnBjxP61h2hLs0CBvuMTc3OecqQq-6pj4uJD/exec"; // paste your Google Apps Script Web App URL here

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name")?.value.trim();
        const email = document.getElementById("email")?.value.trim();
        const message = document.getElementById("message")?.value.trim();

        // Validation
        if (!name || !email || !message) {

            msg.style.color = "red";
            msg.innerText = "Please fill all fields.";
            return;

        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            msg.style.color = "red";
            msg.innerText = "Enter a valid email.";
            return;

        }

        // Show loading message
        msg.style.color = "blue";
        msg.innerText = "Sending message...";

        // Send data to Google Sheets
        fetch(scriptURL, {

            method: "POST",
            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            }),
            headers: {
                "Content-Type": "application/json"
            }

        })
        .then(response => response.json())
        .then(data => {

            msg.style.color = "green";
            msg.innerText = "Message sent successfully!";

            form.reset();

        })
        .catch(error => {

            msg.style.color = "red";
            msg.innerText = "Error sending message.";

            console.error("Error:", error);

        });

    });

});
// ===============================
// Map Section
// ===============================
window.addEventListener("load", () => {

    console.log("Map Loaded Successfully");

});


// customise js starts here

// INIT EMAILJS
emailjs.init("UO04Ip6crvSsvHp57");

let popup = document.getElementById("lp-popup");
let form = document.getElementById("lp-form");
let name = document.getElementById("lp-name");
let email = document.getElementById("lp-email");
let msg = document.getElementById("lp-msg");
let loader = document.getElementById("lp-loader");
let btnText = document.getElementById("lp-btnText");

// SHOW POPUP
setTimeout(()=> popup.style.display="block",10000);

// CLOSE
document.querySelector(".lp-close").onclick = ()=> popup.style.display="none";

// PATTERN
let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

// REAL TIME
name.addEventListener("input", ()=>{
    name.classList.toggle("lp-error", name.value.trim()==="");
    name.classList.toggle("lp-success", name.value.trim()!=="");
});

email.addEventListener("input", ()=>{
    email.classList.toggle("lp-success", emailPattern.test(email.value));
    email.classList.toggle("lp-error", !emailPattern.test(email.value));
});



let phone = document.getElementById("lp-phone");

// Pattern for 10 digits
let phonePattern = /^[0-9]{10}$/;

// Real-time validation
phone.addEventListener("input", ()=>{
    phone.classList.toggle("lp-success", phonePattern.test(phone.value));
    phone.classList.toggle("lp-error", !phonePattern.test(phone.value));
});

// SUBMIT
form.addEventListener("submit", function(e){
    e.preventDefault();

    if(name.value.trim()===""){
        msg.innerText="Enter name ❌";
        return;
    }

    if(!emailPattern.test(email.value)){
        msg.innerText="Enter valid email ❌";
        return;
    }
    if(!phonePattern.test(phone.value)){
        msg.innerText = "Enter valid 10-digit phone ❌";
        return;
    }

    loader.style.display="inline-block";
    btnText.innerText="Sending...";

    emailjs.send("service_9rjx9m9","template_ldtu6db",{
        user_name:name.value,
        user_email:email.value,
        user_phone: phone.value
    }).then(()=>{
        msg.innerText="Sent ✅";
        setTimeout(()=> window.location.href="thank-you.html",1500);
    });
});

// SCROLL TOP
let btn = document.getElementById("lp-scrollTop");
window.onscroll = ()=> btn.style.display = window.scrollY>100 ? "block":"none";
btn.onclick = ()=> window.scrollTo({top:0,behavior:"smooth"});