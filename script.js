const encryptedLink =
  "https://5f8067ncxqkc5w6n0e80g3vgbn.hop.clickbank.net/?&traffic_source=google";

document.querySelectorAll("[data-product]").forEach((link) => {
  link.href = encryptedLink;
});

document.querySelectorAll("[data-product]").forEach((link) => {
  link.addEventListener("click", () => {
    window.open(encryptedLink, "_self");
  });
});

function redirectToHoplink() {
  window.open(encryptedLink, "_self");
}

document
  .getElementById("button_see_more")
  .addEventListener("click", redirectToHoplink);

let hasScrolled = false;
document.addEventListener("scroll", () => {
  if (!hasScrolled) {
    if (window.scrollY > 100) {
      redirectToHoplink();
      hasScrolled = true;
    }
  }
});
