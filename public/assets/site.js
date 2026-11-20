const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".main-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("is-open", !open);
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    }
  });
}

document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});

const siteData = (file) => fetch(`/data/${file}.json`).then((response) => {
  if (!response.ok) throw new Error(`Could not load ${file}`);
  return response.json();
}).catch(() => []);

const make = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
};

const safeAsset = (path) => typeof path === "string" && path.startsWith("/") && !path.startsWith("//") && !path.includes("..") ? path : "";
const safeWebLink = (path) => {
  try {
    const link = new URL(path, window.location.origin);
    return ["https:", "http:"].includes(link.protocol) ? link.href : "";
  } catch { return ""; }
};
const formatDate = (value) => {
  if (!value || !/^\d{4}-\d{2}-\d{2}/.test(value)) return "";
  const date = new Date(`${value.slice(0, 10)}T00:00:00`);
  return Number.isNaN(date.valueOf()) ? "" : new Intl.DateTimeFormat("en-AU", { day: "numeric", month: "long", year: "numeric" }).format(date);
};

const imageCard = ({ title, album, caption, image, alt, date }) => {
  const card = make("article", "card activity-card gallery-card");
  const src = safeAsset(image);
  if (src) {
    const link = make("a", "gallery-image-link");
    link.href = src;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.setAttribute("aria-label", `Open photo: ${title || alt || "Community photo"}`);
    const img = make("img");
    img.src = src;
    img.alt = alt || title || "Basava Samithi community photo";
    img.loading = "lazy";
    link.append(img);
    card.append(link);
  }
  const meta = [album, formatDate(date)].filter(Boolean).join(" · ");
  if (meta) card.append(make("span", "event-date", meta));
  if (title) card.append(make("h3", "", title));
  if (caption) card.append(make("p", "", caption));
  return card;
};

const galleryGrid = document.querySelector("[data-gallery-grid]");
if (galleryGrid) {
  const filter = document.querySelector("[data-gallery-filter]");
  siteData("gallery").then((photos) => {
    const albums = [...new Set(photos.map((photo) => photo.album).filter(Boolean))].sort((a, b) => a.localeCompare(b));
    albums.forEach((album) => {
      const option = make("option", "", album);
      option.value = album;
      filter?.append(option);
    });
    const draw = () => {
      const chosen = filter?.value || "all";
      galleryGrid.replaceChildren();
      const filtered = photos.filter((photo) => chosen === "all" || photo.album === chosen);
      filtered.forEach((photo) => galleryGrid.append(imageCard(photo)));
      if (!filtered.length) galleryGrid.append(make("p", "small-note", "No photos are available in this album yet."));
    };
    filter?.addEventListener("change", draw);
    draw();
  });
}

const eventsGrid = document.querySelector("[data-events-list]");
if (eventsGrid) {
  siteData("events").then((events) => {
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const upcoming = events.filter((event) => {
      if (!event.date || !/^\d{4}-\d{2}-\d{2}/.test(event.date)) return false;
      const date = new Date(`${event.date.slice(0, 10)}T00:00:00`);
      return !Number.isNaN(date.valueOf()) && date >= today;
    }).sort((a, b) => a.date.localeCompare(b.date));
    if (!upcoming.length) return;
    eventsGrid.replaceChildren();
    upcoming.forEach((event) => {
      const card = make("article", "card event-card");
      card.append(make("span", "event-date", formatDate(event.date)));
      card.append(make("h3", "", event.title || "Community event"));
      if (event.time) card.append(make("p", "event-detail", event.time));
      if (event.location) card.append(make("p", "event-detail", event.location));
      if (event.summary) card.append(make("p", "", event.summary));
      const link = safeWebLink(event.registration_url);
      if (link) {
        const action = make("a", "card-link", "Event details and registration");
        action.href = link; action.target = "_blank"; action.rel = "noopener noreferrer";
        card.append(action);
      }
      eventsGrid.append(card);
    });
  });
}

const newslettersGrid = document.querySelector("[data-newsletters-list]");
if (newslettersGrid) {
  siteData("newsletters").then((items) => {
    if (!items.length) return;
    newslettersGrid.replaceChildren();
    items.sort((a, b) => (b.date || "").localeCompare(a.date || "")).forEach((item) => {
      const card = make("article", "card");
      card.append(make("span", "event-date", [formatDate(item.date), item.issue].filter(Boolean).join(" · ")));
      card.append(make("h3", "", item.title || "Community newsletter"));
      if (item.summary) card.append(make("p", "", item.summary));
      const file = safeAsset(item.document);
      if (file) {
        const link = make("a", "card-link", "Read or download PDF");
        link.href = file; link.target = "_blank"; link.rel = "noopener noreferrer";
        card.append(link);
      }
      newslettersGrid.append(card);
    });
  });
}

const storiesGrid = document.querySelector("[data-stories-list]");
if (storiesGrid) {
  siteData("stories").then((stories) => {
    if (!stories.length) return;
    storiesGrid.replaceChildren();
    stories.sort((a, b) => (b.date || "").localeCompare(a.date || "")).forEach((story) => {
      const card = make("article", "card story-card");
      const src = safeAsset(story.cover_image);
      if (src) {
        const img = make("img", "story-cover"); img.src = src; img.alt = story.title || "Community story"; img.loading = "lazy"; card.append(img);
      }
      if (story.date) card.append(make("span", "event-date", formatDate(story.date)));
      card.append(make("h3", "", story.title || "Community story"));
      if (story.summary) card.append(make("p", "", story.summary));
      if (story.body) {
        const details = make("details", "story-details");
        details.append(make("summary", "", "Read story"));
        details.append(make("p", "", story.body));
        card.append(details);
      }
      storiesGrid.append(card);
    });
  });
}

const sponsorsGrid = document.querySelector("[data-sponsors-list]");
if (sponsorsGrid) {
  siteData("sponsors").then((items) => {
    if (!items.length) return;
    sponsorsGrid.replaceChildren();
    items.forEach((item) => {
      const card = make("article", "card sponsor-card");
      const logo = safeAsset(item.logo);
      if (logo) { const img = make("img", "sponsor-logo"); img.src = logo; img.alt = `${item.name || "Sponsor"} logo`; img.loading = "lazy"; card.append(img); }
      card.append(make("h3", "", item.name || "Community sponsor"));
      if (item.description) card.append(make("p", "", item.description));
      const website = safeWebLink(item.website);
      if (website) { const link = make("a", "card-link", "Visit website"); link.href = website; link.target = "_blank"; link.rel = "noopener noreferrer"; card.append(link); }
      sponsorsGrid.append(card);
    });
  });
}

siteData("office-bearers").then((people) => {
  document.querySelectorAll(".leader-card").forEach((card) => {
    const name = card.querySelector("h3")?.textContent?.trim();
    const person = people.find((entry) => entry.name === name);
    const src = safeAsset(person?.photo);
    if (!src) return;
    const image = make("img", "leader-photo");
    image.src = src; image.alt = `${name}, ${person.role || "office bearer"}`; image.loading = "lazy";
    card.querySelector(".portrait-placeholder")?.replaceWith(image);
  });
});
