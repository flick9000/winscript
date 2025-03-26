function responsiveNav() {
  const navbar = document.getElementById("navbar");

  if (!navbar.classList.contains("responsive")) {
    navbar.classList.add("responsive");
    document.body.style.overflow = "hidden";
  } else {
    navbar.classList.remove("responsive");
    document.body.style.overflow = "visible";
  }
}

const lenis = new Lenis({
  autoRaf: true,
});

const owner = "flick9000"; // Replace with your GitHub username
const repo = "winscript"; // Replace with your repository name
const cacheDuration = 1 * 60 * 60 * 1000; // 24 hours in milliseconds

async function fetchLatestCommitDate() {
  const storageKey = "latestCommitDate";

  // Check localStorage for a cached date
  const cachedData = localStorage.getItem(storageKey);
  if (cachedData) {
    const { date, timestamp } = JSON.parse(cachedData);
    const now = new Date().getTime();

    // Use cached data if it's still valid
    if (now - timestamp < cacheDuration) {
      document.getElementById("commit-date").textContent = date;
      return;
    }
  }

  // Fetch the latest commit date from the API
  try {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits`);
    if (!response.ok) {
      throw new Error(`Error fetching commits: ${response.statusText}`);
    }
    const commits = await response.json();
    const latestCommit = commits[0];
    const commitDate = new Date(latestCommit.commit.committer.date).toLocaleString();

    // Save the result in localStorage
    localStorage.setItem(
      storageKey,
      JSON.stringify({
        date: commitDate,
        timestamp: new Date().getTime(),
      })
    );

    document.getElementById("commit-date").textContent = commitDate;
  } catch (error) {
    console.error(error);
    document.querySelector("p.version").style.display = "none";
  }
}

fetchLatestCommitDate();

async function fetchLatestStarCount() {
  const storageKey = "latestStarCount";

  // Check localStorage for a cached star count
  const cachedData = localStorage.getItem(storageKey);
  if (cachedData) {
    const { starCount, timestamp } = JSON.parse(cachedData);
    const now = new Date().getTime();

    // Use cached data if it's still valid
    if (now - timestamp < cacheDuration) {
      document.getElementById("star-count").textContent = starCount;
      return;
    }
  }

  // Fetch the latest star count from the API
  try {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
    if (!response.ok) {
      throw new Error(`Error fetching repository data: ${response.statusText}`);
    }
    const repoData = await response.json();
    const starCount = repoData.stargazers_count;

    // Save the result in localStorage
    localStorage.setItem(
      storageKey,
      JSON.stringify({
        starCount: starCount,
        timestamp: new Date().getTime(),
      })
    );

    document.getElementById("star-count").textContent = "⭐ " + starCount + " stargazers on GitHub";
  } catch (error) {
    console.error(error);
  }
}

fetchLatestStarCount();

const privacyDialog = document.getElementById("privacyDialog");
const openPrivacyDialog = document.getElementById("openPrivacyDialog");
const closePrivacyDialog = document.getElementById("closePrivacyDialog");

openPrivacyDialog.addEventListener("click", () => {
  privacyDialog.showModal();
});

closePrivacyDialog.addEventListener("click", () => {
  privacyDialog.close();
});

const startDialog = document.getElementById("startDialog");
const openStartDialog = document.getElementById("openStartDialog");
const closeStartDialog = document.getElementById("closeStartDialog");

openStartDialog.addEventListener("click", () => {
  startDialog.showModal();
});

closeStartDialog.addEventListener("click", () => {
  startDialog.close();
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.3,
  }
);

document.querySelectorAll(".fade-in").forEach((element) => {
  observer.observe(element);
});
