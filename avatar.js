function setAvatar(a){
  let u=users();
  let email=sessionStorage.getItem("currentUser");
  u.find(x=>x.email===email).avatar=a;
  saveUsers(u);
  alert("Avatar updated");
}