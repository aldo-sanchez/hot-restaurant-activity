var makebutton = "Make reservation.";
var viewbutton = "View tables.";
// var homebutton = ;
var currentreservations = [];

function viewtables() {
	viewbutton.addEventListener("click", function(){});
}


$('#submit').on("click", function(){
	var newReservation = {
		name: $('#reserve_name').val().trim(),
		phone: $('#reserve_phone').val().trim(),
		email: $('#reserve_email').val().trim(),
		id: $('#reserve_uniqueID').val().trim()
	}

	console.log(newReservation);

	$.post('/api/tables', newReservation).done(function(data){
		console.log(data);
		alert('adding reservation');
	});



		// name: $('#reserve_name').val()
		// phone: $('#reserve_phone').val('')
		// email: $('#reserve_email').val('')
		// id: $('#reserve_uniqueID').val('')


	return false
});



