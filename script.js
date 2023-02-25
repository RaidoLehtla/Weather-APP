let weather = {
  ApiKey: '2353eafbd304967383ccd918278d0284',
  fetchWeather: function (city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.ApiKey}`
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    document.querySelector('.city').innerText = `Weather in ${name}`;
    document.querySelector(
      '.icon'
    ).src = `https://openweathermap.org/img/wn/${icon}.png`;
    document.querySelector('.description').innerText = description;
    document.querySelector('.temp').innerText = temp + '°C';
    document.querySelector('.humidity').innerText =
      'Humidity: ' + humidity + '%';
    document.querySelector('.wind').innerText =
      'Wind speed: ' + speed + ' km/h';

    document.body.style.backgroundImage = `url('https://source.unsplash.com/random/2560x1440/?${name}')`;

    // ***************CLEAR INPUT********************
    const clearInput = document.querySelector('.search-bar');
    clearInput.value = '';
    //********************************************** */

    // document.querySelector('.weather').classList.remove('loading');
  },

  search: function () {
    this.fetchWeather(document.querySelector('.search-bar').value);
  },
};

document.querySelector('.search button').addEventListener('click', function () {
  weather.search();
});

// ENTER click //
document
  .querySelector('.search-bar')
  .addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      document.body.style.backgroundImage = `url('https://source.unsplash.com/random/1280x700/?landscape')`;
      weather.search();
    }
  });

weather.fetchWeather('Tallinn');

// *************************************************************** //
// *************************************************************** //
// // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// https://api.openweathermap.org/data/2.5/weather?q=Tallinn&units=metric&appid=2353eafbd304967383ccd918278d0284
// *************************************************************** //
// *************************************************************** //

// https://source.unsplash.com/random/2560x1440/?${name}`
