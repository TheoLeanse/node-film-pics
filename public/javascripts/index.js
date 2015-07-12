$('#search').click(function() {
  var film = $('#title').val();
  $.post('/savefilm', { film: film });
  getFilmInfo(film);
});

$.getJSON('/getfilm', function(data) {
  var film = data.film;
  if (film !== undefined) {
    getFilmInfo(film);
  }
});

function getFilmInfo(film) {
  var apiCall = "http://www.omdbapi.com/?t=" + film + "&y=&plot=full&r=json";
  $.getJSON(apiCall, function(data) {
    $('#filmTitle').html(data.Title);
    $('#year').html(data.Year);
    $('#poster').attr("src", data.Poster);
    console.log(data);
  });
}
