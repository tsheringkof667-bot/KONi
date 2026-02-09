function loadLoans(){
  let loans=JSON.parse(localStorage.getItem("loans")||"[]");
  let out="";
  loans.forEach((l,i)=>{
    if(l.status==="pending"){
      out+=`
      <div>
        ${l.user} – ${l.amount}
        <button onclick="approve(${i})">Approve</button>
      </div>`;
    }
  });
  loansDiv.innerHTML=out;
}
const loansDiv=document.getElementById("loans");
loadLoans();

function approve(i){
  let loans=JSON.parse(localStorage.getItem("loans"));
  let users=JSON.parse(localStorage.getItem("users"));
  let loan=loans[i];
  let u=users.find(x=>x.email===loan.user);

  u.balance+=loan.amount;
  loan.status="approved";

  localStorage.setItem("users",JSON.stringify(users));
  localStorage.setItem("loans",JSON.stringify(loans));
  alert("Approved");
  loadLoans();
}