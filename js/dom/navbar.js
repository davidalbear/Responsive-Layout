export default function (btnNav, listLinks) {
  const $btn = document.getElementById(btnNav);
  const $links = document.querySelector(listLinks);

  $btn.addEventListener("click", (e) => {
    $links.classList.toggle("nav--visible");
  });
}
