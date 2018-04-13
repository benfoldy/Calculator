$(document).ready(function () {
	$("input").on("keyup keydown keypress change", function (e) {
		var this_input = $(this),
			this_row = this_input.closest(".app"),
			minutes_day = parseFloat(this_row.find(".per_day").val()),
			minutes_week = (minutes_day * 7)
			minutes_month = (minutes_day * 30)
			minutes_year = (minutes_day * 365)
			minutes_decade = (minutes_day * 3650);

		// console.log("Quantity", quantity);

		this_row.find(".total_week").find("span").text(minutes_week);
		this_row.find(".total_month").find("span").text(minutes_month);
		this_row.find(".total_year").find("span").text(minutes_year);
		this_row.find(".total_decade").find("span").text(minutes_decade);


		var day_total = 0,
			week_total = 0,
			month_total = 0,
			year_total = 0,
			decade_total = 0;


		$(".per_day").each(function () {
			//do stuff
			var this_day_total = parseFloat($(this).val());
			day_total = day_total + this_day_total;
		});

		$(".total_week").each(function () {
			//do stuff
			var this_week_total = parseFloat($(this).find("span").text());
			week_total = week_total + this_week_total;
		});

		$(".total_month").each(function () {
			//do stuff
			var this_month_total = parseFloat($(this).find("span").text());
			month_total = month_total + this_month_total;
		});

		$(".total_year").each(function () {
			//do stuff
			var this_year_total = parseFloat($(this).find("span").text());
			year_total = year_total + this_year_total;
		});

		$(".total_decade").each(function () {
			//do stuff
			var this_decade_total = parseFloat($(this).find("span").text());
			decade_total = decade_total + this_decade_total;
		});


		$("#phone_total_day").find("span").text(day_total);
		$("#phone_total_week").find("span").text(week_total);
		$("#phone_total_month").find("span").text(month_total);
		$("#phone_total_year").find("span").text(year_total);
		$("#phone_total_decade").find("span").text(decade_total);



//$(".min").each(function(){
			//var this_day_total = $(this).val();
			//var this_day_percent = parseFloat(((this_day_total * 11) / 1440)*100).toFixed(2);


		//$("#percent_day").find("span").text(this_day_percent + "%");

		//$("#percent_week").find("span").text(this_day_percent + "%");

		//$("#percent_month").find("span").text(this_day_percent + "%");

		//$("#percent_year").find("span").text(this_day_percent + "%");

		//$("#percent_decade").find("span").text(this_day_percent + "%");



		

		});



	});




