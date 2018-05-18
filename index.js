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

////////////////////////////////////////TasteDive API//////////////////////////////////////////////////
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
  $.getJSON(settings, tasteSuccess);
  console.log("getDatafromTasteDiveAPI works");
}

function err(data) {
    $('.mainContain').html(`<div class="taste-results col-4">
      <p>Here are some recommendations of similar items</p>
      <div class='indv-result'>
        <p>Sorry, no recommendations were found for your search</p>
      </div>`);
}

//renderResults
function renderTasteDiveResults(data) {
  $('.mainContain').html(`
    <div class="taste-results col-4">
      <h3>Here are some similar items</h3>
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
  </div>
      `);
}

///////////////////////////////////////////Meeetup API//////////////////////////////////////////////
const meetupSearchUrl = "https://api.meetup.com/find/groups?callback=?"
const meetupAPIKey ="43452e79373956592e2a1939544e1d23"

//getDatafromAPIFunction
function getDatafromMeetupAPI(searchTerm, qType, callback) {
  const settings = {
    url: meetupSearchUrl,
    data: {
      key: meetupAPIKey,
      text: `${qType}`,
      radius: 'smart',
      page: 5
    },
    dataType: 'jsonp',
    type: 'GET',
    success: callback
  };
  $.getJSON(settings, meetSuccess);
  console.log("Meetup works?");
}

function renderMeetupResults(data) {
  $('.subContain').html(`
    <div class="meetup-results col-4">
      <h3>Here are some groups to check out!</h3>
      <div class='indv-result'>
        <p>${data.data[0].name}</p>
        <p>${data.data[0].city}</p>
        <a href="${data.data[0].link}">Link to the Group Here</a>
      </div>
      <div class='indv-result'>
        <p>${data.data[1].name}</p>
        <p>${data.data[1].city}</p>
        <a href="${data.data[1].link}">Link to the Group Here</a>
      </div>
      <div class='indv-result'>
        <p>${data.data[2].name}</p>
        <p>${data.data[2].city}</p>
        <a href="${data.data[2].link}">Link to the Group Here</a>
      </div>
      <div class='indv-result'>
        <p>${data.data[3].name}</p>
        <p>${data.data[3].city}</p>
        <a href="${data.data[3].link}">Link to the Group Here</a>
      </div>
      <div class='indv-result'>
        <p>${data.data[4].name}</p>
        <p>${data.data[4].city}</p>
        <a href="${data.data[4].link}">Link to the Group Here</a>
      </div>
    `);
}

//////////////////////////////////////////////////////////////////////////////////////////////

//Event Listener 
function listenSubmit () {
  $('#search-form').submit(event => {
    event.preventDefault();
    let searchTerm = document.getElementById('js-input').value;
    let qType = document.getElementById("query-type").value;
    console.log(searchTerm);
    console.log(qType);
    getDatafromTasteDiveAPI(searchTerm, qType);
    getDatafromMeetupAPI(searchTerm, qType);
    alterPage();
  })
}

function alterPage() {
  $('.mainContain').html(" ");
}

function tasteSuccess(data) {
  console.log(data);
  if(data.Similar.Results.length === 0) {
    err(data);
  }
  else {renderTasteDiveResults(data);
  }
}

function meetSuccess(data){
  console.log(data);
  renderMeetupResults(data);
}

listenSubmit();
