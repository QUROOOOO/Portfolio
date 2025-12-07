window.addEventListener("load", function() {
    alert("Welcome to my portfolio!");
});

var mainTitle = document.querySelector("header h1");
mainTitle.addEventListener("mouseover", function() {
  mainTitle.style.color = "#0077cc";
});
mainTitle.addEventListener("mouseout", function() {
  mainTitle.style.color = "black";
});

var topBtn = document.createElement("button");
topBtn.textContent = "Top";
topBtn.style.position = "fixed";
topBtn.style.right = "20px";
topBtn.style.bottom = "20px";
topBtn.style.padding = "8px 12px";
topBtn.style.fontSize = "12px";
document.body.appendChild(topBtn);

topBtn.addEventListener("click", function() {
  window.scrollTo(0, 0);
});
