import React from 'react';

type Props = {
	className?: string;
};

export default function HomeIcon({ className = '' }: Props) {
	return (
		<svg
			className={className}
			focusable="false"
			aria-hidden="true"
			viewBox="0 0 24 24"
			data-testid="HomeIcon">
			<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
		</svg>
	);
}
