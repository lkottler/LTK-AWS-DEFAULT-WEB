/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
var sidenav_open =false;

function toggleNav() {
  console.log(sidenav_open)
  if (sidenav_open){
    closeNav();
  } else {
    openNav();
  }
}

function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
  //document.getElementById("main").style.marginLeft = "250px";
  sidenav_open = true;
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  //document.getElementById("main").style.marginLeft = "0";
  sidenav_open = false;
}

var volumeControl = document.getElementById('globalVolume');
var globalVolume = 0.05;

volumeControl.addEventListener('input', function() {
  globalVolume = this.value / 100;
  document.getElementById('volumetext').innerHTML = "Global Volume " + this.value + "%";
  if (temp = document.getElementsByTagName('video')) // if there are rendered videos
    Array.from(temp).forEach((elem)=>{elem.volume = globalVolume}); // set rendered videos volume
});