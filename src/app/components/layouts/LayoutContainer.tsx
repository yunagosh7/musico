import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

type Props = {
	children: React.ReactNode;
};

export default function LayoutContainer({ children }: Props) {
	return (
		<div className="flex">
			<Sidebar />
			<div className="md:pl-16 md:pt-12">
				<Navbar />
				<main className="flex">{children}</main>
			</div>
		</div>
	);
}
