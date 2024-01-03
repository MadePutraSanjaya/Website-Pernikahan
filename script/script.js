document.addEventListener("DOMContentLoaded", function () {
  var countDownDate = new Date("Jan 1, 2025 00:00:00").getTime();
  var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML =
      "<div>" + days + "</div><div>days</div>";
    document.getElementById("hours").innerHTML =
      "<div>" + hours + "</div><div>hours</div>";
    document.getElementById("minutes").innerHTML =
      "<div>" + minutes + "</div><div>minutes</div>";
    document.getElementById("seconds").innerHTML =
      "<div>" + seconds + "</div><div>seconds</div>";

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "EXPIRED";
    }
  }, 1000);
});
