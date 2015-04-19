<sendinfo>

	<form onsubmit={ submitted }>
        <span class="form-title">Please fill up the form</span>
        <span>Temperature</span>
        <input type="text"></input>
        <span>Field size</span>
        <input type="text"></input>
        <input type="submit" value="Submit data" id="submitMe"></input>
	</form>

	<p>
		Your coordinates are { longitude }, { latitude }.
	</p>

	<script>


	// Send API call after receiving user data
	submitted(e) {
		e.preventDefault();

		var data = $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=London,uk", function(json) {
				console.log(json.coord);
				this.longitude = json.coord.lon; 
				this.latitude = json.coord.lat;

			});

		this.update();

		console.log("form submitted successfully");
	};

	// Get the data and format it


	// Display the result to the user

	</script>

</sendinfo>