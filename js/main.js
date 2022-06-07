function changeBg()	{
  
  var backgrounds = [
    "bg_1.jpg", 
    "bg_2.jpg", 
    "bg_3.jpg",
    "bg_4.jpg",
    "bg_5.jpg",
  ];

  var imgShown = document.getElementById('image-bg');
  var newNumber = Math.floor(Math.random()*backgrounds.length);
  imgShown.style.backgroundImage = `url(images/${backgrounds[newNumber]})`;
}

window.addEventListener("load", () => {
  changeBg();
});