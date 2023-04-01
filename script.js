let colorIcons = document.querySelector(".color-icon"),
  icons = document.querySelector(".color-icon .icons");

icons.addEventListener("click", () => {
  colorIcons.classList.toggle("open");
});

let buttons = document.querySelectorAll(".btn");

for (var button of buttons) {
  button.addEventListener("click", (e) => {
    let target = e.target;
    let open = document.querySelector(".open");

    if (open) open.classList.remove("open");

    document.querySelector(".active").classList.remove("active");
    target.classList.add("active");

    let root = document.querySelector(":root"),
      dataColor = target.getAttribute("data-color"),
      color = dataColor.split(" ");

    root.style.setProperty("--white", color[0]);
    root.style.setProperty("--black", color[1]);
    root.style.setProperty("--primary", color[2]);
    root.style.setProperty("--hover", color[3]);
    root.style.setProperty("--background", color[4]);
  });
}
