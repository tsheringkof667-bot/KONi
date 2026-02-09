function hash(p){ return btoa(p + "_koni"); }

function users(){
  return JSON.parse(localStorage.getItem("users") || "[]");
}
function saveUsers(u){
  localStorage.setItem("users", JSON.stringify(u));
}

function register(){
  const email=regEmail.value.trim();
  const pass=regPass.value.trim();
  if(!email||!pass) return alert("Fill all fields");

  let u=users();
  if(u.find(x=>x.email===email)) return alert("User exists");

  u.push({email,password:hash(pass),balance:0,role:"user"});
  saveUsers(u);
  alert("Registered. Login now.");
}

function login(){
  const email=logEmail.value.trim();
  const pass=logPass.value.trim();
  const u=users().find(
    x=>x.email===email && x.password===hash(pass)
  );
  if(!u) return alert("Invalid login");
  sessionStorage.setItem("currentUser",email);
  location.href="dashboard.html";
}

function changePassword(){
  const email=sessionStorage.getItem("currentUser");
  const np=newPass.value.trim();
  let u=users();
  let user=u.find(x=>x.email===email);
  user.password=hash(np);
  saveUsers(u);
  alert("Password changed");
}