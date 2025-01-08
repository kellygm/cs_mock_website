// Author: Reed Kilday

let jobs = [];

(async function() {
  try {
    // Make a GET request to the local JSON file
    const response = await fetch('jobs.json');

    // Check if the request was successful (status code 200)
    if (!response.ok) {
      throw new Error(`Failed to fetch data (status: ${response.status})`);
    }

    // Parse the JSON data
    const data = await response.json();

    // Handle the JSON data
    jobs = data;
    console.log('Jobs data:', jobs);

    // Call the function to create flip cards
    createFlipCards();
  } catch (error) {
    // Handle errors
    console.error('Fetch error:', error.message);
  }
})();

function createFlipCards() {
  const container = document.getElementById('job-grid');

  // Iterate over each job in the array
  jobs.forEach(job => {
    // Create the flip card container
    const flipCard = document.createElement('div');
    flipCard.className = 'flip-card scale-in-center';

    // Create the inner part of the flip card
    const flipCardInner = document.createElement('div');
    flipCardInner.className = 'flip-card-inner';

    // Create the front side of the flip card
    const flipCardFront = document.createElement('div');
    flipCardFront.className = 'flip-card-front';
    const jobTitleFront = document.createElement('h1');
    jobTitleFront.textContent = job.job_title;
    flipCardFront.appendChild(jobTitleFront);

    // Create the back side of the flip card
    const flipCardBack = document.createElement('div');
    flipCardBack.className = 'flip-card-back';
    const jobTitleBack = document.createElement('h2');
    jobTitleBack.textContent = job.job_title;
    const jobDescription = document.createElement('p');
    jobDescription.innerHTML = `Company: ${job.company}<br>Salary: $${job.salary.toLocaleString()}<br>${job.description}`;
    flipCardBack.appendChild(jobTitleBack);
    flipCardBack.appendChild(jobDescription);

    // Assemble the flip card
    flipCardInner.appendChild(flipCardFront);
    flipCardInner.appendChild(flipCardBack);
    flipCard.appendChild(flipCardInner);

    // Append the flip card to the container
    container.appendChild(flipCard);
  });
}