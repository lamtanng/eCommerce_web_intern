import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { storedRelatedProducts } from '../../../../../ultils/storeWishList';
import CarouselButton from '../CarouselButton';
import RelatedProductCard from '../RelatedProductCard';

export default function ProductCarousel() {
  const swiper = useSwiper();
  const swiperRef = useRef(swiper);
  const { getRelatedProducts } = storedRelatedProducts;
  const RelatedProductList = getRelatedProducts();
  return (
    <div className="group relative -mx-8 mt-8">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={3}
        autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
        loop={true}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="group mx-8"
      >
        {RelatedProductList.map((productUrl) => (
          <SwiperSlide key={productUrl}>
            <RelatedProductCard productUrl={productUrl} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute left-0 top-1/2 z-50 flex w-full flex-row items-center justify-between opacity-10 transition-all duration-200 ease-in-out group-hover:opacity-100">
        <CarouselButton icon={<ArrowBackIcon />} handleClick={() => swiperRef.current.slidePrev()} />
        <CarouselButton icon={<ArrowForwardIcon />} handleClick={() => swiperRef.current.slideNext()} />
      </div>
    </div>
  );
}
