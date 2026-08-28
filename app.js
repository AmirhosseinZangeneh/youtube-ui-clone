const videos = [
  {
    id: "pycharm",
    title: "PyCharm. Feel the difference in data science and AI/ML",
    channel: "JetBrains",
    views: "Sponsored",
    age: "",
    duration: "14:20",
    thumbnail: "thumbnails/video1.avif",
    channelImage: "channel-pictures/channel1.png",
    sponsored: true
  },
  {
    id: "bootdev-python",
    title: "Learn Python with Boot.dev - The Smartest Way to Learn Anything",
    channel: "Boot.dev",
    views: "16M views",
    age: "1 year ago",
    duration: "12:40",
    thumbnail: "thumbnails/thumbnail-3.avif",
    channelImage: "channel-pictures/channel3.png"
  },
  {
    id: "collatz",
    title: "The Simplest Math Problem No One Can Solve - Collatz Conjecture",
    channel: "Veritasium",
    views: "18M views",
    age: "4 months ago",
    duration: "24:15",
    thumbnail: "thumbnails/thumbnail-4.webp",
    channelImage: "channel-pictures/channel-4.jpeg"
  },
  {
    id: "chess-program",
    title: "My Attempt at Creating a Little Chess Playing Program!",
    channel: "Sebastian Lague",
    views: "4.1M views",
    age: "5 years ago",
    duration: "18:04",
    thumbnail: "thumbnails/video2.avif",
    channelImage: "channel-pictures/channel2.jpg"
  },
  {
    id: "kadane",
    title: "Kadane's Algorithm to Maximum Sum Subarray Problem",
    channel: "CS Dojo",
    views: "519K views",
    age: "5 years ago",
    duration: "11:32",
    thumbnail: "thumbnails/thumbnail-5.webp",
    channelImage: "channel-pictures/channel-5.jpeg"
  },
  {
    id: "computer-science",
    title: "3 Years of Computer Science in 3 Minutes",
    channel: "poruf korupt",
    views: "665K views",
    age: "4 months ago",
    duration: "03:00",
    thumbnail: "thumbnails/video4.avif",
    channelImage: "channel-pictures/channels4.jpg"
  },
  {
    id: "backend-overview",
    title: "Backend Web Development - A Complete Overview",
    channel: "SuperSimpleDev",
    views: "2.5M views",
    age: "4 years ago",
    duration: "28:12",
    thumbnail: "thumbnails/video5.avif",
    channelImage: "channel-pictures/channel5.jpg"
  },
  {
    id: "oop-cpp",
    title: "The Only Video You Need to Learn OOP in C++",
    channel: "Donnys",
    views: "1.7K views",
    age: "2 weeks ago",
    duration: "16:44",
    thumbnail: "thumbnails/video6.avif",
    channelImage: "channel-pictures/channel15.jpg"
  },
  {
    id: "cpp-beginners",
    title: "C++ Tutorial for Beginners - Learn C++ in 1 Hour",
    channel: "Programming with Mosh",
    views: "6.2M views",
    age: "3 years ago",
    duration: "1:02:18",
    thumbnail: "thumbnails/video7.avif",
    channelImage: "channel-pictures/channel6.jpg"
  },
  {
    id: "pointers",
    title: "You Will Never Ask About Pointers Again After Watching This Video",
    channel: "Low Level",
    views: "3.1M views",
    age: "3 years ago",
    duration: "21:08",
    thumbnail: "thumbnails/video8.avif",
    channelImage: "channel-pictures/channel7.jpg"
  },
  {
    id: "docker",
    title: "Docker in 4 Minutes (No BS, No Fluff)",
    channel: "CyberFlow",
    views: "174K views",
    age: "3 months ago",
    duration: "04:01",
    thumbnail: "thumbnails/video9.avif",
    channelImage: "channel-pictures/channel8.jpg"
  },
  {
    id: "resident-evil",
    title: "Resident Evil Requiem - 4th Trailer",
    channel: "Resident Evil",
    views: "1.6M views",
    age: "10 days ago",
    duration: "02:38",
    thumbnail: "thumbnails/video10.avif",
    channelImage: "channel-pictures/channels9.jpg"
  },
  {
    id: "simulating-atoms",
    title: "Simulating Atoms by Using C++",
    channel: "Kavan",
    views: "637K views",
    age: "8 days ago",
    duration: "09:45",
    thumbnail: "thumbnails/video11.avif",
    channelImage: "channel-pictures/channel10.jpg"
  },
  {
    id: "technical-interviews",
    title: "I Aced My Technical Interviews Knowing These Basics",
    channel: "Kiki's Bytes",
    views: "396K views",
    age: "1 year ago",
    duration: "13:17",
    thumbnail: "thumbnails/video12.avif",
    channelImage: "channel-pictures/channel11.jpg"
  },
  {
    id: "engineering-concepts",
    title: "The Most Confused Concepts in Engineering",
    channel: "Monis Yousef",
    views: "281K views",
    age: "6 months ago",
    duration: "19:52",
    thumbnail: "thumbnails/video13.avif",
    channelImage: "channel-pictures/channel12.jpg"
  },
  {
    id: "git",
    title: "Git Will Finally Make Sense After This",
    channel: "LearnThatStack",
    views: "787K views",
    age: "2 months ago",
    duration: "15:09",
    thumbnail: "thumbnails/video14.avif",
    channelImage: "channel-pictures/channel13.jpg"
  }
];

