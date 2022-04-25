import axios from 'axios';

const api = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5`
    //baseURL: 'localhost'
})

const Weather:any = {
    resource: 'weather',

    get_current_weather(lat:string,long:string) {
        console.log(`getting weather for ${lat} and ${long}`)
        return api.get(`/${this.resource}?lat=${lat}&lon=${long}&units=metric&appid=${process.env.VUE_APP_OPEN_WEATHER_KEY}`)//returns prommise
    },
}

export { api, Weather }