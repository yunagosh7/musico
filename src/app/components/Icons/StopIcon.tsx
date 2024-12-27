import React from 'react';

type Props = {
	className?: string;
};

export default function StopIcon({ className = '' }: Props) {
	return (
		<svg
			className={className}
			focusable="false"
			aria-hidden="true"
			viewBox="0 0 24 24"
			data-testid="PauseIcon">
			<path d="M6 19h4V5H6zm8-14v14h4V5z"></path>
		</svg>
	);
}
