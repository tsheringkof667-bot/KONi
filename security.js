let attempts=0;
function rateLimit(){
  attempts++;
  if(attempts>5){
    alert("Rate limit reached (demo)");
    return false;
  }
  return true;
}