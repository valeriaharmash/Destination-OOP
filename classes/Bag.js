class Bag {
	constructor(weight, id) {
		this.weight = weight;
		this.id = id;
		this.owner = null;
	}

	assignOwner(person) {
		this.owner = person;
	}

}


module.exports = Bag;