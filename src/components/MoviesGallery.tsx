import * as React from "react"
import { type Show } from "@utils/shows"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/ui/carousel"



type Props = {
  showsData: Show[]
} 

export default function MediaCarousel({showsData}: Props) {
  return (
    <Carousel className=" w-full">
      <CarouselContent>
{
  showsData.map(({ imdbID, Poster, Title }, i) => {
    return (
    <CarouselItem key={i} className="max-w-52">
        <div className="group relative h-fit w-full rounded-xl">
        <img
            src={Poster}
            className="rounded-xl aspect-[9/16] object-cover"
            alt=""
          />


        <div className="absolute flex left-0 top-0 h-full w-full opacity-0 group-hover:opacity-100  rounded-xl bg-gradient-to-b from-[rgba(0,0,0,0)] from-70% to-skin-accent  duration-500 " >
            <a 
                className="z-50 place-self-end"
                href={`https://www.imdb.com/title/${imdbID}`}>
                <span className="p-3 text-lg font-bold text-white duration-300 group-hover:flex text-balance">{Title}</span>
            </a>
        </div>
          </div>
      </CarouselItem>

    );
  })
}
      </CarouselContent>
      <CarouselPrevious className="left-3 scale-[1.5]" />
      <CarouselNext className="right-3 scale-[1.5]" />

    </Carousel>
  )
}




