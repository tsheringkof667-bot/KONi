const email=sessionStorage.getItem("currentUser");
const tx=JSON.parse(localStorage.getItem("transactions")||"[]");

const list=document.getElementById("list");
list.innerHTML=tx
.filter(t=>t.user===email)
.map(t=>`<div>${t.type} – ${t.amount}</div>`)
.join("");

function exportCSV(){
  let csv="Type,Amount\n";
  tx.forEach(t=>csv+=`${t.type},${t.amount}\n`);
  const a=document.createElement("a");
  a.href=URL.createObjectURL(new Blob([csv]));
  a.download="transactions.csv";
  a.click();
}