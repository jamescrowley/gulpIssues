var myApp = window.myApp || {};

myApp.SomeView = function () {
    var getCellClass = function(prop) {
        var className = "default";
        if (prop && prop.Value !== prop.PreviousValue) {
            // try setting breakpoint on this line
            className = 'isChanged';
        }
        // also, if you add a breakpoint here, you will see the symbols (ie className/prop) have not been mapped
        return className;
    };
    return {
        getCellClass: getCellClass,
    };
};

var someView = new myApp.SomeView();
var cellClass = someView.getCellClass({ Value: 1, PreviousValue: 10});
document.getElementById('testEl').innerHTML = cellClass;