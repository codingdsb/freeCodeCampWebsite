const burger = document.getElementById("burger");
const drawer = document.getElementById("drawer");
const close = document.getElementById("close");
const overlay = document.getElementById("overlay");
const closeModal = document.getElementById("closeModal");
const modalContainer = document.getElementById("modalContainer");
burger.onclick = openDrawer;

function openDrawer() {
  drawer.classList.remove("w-0");
  drawer.classList.add("w-full");
  drawer.classList.add("lg:w-6/12");
  drawer.classList.add("xl:w-4/12");
  drawer.classList.add("2xl:w-2/12");
}

close.onclick = closeDrawer;

function closeDrawer() {
  drawer.classList.add("w-0");
  drawer.classList.remove("w-full");
  drawer.classList.remove("lg:w-6/12");
  drawer.classList.remove("xl:w-4/12");
  drawer.classList.remove("2xl:w-2/12");
}

function openVideoModal(videoId) {
  overlay.classList.remove("hidden");
  overlay.classList.add("flex");

  modalContainer.innerHTML = `
    <iframe width="700" height="400" src="https://www.youtube-nocookie.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer;  encrypted-media; gyroscope"></iframe>
    `;
}

closeModal.onclick = closeVideoModal;

function closeVideoModal() {
  overlay.classList.add("hidden");
  overlay.classList.remove("flex");
}
