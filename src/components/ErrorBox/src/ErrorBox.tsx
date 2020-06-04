import React from 'react';
import { ErrorBoxProps } from './types';
import './ErrorBox.scss';

export const ErrorBox: React.FC<ErrorBoxProps> = ({
	errorCode,
	heading,
	message,
}) => (
	<div className="error-box app-content-container">
		<div className="error-box__heading">
			{heading}({errorCode})
		</div>
		<div className="error-box__message">{message}</div>
	</div>
);
