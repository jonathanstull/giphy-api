import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(() => {
  $('#search-submit-btn').click(() => {
    event.preventDefault();
    let searchTerms = $('#search-terms').val();
    let urlSearchTerms = `&q=${searchTerms}`;
    $('#search-terms').val("");
    const url = `http://api.giphy.com/v1/gifs/search?&api_key=${process.env.API_KEY}&limit=1${urlSearchTerms}`;
    
    let request = new XMLHttpRequest();
    console.log(request);
    
    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();

    function getElements(response) {
      $('#search-results').html("");
      $('#search-results').html(`<img src="${response.data[0].images.fixed_height.url}" alt="${response.data[0].title}">`).show();
    }
  });
});