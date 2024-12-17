import React, { useState } from 'react'

import { useRouter } from 'next/navigation';
import { SongService } from '../services/SongService';
import Song from '../interfaces/Song';
import SongCard from '../app/components/Cards/SongCard';

type Props = {
  songs: Song[]
}


export default function Home({
  songs
}: Props) {

  console.log({ songs })
  const router = useRouter()
  const [currentSong, setCurrentSong] = useState<Song | undefined>(undefined)

  const onCardClick = (song: Song) => {
    console.log(song)
    setCurrentSong(song)
  }

  return (
    <div>
      {songs?.length ?
        songs.map((song, index) =>

          <SongCard
            onCardClick={onCardClick}
            key={index} song={song} />
        )
        : null}

        {currentSong ? (
          <div>
            <audio controls autoPlay>
              <source src={currentSong.song_url}></source>
            </audio>
          </div>
        ) : null}
    </div>
  )
}


export async function getServerSideProps() {
  try {
    const res = await SongService.getAllSongs()
    return {
      props: {
        songs: res.data
      }
    }
  } catch (er) {
    console.error("Error fetching data", er)
    return {
      props: {


      }
    }
  }
}