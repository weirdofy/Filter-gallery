let tabs = document.querySelectorAll(".tab"),
  items = document.querySelectorAll(".item");

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function () {
    for (let j = 0; j < tabs.length; j++) {
      tabs[j].classList.remove("active");
    }
    this.classList.add("active");

    let dataFilter = this.getAttribute("data-filter");

    for (let k = 0; k < items.length; k++) {
      items[k].classList.remove("active");
      items[k].classList.add("hide");

      if (
        items[k].getAttribute("data-item") == dataFilter ||
        dataFilter == "all"
      ) {
        items[k].classList.remove("hide");
        items[k].classList.add("active");
        console.log(dataFilter);
      }
    }
  });
}
