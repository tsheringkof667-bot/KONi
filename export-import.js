function exportAll(){
  const data={
    users:localStorage.getItem("users"),
    loans:localStorage.getItem("loans"),
    transactions:localStorage.getItem("transactions")
  };
  const a=document.createElement("a");
  a.href=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)]));
  a.download="koni-data.json";
  a.click();
}