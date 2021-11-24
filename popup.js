const apiKey = '474b99e4449c0019bc658d9bb118d04f';

window.addEventListener('DOMContentLoaded', () => {
	console.log('Loaded...');
	let city = 'London';

	const btn = document.getElementById('Submit');
	btn.addEventListener('click', (event) => {
		city = document.getElementById('City').value;

		const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

		fetch(url)
			.then(res => res.json())
			.then(data => {
				const wt = data.weather[0].main;
				let color;
				if (wt === "Clear") {
					color = '#add8e6';
				} else if (wt === "Smoke") {
					color = '#C0C0C0';
				} else if (wt === "Snow" || wt === "Clouds" || wt === "Drizzle") {
					color = '#F0F8FF';
				} else if (wt === "Thunderstorm" || wt === "Rain") {
					color = '#6495ed';
				} else {
					color = '#B0DFE5';
				}

				document.body.style.backgroundColor = color;
				document.getElementById('data').innerHTML = `Temp: ${data.main.temp} C`;
				document.getElementById('desc').innerHTML = `${wt}`;
			})
		event.preventDefault();
	});
});
