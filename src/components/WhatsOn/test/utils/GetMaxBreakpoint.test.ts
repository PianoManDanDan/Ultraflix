import { getMaxBreakpoint } from '../../src/utils';

describe('GetMaxBreakpoint', () => {
	const validViewportNames = ['xs', 'sm', 'md', 'lg'];
	describe.each(validViewportNames)(
		'When passed %s as a viewport name',
		(viewport) => {
			it('returns an integer', () => {
				// Act
				const result = getMaxBreakpoint(viewport);

				// Assert
				expect(typeof result === 'number').toBe(true);
			});
		}
	);
	describe('When passed an invalid viewport name', () => {
		it('returns a NaN', () => {
			// Arrange
			const invalidViewportName = 'invalidViewport';

			// Act
			const result = getMaxBreakpoint(invalidViewportName);

			// Assert
			expect(result).toBeNaN();
		});
	});
});
