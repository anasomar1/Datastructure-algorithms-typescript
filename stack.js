var StackArray = /** @class */ (function () {
    function StackArray() {
        this.items = [];
    }
    StackArray.prototype.insertAtEnd = function (element) {
        this.items.push(element);
    };
    StackArray.prototype.removeAtEnd = function () {
        this.items.pop();
    };
    StackArray.prototype.elementAtEnd = function () {
        return this.items[this.items.length - 1];
    };
    StackArray.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    StackArray.prototype.clear = function () {
        this.items = [];
    };
    return StackArray;
}());
var StackObject = /** @class */ (function () {
    function StackObject() {
        this.count = 0;
        this.items = {};
    }
    StackObject.prototype.insertAtEnd = function (element) {
        this.items[this.count] = element;
        this.count++;
    };
    StackObject.prototype.removeAtEnd = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        var result = this.items[this.count];
        delete this.items[this.count];
        this.count--;
        return result;
    };
    StackObject.prototype.elementAtEnd = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    };
    StackObject.prototype.isEmpty = function () {
        return this.count === 0;
    };
    StackObject.prototype.size = function () {
        return this.count;
    };
    StackObject.prototype.clear = function () {
        this.items = {};
        this.count = 0;
    };
    return StackObject;
}());
