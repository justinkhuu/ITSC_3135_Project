

document.addEventListener('DOMContentLoaded', function() {
    const reviewForm = document.getElementById('form');
    const reviewsContainer = document.getElementById('review');
  
    reviewForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      
      const nameInput = document.getElementById('name');
      const dateInput = document.getElementById('date');
      const messageInput = document.getElementById('message');
  
      const name = nameInput.value;
      const date = dateInput.value;
      const message = messageInput.value;
  
     
      const review = document.createElement('div');
      review.classList.add('review');
  
      
      review.innerHTML = 
      ` <p class="author">${name}</p>
        <p class="date">${date}</p>
        <p>${message}</p> `;
  
      // Append the review to the reviews container
      reviewsContainer.appendChild(review);
  
      // Clear the form inputs
      nameInput.value = '';
      dateInput.value = '';
      messageInput.value = '';
    });

    
  });