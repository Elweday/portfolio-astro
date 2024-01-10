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
    images: string[]
}

export default function CarouselDemo(props: Props) {
  return (
    <Carousel plugins={carouselPlugins} className=" w-full">
      <CarouselContent className="">
        {props.images.map((src: string, index: number) => (
          <CarouselItem key={index} className="">
                <img
                  src={src}
                  alt="image"
                  className="bg-red-500 rounded-lg"
                />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-3" />
      <CarouselNext className="right-3" />

    </Carousel>
  )
}
