//BINARY SEARCH TREES
// comprised of nodes
// the first node (the top of the tree) is called root
//can only have two branches per node (1 parent, max of 2 children)
//nodes with no children are called leaves
// ordered in such a way that each subtree is less than the parent node
// each right subtree is greater than the parent node
// due to its binary nature, operations will be able to skip half the tree, making lookups, insertions, and deletions faster

// create a BST object constructor 
const BST = function() {
	this.root = null;
	let Node = function(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}

	this.add = function(data) {
		const node = this.root;

		if (node === null) {
			this.root = new Node(data);
			return;
		} else {
			const searchTree = function(node) {
			if (data < node.data) {
				if (node.left === null) {
					node.left = new Node(data);
					return;
				} else {
					return searchTree(node.left);
				}
			} else if (data > node.data) {
				if (node.right === null) {
					node.right = new Node(data);
					return
				} else {
					return searchTree(node.right);
				}
			} else {
				return null;
			}

		} // end searchTree
		return searchTree(node);


	}

} //end add

	//this has a findMin method that will find the minimum value in your tree
	this.findMin = function() {
		let current = this.root;

		if (current === null) {
			console.log("BST is empty");
		} else {
			while (current.left != null){
				current = current.left
			}
		return current.data;
		}
	}


	//this has a findMax method that will find max value of the tree
	this.findMax = function() {
		let current = this.root;

		while (current.right != null){
			current = current.right
		}
		return current.data;
	}


	//this find method that will find the specific data in our bst by
	//accepting data as the argument to be found by the function

	this.find = function(data) {
		let current = this.root;

		while (current.data != data) {
			if (data < current.data) {
				current = current.left;
			} else if (data > current.data) {
				current = current.right 
			} else {
				return null;
			}
		} //end while

		return current;

	}

	//this isPresent method will return true or false depending
	//on whether the passed in data is in the tree or not

	this.isPresent = function(data) {
		let current = this.root;

		while(current != null) {
			if (data === current.data) {
				return true;
			} else if (data < current.data) {
				current = current.left;
			} else {
				current = current.right;
			}
		}
		return false;

	}

}// end BST constructor

//test implementation of binary search tree
//instantiate the BST object and assign it to variable bst
const bst = new BST();

bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(3);
bst.add(5);
bst.add(7);
bst.add(700);
bst.add(669);
bst.add(701);
console.log(bst)
console.log(bst.find(700))
console.log('the minimum value in our bst is ' + bst.findMin());
console.log('the maximum value in our bst is ' + bst.findMax());
console.log(bst.isPresent(7));

console.log(bst)	
