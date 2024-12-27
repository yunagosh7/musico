import { RegisterOptions } from 'react-hook-form';
import Song from './interfaces/Song';

type Rules = Omit<
	RegisterOptions<T, V>,
	'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
>;

type CreateSong = Pick<Song, 'song_url' | 'image_url' | 'name'>;
