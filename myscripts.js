document.querySelector(".ChatBtn").addEventListener("click", openForm);
document.querySelector(".close").addEventListener("click", closeForm);
function openForm() {
  document.querySelector(".openChat").style.display = "block";
  document.querySelector("#textChat").focus();
}
function closeForm() {
  document.querySelector(".openChat").style.display = "none";
}