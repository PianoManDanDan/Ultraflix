import 'core-js/stable';
import 'regenerator-runtime/runtime';
import '../src/globalStyles/global.scss';

import { addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

addParameters({
	options: {
		panelPosition: 'bottom',
	},
});

addDecorator(withA11y);
addDecorator(withKnobs);