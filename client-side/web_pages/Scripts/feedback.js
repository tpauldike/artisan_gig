function showFeedbackForm() {
    const feedbackForm = document.querySelector('.feedback-form');
    feedbackForm.style.display = 'block';
  }
  
  function submitFeedback() {
    const feedbackForm = document.querySelector('.feedback-form');
    const textarea = feedbackForm.querySelector('textarea');
    const feedbackText = textarea.value;
    
    // Here, I logged tge feedback to the console after submission.
    // This needs to be logged to the developers
    console.log('Feedback:', feedbackText);
    
    // Reset the textarea and hide the form
    textarea.value = '';
    feedbackForm.style.display = 'none';
  }
  