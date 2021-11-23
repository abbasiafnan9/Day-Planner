var currentday = $('#currentDay');
var scheduleDisplayEl = $('#scheduleDisplay')
var hour = $('.hour');
var h9 = $('#9');
var h9 = $('#10');
var h9 = $('#11');
var h9 = $('#12');
var h9 = $('#13');
var h9 = $('#14');
var h9 = $('#15');
var h9 = $('#16');
var h9 = $('#17');
var saveBtn = $('.saveBtn');

var currentDay = moment();
$("#currentDay").text(currentDay.format("MMM Do, YYYY"));

var time = moment().format("H");

function tasks() {
  for (let i = 9; i <= 17; i++) {
      var getTask = localStorage.getItem(i);
      $('#' + i).val(getTask);
  }
}

function color() {
    for (let hour = 9; hour <= 17; hour++) {
        console.log(hour)
        if (hour == time) {
            $("#" + hour).addClass("present");
        } else if (hour < time) {
            $("#" + hour).addClass("past")
        } else if (hour > time) {
            $("#" + hour).addClass("future")
        }
    }
}

color();
tasks();

saveBtn.click(function(event) {
  var task = $(event.target).prev().val();
  var hourID = $(event.target).prev().attr("id")
  localStorage.setItem(hourID, task)
})