import React from 'react';
import { useContentful, HookResponse } from 'react-contentful';
import './Header.scss';

export const Header: React.FC<{}> = () => {
	const headerContent: HookResponse = useContentful({
		id: '5eQp4nydbaKnXdR3NCMC70',
	});
	if (headerContent.loading || !headerContent.fetched) {
		return null;
	}

	if (headerContent.error) {
		console.error(headerContent.error);
		return null;
	}

	if (!headerContent.data) {
		return <p>Page does not exist.</p>;
	}

	return (
		<header>
			<img
				src={headerContent.data['fields'].logo['fields'].file.url}
				alt={headerContent.data['fields'].logo['fields'].description}
			/>
			<h1>{headerContent.data['fields'].companyName}</h1>
			<h1>
				ULTRAFL
				<img
					src={headerContent.data['fields'].logo['fields'].file.url}
					alt={headerContent.data['fields'].logo['fields'].description}
				/>
				X
			</h1>
		</header>
	);
};
