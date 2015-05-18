var fundApps = window.fundApps || {};

fundApps.AssetDataView = function () {
    var getCellClass = function(prop) {
        var className = "default";
        if (prop && prop.Value !== prop.PreviousValue) {
            // try setting breakpoint on this line
            className = 'isChanged';
        }
        return className;
    };
    return {
        getCellClass: getCellClass,
    };
};

var ado = new fundApps.AssetDataView();
var cellClass = ado.getCellClass({ Value: 1, PreviousValue: 10});
document.getElementById('testEl').innerHTML = cellClass;