const userEmail=sessionStorage.getItem("currentUser");

function getUser(){
  return users().find(u=>u.email===userEmail);
}

function updateBalance(){
  document.getElementById("balance").innerText =
    "KONi " + getUser().balance;
}
updateBalance();

function applyLoan(){
  const amt=+amount.value;
  const m=+months.value;
  if(!amt||!m) return alert("Invalid");

  let loans=JSON.parse(localStorage.getItem("loans")||"[]");
  loans.push({
    id:"LN"+Date.now(),
    user:userEmail,
    amount:amt,
    months:m,
    status:"pending"
  });
  localStorage.setItem("loans",JSON.stringify(loans));
  alert("Loan submitted");
}