const email=sessionStorage.getItem("currentUser");
const notes=JSON.parse(localStorage.getItem("notifications")||"{}");
const ul=document.getElementById("notes");

( notes[email] || [] ).forEach(n=>{
  ul.innerHTML+=`<li>${n}</li>`;
});