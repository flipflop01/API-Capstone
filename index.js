//Placeholder Function
$(document).ready(function(){
        var n=0;
        var loopLength=placeHolder.length;

        setInterval(function(){
           if(n<loopLength){
              var newPlaceholder = placeHolder[n];
              n++;
              $('input').attr('placeholder',newPlaceholder);
           } else {
              $('input').attr('placeholder',placeHolder[0]);
              n=0;
           }
        },2000);
    });

////////////////////////////////////////TasteKid API//////////////////////////////////////////////////
const TasteDiveSearchUrl = "https://tastedive.com/api/similar"
const TasteDiveAPIKey = "307161-APICapst-JBLGJD7N"

//getDatafromAPIFunction
function getDatafromTasteDiveAPI(searchTerm, callback) {
  const settings = {
    url: TasteDiveSearchUrl,
    data: {
      k: TasteDiveAPIKey,
      q: `${searchTerm}`,
      info: 1,
      limit: 5
    },
    dataType: 'jsonp',
    type: 'GET',
    success: callback
  };
  $.getJSON(TasteDiveSearchUrl, settings, callback);
  console.log("getDatafromTasteDiveAPI works");
}

//renderResults
/*function renderTasteDiveResults () {

}

function displayTasteDiveResults(data) {
  let results = data.items.map((item, index) => renderResults(item));
  $('.search-results').html(results);
}*/

///////////////////////////////////////////Meeetup API//////////////////////////////////////////////
/*const meetupSearchUrl = "http://api.meetup.com"
const meetupAPIKey ="43452e79373956592e2a1939544e1d23"

//getDatafromAPIFunction
function getDatafromMeetupAPI(searchTerm, callback) {
  const settings = {
    url: meetupSearchUrl,
    data: {
      key: meetupAPIKey,
      q: `${searchTerm}`
    },
    dataType: 'json',
    type: 'GET',
    success: callback
  };
  $.getJSON(meetupSearchUrl, settings, callback);
  console.log("Meetup works?");
}



//renderResults
//function renderResults(result)





//displayMeetupResults
function displayMeetupResults(data) {
  let results = data.items.map((item, index) => renderResults(item));
  $('.search-results').html(results);
}*/

//////////////////////////////////////////////////////////////////////////////////////////////

//Event Listener 
function listenSubmit () {
  $('#search-form').submit(event => {
    event.preventDefault();
    let searchTerm = document.getElementById('js-input').value;
    console.log(searchTerm);
    getDatafromTasteDiveAPI(searchTerm, /*displayTasteDiveResults*/);
    //getDatafromMeetupAPI(searchTerm, displayMeetupResults);
  })
}

listenSubmit();
