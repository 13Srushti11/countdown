(function (){
    const second = 1000,
    minute = second*60,
    hour = minute*60,
    day = hour * 24;

    let new_year = "Jan 1,2023 00:00:00",
    countdown = new Date(new_year).getTime(),
    x = setInterval(function(){
        let now = new Date().getTime(),
        distance = countdown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("minutes").innerText = Math.floor((distance % (day)) / (minute)),
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / (second));

        if(distance <0){
            let headline = document.getElementById("headline"),
            countdown = document.getElementById("countdown");

            headline.innerText = "Today is new year";
            countdown.style.display = "none";

            clearInterval(x);

        }
    }, 0)
}())
