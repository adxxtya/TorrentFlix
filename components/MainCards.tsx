import React from 'react'
import Image from 'next/image'

function MainCards(props: any) {
  return (
    <div className='flex flex-wrap justify-center items-center mt-24 mb-16 gap-8 space-y-2'>
        <Card title="Anime" desc="Watch Anime Online For Free" img="/assets/animes.gif" img_static="/assets/animes_static.png"/>
        <Card title="Web Series" desc="Watch Anime Online For Free" img="/assets/series.gif" img_static="/assets/series_static.png"/>
        <Card title="Movies" desc="Watch Anime Online For Free"  img="/assets/movie.gif" img_static="/assets/movie_static.png"/>
        <Card title="Youtube" desc="Watch Anime Online For Free" img="/assets/youtube.gif" img_static="/assets/youtube_static.png"/>
    </div>
  )
}

function Card(props: any) {
    return (

            <div className='relative hover:shadow-sm hover:shadow-yellow-200 h-80 w-60 flex-row items-center justify-center rounded-lg cursor-pointer hover:scale-[1.02]'>
                <img className="absolute object-cover h-full rounded-lg hover:opacity-0" src={props.img_static} />
                <img className="object-cover h-full rounded-lg" src={props.img} />
                <h1 className='absolute top-48 left-4 text-4xl font-bold text-white'>{props.title}</h1> 
                <p className='absolute top-56 left-4 text-white'>{props.desc}</p>
            </div>
    
    )   
}

export default MainCards

