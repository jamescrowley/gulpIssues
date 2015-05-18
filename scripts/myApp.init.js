var someView = new myApp.SomeView();
var cellClass = someView.getCellClass({ Value: 1, PreviousValue: 10});
document.getElementById('testEl').innerHTML = cellClass;