import React from 'react';
import { SubThing } from './subcomponents/Carousel';

export const WhatsOn: React.FC<{}> = () => {
	return (
		<div>
			<p>What&apos;s On in the cinema</p>
			<SubThing />
		</div>
	);
};