const videoGrid = document.getElementById("videoGrid");
const emptyState = document.getElementById("emptyState");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const menuToggle = document.getElementById("menuToggle");
const voiceButton = document.getElementById("voiceButton");
const toast = document.getElementById("toast");
const videoDialog = document.getElementById("videoDialog");
const dialogClose = document.getElementById("dialogClose");
const dialogTitle = document.getElementById("dialogTitle");
const dialogChannel = document.getElementById("dialogChannel");
const dialogDescription = document.getElementById("dialogDescription");
const initialLoader = document.getElementById("initialLoader");

let toastTimer;

function createElement(tagName, className, textContent) {
  const element = document.createElement(tagName);

  if (className) {
    element.className = className;
  }

  if (textContent !== undefined) {
    element.textContent = textContent;
  }

  return element;
}

function renderVideos(items) {
  const cards = items.map((video, index) => {
    const article = createElement("article", "video-card");
    const cardButton = createElement("button", "video-card-button");
    cardButton.type = "button";
    cardButton.dataset.videoId = video.id;
    cardButton.setAttribute("aria-label", `View details for ${video.title}`);

    const thumbnailWrapper = createElement("div", "thumbnail-wrapper");
    const thumbnail = createElement("img", "thumbnail");
    thumbnail.src = video.thumbnail;
    thumbnail.alt = `${video.title} thumbnail`;
    thumbnail.width = 720;
    thumbnail.height = 405;
    thumbnail.loading = index < 3 ? "eager" : "lazy";
    thumbnail.decoding = "async";
    if (index === 0) {
      thumbnail.fetchPriority = "high";
    }
    thumbnailWrapper.append(thumbnail);
    thumbnailWrapper.append(createElement("span", "video-time", video.duration));

    const details = createElement("div", "video-details");
    const channelImage = createElement("img", "profile-picture");
    channelImage.src = video.channelImage;
    channelImage.alt = `${video.channel} channel avatar`;
    channelImage.width = 40;
    channelImage.height = 40;
    channelImage.loading = index < 3 ? "eager" : "lazy";
    channelImage.decoding = "async";

    const info = createElement("div", "video-info");
    info.append(createElement("h2", "video-title", video.title));

    if (video.sponsored) {
      const sponsoredMeta = createElement("p", "video-meta sponsored-meta");
      sponsoredMeta.append(createElement("span", "sponsored-label", "Sponsored"));
      sponsoredMeta.append(document.createTextNode(` · ${video.channel}`));
      info.append(sponsoredMeta);
      info.append(createElement("span", "card-cta", "Learn more"));
    } else {
      info.append(createElement("p", "video-meta", video.channel));
      info.append(createElement("p", "video-meta", `${video.views} · ${video.age}`));
    }

    details.append(channelImage, info);
    cardButton.append(thumbnailWrapper, details);
    article.append(cardButton);
    return article;
  });

  videoGrid.replaceChildren(...cards);
  videoGrid.classList.remove("is-loading");
  videoGrid.setAttribute("aria-busy", "false");
  emptyState.hidden = items.length !== 0;
}

