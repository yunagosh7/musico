import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import Song from '../interfaces/Song';

type SongStore = {
	songs: Song[];
	addSong: (song: Song) => void;
};

export const useSongStore = create<SongStore>()(
	devtools(
		persist(
			(set, get) => ({
				songs: [],
				addSong: (song) => set({ songs: [...get().songs, song] }),
			}),
			{
				name: 'SongStore',
			}
		)
	)
);
