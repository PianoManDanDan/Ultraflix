import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-extended';
import { WhatsOn } from '../src';

describe('WhatsOn Component', () => {
	it('renders without crashing', () => {
		render(<WhatsOn />);
	});
});
