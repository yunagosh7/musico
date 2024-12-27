import React from 'react'
import appLogo from "../app/assets/app-logo.svg";
import Image from 'next/image';
import { SubmitHandler, useForm } from 'react-hook-form';
import Song from '../interfaces/Song';
import ControlledInput from '../app/components/controlled/ControlledInput';
import { SongService } from '../services/SongService';


type FormType = {
  songData: Pick<Song, "name">;
  songThumbnail: File;
  songFile: File;
}


export default function Upload() {

  const { control, register, handleSubmit } = useForm<FormType>({
    defaultValues: {
      songFile: undefined,
      songData: {
        name: ""
      },
      songThumbnail: undefined
    }
  })

  const onSubmit: SubmitHandler<FormType> = async ({ songFile, songData, songThumbnail }) => {

    console.log({ songFile })
    console.log({ songData })
    console.log({ songThumbnail })
    try {
      const res1 = await SongService.uploadFile(songFile[0].name, songFile[0])
      console.log({ res1 })
      const res2 = await SongService.uploadFile(songThumbnail[0].name, songThumbnail[0])
      console.log({ res2 })
      const NEXT_PUBLIC_SUPABASE_BUCKET_PUBLIC_URL =
        process.env.NEXT_PUBLIC_SUPABASE_BUCKET_PUBLIC_URL ?? "";

      const song: Song = {
        song_url: NEXT_PUBLIC_SUPABASE_BUCKET_PUBLIC_URL + (res1.data?.fullPath ?? ""),
        image_url: NEXT_PUBLIC_SUPABASE_BUCKET_PUBLIC_URL + (res2.data?.fullPath ?? ""),
        name: songData.name
      }
      const res3 = await SongService.createSong(song)
      console.log({ res3 })
    } catch (er) {
      console.error("Error uploading song", er)
    }
  }


  return (
    <div className='flex flex-col items-center'>
      <Image src={appLogo} alt="Application logo" />

      <h1 className='text-32'>Upload your song</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ControlledInput control={control} name='songData.name' className='input' />
        <label htmlFor="">Audio</label>
        <input {...register("songFile")} accept='audio/*' type="file" />
        <br />
        <br />
        <label htmlFor="">Image</label>
        <input {...register("songThumbnail")} accept='image/*' type="file" id='song_audio' />
      </form>
    </div>
  )
}
