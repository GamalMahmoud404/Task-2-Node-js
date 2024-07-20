
const geocode = require("./geocode")
const forecust = require("./forecust")

const country = process.argv[2]

geocode.geocodefun(country, (error, data) => {

    // console.log("error : ", error)
    // console.log("long : ", data.longtitude)
    // console.log("lat : ", data.latitude)
    // console.log("data : ", data)

    forecust.forecustfun(data.longtitude, data.latitude, (error, data) => {
        // console.log(" ")
        // console.log("error : ", error)
        console.log("In", data.country, " the temp is : ", data.temp, "c --> and weather condition : ", data.condition, " --> at : ", data.dateTime)
    })

})


