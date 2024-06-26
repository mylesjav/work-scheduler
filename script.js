// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//display current date
$(document). ready(function () {
const displayTime = document.querySelector("#currentDay");
const currentTime = dayjs().format ("dddd, MMMM D YYYY");
displayTime.textContent = currentTime;

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  

  $("saveBtn").on("click", function(){
    const text = $(this).sibling(".description").val();
    const time = $(this).parent().attr("id");
  });

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  function hourTracker() {
    const currentHour = dayjs().hour();

    $(".time-block").each(function () {
      const blockHour = parseInt($(this).attr("id").split("-")[1]);

      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  function displayText() {
    $(".time-block").each(function () {
      const blockHour = $(this).attr("id");
      $(this).children(".description").val(localStorage.getItem(blockHour));
    });
  }

  // Initial function calls
  hourTracker();
  displayText();
});
  // TODO: Add code to display the current date in the header of the page.
// });
// Moment.js to get the current day
// var now = moment().format("dddd, MMMM Do YYYY");
// $("#currentDay").text(now);


