import React from 'react';
import { TestComponent } from './testComponent';


export default {
	component: TestComponent,
	title: 'testComponent'
};

export const storyTest = () => {
	return (
		<TestComponent />
	);
}
