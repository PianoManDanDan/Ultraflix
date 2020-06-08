import React from 'react';
import { number, text } from '@storybook/addon-knobs';
import { ErrorBox, ErrorBoxProps } from '../src';

const getErrorBoxProps = (): ErrorBoxProps => ({
	errorCode: number('Error Code', 404),
	heading: text('Error heading', 'Oops something went wrong'),
	message: text('Error message', 'This page does not exist.'),
});

export default {
	title: 'ErrorBox',
	component: ErrorBox,
};

export const Story = () => <ErrorBox {...getErrorBoxProps()} />;
