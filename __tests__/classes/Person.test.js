
const Person = require('../../classes/Person')
const Bag = require('../../classes/Bag')
describe('Person', () => {
	it('should check name and destination properties are assigned correctly', () => {
		const person = new Person('John', 'JFK')
		expect(person.name).toBe('John')
		expect(person.destination).toBe('JFK')
	})
	it('should have bags that initialize with an empty array', () => {
		const person = new Person('John', 'JFK')
		expect(person.bags).toEqual([])
	})
	it('should add a bag to the owners bag array', () => {
		const person = new Person('John', 'JFK')
		const bag = new Bag(40, 2)
		person.addBag(bag)
		expect(person.bags).toContain(bag)
	})
	it('should return the array of bags assigned to the owner', () => {
		const person = new Person('John', 'JFK')
		const bag = new Bag(40, 2)
		person.addBag(bag)
		ownersBags = person.getBags(bag)
		expect(ownersBags).toContain(bag)
	})
})

