'use strict';
EC.modules.RowsCreator = function (columnFn, rowFn, numCols) {

  var columnFn = columnFn;
  var rowFn = rowFn;
  var numCols = numCols;

  var _createSingleRow = function (singleRowData) {
    var cols = _.map(singleRowData, columnFn, this);
    return rowFn(cols);
  };

  this.create = function (dataArr) {
    var arrOfDataArrs = _.chunk(dataArr, numCols);
    return _.map(arrOfDataArrs, _createSingleRow, this);
  };

}