import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const images = [
  "../info/ideate2024/organising_team/booth.jpg",
  "../info/ideate2024/organising_team/pre_event.png",
  "../info/ideate2024/organising_team/pre_event_2.png",
  "../info/ideate2024/organising_team/media.png"
];

export function OrganiserCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnMouseEnter: true, stopOnInteraction: false })
  )
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
    >
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <div className="flex aspect-3/2 items-center justify-center rounded-2xl border-3 border-white overflow-hidden">
              <img
                src={src}
                alt={`Carousel Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:block"/>
      <CarouselNext className="hidden md:block"/>
    </Carousel>
  )
}
