import React, { useEffect, useRef } from 'react';

function Concept() {
  const slideContainerRef = useRef(null);
  const itemsRef = useRef([]);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const pointsContainerRef = useRef(null);

  useEffect(() => {
    const slideContainer = slideContainerRef.current;
    const items = itemsRef.current;
    const prevButton = prevButtonRef.current;
    const nextButton = nextButtonRef.current;
    const pointsContainer = pointsContainerRef.current;
    const itemControls = ['prev', 'next'];

    class Carousel {
      constructor(container, items, prevButton, nextButton, pointsContainer) {
        this.carouselContainer = container;
        this.carouselControls = itemControls;
        this.carouselArray = [...items];
        this.prevButton = prevButton;
        this.nextButton = nextButton;
        this.pointsContainer = pointsContainer;
        this.activeIndex = 0;
      }

      updateGallery() {
        this.carouselArray.forEach((el, i) => {
          el.classList.remove('item-1', 'item-2', 'item-3', 'item-4', 'item-5', 'item-6', 'item-7');
          if (i === this.activeIndex) {
            el.classList.add('item-1');
          } else if (i === (this.activeIndex + 1) % this.carouselArray.length) {
            el.classList.add('item-2');
          } else if (i === (this.activeIndex + 2) % this.carouselArray.length) {
            el.classList.add('item-3');
          } else if (i === (this.activeIndex + 3) % this.carouselArray.length) {
            el.classList.add('item-4');
          } else if (i === (this.activeIndex + 4) % this.carouselArray.length) {
            el.classList.add('item-5');
          } else if (i === (this.activeIndex + 5) % this.carouselArray.length) {
            el.classList.add('item-6');
          } else if (i === (this.activeIndex + 6) % this.carouselArray.length) {
            el.classList.add('item-7');
          }
        });

        this.updatePoints();
      }

      updatePoints() {
        const points = Array.from(this.pointsContainer.children);
        points.forEach((point, i) => {
          if (i === this.activeIndex) {
            point.classList.add('point-selected');
            point.classList.remove('bg-[--blackgreen]');
          } else {
            point.classList.remove('point-selected');
            point.classList.add('bg-[--blackgreen]');
          }
        });
      }

      setCurrentState(direction) {
        if (direction === 'prev') {
          this.activeIndex = (this.activeIndex - 1 + this.carouselArray.length) % this.carouselArray.length;
        } else {
          this.activeIndex = (this.activeIndex + 1) % this.carouselArray.length;
        }
        this.updateGallery();
      }

      goToIndex(index) {
        this.activeIndex = index;
        this.updateGallery();
      }

      setControls() {
        this.prevButton.addEventListener('click', () => {
          this.setCurrentState('prev');
        });

        this.nextButton.addEventListener('click', () => {
          this.setCurrentState('next');
        });

        Array.from(this.pointsContainer.children).forEach((point, index) => {
          point.addEventListener('click', () => {
            this.goToIndex(index);
          });
        });
      }

      init() {
        this.updateGallery();
        this.setControls();
      }
    }

    const exampleCarousel = new Carousel(slideContainer, items, prevButton, nextButton, pointsContainer);
    exampleCarousel.init();
  }, []);

  return (
    <div id='slide3' className='relative pt-36 w-full h-[1080px] bg-[--blackgreen]'>

      <h1 className='m-auto w-[1200px] font-Italiana text-5xl text-[--yellowgrow]'>Concept</h1>

      <div className='m-4 mb-14 text-[--yellowgrow] text-h1 text-center font-Italiana'>
        <h1 className='text-white font-semibold text-3xl'>MAKE THE WILD</h1>
        <h1 className='font-black text-5xl'>BE YOUR HOME</h1>
      </div>

      <div className='container'>
        <div ref={slideContainerRef} className='slide-container'>
          {['../img/00.jpg', '../img/01.jpg', '../img/02.jpg', '../img/03.jpg', '../img/04.jpg', '../img/05.jpg', '../img/06.jpg'].map((src, index) => (
            <img key={index} ref={el => itemsRef.current[index] = el} className={`iTems item-${index + 1}`} src={src} data-index={index + 1} />
          ))}
        </div>

        <div ref={pointsContainerRef} className="points-container flex justify-center mt-16">
          {['../img/00.jpg', '../img/01.jpg', '../img/02.jpg', '../img/03.jpg', '../img/04.jpg', '../img/05.jpg', '../img/06.jpg'].map((_, index) => (
            <div key={index} className=' border-[1px] border-[--yellowgrow] point w-[14px] h-[14px] bg-[--blackgreen] rounded-full mx-[8px] cursor-pointer transition-transform transform'></div>
          ))}
        </div>

        <div className='button flex justify-center mt-4'>
          <button ref={prevButtonRef} className='prev h-14 w-14 '>&#x27E8;&#x27E8;</button>
          <button ref={nextButtonRef} className='next h-14 w-14 '>&#x27E9;&#x27E9;</button>
        </div>
      </div>
    </div>
  );
}

export default Concept;
