function currentTime() {
  var currentDate = moment().format("dddd, MMMM Do");
  var currentTime = moment().format("h:mm A");
  var dateTimeDisplay = currentDate + " - " + currentTime;

  $("#currentDay").text(dateTimeDisplay);
}
currentTime();
function createTimeBlocks() {
  var domEl = $(".container");
  var currentHour = moment().hours();
  var timeBlockEntries =
    JSON.parse(localStorage.getItem("timeBlockEntries")) || {};

  for (let i = 9; i < 24; i++) {
    var formattedHour = moment({ hour: i }).format("h A");
    var timeBlock = $("<div>").addClass("time-block");
    var row = $("<div>").addClass("row");
    var hourBlock = $("<div>").addClass("hour col-1").text(formattedHour).css({
      "background-color": "yellow",
      display: "flex",
      "justify-content": "center",
      "align-items": "center",
    });
    var textBlock = $("<textarea>").addClass("description col-10");
    var saveButton = $("<button>").addClass(
      "saveBtn saveBtn i:hover col-1 fa fa-save"
    );

    // Color coding and disabling past time blocks
    if (i < currentHour) {
      textBlock.addClass("past");
      textBlock.prop("disabled", true);
      saveButton.prop("disabled", true);
    } else if (i === currentHour) {
      textBlock.addClass("present");
    } else {
      textBlock.addClass("future");
    }

    // Populate text block if data exists
    if (timeBlockEntries[i]) {
      textBlock.val(timeBlockEntries[i]);
    }

    // Append elements
    domEl.append(timeBlock);
    timeBlock.append(row);
    row.append(hourBlock, textBlock, saveButton);

    // Save button functionality
    (function (index, tb) {
      saveButton.click(function () {
        var entryValue = tb.val();
        if (entryValue.trim() !== "") {
          timeBlockEntries[index] = entryValue;
          localStorage.setItem(
            "timeBlockEntries",
            JSON.stringify(timeBlockEntries)
          );
        } else {
          delete timeBlockEntries[index];
          localStorage.setItem(
            "timeBlockEntries",
            JSON.stringify(timeBlockEntries)
          );
        }
      });
    })(i, textBlock);
  }
}

createTimeBlocks();
