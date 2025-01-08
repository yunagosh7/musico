import React from 'react';

type Props = {
	className?: string;
};

export default function CaretIcon({ className = '' }: Props) {
	return (
		<svg
			className={className}
			focusable="false"
			aria-hidden="true"
			viewBox="0 0 24 24"
			data-testid="KeyboardArrowDownIcon">
			<path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"></path>
		</svg>
	);
}
