// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });

  const d = new Date();
  document.getElementById("currentDay").innerHTML = d;



const rows = document.getElementsByClassName("row");
let currentHour = parseInt(moment().format('H'));

Array.from(rows).forEach(row => {
  let
    rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }
  if (rowHour) {
    
    if (currentHour === rowHour) {
      setColor(row, "#ff6961");
    } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
      setColor(row, "#77dd77");
    } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
      setColor(row, "#d3d3d3");
    } else {
      setColor(row, "white");
    }
  }
});

function setColor(element, color) {
  element.style.backgroundColor = color;
}



  $(document).ready (function () {
    $("*[data-store]").each(function () {
      $(this).val(localStorage.getItem("item-" + $(this).attr("data-store")));
    });

    $("*[data-store]").on("keyup", function (itm) {
      localStorage.setItem ("item-" + $(this).attr("data-store"), $(this).val());
    })
  })

  $( "#save" ).click(function() {
    alert( "Appointment Added to" + localStorage );
  });