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
		node.parent = null;
	}

	remove() {
		if(!this.parent) return;
		this.parent.removeChild(this);
	}

	swapWithParent() {
    if(!this.parent) return;

		let parentOfParent = null;
    let parentBranch = null;

		if(this.parent.parent) {
			parentOfParent = this.parent.parent;

			parentBranch = this.parent === parentOfParent.left ? 'left' : 'right';
		};

		const oldParent = this.parent;
		oldParent.parent = this;

		if(this.getSibling()){
		  this.getSibling().parent = this;
		}

    this.right = this.parent.right;
		this.parent.left = this.left;
		this.left = this.parent;

		if(!parentOfParent) return;
		  this.parent = parentOfParent;

			this.parent[parentBranch] = this;
	}

	getSibling() {
		if(!this.parent) return;
		if(this === this.parent.left) {
			return this.parent.right;
		}
		if(this === this.parent.right){
			return this.parent.left;
		}
	}
}

module.exports = Node;
