document.addEventListener("DOMContentLoaded", function () {

    const burger = document.querySelector(".nav-icon");
    const navbox = document.querySelector("nav");
    const navlinks = document.querySelectorAll(".nav-link");
    let lastScrollY = 0;

    /* ── Burger: toggle mobile menu ── */
    burger.addEventListener("click", () => {
        burger.classList.toggle("open");
        const navbar = document.querySelector(".navbar");
        const overlay = document.querySelector(".navbar .overlay");
        navbar.classList.toggle("open");
        if (overlay) {
            overlay.parentNode.removeChild(overlay);
        } else {
            const overlay_div = document.createElement("div");
            overlay_div.classList.add("overlay");
            navbar.insertBefore(overlay_div, navbar.firstChild);
            overlay_div.addEventListener("click", () => {
                navbar.classList.remove("open");
                burger.classList.remove("open");
                overlay_div.parentNode.removeChild(overlay_div);
            });
        }
    });

    /* ── Close mobile menu on nav link click ── */
    navlinks.forEach((link) => {
        link.addEventListener("click", (evt) => {
            evt.stopImmediatePropagation();
            const navbar = document.querySelector(".navbar");
            const overlay = document.querySelector(".navbar .overlay");
            if (overlay) {
                navbar.classList.remove("open");
                burger.classList.remove("open");
                overlay.parentNode.removeChild(overlay);
            }
            return true;
        });
    });

    /* ── Hide on scroll down / show on scroll up ── */
    window.addEventListener("scroll", () => {
        const y = window.scrollY;

        if (y <= 60) {
            navbox.classList.remove("topfixed", "nav-hidden");
        } else if (y > lastScrollY) {
            // scrolling down — hide nav
            navbox.classList.add("nav-hidden");
            navbox.classList.remove("topfixed");
        } else {
            // scrolling up — show nav with background
            navbox.classList.remove("nav-hidden");
            navbox.classList.add("topfixed");
        }

        lastScrollY = y;
    });

    /* ── Active section highlighting via Intersection Observer ── */
    const hero = document.querySelector("header.container");
    const sections = [hero, ...document.querySelectorAll("section[id]")].filter(Boolean);

    const setActive = (el) => {
        navlinks.forEach((link) => link.classList.remove("active"));
        const href = el.tagName.toLowerCase() === "header" ? "#top" : `#${el.id}`;
        const activeLink = document.querySelector(`.nav-link[href="${href}"]`);
        if (activeLink) activeLink.classList.add("active");
    };

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) setActive(entry.target);
            });
        },
        { threshold: 0.5 }
    );

    sections.forEach((s) => observer.observe(s));
});

