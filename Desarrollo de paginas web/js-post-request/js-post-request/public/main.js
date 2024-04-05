// Information to reach API
const apiKey = '2aaf85bf1ad74470a7e69d2eada0af49';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// Asynchronous function to shorten URL
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({ destination: urlToShorten });

  // Send POST request to API
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'apikey': apiKey
    },
    body: data
  })
  .then(response => {
    // Check if response is successful
    if (response.ok) {
      return response.json();
    }
    // If response is not successful, throw an error
    throw new Error('Request failed');
  })
  .then(jsonResponse => {
    // Display the shortened URL
    renderResponse(jsonResponse);
  });
}

// Clear page and call asynchronous function to shorten URL
const displayShortUrl = (event) => {
  event.preventDefault();
  // Clear previous response
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  // Call function to shorten URL
  shortenUrl();
}

// Add event listener to the shorten button
shortenButton.addEventListener('click', displayShortUrl);
