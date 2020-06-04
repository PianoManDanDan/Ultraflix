import React from 'react';
import { ErrorBox, ErrorBoxProps } from '../src';

const getErrorBoxProps = (): ErrorBoxProps => ({
	errorCode: 404,
	heading: 'Oops something went wrong',
	message: 'This page does not exist.',
});

export default {
	title: 'ErrorBox',
	component: ErrorBox,
};

export const Story = () => <ErrorBox {...getErrorBoxProps()} />;
