console.log('hello world');

// when open the page i need the current date and time to be displayed using moment.js

   // i need a function to display the current date and time using moment.js

// there need to be time blocks for standard business hours 

   // time blocks can be generated by some kind of a loop in a function

// each time block needs be color coded based on the past, present and future hours

   // different colors can be generated by changing css classes 

// when i click on each time block i can write an event

   // i need allow text input to each of the blocks 

// added event can be saved in local storage by pressing save button on the right

   // funtion with a loop ? to store data in local storage

// typed events need to persist even between refreshing the page

var currentDate = moment().format("dddd, MMMM Do");

console.log(currentDate);


function currentTime() {

return $("#currentDay").text(currentDate)

};
currentTime();

// edit html
for (var i = 9; i < 18; i++) {

var domEl = $(".container");
var timeBlock =  $("<div>");
var row = $("<div>");
var hourBlock = $("<div>");
var textBlock = $("<div>");
var saveButton = $("<button>");


timeBlock.addClass("time-block");
row.addClass("row");
hourBlock.addClass("hour col-1");   // will need to be changed
hourBlock.text([i]);
hourBlock.css("background-color", "yellow");
hourBlock.css("padding-top", "30px");

textBlock.addClass("textarea col-10 hour"); // hour class might need to be changed 
saveButton.addClass("saveBtn saveBtn i:hover col-1 fa fa-save"); // will need to be changed



domEl.append(timeBlock);
timeBlock.append(row);
row.append(hourBlock, textBlock, saveButton);


let hour = moment().hours();     // gets current hour 


if (i < hour) {                          // if statement that color codes time blocks based on current time
    textBlock.addClass("past");
} else if (i == hour) {
    textBlock.addClass("present");
} else {
    textBlock.addClass("future");
};



};


