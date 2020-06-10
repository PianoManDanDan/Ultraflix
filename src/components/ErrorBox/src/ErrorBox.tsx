import React from 'react';
import { ErrorBoxProps } from './types';
import './ErrorBox.scss';

export const ErrorBox: React.FC<ErrorBoxProps> = ({
	errorCode,
	heading,
	message,
}) => {
	if (!heading || !message) {
		return null;
	}

	return (
		<div className="app-content-container">
			<div className="error-box">
				<div className="error-box__heading">
					{heading} {errorCode ? ` (${errorCode})` : ''}
				</div>
				<div className="error-box__message">{message}</div>
			</div>
		</div>
	);
};