function hideInitialLoader() {
  if (!initialLoader) {
    return;
  }

  // Let the browser paint the stable first frame before revealing the feed.
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      initialLoader.classList.add("is-hidden");
      initialLoader.setAttribute("aria-hidden", "true");
    });
  });
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function filterVideos() {
  const query = searchInput.value.trim().toLowerCase();

  if (!query) {
    renderVideos(videos);
    return;
  }

  const filteredVideos = videos.filter((video) => {
    const searchableText = `${video.title} ${video.channel}`.toLowerCase();
    return searchableText.includes(query);
  });

  renderVideos(filteredVideos);
}

function debounce(callback, delay = 120) {
  let timerId;

  return (...args) => {
    window.clearTimeout(timerId);
    timerId = window.setTimeout(() => callback(...args), delay);
  };
}

const debouncedFilterVideos = debounce(filterVideos);

function closeVideoDetails() {
  if (typeof videoDialog.close === "function") {
    videoDialog.close();
  } else {
    videoDialog.removeAttribute("open");
  }
}

function openVideoDetails(videoId) {
  const video = videos.find((item) => item.id === videoId);

  if (!video) {
    return;
  }

  dialogTitle.textContent = video.title;
  dialogChannel.textContent = `${video.channel} · ${video.views}${video.age ? ` · ${video.age}` : ""}`;
  dialogDescription.textContent = "This interactive preview is part of an educational YouTube UI recreation.";

  if (typeof videoDialog.showModal === "function") {
    videoDialog.showModal();
  } else {
    videoDialog.setAttribute("open", "");
  }
}

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  filterVideos();
  showToast(searchInput.value.trim() ? `Showing results for “${searchInput.value.trim()}”.` : "Showing all videos.");
});

searchInput.addEventListener("input", debouncedFilterVideos);

videoGrid.addEventListener("click", (event) => {
  const cardButton = event.target.closest("[data-video-id]");

  if (cardButton) {
    openVideoDetails(cardButton.dataset.videoId);
  }
});

menuToggle.addEventListener("click", () => {
  const isCollapsed = document.body.classList.toggle("sidebar-collapsed");
  menuToggle.setAttribute("aria-expanded", String(!isCollapsed));
  showToast(isCollapsed ? "Navigation collapsed." : "Navigation expanded.");
});

voiceButton.addEventListener("click", () => {
  showToast("Voice search is not enabled in this educational demo.");
});

document.querySelectorAll(".header-action").forEach((actionButton) => {
  actionButton.addEventListener("click", () => {
    showToast(`${actionButton.dataset.action} is not enabled in this educational demo.`);
  });
});

document.querySelectorAll(".sidebar-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelectorAll(".sidebar-link").forEach((item) => {
      item.classList.remove("is-active");
      item.removeAttribute("aria-current");
    });
    link.classList.add("is-active");
    link.setAttribute("aria-current", "page");
    showToast(`${link.dataset.section} selected.`);
  });
});

dialogClose.addEventListener("click", closeVideoDetails);

videoDialog.addEventListener("click", (event) => {
  if (event.target === videoDialog) {
    closeVideoDetails();
  }
});

renderVideos(videos);
hideInitialLoader();
