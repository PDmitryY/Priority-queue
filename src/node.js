class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if(!this.left) {
			this.left = node;
		}
		else if(!this.right) {
			this.right = node;
		}
	}

	removeChild(node) {
        this.left = null;
        if(this.right) {
        	this.right = null;
        }
	}

	remove() {

	}

	swapWithParent() {
		
	}
}

module.exports = Node;
