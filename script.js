/* =========================================================
   script.js
   Ditambahkan oleh Anggota 3 di branch "scripting"
   ========================================================= */

const members = [
  {
    name: "Hugo Antonio Hien Wijaya",
    role: "Frontend Developer",
    image: "https://media.licdn.com/dms/image/v2/D5603AQFhnztxG0kZng/profile-displayphoto-crop_800_800/B56Z.VfOpxKgAI-/0/1784919420970?e=1791417600&v=beta&t=7NACeEm5QMiz4G9LLmyOGwhKSsrFnKz3l8OnxSHe2BE",
    description: "Saya fokus membangun tampilan web yang rapi, responsif, dan mudah digunakan melalui struktur HTML dan desain antarmuka yang konsisten.",
    skills: ["HTML", "CSS", "JavaScript"]
  },
  {
    name: "Muhammad Rifa Firdaus",
    role: "UI/UX Designer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSed5HPFg1k4u2TMav5QwtUsGaxDog8BC9hmSmx5gcgEVMxhztZHVN5P7DD&s=10",
    description: "Saya merancang pengalaman pengguna yang sederhana, menarik, dan mudah dipahami dengan memperhatikan kebutuhan pengguna di setiap halaman.",
    skills: ["Figma", "Wireframing", "Prototyping"]
  },
  {
    name: "Faiz Dani Setiawan",
    role: "JavaScript Developer",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQG18NRiUDVaRA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1705797293807?e=1791417600&v=beta&t=LjwwHfaYdf5qWLxtj0Lj9dqcuRWh7CK92kTbASSPE7k",
    description: "Saya mengembangkan interaksi halaman yang dinamis dan memastikan setiap fitur berjalan lancar, cepat, serta nyaman digunakan.",
    skills: ["JavaScript", "DOM", "Git"]
  }
];

// Deklarasi elemen DOM dipindah ke atas semua
const memberLinks = document.querySelectorAll(".member-link");
const userName = document.getElementById("user-name");
const userRole = document.getElementById("user-role");
const avatar = document.querySelector(".avatar");
const aboutText = document.querySelector(".about p");
const skillList = document.getElementById("skill-list");
const themeToggleBtn = document.getElementById("theme-toggle");
const counterBtn = document.getElementById("counter-btn");
const counterSpan = document.getElementById("counter");

const likeCounts = [0, 0, 0];
let activeMember = 0;

function renderMember(memberIndex) {
  const member = members[memberIndex];
  activeMember = memberIndex;

  userName.textContent = member.name;
  userRole.textContent = member.role;
  avatar.src = member.image;
  avatar.alt = `Foto profil ${member.name}`;
  aboutText.textContent = member.description;
  skillList.innerHTML = member.skills.map((skill) => `<li>${skill}</li>`).join("");
  
  // Sekarang counterSpan sudah dikenal dan aman dipanggil
  counterSpan.textContent = likeCounts[activeMember];

  memberLinks.forEach((link, index) => {
    const isActive = index === memberIndex;
    link.classList.toggle("active", isActive);
    link.setAttribute("aria-pressed", String(isActive));
  });
}

memberLinks.forEach((link) => {
  link.addEventListener("click", () => {
    renderMember(Number(link.dataset.member));
  });
});

// ---------- Dark mode toggle ----------
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const isDark = document.body.classList.contains("dark-mode");
  themeToggleBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// ---------- Like counter ----------
counterBtn.addEventListener("click", () => {
  likeCounts[activeMember] += 1;
  counterSpan.textContent = likeCounts[activeMember];
});