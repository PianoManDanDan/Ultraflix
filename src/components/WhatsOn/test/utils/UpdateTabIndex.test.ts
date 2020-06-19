import { enableTabbing, disableTabbing } from '../../src/utils';

describe('enableTabbing', () => {
	describe('When the element exists in the DOM', () => {
		it('updates the tabIndex', () => {
			// Arrange
			document.body.innerHTML = `
				<div>
					<span class="slick-current" tabIndex="-1">test</span>
				</div>
				`;

			// Act
			enableTabbing();

			// Assert
			expect(
				document.querySelector('.slick-current')?.tabIndex as HTMLElement
			).toBe(0);
		});
	});
	describe('When the element does not exist in the DOM', () => {
		it('does not update the tabIndex', () => {
			// Arrange
			document.body.innerHTML = `
				<div>
					<span class="not-current" tabIndex="-1">test</span>
				</div>
				`;

			// Act
			enableTabbing();

			// Assert
			expect(
				document.querySelector('.not-current')?.tabIndex as HTMLElement
			).toBe(-1);
			expect(document.querySelector('.slick-current')).toBe(null);
		});
	});
});

describe('disableTabbing', () => {
	describe('When the element exists in the DOM', () => {
		it('updates the tabIndex', () => {
			// Arrange
			document.body.innerHTML = `
				<div>
					<span data-index="1" tabIndex="0">test</span>
				</div>
				`;

			// Act
			disableTabbing(1);

			// Assert
			expect(
				document.querySelector('[data-index="1"]')?.tabIndex as HTMLElement
			).toBe(-1);
		});
	});
	describe('When the element does not exist in the DOM', () => {
		it('does not update the tabIndex', () => {
			// Arrange
			document.body.innerHTML = `
				<div>
					<span data-index="0" tabIndex="0">test</span>
				</div>
				`;

			// Act
			disableTabbing(1);

			// Assert
			expect(
				document.querySelector('[data-index="0"]')?.tabIndex as HTMLElement
			).toBe(0);
			expect(document.querySelector('[data-index="1"]')).toBe(null);
		});
	});
});
