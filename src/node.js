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
			this.left.parent = this;
		}
		else if(!this.right) {
			this.right = node;
			this.right.parent = this;
		}
	}

	removeChild(node) {
        if(node == this.left) {
			this.left = null;
		}
        else if(node == this.right) {
	      	this.right = null;
        }
		else {
			throw new Error('you are trying to remove node which does not exist');
		}
	}

	remove(child) {
		this.removeChild(child);
		}

	swapWithParent() {

	}
}

module.exports = Node;
