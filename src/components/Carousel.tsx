import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"


const carouselPlugins = [Autoplay({  delay: 4000, stopOnInteraction: true,  pauseOnMouseEnter: true,  })]

type Props = {
    media: any[]
}


function MediaItem({src}: {src: string}) {
    const isVideo = [".mp4", ".webm",".ogg",".webp",".avif",".mov",".mkv",].some(ext => src.endsWith(ext))
    if (isVideo) {
    return (
        <video className="rounded-lg" controls>
            <source src={src} type="video/mp4" />
        </video>
    )
  } else { 
    return (

        <img src={src} alt="image" className="rounded-lg" />
    )
  }
}


export default function MediaCarousel(props: Props) {
  return (
    <Carousel plugins={carouselPlugins} className=" w-full">
      <CarouselContent>
        {props.media.map((src: any, index: number) => (
          <CarouselItem key={index}>
                <MediaItem src={src.src} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-3" />
      <CarouselNext className="right-3" />

    </Carousel>
  )
}
