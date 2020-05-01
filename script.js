      //write live timekeeping from Moment.js to the page by referencing the html div currentDay
      $(document).ready(function() {
        //var a = moment().format();

        console.log("hello");
  
        var getLiveTime  = function() {
            var liveTime = moment().format("LLLL");
            $("#currentDay").text(liveTime);

        };
        getLiveTime()
        var currentHour = moment().hour(); 
        for (var hour = 9; hour <= 17; hour++) {
          var timeblockId = "#hour-" + hour;
          var timeBlockDiv  = document.querySelector(timeblockId)
          if (currentHour === hour) {
            timeBlockDiv.classList.add("present");
          } else if (currentHour > hour) {
            timeBlockDiv.classList.add("past");
          } else {
            timeBlockDiv.classList.add("future");
          }
      }
      

      });

     