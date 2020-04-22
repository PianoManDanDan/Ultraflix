import React from 'react';
import { useContentful, HookResponse } from 'react-contentful';
// import './Footer.scss';

export const Footer: React.FC<{}> = () => {
	const footerContent: HookResponse = useContentful({
		id: '4psLuIzH33I6TptbtKJkVX',
	});

	if (footerContent.loading || !footerContent.fetched) {
		return null;
	}

	if (footerContent.error) {
		console.error(footerContent.error);
		return null;
	}

	if (!footerContent.data) {
		return <p>Page does not exist.</p>;
	}

	return (
		<div className="footer">
			<div>{footerContent.data['fields'].copyrightText}</div>
			<img
				src={footerContent.data['fields'].logo['fields'].file.url}
				alt={footerContent.data['fields'].logo['fields'].description}
			/>
			<div>{footerContent.data['fields'].companyText}</div>
		</div>
	);
};
