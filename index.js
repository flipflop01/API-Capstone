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
const TasteDiveSearchUrl = "https://tastedive.com/api/similar?callback=?"
const TasteDiveAPIKey = "307161-APICapst-JBLGJD7N"

//getDatafromAPIFunction
function getDatafromTasteDiveAPI(searchTerm, qType, callback) {
  const settings = {
    url: TasteDiveSearchUrl,
    data: {
      k: TasteDiveAPIKey,
      q: `${searchTerm}`,
      type: `${qType}`,
      info: 1,
      limit: 5,
      verbose: 1,
    },
    dataType: 'jsonp',
    type: 'GET',
    success: callback
  };
  $.getJSON(settings, success);
  console.log("getDatafromTasteDiveAPI works");
}

function success(data) {
  console.log(data);
  renderTasteDiveResults(data);
}

//renderResults
function renderTasteDiveResults(data) {
  $('.mainContain').html(`<div class="taste-results col-4">
      <div class='indv-result'>
        <p>${data.Similar.Results[0].Name}</p>
        <p>${data.Similar.Results[0].Type}</p>
        <a href="${data.Similar.Results[0].wUrl}">Wiki Link Here</a>
      </div>
      <div class='indv-result'>
            <p>${data.Similar.Results[1].Name}</p>
            <p>${data.Similar.Results[1].Type}</p>
            <a href="${data.Similar.Results[1].wUrl}">Wiki Link Here</a>
          </div>
      <div class='indv-result'>
            <p>${data.Similar.Results[2].Name}</p>
            <p>${data.Similar.Results[2].Type}</p>
            <a href="${data.Similar.Results[2].wUrl}">Wiki Link Here</a>
          </div>
      <div class='indv-result'>
            <p>${data.Similar.Results[3].Name}</p>
            <p>${data.Similar.Results[3].Type}</p>
            <a href="${data.Similar.Results[3].wUrl}">Wiki Link Here</a>
          </div>
      <div class='indv-result'>
            <p>${data.Similar.Results[4].Name}</p>
            <p>${data.Similar.Results[4].Type}</p>
            <a href="${data.Similar.Results[4].wUrl}">Wiki Link Here</a>
          </div>
  </div>`);
}

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
    let qType = document.getElementById("query-type").value;
    console.log(searchTerm);
    getDatafromTasteDiveAPI(searchTerm, qType);
    $('.mainContain').html(" ");
    //getDatafromMeetupAPI(searchTerm, displayMeetupResults);
  })
}

listenSubmit();
