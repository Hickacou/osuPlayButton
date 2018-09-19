var offButton = document.querySelector(".content-infoline i.icon-off");

var playButton = document.createElement("a");
playButton.href = "osu://";
playButton.innerHTML = "Play !";
playButton.style.margin = "0px 2px";

var playIcon = document.createElement("i");
playIcon.className = "icon-gamepad";

offButton.insertAdjacentElement("beforebegin",playIcon);
offButton.insertAdjacentElement("beforebegin",playButton);