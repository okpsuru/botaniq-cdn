/*
Carousel: https://github.com/davidjerleke/embla-carousel/

*/

let embla = null;

export const carouselFunctions = {

    enableCarousel() {
        if (!embla) {
            let emblaNode = document.querySelector('.embla')
            let options = { loop: true }
            let plugins = [EmblaCarouselAutoplay()]
            
            embla = EmblaCarousel(emblaNode, options, plugins);
        }
    },

    disableCarousel() {
        if (embla) {
            embla.destroy();
            embla = null;
            console.log('carousel disabled');
          }
      }

};
