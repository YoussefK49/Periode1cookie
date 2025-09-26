let cookies = 0;

const cookieButton = document.getElementById("cookie");
const counterText = document.getElementById("counter");

function addCookie() {
    cookies++;
    counterText.textContent = "Cookies: " + cookies;
}

cookieButton.addEventListener("click", addCookie);
