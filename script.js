/* =========================
   OPENING SPARKLES
========================= */

function createSparkles() {

    const container = document.querySelector(".stars");

    if (!container) return;

    for (let i = 0; i < 75; i++) {

        const star = document.createElement("span");

        star.textContent = "✦";

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        star.style.fontSize =
            Math.random() * 7 + 3 + "px";

        star.style.opacity =
            Math.random() * 0.7 + 0.2;

        star.style.animationDelay =
            Math.random() * 4 + "s";

        star.style.animationDuration =
            Math.random() * 3 + 2 + "s";

        container.appendChild(star);
    }
}


/* =========================
   FINAL SPARKLES
========================= */

function createFinalSparkles() {

    const container =
        document.querySelector(".final-stars");

    if (!container) return;

    for (let i = 0; i < 45; i++) {

        const star =
            document.createElement("span");

        star.textContent = "✦";

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        star.style.fontSize =
            Math.random() * 6 + 3 + "px";

        star.style.opacity =
            Math.random() * 0.6 + 0.15;

        star.style.animationDelay =
            Math.random() * 4 + "s";

        star.style.animationDuration =
            Math.random() * 3 + 2 + "s";

        container.appendChild(star);
    }
}


/* =========================
   BEGIN STORY
========================= */

function openStory() {

    const opening =
        document.getElementById("opening");

    const story =
        document.getElementById("story");

    if (!opening || !story) return;

    opening.style.transition =
        "opacity 1s ease, transform 1s ease";

    opening.style.opacity = "0";

    opening.style.transform =
        "scale(1.04)";

    setTimeout(function() {

        story.scrollIntoView({
            behavior: "smooth"
        });

    }, 700);
}


/* =========================
   YES BUTTON
========================= */

function showYesMessage() {

    const button =
        document.querySelector(".yes-button");

    const message =
        document.getElementById("yesMessage");

    if (!button || !message) return;

    button.classList.add("active");

    message.classList.add("show");

    createHeartBurst();
}


/* =========================
   HEART BURST
========================= */

function createHeartBurst() {

    const container =
        document.getElementById("heartContainer");

    if (!container) return;

    const hearts = [
        "♡",
        "♥",
        "♡",
        "♥",
        "♡",
        "♥",
        "♡",
        "♥",
        "♡",
        "♥"
    ];

    hearts.forEach(function(symbol) {

        const heart =
            document.createElement("span");

        heart.className = "heart";

        heart.textContent = symbol;

        heart.style.left = "50%";
        heart.style.top = "50%";

        heart.style.setProperty(
            "--x",
            (Math.random() * 600 - 300) + "px"
        );

        heart.style.setProperty(
            "--y",
            (Math.random() * 500 - 300) + "px"
        );

        heart.style.fontSize =
            Math.random() * 15 + 12 + "px";

        container.appendChild(heart);

        setTimeout(function() {
            heart.remove();
        }, 2500);

    });
}


/* =========================
   OPEN SURPRISE
========================= */

function openSurprise() {

    const modal =
        document.getElementById("surpriseModal");

    if (!modal) return;

    modal.classList.add("show");

    document.body.style.overflow = "hidden";

    createModalSparkles();
}


/* =========================
   CLOSE SURPRISE
========================= */

function closeSurprise() {

    const modal =
        document.getElementById("surpriseModal");

    if (!modal) return;

    modal.classList.remove("show");

    document.body.style.overflow = "";

}


/* =========================
   MODAL SPARKLES
========================= */

function createModalSparkles() {

    const container =
        document.querySelector(".modal-sparkles");

    if (!container) return;

    if (container.children.length > 0) return;

    for (let i = 0; i < 30; i++) {

        const star =
            document.createElement("span");

        star.textContent = "✦";

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        star.style.fontSize =
            Math.random() * 7 + 3 + "px";

        star.style.animationDelay =
            Math.random() * 4 + "s";

        star.style.animationDuration =
            Math.random() * 3 + 2 + "s";

        container.appendChild(star);
    }
}


/* =========================
   ESC KEY
========================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {
            closeSurprise();
        }

    }
);


/* =========================
   OUTSIDE MODAL
========================= */

document.addEventListener(
    "click",
    function(event) {

        const modal =
            document.getElementById("surpriseModal");

        if (!modal) return;

        if (event.target === modal) {
            closeSurprise();
        }

    }
);


/* =========================
   SCROLL REVEAL
========================= */

function setupScrollReveal() {

    const elements =
        document.querySelectorAll(
            ".destination-card, " +
            ".year-item, " +
            ".ego-box, " +
            ".photo-frame, " +
            ".quote-box, " +
            ".award-card, " +
            ".letter-paper, " +
            ".happy-photo"
        );

    const observer =
        new IntersectionObserver(
            function(entries) {

                entries.forEach(function(entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );
                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    elements.forEach(function(element) {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";

        observer.observe(element);

    });


    const style =
        document.createElement("style");

    style.textContent = `

        .destination-card.visible,
        .year-item.visible,
        .ego-box.visible,
        .photo-frame.visible,
        .quote-box.visible,
        .award-card.visible,
        .letter-paper.visible,
        .happy-photo.visible {

            opacity: 1 !important;

            transform:
                translateY(0) !important;
        }

    `;

    document.head.appendChild(style);
}


/* =========================
   IMAGE ERROR CHECK
========================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const images =
            document.querySelectorAll("img");

        images.forEach(function(img) {

            img.addEventListener(
                "error",
                function() {

                    console.log(
                        "Image not found:",
                        img.src
                    );

                }
            );

        });

    }
);


/* =========================
   START
========================= */

window.addEventListener(
    "load",
    function() {

        createSparkles();

        createFinalSparkles();

        setupScrollReveal();

    }
);