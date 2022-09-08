// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("card");
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
var modal2 = document.getElementById("myModal2");
var img2 = document.getElementById("ember");
var modalImg2 = document.getElementById("img02");
img2.onclick = function() {
	modal2.style.display="block";
	modalImg2.src = this.src;
}
var span2 = document.getElementsByClassName("close")[1];
span2.onclick = function() {
	modal2.style.display = "none";
}
var modal3 = document.getElementById("myModal3");
var img3 = document.getElementById("tissue");
var modalImg3 = document.getElementById("img03");
img3.onclick = function() {
	modal3.style.display="block";
	modalImg3.src = this.src;
}
var span3 = document.getElementsByClassName("close")[2];
span3.onclick = function() {
	modal3.style.display = "none";
}
var modal4 = document.getElementById("myModal4");
var img4 = document.getElementById("banner");
var modalImg4 = document.getElementById("img04");
img4.onclick = function() {
	modal4.style.display="block";
	modalImg4.src = this.src;
}
var span4 = document.getElementsByClassName("close")[3];
span4.onclick = function() {
	modal4.style.display = "none";
}

var modal5 = document.getElementById("myModal5");
var img5 = document.getElementById("coat-front");
var modalImg5 = document.getElementById("img05");
img5.onclick = function() {
	modal5.style.display="block";
	modalImg5.src = this.src;
}
var span5 = document.getElementsByClassName("close")[4];
span5.onclick = function() {
	modal5.style.display = "none";
}

var modal6 = document.getElementById("myModal6");
var img6 = document.getElementById("coat-back");
var modalImg6 = document.getElementById("img06");
img6.onclick = function() {
	modal6.style.display="block";
	modalImg6.src = this.src;
}
var span6 = document.getElementsByClassName("close")[5];
span6.onclick = function() {
	modal6.style.display = "none";
}

var modal7 = document.getElementById("myModal7");
var img7 = document.getElementById("pants-front");
var modalImg7 = document.getElementById("img07");
img7.onclick = function() {
	modal7.style.display="block";
	modalImg7.src = this.src;
}
var span7 = document.getElementsByClassName("close")[6];
span7.onclick = function() {
	modal7.style.display = "none";
}

var modal8 = document.getElementById("myModal8");
var img8 = document.getElementById("pants-back");
var modalImg8 = document.getElementById("img08");
img8.onclick = function() {
	modal8.style.display="block";
	modalImg8.src = this.src;
}
var span8 = document.getElementsByClassName("close")[7];
span8.onclick = function() {
	modal8.style.display = "none";
}