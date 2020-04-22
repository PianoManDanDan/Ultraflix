import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-extended';
import { HomePage } from '../src';

describe('{{componentName}} Component', () => {
	it('renders without crashing', () => {
		render(<HomePage />);
	});
});
