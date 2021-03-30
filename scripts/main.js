let weather = {
  apiKey: "df117f9063bcf5e8f080fb30729f2509",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
      .then((response) => {
        if (!response.ok) {
          alert("Geen weer specificaties gevonden");
          throw new Error("Geen weer specificaties gevonden");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".stad").innerText = "Weer's omstandigheden in " + name;
    document.querySelector(".beschrijving").innerText = description;
    document.querySelector(".temperatuur").innerText = temp + "°C";
    document.querySelector(".Luchtvochtigheid").innerText =
      "Luchtvochtigheid: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind snelheid: " + speed + " km/h";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  
  });

  weather.fetchWeather("The%20Hague");
  // weather.fetchWeather("pori");
  // weather.fetchWeather("novgorod");
  // weather.fetchWeather("oefa");
  // weather.fetchWeather("karaganda");
  // weather.fetchWeather("mauritanie");

// Set api token
mapboxgl.accessToken = 'pk.eyJ1IjoiZ2FtZWNoaWNrIiwiYSI6ImNrbW1haWI0ZDFpbXAyb3FvN3N3ZWExNWEifQ.FmbZO_HDeUFqE7GHJaEZuA';

// Initialate map
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/gamechick/ckmmc4xsp51cx17of2w7wqw5y',

  // Positioning the map on a certain longitute + latitude and zooming in
  center: [4.322840, 38.067101],
  zoom: 1,
});

map.addControl(new mapboxgl.NavigationControl());

var finland = new mapboxgl.Popup().setHTML('<h3 id="testId">Finland - Satakunta</h3><p>Ruime grasvlaktes.</p><img src="./images/Satakunta.jpg" alt="Boerderij en land er omheen in Satakunta" width="210" height="90">');
var peregino = new mapboxgl.Popup().setHTML('<h3 id="testId">Rusland - Veliki Novgorod</h3><p>Ruime openvlaktes maar veel schuine hellingen.</p><img src="./images/OblastPskov.jpg" alt="Oblast Pskov Rusland" width="210" height="90">');
var oblastKirov = new mapboxgl.Popup().setHTML('<h3 id="testId">Rusland - Oefa</h3><p>Licht bebost met openvlaktes.</p><img src="./images/Basjkirostan.jpg" alt="Basjkirostan" width="210" height="90">');
var kazachstan = new mapboxgl.Popup().setHTML('<h3 id="testId">Kazachstan - Karaganda</h3><p>Bosrijkgebied met enkele openvlakte.</p><img src="./images/Qaragandi.jpg" alt="Qaragandi" width="210" height="90">');
var mauritanië = new mapboxgl.Popup().setHTML('<h3 id="testId">Afrika - Mauritanië</h3><p> vlakke grond woestijngebied.</p><img src="./images/mauritanie.jpg" alt="Mauritannie" width="210" height="90">');

// Adding a marker based on lon lat coordinates
var LandingsplaatsI = new mapboxgl.Marker({ icon: 'default', color: '#be1d09' })
  .setLngLat([24.009744, 61.171883]) //Svetogorsk - Finland
  .setPopup(finland)
  .addTo(map);

var LandingsplaatsII = new mapboxgl.Marker({ icon: 'default', color: '#eb560b' })
  .setLngLat([31.506030, 57.683324]) //Peregino - Rusland
  .setPopup(peregino)
  .addTo(map);

var LandingsplaatsIII = new mapboxgl.Marker({ icon: 'default', color: '#be1d09' })
  .setLngLat([57.275657, 52.585452]) //Oblast Kirov - Rusland
  .setPopup(oblastKirov)
  .addTo(map);

var LandingsplaatsIV = new mapboxgl.Marker({ icon: 'default', color: '#eb560b' })
  .setLngLat([72.423806, 48.570093]) //Kazachstan
  .setPopup(kazachstan)
  .addTo(map);

var LandingsplaatsV = new mapboxgl.Marker({ icon: 'default', color: '#be1d09' })
  .setLngLat([24.383569, -9.001379]) //Mauritanië
  .setPopup(mauritanië)
  .addTo(map);

  LandingsplaatsI.getElement().addEventListener('click', () => {
    weather.fetchWeather("pori");
    });
  
  LandingsplaatsII.getElement().addEventListener('click', () => {
    weather.fetchWeather("novgorod");
    });
  
  LandingsplaatsIII.getElement().addEventListener('click', () => {
    weather.fetchWeather("oefa");
    });

  LandingsplaatsIV.getElement().addEventListener('click', () => {
    weather.fetchWeather("karaganda");
    });

  LandingsplaatsV.getElement().addEventListener('click', () => {
    weather.fetchWeather("mauritanie");
    });