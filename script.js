let clockText=document.querySelector("#clock")

function updateTime(){
  let now=new Date();
  let hours=now.getHours();
  let minutes=now.getMinutes();
  let seconds=now.getSeconds();
  
  clockText.innerText=hours+":"+minutes+":"+seconds;
}

setInterval(updateTime, 1000)