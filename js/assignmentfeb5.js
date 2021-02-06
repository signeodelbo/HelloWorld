function showmin(){
    var currentMinute = new Date().getMinutes();
    document.getElementById('currentmin').innerText = currentMinute;
}
function disappear(){
    document.getElementById("header").style.display = "none";
}