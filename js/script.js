const btn = document.getElementById("menu-btn")
const nav = document.getElementById("menu")

btn.addEventListener("click", () => {
  btn.classList.toggle("open")
  nav.classList.toggle("hidden")
})

//Slider testimonials
const slider = document.querySelector(".slider")

document.querySelectorAll(".controls li").forEach((li, index) => {
  li.addEventListener("click", () => {
    // slider.children[index].classList.remove("hidden")
    // slider.children[index].classList.add("flex")

    slider.style.tranform = `translate(${index} * -25%)`
  })
})
