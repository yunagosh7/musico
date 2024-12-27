import { supabase } from '../supabase/conn';
import { CreateSong } from '../types';

async function getAllSongs() {
	const res = supabase.from('song').select();
	console.log(res);
	return res;
}

function uploadFile(name: string, file: File) {
	return supabase.storage.from('songs').upload(name, file);
}

function createSong(song: CreateSong) {
	return supabase.from('song').insert(song);
}

export const SongService = {
	getAllSongs,
	uploadFile,
	createSong,
};
