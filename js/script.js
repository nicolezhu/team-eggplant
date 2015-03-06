$(document).ready(function() {
	// add ingredients by clicking 'add-ingredient' button
	$('#add-ingredient').on('click', function() {
		var ingredient = $('.ingredients input').val();
		$('#ingredients-list').append('<li>' + ingredient + '</li>');
		$('.ingredients input').val('');
	});

	// add ingredients by hitting 'enter' key
	$('.ingredients input').keyup(function(event) {
		if (event.keyCode == 13) {
			var ingredient = $('.ingredients input').val();
			$('#ingredients-list').append('<li>' + ingredient + '</li>');
			$('.ingredients input').val('');
		}
	});

	// calories slider
	var calories = $('#cals').val();
	$('#cals-output').val(calories + ' calories');

	$('#cals').on('input', function() {
		var calories = $('#cals').val();
		$('#cals-output').val(calories + ' calories');
	});

	// show only vegetarian search results
	$('#search-recipes').on('click', function() {
		$('.recipes h2').html('Recipe Results');
		$('.recipe-item').hide();
		$('.veg').show();
	});

	$('.fa-heart').hide();

	$('.fa-heart-o').on('click', function() {
		$(this).hide();
		$(this).next().show();
	});

	$('.fa-heart').on('click', function() {
		$(this).hide();
		$(this).prev().show();
	});
});