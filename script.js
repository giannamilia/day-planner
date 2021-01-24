var theDate = document.querySelector("#currentDay");
console.log(theDate);

var mons = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];
var currentMon = mons[(new Date()).getMonth()]
console.log(currentMon)

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var currentDay = days[(new Date()).getDay()]
console.log(currentDay)

var currentDate = (new Date()).getDate()
console.log(currentDate)

theDate.textContent = currentDay + ", " + currentMon+ " " + currentDate

// function timeBlocks () {
//     let text = document.querySelectorAll('.text-input');
//     text.forEach(function(area) {
//         if(parseInt(area.dataset.hour) < currentHour) {
//             area.classList.add('past');
//         } else if(parseInt(area.dataset.hour) === currentHour) {
//             area.classList.add('present');
//         } else {
//             area.classList.add('future');
//         })
//     }
// }

// function TimeShowing() {
//     for (let i=0; i < hourlyTime.length; i++) {
//         theHour++
//     }
//     timeBlocks();
// };
//     TimeShowing

// const addText = (ev) => {
//     let time = []
//     let fields = document.querySelectorAll("#hourBlock", "#hourBlock2", "#hourBlock3", "#hourBlock4", "#hourBlock5", "#hourBlock6", "#hourBlock7", "#hourBlock8");
//     fields.forEach(function (element) {
//         time.push({
//             field: element.id,
//             text: element.querySelectorAll(".text-input").value
//         });
//     });

// document.querySelectorAll(".saveButton").forEach(function (btn) {
//     btn.addEventListener("click", addText);
// });
// if (stored) {
//     stored.forEach(function (item) {
//         document
//         .querySelector("#" + item.field)
//         .querySelector(".text-input").value = item.text;
//     });
// }


//queryselectorall to grab all the textareas 
// save to a variable (this will actually be set to an array of all the textareas)
// loop through the textareas and check if the time is eqaul to greater than or less than the current hour
// compare the value with the current hours - get the current hour using the date object
// set the color by adding the class from the stylesheet they gave you
// use parseint on the value
