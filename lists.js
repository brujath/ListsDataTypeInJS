(function(){

  var List = function () {
    this.listSize = 0;
    this.pos = 0;
    this.list = [];
  };

  List.prototype.front = function () {
    this.pos = 0;
  };

  List.prototype.end = function () {
    this.pos = this.listSize-1;
  };

  List.prototype.length = function () {
    return this.listSize;
  };

  List.prototype.clear = function () {
    delete this.list;
    this.list = [];
    this.pos = this.listSize = 0;
  };

  List.prototype.toString = function () {
    return this.list;
  };

  List.prototype.getElement = function() {
    return this.list[this.pos];
  };

  List.prototype.append = function (element) {
    this.list[this.listSize++] = element;
  };

  List.prototype.find = function (element) {
    for (var i=0; i<=this.length();i++) {
      if (this.list[i] == element) {
        return i;
      }
    }
    return -1;
  };

  List.prototype.insert = function (element, afterElement) {
    var insertionPosition = this.find(afterElement);

    if(insertionPosition > -1) {
      this.list.splice(insertionPosition+1,0,element);
      ++this.listSize;
      return true;
    }
    return false;
  };

  List.prototype.remove = function (element) {
    var elementPos = this.find(element);
    if (elementPos > -1) {
      this.list.splice(elementPos,1);
      --this.listSize;
      return true;
    }
    return false
  };

  window.List = List;
})();
