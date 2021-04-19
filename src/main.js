import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

// API URL template: api.giphy.com/v1/gifs/`${search+terms}`&api_key=YOUR_API_KEY&limit=20
// start with a successful search for just one word

$(document).ready(() => {
  $('#search').click(() => {
    const searchTerms = $('#search-terms').val();
    $('#search-terms').val("");
    
    let request = new XMLHttpRequest();
    const url = `http://api.giphy.com/v1/gifs/${searchTerms}&api_key=${process.env.API_KEY}&limit=20`
    
    request.onreadystatechange = () => {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();

    function getElements(response) {
      // $('#search-results').html(`some kind of HTML here ${this.data[0].images.fixed_height}`);
    }
  });
});