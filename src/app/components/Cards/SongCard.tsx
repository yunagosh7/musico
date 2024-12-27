import React from 'react';
import Song from '../../../interfaces/Song';
import PlayIcon from '../Icons/PlayIcon';

type Props = {
	song: Song;
	onCardClick: (song: Song) => void;
};

export default function SongCard({ song, onCardClick }: Props) {
	return (
		<div onClick={() => onCardClick(song)} className="song-card relative">
			<div
				className="w-28 h-28 md:w-40 md:h-40 bg-contain"
				style={{
					backgroundImage: `url(${song.image_url})`,
				}}>
				<div className="flex justify-center items-center w-7 h-7 rounded-full bg-white-75 absolute bottom-14 left-2">
					<PlayIcon className="w-5 h-5  fill-black-100" />
				</div>
			</div>
			<p className="pt-2">{song.name}</p>
		</div>
	);
}
