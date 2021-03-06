import { halveAndRound } from '../../src/utils';

describe('halveAndRound util', () => {
	describe('When passed a number', () => {
		it('correctly halves the value and rounds to the nearest 0.5', () => {
			// Arrange
			const integer = 12;
			const point25 = 12.25;
			const point5 = 12.5;
			const point75 = 12.75;

			// Act
			const integerResult = halveAndRound(integer);
			const point25Result = halveAndRound(point25);
			const point5Result = halveAndRound(point5);
			const point75Result = halveAndRound(point75);

			// Assert
			expect(integerResult).toStrictEqual(6);
			expect(point25Result).toStrictEqual(6);
			expect(point5Result).toStrictEqual(6.5);
			expect(point75Result).toStrictEqual(6.5);
		});
	});
	describe('When not passed a number', () => {
		describe.each(['test', '123', '12.3'])(
			"When passed '%s' as a string",
			(testString) => {
				it('Throws a TypeError', () => {
					try {
						// Act
						halveAndRound((testString as unknown) as number);
						fail('No error was thrown');
					} catch (error) {
						// Assert
						expect(error).toBeInstanceOf(TypeError);
					}
				});
			}
		);

		describe('When passed a boolean value', () => {
			it('Throws a TypeError', () => {
				try {
					// Act
					halveAndRound((true as unknown) as number);
					fail('No error was thrown');
				} catch (error) {
					// Assert
					expect(error).toBeInstanceOf(TypeError);
				}
			});
		});

		describe('When passed null', () => {
			it('Throws a TypeError', () => {
				try {
					// Act
					halveAndRound((null as unknown) as number);
					fail('No error was thrown');
				} catch (error) {
					// Assert
					expect(error).toBeInstanceOf(TypeError);
				}
			});
		});

		describe('When passed undefined', () => {
			it('Throws a TypeError', () => {
				try {
					// Act
					halveAndRound((undefined as unknown) as number);
					fail('No error was thrown');
				} catch (error) {
					// Assert
					expect(error).toBeInstanceOf(TypeError);
				}
			});
		});
	});
});
