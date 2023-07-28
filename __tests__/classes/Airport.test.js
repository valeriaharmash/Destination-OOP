const Airport = require('../../classes/Airport')
const Plane = require('../../classes/Plane')

describe('Airport', () => {
	it('should test that name and planes are assigned correct values', () => {
		const airport = new Airport('John F Kennedy')

		expect(airport.name).toBe('John F Kennedy')
		expect(airport.planes).toEqual([])
	})

	it('should check that airportCode is the correct value ', () => {
		expect(Airport.airportCode).toBe('LAX')
	})

	it('should check that plane can be added to planes arr', () => {
		const airport = new Airport('John F Kennedy')
		const plane = new Plane('Alaska', 'LA', 'Hawaii')

		airport.addPlane(plane)

		expect(airport.planes).toContain(plane)
	})
})
