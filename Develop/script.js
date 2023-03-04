$(function () {
  var saveBtns = $(".saveBtn");
  for (var i = 0; i < saveBtns.length; i++) {
    saveBtns[i].addEventListener("click", function () {
      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
      localStorage.setItem(time, text);
    });
  }

  function timeUpdate() {
    var timeNow = dayjs().hour();
    var containerTime = $(".time-block");

    for (var i = 0; i < containerTime.length; i++) {
      var container = parseInt(containerTime[i].id.split("-")[1]);
      if (container === timeNow) {
        $(containerTime[i]).addClass("present");
      } else if (container < timeNow) {
        $(containerTime[i]).addClass("past");
        $(containerTime[i]).removeClass("present");
      } else {
        $(containerTime[i]).addClass("future");
        $(containerTime[i]).removeClass("present");
        $(containerTime[i]).removeClass("past");
      }
    }
  }
  timeUpdate();

  setInterval(timeUpdate, 30000);

  for (var i = 9; i < 24; i++) {
    var hourNum = "hour-" + i;
    $("#" + hourNum + " .description").val(localStorage.getItem(hourNum));
  }

  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY h:mm:ss a"));
});
