const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		if(maxSize){
			this.maxSize = maxSize;
		}
		else{
            this.maxSize = 30;
		}
		this.heap = new MaxHeap();
	}

	push(data, priority) {
		this.heap.push(data, priority);
		console.log(`1`);
		if(this.heap.size == this.maxSize){
			console.log(`2`);
			throw new Error('queue has max size');
			console.log(`3`);
		}
	}

	shift() {

	}

	size() {

	}

	isEmpty() {
		
	}
}

module.exports = PriorityQueue;
