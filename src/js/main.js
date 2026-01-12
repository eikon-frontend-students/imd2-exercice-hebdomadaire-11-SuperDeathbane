const likeBtn = document.querySelector(".like-btn");
const likeCount = document.querySelector(".like-count");
const icon = likeBtn.querySelector("i");

let count = parseInt(likeCount.textContent);

likeBtn.addEventListener("click", () => {
  count++;
  likeCount.textContent = count;

  icon.classList.remove("fa-regular");
  icon.classList.add("fa-solid");

  likeBtn.classList.add("active");

  setTimeout(() => {
    likeBtn.classList.remove("active");
    icon.classList.remove("fa-solid");
    icon.classList.add("fa-regular");
  }, 2000);
});
