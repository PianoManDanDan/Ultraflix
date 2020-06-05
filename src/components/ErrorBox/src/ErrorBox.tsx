import React, { useEffect } from 'react';
import { ErrorBoxProps } from './types';
import './ErrorBox.scss';

export const ErrorBox: React.FC<ErrorBoxProps> = ({
	errorCode,
	heading,
	message,
}) => {
	useEffect(() => {
		document.title = `${errorCode}`;
	}, [errorCode]);

	if (!heading || !message) {
		return null;
	}

	return (
		<div className="error-box app-content-container">
			<div className="error-box__heading">
				{heading} {errorCode ? ` (${errorCode})` : ''}
			</div>
			<div className="error-box__message">{message}</div>
		</div>
	);
};
