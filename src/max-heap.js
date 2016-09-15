const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
	}

	push(data, priority) {
		let node = new Node(data,priority);
		this.insertNode(node);
		this.shiftNodeUp(node);

	}

	pop() {
		
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
		
	}

	clear() {
		
	}

	insertNode(node) {
		if(!this.root) {
			this.root = node;
			return;
		}
		let leaf = this.root;

		while(leaf) {

			if(!leaf.left) {
			    leaf.left = node;
			    return;
			}
            if(!leaf.right) {
			    leaf.right = node;
			    return;
			}


			leaf = leaf.left;
        
		}
		let parent = this.parentNodes;
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
