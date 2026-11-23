// Remplace les liens ci-dessous par tes liens Google Classroom.
const classroomClasses = [
  { name: "Digital Skills", url: "https://classroom.google.com/" },
  { name: "Fundamental IT", url: "https://classroom.google.com/" },
  { name: "Système électrique", url: "https://classroom.google.com/" },
  { name: "Algorithmique & C", url: "https://classroom.google.com/" },
  { name: "Systèmes d'exploitation", url: "https://classroom.google.com/" },
  { name: "HTML & CSS", url: "https://classroom.google.com/" }
];
const classLinks = document.getElementById("classLinks");
classLinks.innerHTML = classroomClasses.map(c => `<a class="class-link" href="${c.url}" target="_blank" rel="noopener">${c.name}<span>↗</span></a>`).join("");

const details = {
 digital:["Digital Skills","Outils numériques, bureautique, recherche d'information, cybersécurité et travail collaboratif."],
 it:["Fundamental IT","Découvrir les composants d'un ordinateur, le processeur, la mémoire, le stockage et les réseaux."],
 c:["Algorithmique & C","Construire un raisonnement logique, écrire des algorithmes et programmer en langage C."],
 electric:["Système électrique","Comprendre les grandeurs électriques, les composants, les circuits et les mesures en TP."],
 system:["Systèmes d'exploitation","Manipuler les fichiers, les dossiers, les commandes et les environnements Windows/Linux."],
 web:["HTML & CSS","Créer des pages web structurées, styliser les contenus et réaliser des mini-projets."]
};
document.querySelectorAll(".node").forEach(node => node.addEventListener("click",()=>{
 document.querySelectorAll(".node").forEach(n=>n.classList.remove("active"));
 node.classList.add("active");
 const [title,desc]=details[node.dataset.subject];
 document.getElementById("subjectDetail").innerHTML=`<div class="detail-icon">✦</div><div><b>${title}</b><p>${desc}</p></div>`;
}));
document.getElementById("searchInput").addEventListener("input",e=>{
 const q=e.target.value.toLowerCase().trim();
 document.querySelectorAll(".subject-card").forEach(card=>{
  card.style.display=card.dataset.name.includes(q) || card.innerText.toLowerCase().includes(q) ? "" : "none";
 });
});
document.getElementById("menuBtn").addEventListener("click",()=>document.querySelector(".topbar nav").classList.toggle("open"));
