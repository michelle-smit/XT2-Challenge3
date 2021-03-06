//weer kaart - aanroep stad, temperatuur, luchtivochtigheid en windsnelheid
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
  //laat standaard het weer van Den Haag zien tot er een keuze gemaakt is in de map
  weather.fetchWeather("The%20Hague");

//api token
mapboxgl.accessToken = 'pk.eyJ1IjoiZ2FtZWNoaWNrIiwiYSI6ImNrbW1haWI0ZDFpbXAyb3FvN3N3ZWExNWEifQ.FmbZO_HDeUFqE7GHJaEZuA';

//Opent map
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/gamechick/ckmmc4xsp51cx17of2w7wqw5y',

  //Positioning de kaart op een bepaalde longitute + latitude en zoomed in
  center: [4.322840, 38.067101],
  zoom: 1,
});

map.addControl(new mapboxgl.NavigationControl());

var finland = new mapboxgl.Popup().setHTML('<h3 id="testId">Finland - Pori</h3><p style="color:white;">Ruime grasvlaktes.</p><img src="./images/Satakunta.jpg" alt="Boerderij en land er omheen in Satakunta" width="210" height="90">');
var peregino = new mapboxgl.Popup().setHTML('<h3 id="testId">Rusland - Veliki Novgorod</h3><p style="color:white;">Ruime openvlaktes maar veel schuine hellingen.</p><img src="./images/OblastPskov.jpg" alt="Oblast Pskov Rusland" width="210" height="90">');
var oblastKirov = new mapboxgl.Popup().setHTML('<h3 id="testId">Rusland - Oefa</h3><p style="color:white;">Licht bebost met openvlaktes.</p><img src="./images/Basjkirostan.jpg" alt="Basjkirostan" width="210" height="90">');
var kazachstan = new mapboxgl.Popup().setHTML('<h3 id="testId">Kazachstan - Karaganda</h3><p style="color:white;">Bosrijkgebied met enkele openvlakte.</p><img src="./images/Qaragandi.jpg" alt="Qaragandi" width="210" height="90">');
var mauritanië = new mapboxgl.Popup().setHTML('<h3 id="testId">Afrika - Mauritanië</h3><p style="color:white;"> vlakke grond woestijngebied.</p><img src="./images/mauritanie.jpg" alt="Mauritannie" width="210" height="90">');

//Voegt een marker toe gebasseerd op lon lat coordinaten
var LandingsplaatsI = new mapboxgl.Marker({ icon: 'default', color: '#be1d09' })
  .setLngLat([22.22554 , 61.36516]) //pori - Finland
  .setPopup(finland)
  .addTo(map);

var LandingsplaatsII = new mapboxgl.Marker({ icon: 'default', color: '#eb560b' })
  .setLngLat([31.506030, 57.683324]) //Velik novgorod - Rusland
  .setPopup(peregino)
  .addTo(map);

var LandingsplaatsIII = new mapboxgl.Marker({ icon: 'default', color: '#be1d09' })
  .setLngLat([57.200704 , 53.930923 ]) //Oefa - Rusland
  .setPopup(oblastKirov)
  .addTo(map);

var LandingsplaatsIV = new mapboxgl.Marker({ icon: 'default', color: '#eb560b' })
  .setLngLat([73.351284 , 49.367116]) //karaganda - Kazachstan
  .setPopup(kazachstan)
  .addTo(map);

var LandingsplaatsV = new mapboxgl.Marker({ icon: 'default', color: '#be1d09' })
  .setLngLat([-8.791963 , 20.348700 ]) //Mauritanië - Afrika
  .setPopup(mauritanië)
  .addTo(map);

  //roept weer aan van kaart locatie naar advies locatie
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