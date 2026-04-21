async function getWeather() {
  const city = document.getElementById("city").value;

  const apiKey = "YOUR_API_KEY";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const res = await fetch(url);
  const data = await res.json();

  document.getElementById("result").innerText =
    `Temp: ${data.main.temp}°C`;
}