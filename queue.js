var Queue = /** @class */ (function () {
    function Queue() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }
    Queue.prototype.enqueue = function (element) {
        this.items[this.count] = element;
        this.count++;
    };
    Queue.prototype.dequeue = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        var result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    };
    Queue.prototype.peek = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    };
    Queue.prototype.size = function () {
        return this.count - this.lowestCount;
    };
    Queue.prototype.isEmpty = function () {
        return this.size() === 0;
    };
    Queue.prototype.clear = function () {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    };
    return Queue;
}());
var queue = new Queue();
queue.enqueue("Ali");
queue.enqueue("Anas");
queue.dequeue();
console.log(queue);
