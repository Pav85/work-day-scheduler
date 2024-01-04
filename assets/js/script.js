function currentTime() {
  var currentDate = moment().format("dddd, MMMM Do");
  $("#currentDay").text(currentDate);
}
currentTime();

// edit html
for (var i = 9; i < 18; i++) {
  var domEl = $(".container");
  var timeBlock = $("<div>");
  var row = $("<div>");
  var hourBlock = $("<div>");
  var textBlock = $("<textarea>");
  var saveButton = $("<button>");

  timeBlock.addClass("time-block");
  row.addClass("row");
  hourBlock.addClass("hour col-1");
  hourBlock.text([i]);
  hourBlock.css("background-color", "yellow");
  hourBlock.css("padding-top", "30px");

  textBlock.addClass("description col-10");

  saveButton.addClass("saveBtn saveBtn i:hover col-1 fa fa-save");

  domEl.append(timeBlock);
  timeBlock.append(row);
  row.append(hourBlock, textBlock, saveButton);

  let hour = moment().hours(); // gets current hour

  if (i < hour) {
    // if statement that color codes time blocks based on current time
    textBlock.addClass("past");
  } else if (i == hour) {
    textBlock.addClass("present");
  } else {
    textBlock.addClass("future");
  }

  // local storage issue to be solved

  saveButton.click(function () {
    console.log("Hello");
    var timeBlockEntries =
      JSON.parse(localStorage.getItem("timeBlockEntries")) || [];

    var hourBlockData = {
      hour: hourBlock.val([i]),
      hourEntry: textBlock.val(),
    };

    timeBlockEntries.push(hourBlockData);
    localStorage.setItem("timeBlockEntries", JSON.stringify(timeBlockEntries));
  });
}
