var styleElement = document.createElement("link");
var scriptElement = document.createElement("script");

styleElement.href = "https://cdn.jsdelivr.net/gh/ueken65/like-list@1.0/css/style.css";
styleElement.rel = "stylesheet";
scriptElement.src = "https://cdn.jsdelivr.net/gh/ueken65/like-list@1.0/js/createLikeUserList.js";

document.body.appendChild(styleElement);
document.body.appendChild(scriptElement);