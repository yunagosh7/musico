import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import Song from '../../../interfaces/Song';
import PlayIcon from '../Icons/PlayIcon';
import StopIcon from '../Icons/StopIcon';

type Props = {
	song: Song;
};

const formatTime = (time: number): string => {
	const minutes = Math.floor(time / 60);
	const seconds = Math.floor(time % 60);
	return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const SongReproducer = ({ song }: Props) => {
	const [isPlaying, setIsPlaying] = useState(true);

	const audioRef = useRef<HTMLAudioElement>(null);
	const progressBarRef = useRef<HTMLDivElement>(null);

	const currentTimeRef = useRef<HTMLDivElement>(null);
	const totalDurationRef = useRef<HTMLDivElement>(null);

	const updateProgressBar = useCallback(() => {
		if (audioRef.current && progressBarRef.current) {
			const { currentTime, duration } = audioRef.current;
			const progress = (currentTime / duration) * 100 || 0;
			progressBarRef.current.style.width = `${progress}%`;
		}
	}, []);

	useEffect(() => {
		const audio = audioRef.current;
		if (!audio) return;

		const updateCurrentTime = () => {
			if (currentTimeRef.current) {
				currentTimeRef.current.textContent = formatTime(audio.currentTime);
			}
		};

		const setDuration = () => {
			if (totalDurationRef.current) {
				totalDurationRef.current.textContent = formatTime(audio.duration || 0);
			}
		};
		audio.addEventListener('timeupdate', updateCurrentTime);
		audio.addEventListener('timeupdate', updateProgressBar);
		audio.addEventListener('loadedmetadata', setDuration);

		return () => {
			audio.removeEventListener('timeupdate', updateCurrentTime);
			audio.removeEventListener('timeupdate', updateProgressBar);
			audio.removeEventListener('loadedmetadata', setDuration);
		};
	}, []);

	const onPlayBtn = () => {
		if (isPlaying) {
			audioRef.current?.pause();
			setIsPlaying(false);
		} else {
			audioRef.current?.play();
			setIsPlaying(true);
		}
	};
	return (
		<div className="absolute bottom-0 left-0 right-0 bg-white-25 bg-gradient-to-b from-[#00000033] via-[#00000033_11%] to-[#000000A6_95%]">
			<audio
				ref={audioRef}
				className="hidden"
				controls
				autoPlay
				src={song.song_url}></audio>

			<div className="bg-white-50 relative h-1">
				<div
					ref={progressBarRef}
					className="absolute bg-white-75 h-1"
					style={{ width: '0%' }}></div>
			</div>
			<div className="flex justify-between pt-4 pb-8 px-12">
				<div className="flex  gap-6">
					<img src={song.image_url} alt={song.name} className="h-16 w-16 rounded-lg" />
					<div className="flex flex-col justify-between h-full py-1">
						<h3 className="text-lg text-white-100">{song.name}</h3>
						<h4 className="text-lg text-white-50">Rels B</h4>
					</div>
				</div>
				<button onClick={onPlayBtn} className="button h-16 w-16 bg-white-75 rounded-full">
					{isPlaying ? (
						<StopIcon className="w-7 h-7 fill-black-100" />
					) : (
						<PlayIcon className="w-7 h-7  fill-black-100" />
					)}
				</button>

				<div className="flex items-center">
					<span ref={currentTimeRef}>0:00</span> /{' '}
					<span ref={totalDurationRef}>0:00</span>
				</div>
			</div>
		</div>
	);
};
export default memo(SongReproducer);
