import { ConfirmDialog } from "./ConfirmDialog.js";

const clickMeBtn = document.querySelector(".action-btn");
const notificationsWrapper = document.querySelector(".notifications")

clickMeBtn.addEventListener("click", async () => {
  const dialog = new ConfirmDialog({
    trueButtonText: "Yes!",
    falseButtonText: "Noo",
    questionText: "Are you sure you want to proceed?",
    notificationsWrapper
  });

  const shouldProceed = await dialog.confirm();
  const notification = shouldProceed ? dialog._createNotification(dialog.trueButtonText) : dialog._createNotification(dialog.falseButtonText);
  notificationsWrapper.textContent = '';
  notificationsWrapper.appendChild(notification)
});
