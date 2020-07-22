// here's the API pull using 4+ data points//

<template>

    <div id="app">
        <div id="weather-container">
            <p>Weather in Seattle, Washington USA is .......</p> {{overcast}}
            <span class="temperature">Current Temp {{currentTemp}}°</span><br>
            <span id="temp-values">Min {{minTemp}}°  Max {{maxTemp}}°</span>
        </div>
        <div class="info-container">
            <div>
                <img class="icon" src="../assets/images/sunrise.svg"> Sunrise {{sunrise}}
            </div>
            <div>
                <img class="icon" src="../assets/images/sunset.svg"> Sunset {{sunset}}
            </div>
            <div>
                <img class="icon" src="../assets/images/humidity.svg"> Humidity {{humidity}}
            </div>
            <div>
                <img class="icon" src="../assets/images/pressure.svg"> Pressure {{pressure}}
            </div>
            <div>
                <img class="icon" src="../assets/images/wind.svg"> Wind {{wind}}
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {

    data() {
        return {
            currentTemp: '',
            minTemp: '',
            maxTemp:'',
            sunrise: '',
            sunset: '',
            pressure: '',
            humidity: '',
            wind: '',
            overcast: '',
            icon: ''
        }
    },
    methods: {
        getWeather() {
            let url = "http://api.openweathermap.org/data/2.5/weather?q=Seattle&?units=imperial&APPID=c3f86dcbff988649af5abe06d10ffa35";
            axios
                .get(url)
                .then(response => {
                    this.currentTemp = response.data.main.temp;
                    this.minTemp = response.data.main.temp_min;
                    this.maxTemp = response.data.main.temp_max;
                    this.pressure = response.data.main.pressure;
                    this.humidity = response.data.main.humidity + '%';
                    this.wind = response.data.wind.speed + 'm/s';
                    this.overcast = response.data.weather[0].description;
                    this.icon = "images/" + response.data.weather[0].icon.slice(0, 2) + ".svg";
                    this.sunrise = new Date(response.data.sys.sunrise*1000).toLocaleTimeString("en-GB").slice(0,4);
                    this.sunset = new Date(response.data.sys.sunset*1000).toLocaleTimeString("en-GB").slice(0,4);
                })
                .catch(error => {
                    console.log(error)
                });
            },
        },
        beforeMount() {
            this.getWeather();
        },
    };

</script>

<style>

#weather-container {
    padding: 15px;
    background: #3d4869; /* Old browsers */
    background: -moz-linear-gradient(#3d4869, #263048) fixed; /* FF3.6-15 */
    background: -webkit-linear-gradient(#3d4869,#263048) fixed; /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(#3d4869,#263048) fixed; /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    background-repeat: no-repeat;

    font-family: 'Montserrat', sans-serif;
    font-weight: 100;
    text-shadow: 0px 0px 2px #000000;
    color: #ffffff;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

.info-container {
    padding: 4rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}

.icon {
    top: 2px;
    padding-left: 8px;
    min-width: 4rem;
    max-width: 4rem;
}


</style>