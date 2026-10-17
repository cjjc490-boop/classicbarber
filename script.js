/* =====================================================
   إعدادات الموقع — عدّل القيم هنا فقط (الجزء الوحيد الذي تحتاج لتغييره)
   القيم الحالية تجريبية، استبدلها ببيانات المحل الحقيقية
   ===================================================== */
const CONFIG = {
  tagline: "قصّة تليق بك، وأناقة تدوم. خبرة واهتمام بأدق التفاصيل.",
  phone: "+20 100 000 0000",            // رقم الهاتف والواتساب (بالصيغة الدولية)
  waMessage: "مرحباً CLASSIC BARBER، أرغب في حجز موعد.", // رسالة الحجز الجاهزة
  address: "الشارع الرئيسي، بجوار ... (عنوان تجريبي)",
  mapLink: "",                          // رابط الموقع من خرائط جوجل (اتركه فارغاً للبحث بالعنوان)
  currency: "ج.م",
  instagram: "",                        // ضع رابط الحساب أو اتركه فارغاً لإخفائه
  facebook: "",
  tiktok: "",

  heroImage: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1600&q=70",

  hours: [
    ["السبت - الخميس", "10:00 ص - 11:00 م"],
    ["الجمعة", "2:00 م - 11:00 م"]
  ],

  services: [
    { name: "قصّة شعر", price: 100, desc: "قصّة عصرية حسب شكل الوجه مع تصفيف." },
    { name: "حلاقة ذقن", price: 70, desc: "تحديد وتشذيب بالموسى مع منشفة ساخنة." },
    { name: "قصّة + ذقن", price: 150, desc: "باقة متكاملة للإطلالة الكاملة." },
    { name: "قصّة أطفال", price: 80, desc: "قصّة مريحة وبصبر مع الصغار." },
    { name: "تنظيف بشرة", price: 120, desc: "تنظيف عميق وماسك منعش للوجه." },
    { name: "صبغة وتلوين", price: 200, desc: "تغطية الشيب أو تلوين بدرجات طبيعية." }
  ],

  gallery: [
    { src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=700&q=70", alt: "قصّة شعر كلاسيكية" },
    { src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=700&q=70", alt: "حلاقة بالموسى" },
    { src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=700&q=70", alt: "تدريج عصري" },
    { src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=700&q=70", alt: "تشذيب الذقن" },
    { src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=700&q=70", alt: "كرسي الحلاقة" },
    { src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=700&q=70", alt: "قصّة عصرية" }
  ],

  why: [
    { icon: "✂️", title: "حلاقون محترفون", text: "فريق خبير يتابع أحدث القصّات." },
    { icon: "🧼", title: "نظافة وتعقيم", text: "أدوات معقّمة ومنشفة نظيفة لكل عميل." },
    { icon: "⏱️", title: "التزام بالمواعيد", text: "نحترم وقتك، احجز ولا تنتظر." },
    { icon: "💎", title: "أجواء راقية", text: "مكان مريح وخدمة بمستوى فاخر." }
  ],

  reviews: [
    { name: "عميل تجريبي 1", stars: 5, text: "نص تجريبي: خدمة ممتازة وقصّة مرتبة. (استبدله برأي عميل حقيقي)" },
    { name: "عميل تجريبي 2", stars: 5, text: "نص تجريبي: مكان نظيف وتعامل راقٍ. (استبدله برأي عميل حقيقي)" },
    { name: "عميل تجريبي 3", stars: 4, text: "نص تجريبي: أنصح به بشدة. (استبدله برأي عميل حقيقي)" }
  ]
};

/* ===================== من هنا لا تحتاج للتعديل ===================== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const digits = CONFIG.phone.replace(/\D/g, "");
const waLink = `https://wa.me/${digits}?text=${encodeURIComponent(CONFIG.waMessage)}`;
const mapLink = CONFIG.mapLink || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONFIG.address)}`;
const FALLBACK = "data:image/svg+xml," + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="#171717"/><text x="100" y="125" font-size="80" text-anchor="middle" fill="#d4af37">✂</text></svg>'
);

// بدل أي صورة لا تعمل بصورة بديلة أنيقة
document.addEventListener("error", e => {
  const t = e.target;
  if (t.tagName === "IMG" && t.src !== FALLBACK) { t.classList.add("is-fallback"); t.src = FALLBACK; }
}, true);

// تعبئة بيانات المحل
$$("[data-tagline]").forEach(el => el.textContent = CONFIG.tagline);
$$("[data-address]").forEach(el => el.textContent = CONFIG.address);
$$("[data-tel]").forEach(el => { el.textContent = CONFIG.phone; el.href = "tel:+" + digits; });
$$("[data-wa]").forEach(el => el.href = waLink);
$$("[data-map]").forEach(el => el.href = mapLink);
$("#heroImg").src = CONFIG.heroImage;
$("#year").textContent = new Date().getFullYear();

$("#servicesList").innerHTML = CONFIG.services.map(s => `
  <article class="card reveal">
    <div class="svc-top"><h3>${esc(s.name)}</h3><span class="price">${esc(s.price)} <small>${esc(CONFIG.currency)}</small></span></div>
    <p>${esc(s.desc)}</p>
  </article>`).join("");

$("#galleryList").innerHTML = CONFIG.gallery.map((g, i) => `
  <button class="shot reveal" data-i="${i}" aria-label="تكبير: ${esc(g.alt)}">
    <img src="${esc(g.src)}" alt="${esc(g.alt)}" loading="lazy" decoding="async">
  </button>`).join("");

$("#whyList").innerHTML = CONFIG.why.map(w => `
  <article class="card reveal"><span class="ico" aria-hidden="true">${w.icon}</span><h3>${esc(w.title)}</h3><p>${esc(w.text)}</p></article>`).join("");

$("#reviewsList").innerHTML = CONFIG.reviews.map(r => `
  <article class="card reveal">
    <div class="stars" role="img" aria-label="${r.stars} من 5">${"★".repeat(r.stars)}${"☆".repeat(5 - r.stars)}</div>
    <p>${esc(r.text)}</p><p class="who">${esc(r.name)}</p>
  </article>`).join("");

$("#hoursList").innerHTML = CONFIG.hours.map(h => `<li><span>${esc(h[0])}</span><span>${esc(h[1])}</span></li>`).join("");

$("#social").innerHTML = [["instagram", "انستجرام"], ["facebook", "فيسبوك"], ["tiktok", "تيك توك"]]
  .filter(([k]) => CONFIG[k])
  .map(([k, n]) => `<a href="${esc(CONFIG[k])}" target="_blank" rel="noopener">${n}</a>`).join("");

// قائمة الموبايل
const burger = $("#burger"), menu = $("#menu");
const setMenu = open => {
  menu.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", open);
  burger.setAttribute("aria-label", open ? "إغلاق القائمة" : "فتح القائمة");
};
burger.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
menu.addEventListener("click", e => { if (e.target.closest("a")) setMenu(false); });
document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });

// ظل الهيدر عند التمرير
const header = $("#header");
const onScroll = () => header.classList.toggle("scrolled", scrollY > 30);
addEventListener("scroll", onScroll, { passive: true }); onScroll();

// نافذة تكبير الصور
const lb = $("#lightbox"), lbImg = $("#lbImg");
$("#galleryList").addEventListener("click", e => {
  const b = e.target.closest(".shot"); if (!b) return;
  const g = CONFIG.gallery[b.dataset.i];
  lbImg.src = g.src.replace("w=700", "w=1200"); lbImg.alt = g.alt;
  lb.showModal();
});
$("#lbClose").addEventListener("click", () => lb.close());
lb.addEventListener("click", e => { if (e.target === lb) lb.close(); });

// ظهور تدريجي عند التمرير
const items = $$(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(es => es.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
  }), { threshold: 0.12 });
  items.forEach(el => io.observe(el));
} else items.forEach(el => el.classList.add("in"));
