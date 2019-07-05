$(document).ready(function(){

//Captures button click 
$('#add-train').on('click', function (event){
    //prevents the page from re-loading
    event.preventDefault();

    // Captures the User Inputs and stores them into variables
    const trainName = $("#trainName-input").val().trim();
    const destination = $("#destination-input").val().trim();
    const trainTime = $("#trainTime-input").val().trim();
    const frequency = $("#frequency-input").val().trim();

    // Console log each of the user inputs to confirm we are receiving them
    console.log(trainName);
    console.log(destination);
    console.log(trainTime);
    console.log(frequency);

})

















})