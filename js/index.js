// add click listener to check weather btn that calls function run
document.getElementById('submit-btn').addEventListener('click', handleSubmit)

// run
function handleSubmit() {
    city = document.getElementById('cityInput').value;
    
}
    // get cityInput value
    // fetch city weather through api
        // https://openweathermap.org/api
    // render the 7 day weather to DOM
    // if today is raining -> send sms to get raincoat
    // if today is snowing -> send sms to wear layers and wear boots