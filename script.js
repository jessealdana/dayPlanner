      //write live timekeeping from Moment.js to the page by referencing the html div currentDay
      
      $(document).ready(function() {
        //var a = moment().format();
        console.log("hello");
  
        var getLiveTime  = function() {
            var liveTime = moment().format("LLLL");
            $("#currentDay").text(liveTime);
        };

        /*--currentHour is a new variable for time from Moment.js formatted in military time so that
        a for loop can be written from hour 9 (9am) through hour 17 (5pm).--*/
        getLiveTime()
        var currentHour = moment().hour(); 
        for (var hour = 9; hour <= 17; hour++) {
            var timeblockId = "#hour-" + hour;
            var timeBlockDiv  = document.querySelector(timeblockId)
            /*--within the for loop the value of the hour of each time block is compared to the value of 
            current hour and a color, based on a class assignment in CSS, is added to the 
            time block according to whether that value is equal to, greater than, or less than that of the current hour*/
            if (currentHour === hour) {
              timeBlockDiv.classList.add("present");
            } else if (currentHour > hour) {
              timeBlockDiv.classList.add("past");
            } else {
            timeBlockDiv.classList.add("future");
            }
          }

      });

      //when the user clicks save the text input area in each row is targeted
      
      $(".saveBtn").on("click", function() {
        event.preventDefault();
        var textArea = this.parentNode;
        console.log("targetacquired")
        var text = textArea.childNodes[3]
        var description = text.value
        var container = textArea.id
        text[container] = description

        console.log(text[container])
  
        //the user input is saved to local storage
        var user = JSON.stringify(text);
        window.localStorage.setItem("text", user);
        var lastUser = JSON.parse(window.localStorage.getItem("text"));
        return(lastUser);
      })


      

     