const feedbackForm = document.querySelector('.feedback-form');
const textarea = feedbackForm.querySelector('textarea');


document.addEventListener('DOMContentLoaded', function () {
  const showOrHideForm = document.getElementById("give-feedback");
  const closeFeedbackForm = document.getElementById("close-feedback");

    showOrHideForm.addEventListener('click', function (event) {
    feedbackForm.style.display = (feedbackForm.style.display === "none") ? "block" : "none";
        event.stopPropagation();
    });

    document.addEventListener('click', function (event) {
        if (!feedbackForm.contains(event.target) && event.target !== closeFeedbackForm) {
            feedbackForm.style.display = 'none';
        }
    });

    closeFeedbackForm.addEventListener('click', function (event) {
        feedbackForm.style.display = 'none';
        event.stopPropagation();
    });

    // Don't trigger the hide action for clicks on the form
    feedbackForm.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent event bubbling to the document
    });
});

function submitFeedback() {
  const feedbackText = textarea.value;

  // Here, I logged the feedback to the console after submission.
  // This needs to be logged to the developers
  console.log('Feedback:', feedbackText);

  // Reset the textarea and hide the form
  textarea.value = '';
  feedbackForm.style.display = 'none';
  alert('Thank you for the feedback');
}