import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

type Props = {
	children: React.ReactNode;
};

export default function LayoutContainer({ children }: Props) {
	return (
		<div>
			<Navbar />
			<main className="flex">
				<Sidebar />
				{children}
			</main>
		</div>
	);
}
