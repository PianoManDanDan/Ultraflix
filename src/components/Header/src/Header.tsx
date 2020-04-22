import React from 'react';
import { useContentful, HookResponse } from 'react-contentful';
import './Header.scss';

export type HeaderProps = {
	logo: {
		url: string;
		description: string;
	};
	companyName: string;
};

export const Header: React.FC<{}> = () => {
	const headerContent: HookResponse = useContentful({
		id: '5eQp4nydbaKnXdR3NCMC70',
	});
	const logo: HookResponse = useContentful({
		id: '4V1H6JAO1iUCB0a9RW1kIs',
	});
	if (headerContent.loading || !headerContent.fetched) {
		return null;
	}

	if (headerContent.error) {
		console.error(headerContent.error);
		return null;
	}

	if (!logo.data) {
		return <p>Page does not exist.</p>;
	}

	if (logo.loading || !logo.fetched) {
		return null;
	}

	if (logo.error) {
		console.error(logo.error);
		return null;
	}

	if (!logo.data) {
		return <p>Page does not exist.</p>;
	}

	console.log('logo data: ', logo.data);

	return (
		<header>
			<a className="logo-link" href="/">
				<img
					className="logo"
					src={logo.data['fields'].logo['fields'].file.url}
					alt={logo.data['fields'].logo['fields'].title}
				/>
			</a>
		</header>
	);
};
