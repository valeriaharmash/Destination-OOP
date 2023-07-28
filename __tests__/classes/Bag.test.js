const Bag = require("../../classes/Bag");
const Person = require("../../classes/Person");


describe("Bag", () => {
	it("should check if weigh and id have been assigned correctly", () => {
		const bag = new Bag(40, 2);

		expect(bag.id).toBe(2)
		expect(bag.weight).toBe(40)
	})

	it("should check if bag is assigned an owner", () => {
		const person1 = new Person('John')
		const bag = new Bag(40, 2);

		bag.assignOwner(person1)

		expect(bag.owner).toBe(person1)
	})

	it("should check if owner is initially assigned null", () => {
		const bag = new Bag(40, 2);

		expect(bag.owner).toBe(null)
	})
})