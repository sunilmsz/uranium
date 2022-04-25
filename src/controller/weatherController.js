const axios = require('axios');
const { get } = require('express/lib/response');

const getWeather = async (req, res) => {
    try {

        let city = req.params.city;
        if (!city) return res.status(400).send({ data: "send a valid city" })
        const options = {
            method: "get",
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=260f34c0f8bab911d26b8892cae515aa"
        }
        const response = await axios(options)
        data = response.data.main.temp;
        res.status(200).send({ data: data })

    }
    catch (error) {
        return res.status(500).send({ data: "internal server error", error: error.message })
    }
}

const getSortedWeather = async (req, res) => {
    const cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"];
    const temps = [];
    for (let i = 0; i < cities.length; i++) {
        const city= cities[i];
        const options = {
            method:"get",
            url:"http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=260f34c0f8bab911d26b8892cae515aa"
        }
        const response = await axios(options)
        data = response.data.main.temp;
        temps.push({city :city,temp:data })
    }

    const arr =temps.sort((a,b)=>a.temp-b.temp)

    res.status(200).send({data:arr})
}

module.exports.getWeather = getWeather;
module.exports.getSortedWeather = getSortedWeather