const nav = document.querySelector(".nav"),
  menu = document.querySelector(".menu");
menu?.addEventListener("click", () => {
  nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", nav.classList.contains("open") ? "true" : "false");
});
document
  .querySelectorAll(".nav a")
  .forEach((a) =>
    a.addEventListener("click", () => nav.classList.remove("open")),
  );
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries, observer) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    }),
    { threshold: 0.08 },
  );
  revealEls.forEach((el) => io.observe(el));
  // Fail-safe: never allow animation logic to leave content permanently hidden.
  window.setTimeout(() => revealEls.forEach((el) => el.classList.add("visible")), 1400);
} else {
  revealEls.forEach((el) => el.classList.add("visible"));
}

const references = {
  "01": {
    name: "MoneyKit",
    image: "assets/references/screenshots/banking.webp",
    text: "A premium digital banking concept built around trust, clarity and everyday financial control.",
  },
  "02": {
    name: "Plasma",
    image: "assets/references/screenshots/investment.webp",
    text: "A wealth and investment concept combining market intelligence with editorial sophistication.",
  },
  "03": {
    name: "Fura",
    image: "assets/references/screenshots/shipping.webp",
    text: "A logistics concept that turns complex movement and tracking into a confident digital journey.",
  },
  "04": {
    name: "Superlist",
    image: "assets/references/screenshots/web-app.webp",
    text: "A product-led SaaS concept designed around workflow, collaboration and focused interaction.",
  },
  "05": {
    name: "Curated Supply",
    image: "assets/references/screenshots/ecommerce.webp",
    text: "An editorial commerce concept where product discovery and visual storytelling drive desire.",
  },
  "06": {
    name: "Polpis Systems",
    image: "assets/references/screenshots/refinery.webp",
    text: "An industrial energy concept balancing scale, engineering credibility and modern storytelling.",
  },
  "07": {
    name: "Aave",
    image: "assets/references/screenshots/crypto.webp",
    text: "A Web3 concept that makes complex digital finance feel distinctive, structured and approachable.",
  },
  "08": {
    name: "Opendoor",
    image: "assets/references/screenshots/housing.webp",
    text: "A property concept combining luxury editorial presentation with practical search and discovery.",
  },
  "09": {
    name: "Selfbook",
    image: "assets/references/screenshots/hospitality.webp",
    text: "An immersive hospitality concept where the experience begins before the guest arrives.",
  },
  10: {
    name: "National Design Studio",
    image: "assets/references/screenshots/government.webp",
    text: "A public-service concept prioritising accessibility, clarity and task completion.",
  },
  11: {
    name: "NORTHSTAR",
    image: "assets/references/corporate.svg",
    text: "A corporate concept designed to establish authority, capability and commercial confidence quickly.",
  },
  12: {
    name: "COVER",
    image: "assets/references/insurance.svg",
    text: "A human insurance concept that replaces complexity with clarity and reassurance.",
  },
  13: {
    name: "FORGE",
    image: "assets/references/manufacturing.svg",
    text: "A manufacturing concept combining industrial precision with contemporary digital presentation.",
  },
  14: {
    name: "GROUNDWORK",
    image: "assets/references/construction.svg",
    text: "A construction concept built around scale, projects, expertise and strong visual confidence.",
  },
  15: {
    name: "RESERVA",
    image: "assets/references/booking.svg",
    text: "A booking concept designed to reduce friction from discovery to confirmed reservation.",
  },
};
const items = document.querySelectorAll(".industry-item"),
  preview = document.getElementById("industryPreview"),
  refImage = document.getElementById("referenceImage"),
  refName = document.getElementById("referenceName"),
  visit = document.getElementById("visitReference"),
  desc = document.getElementById("previewDescription");
function select(item) {
  items.forEach((x) => x.classList.remove("active"));
  item.classList.add("active");
  if (window.matchMedia("(max-width: 600px)").matches) {
    item.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }
  const no = item.dataset.no,
    r = references[no];
  preview.querySelector(".preview-no").textContent = no;
  preview.querySelector(".preview-tag").textContent = item.dataset.tag;
  refName.textContent = r.name;
  desc.textContent = r.text;
  refImage.src = r.image;
  refImage.alt = r.name + " original website concept preview";
  preview.animate(
    [
      { opacity: 0.82, transform: "scale(.997)" },
      { opacity: 1, transform: "scale(1)" },
    ],
    { duration: 280, easing: "ease-out" },
  );
}
visit?.addEventListener("click", () => {
  preview.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(1.008)" },
      { transform: "scale(1)" },
    ],
    { duration: 420, easing: "ease-out" },
  );
  refImage?.scrollIntoView({ behavior: "smooth", block: "center" });
});
items.forEach((item) => item.addEventListener("click", () => select(item)));
select(document.querySelector(".industry-item.active") || items[0]);
