// script.js

    const jobListings = [
        // Add 10 sample job listing objects here with properties: title, type, location, postedDate
        {title: "Software Engineer", type: "Full Time", location: "New York, NY", postedDate: "Jan 15, 2024"},
        {title: "Graphic Designer", type: "Part Time", location: "San Francisco, CA", postedDate: "Jan 20, 2024"},
        {title: "Web Developer", type: "Contract", location: "Seattle, WA", postedDate: "Jan 25, 2024"},
        {title: "QA Tester", type: "Part-time", location: "Austin, TX", postedDate: "Jan 25, 2024"},
        {title: "UX Designer", type: "Full Time", location: "Boston, MA", postedDate: "Jan 25, 2024"},
        {title: "Database Administrator", type: "Full Time", location: "Los Angeles, CA", postedDate: "Jan 25, 2024"},
        {title: "Front-end Developer", type: "Part-time", location: "Denver, CO", postedDate: "Jan 25, 2024"},
        {title: "Back-end Developer", type: "Full Time", location: "Miami, FL", postedDate: "Jan 25, 2024"},
        {title: "DevOps Engineer", type: "Part-time", location: "Atlanta, GA", postedDate: "Jan 25, 2024"},
        {title: "Data Analyst", type: "Contract", location: "Seattle, WA", postedDate: "Jan 25, 2024"},
        
    ];
   //To  Wait for the DOM to be fully loaded
   //This line of code adds an event listener to the document object.
   //The event being listened for is the DOMContentLoaded event.
    document.addEventListener('DOMContentLoaded', function() { 
      // Get the container element where job listings will be displayed
      const container = document.getElementById('job-listings-container');
       // Iterate through each job listing and create a corresponding HTML element.
      jobListings.forEach(job => {
        const jobElement = document.createElement('div');
        jobElement.innerHTML = `<h3>${job.title}</h3><p>${job.type} - ${job.location}</p><p>Posted: ${job.postedDate}</p>`;
        container.appendChild(jobElement);
      });
    });
      // This Function is to validate the form input.
    function validateForm() {
       // We have to get the email value from the input field.
      const email = document.getElementById('email').value;
      // We have to Check if the email matches the specified regex pattern
      const isChecked = document.getElementById('terms-checkbox').checked;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      //The function checks whether the email input is valid (matches the regex pattern) 
      //and whether the terms checkbox is checked.
      if (!emailRegex.test(email)) {
      //This can display and an alert if the email is invalid.
        alert('Please enter a valid email address.');
        return false; // Prevent form submission.
      }
      //If the email is invalid or the terms are not agreed upon, 
      //it displays an alert and returns false to prevent form submission.
      // Check if the terms checkbox is checked.
      if (!isChecked) {
        // Display an alert if the terms are not agreed upon.
        alert('You must agree to the terms of service and privacy policy.');
        return false; // Prevent form submission.
      }
      //Otherwise, it allows form submission by returning true.
     // If both email is valid and terms are agreed upon, allow form submission.
      return true;
    }
     // Clears the form input fields
    function clearForm() {
      // Reset the email input values.
      document.getElementById('email').value = '';
      // Reset the location input value (assuming we have an input for location)
      document.getElementById('location-input').value = ''; 
      // Assuming we have an input for location
      // Uncheck the terms checkbo
      document.getElementById('terms-checkbox').checked = false;
    }
    //The handleSubscription() function prevents the default form submission behavior, 
    //validates the form using validateForm(), and 
    //displays a success message with the email and location (if provided).
    // Handles form submission for subscription.
    function handleSubscription(event) {
      event.preventDefault(); // Prevent actual form submission.
    // Validate the form input.
      if (validateForm()) {
        // To get the email and location values.
        const email = document.getElementById('email').value;
        // Assuming we have an input for location
        const location = document.getElementById('location-input').value; 
        // Display a success message with email and location
        alert(`Subscription successful! Email: ${email}, Location: ${location}`);
       // Clear the form after successful submission
       //The clearForm() function resets the email input, location input (if applicable), 
       //and unchecks the terms checkbox.
        clearForm();
      }
    }
    // Add an event listener to the search input field.
    document.getElementById('search-input').addEventListener('input', function(event) {
      // Get the search term from the input (convert to lowercase for case-insensitive matching)
      const searchTerm = event.target.value.toLowerCase();
      // Filter job listings based on the search term.
      const filteredJobs = jobListings.filter(job => job.title.toLowerCase().includes(searchTerm) || job.location.toLowerCase().includes(searchTerm));
    
      // Clear existing job listings in the container.
      const container = document.getElementById('job-listings-container');
      container.innerHTML = '';
      //The filteredJobs array is created by filtering the jobListings 
      //based on whether the job title or location includes the search term.
      //he existing job listings in the container are cleared.
      //The filtered job listings are then appended to the container, creating new HTML elements for each job.
       // Append the filtered job listings to the container
      filteredJobs.forEach(job => {
        const jobElement = document.createElement('div');
        jobElement.innerHTML = `<h3>${job.title}</h3><p>${job.type} - ${job.location}</p><p>Posted: ${job.postedDate}</p>`;
        container.appendChild(jobElement);
      });
    });



   







    