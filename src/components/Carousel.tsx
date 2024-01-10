import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const carouselPlugins = [Autoplay({  delay: 2000, stopOnInteraction: true,  pauseOnMouseEnter: true,  })]

type Props = {
    media: string[]
}

function Image ({ src }: { src: string }) {
  return (
    <img
      src={src}
      alt="image"
      className="rounded-lg"
    />
  )
}


function Video ({ src }: { src: string }) {
    return ( 
        <video className="rounded-lg" controls>
            <source src={src} type="video/mp4" />
        </video>
    )
}

function MediaItem({src}: {src: string}) {
  if (src.endsWith(".mp4")) {
    return <Video src={src} />
  } else {
    return <Image src={src} />
  }
}


export default function MediaCarousel(props: Props) {
  return (
    <Carousel plugins={carouselPlugins} className=" w-full">
      <CarouselContent>
        {props.media.map((src: string, index: number) => (
          <CarouselItem key={index}>
                <MediaItem src={src} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-3" />
      <CarouselNext className="right-3" />

    </Carousel>
  )
}
