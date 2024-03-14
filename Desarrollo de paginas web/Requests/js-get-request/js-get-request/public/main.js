const url='https://api.datamuse.com/words?sl=';

const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

//Asynchronous function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endPoint = `${url}${wordQuery}`;

  //fetch request with endpoint, or url string with expected url and string value
  fetch(endPoint, { cache: 'no-cache' }).then(response => {
    if (response.ok) {
      return response.json();
    }
    //Handle cases where its falsey, aka, when it failed to retrieve response
    throw new Error('Request failed: ' + response.status);
  }, networkError => {
    //Handle network errors
    console.log(networkError.message);
  }).then(jsonResponse => {
    // Handle successful response
    renderRawResponse(jsonResponse); //JSON response
  });
}
//Clears previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener('click', displaySuggestions);