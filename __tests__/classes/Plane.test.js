const Plane = require('../../classes/Plane')
const Person = require('../../classes/Person')

describe('Plane', () => {
	it('should check that company, origin and destination are assigned correct values', () => {
		const plane = new Plane('Alaska', 'LA', 'Hawaii')

		expect(plane.company).toBe('Alaska')
		expect(plane.origin).toBe('LA')
		expect(plane.destination).toBe('Hawaii')
	})

	it('should check that passengers arr initializes as an empty arr', () => {
		const plane = new Plane('Alaska', 'LA', 'Hawaii')

		expect(plane.passengers).toEqual([])
	})

	it('should verify that passenger can be added to passenger arr', () => {
		const plane = new Plane('Alaska', 'LA', 'Hawaii')
		const passenger = new Person('John', 'Hawaii')

		plane.addPassenger(passenger)

		expect(plane.passengers).toContain(passenger)
	})

	it('should return array of passengers', () => {
		const plane = new Plane('Alaska', 'LA', 'Hawaii')
		const passenger = new Person('John', 'Hawaii')

		plane.addPassenger(passenger)

		planePassengers = plane.getPassengers()

		expect(planePassengers).toContain(passenger)
	})
})
