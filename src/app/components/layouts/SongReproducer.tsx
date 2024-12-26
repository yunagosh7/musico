import React, { memo } from 'react'
import Song from '../../../interfaces/Song'

type Props = {
    song: Song
}

const SongReproducer = ({song}: Props) => {
  return (
    <div className='absolute bottom-0 left-0 right-0 bg-red-50'>
        <div>
            <audio controls autoPlay>
              <source src={song.song_url}></source>
            </audio>
          </div>
    </div>
  )
}
export default memo(SongReproducer)