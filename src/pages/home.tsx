import React, { useState } from 'react'

import { SongService } from '../services/SongService';
import Song from '../interfaces/Song';
import SongCard from '../app/components/Cards/SongCard';
import SongReproducer from '../app/components/layouts/SongReproducer';

type Props = {
  songs: Song[]
}


export default function Home({
  songs
}: Props) {

  console.log({ songs })
  const [currentSong, setCurrentSong] = useState<Song | undefined>(undefined)

  const onCardClick = (song: Song) => {
    setCurrentSong(undefined)
    setTimeout(() => {

      setCurrentSong(song)
    }, 150)
    console.log(song)
  }

  return (
    <div>
      <div className='flex flex-wrap'>

        {songs?.length ?
          songs.map((song, index) =>

            <SongCard
              onCardClick={onCardClick}
              key={index} song={song} />
          )
          : null}
      </div>

      {currentSong ? (
        <SongReproducer song={currentSong} />
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