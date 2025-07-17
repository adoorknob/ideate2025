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
  "../info/ideate2024/ideate2024_intro.jpeg",
  "../info/eureka/eureka_1.jpg",
  "../info/ideate2024/turnout.jpeg",
  "../info/eureka/eureka_2.jpg",
  "../info/ideate2024/finals.jpeg",
  "../info/eureka/eureka_3.jpg",
  "../info/ideate2024/participant1.jpeg",
  "../info/eureka/eureka_4.jpg",
  "../info/ideate2024/participant2.jpeg",
  "../info/ideate2024/participant3.jpeg",
];

export function EventCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnMouseEnter: true, stopOnInteraction: false })
  )
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full content-center"
    >
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <div className="flex aspect-3/2 content-center justify-center rounded-2xl border-3 border-white overflow-hidden">
              <img
                src={src}
                alt={`Carousel Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:grid"/>
      <CarouselNext className="hidden md:grid"/>
    </Carousel>
  )
}
