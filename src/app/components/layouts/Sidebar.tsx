import React from 'react';
import appLogo from '../../assets/app-logo.svg';
import Image from 'next/image';
import HomeIcon from '../Icons/HomeIcon';
import SongsLibraryIcon from '../Icons/SongsLibraryIcon';

export default function Sidebar() {
	return (
		<aside className="hidden sm:flex flex-col sm:w-44 md:w-64 lg:w-80">
			<div className="py-10 bg-gradient-to-b from-white-25 via-[#000000BF_80%]">
				<Image src={appLogo} alt="App logo" className={'w-32 mx-auto'} />
			</div>
			<div className="px-4 flex flex-col gap-2">
				<div>
					<button className="sidebar-key-item">
						<HomeIcon className="fill-white-100 w-6 h-6" />
						Home
					</button>
					{/* <ul className='pl-4'>
					<li className='sidebar-key-subitem'>For you</li>
					<li className='sidebar-key-subitem'>Relax</li>
					<li className='sidebar-key-subitem'>Workout</li>
					<li className='sidebar-key-subitem'>Travel</li>
					<li className='sidebar-key-subitem'>Focus</li>
					<li className='sidebar-key-subitem'>Energize</li>
				</ul> */}
				</div>
				{/* <button className='sidebar-key-item'>
				<SearchIcon className='fill-white-100 w-6 h-6' />
				Browse Music
			</button> */}
				<button className="sidebar-key-item">
					<SongsLibraryIcon className="fill-white-100 w-6 h-6" />
					Your Library
				</button>
			</div>
		</aside>
	);
}
