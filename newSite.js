//Play Button
var menuAvatar = document.querySelector(".nav2-header .nav2__col--avatar");
var theContainer = document.createElement("div");
theContainer.className = "nav2__col";
theContainer.id = "theContainer";

var thePlayButton = document.createElement("a");
thePlayButton.className = "nav2__button nav2__button--stadium";
thePlayButton.id = "thePlayButton";
thePlayButton.setAttribute("href","osu://");
thePlayButton.innerHTML = "<i class='fas fa-gamepad'></i> Play !";

theContainer.appendChild(thePlayButton);
menuAvatar.insertAdjacentElement("afterend",theContainer);

//Game Launched Overlay 

var overlayContainer = document.createElement("div");
var osuLogo = document.createElement("img");
var overlayMessage = document.createElement("div");

overlayContainer.id = "overlayContainer";

osuLogo.src= "https://osu.ppy.sh/images/layout/osu-logo-white.svg";
osuLogo.id = "osuLogo";

overlayMessage.innerText = "Game started.";
overlayMessage.id = "overlayMessage";

overlayContainer.appendChild(osuLogo)
overlayContainer.appendChild(overlayMessage);
document.body.appendChild(overlayContainer);

thePlayButton.addEventListener("click",() => {
    overlayContainer.setAttribute("class","active");
    setTimeout(() => overlayContainer.removeAttribute("class"),2500);
});

var oldLocation = location.href;
setInterval(function() {
    if (oldLocation != location.href) {
        oldLocation = location.href;
        location.reload();
    }
},100);