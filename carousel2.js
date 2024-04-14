import EmblaCarousel from 'https://cdn.jsdelivr.net/npm/embla-carousel@8.0.2/+esm'
import { addPrevNextBtnsClickHandlers } from 'https://cdn.jsdelivr.net/gh/okpsuru/botaniq-cdn@main/EmblaCarouselArrowButtons.min.js'
import { addDotBtnsAndClickHandlers } from 'https://cdn.jsdelivr.net/gh/okpsuru/botaniq-cdn@main/EmblaCarouselDotButton.min.js'
import Autoplay from 'https://cdn.jsdelivr.net/npm/embla-carousel-autoplay@8.0.2/+esm'


const OPTIONS = { loop: true }

const emblaNode = document.querySelector('.embla')
const viewportNode = emblaNode.querySelector('.embla__viewport')
const prevBtnNode = emblaNode.querySelector('.embla__button--prev')
const nextBtnNode = emblaNode.querySelector('.embla__button--next')
const dotsNode = emblaNode.querySelector('.embla__dots')

const emblaApi = EmblaCarousel(viewportNode, OPTIONS, [Autoplay()])

const onNavButtonClick = (emblaApi) => {
  const autoplay = emblaApi?.plugins()?.autoplay
  if (!autoplay) return

  const resetOrStop =
    autoplay.options.stopOnInteraction === false
      ? autoplay.reset
      : autoplay.stop

  resetOrStop()
}

const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
  emblaApi,
  prevBtnNode,
  nextBtnNode,
  onNavButtonClick
)
const removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(
  emblaApi,
  dotsNode,
  onNavButtonClick
)

emblaApi.on('destroy', removePrevNextBtnsClickHandlers)
emblaApi.on('destroy', removeDotBtnsAndClickHandlers)

