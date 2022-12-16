function search(arg) {
  elements = document.getElementsByClassName("recent")
  if(arg){
    document.getElementById("input-sec").style.height = "300px";
    document.getElementById("input-sec").style.borderRadius = "15px";
    document.getElementById("bar").style.borderBottomStyle  = "solid";
    for(i = 0; elements.length > i; i++){
      elements[i].style.display = "block";
    }
    document.getElementById("buttons2").style.display = "block";
    document.getElementById("buttons").style.display = "none";
  }else{
    document.getElementById("input-sec").style.height = "50px";
    document.getElementById("input-sec").style.borderRadius = "25px";
    document.getElementById("bar").style.borderBottomStyle  = "none";
    for(i = 0; elements.length > i; i++){
      elements[i].style.display = "none";
    }
    document.getElementById("buttons2").style.display = "none";
    document.getElementById("buttons").style.display = "block";
  }
}

document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      up();
    }
});

function up() {
  if(document.getElementById("input-bar").value == ""){
    return
  }else{
    window.location.href = "https://www.google.be/search?q=" + document.getElementById("input-bar").value;
  }
}

open = 0;

function menu() {
    if(open == 0){
        document.getElementById("menur").style.display = "flex";
        open++;
    }else{
        open = 0;
        document.getElementById("menur").style.display = "none";
    }
}
