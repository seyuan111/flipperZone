import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const flippersData = [
  {
    name: 'Classic Flippers',
    description: 'Perfect for those who enjoy the classic design.',
    image: 'https://flipperzero.one/img/tild6566-3434-4266-b037-646663393733__fpr_web_1.jpg',
  },
  {
    name: 'Speed Flippers',
    description: 'Designed for maximum speed.',
    image: 'https://flipperzero.one/img/tild3166-6130-4262-b038-303866356263__p1020756.jpg',
  },
  {
    name: 'Training Flippers',
    description: 'Great for building strength and improving technique.',
    image: 'https://hackster.imgix.net/uploads/attachments/1644016/image_H1Vf5PLBW3.png?auto=compress%2Cformat&w=830&h=466.875&fit=min&dpr=2.625',
  },
];

const SwiperSlider = () => {
  return (
    <div className="swiper-container md:w-[50%] w-full h-full bg-gray-100 p-4 rounded-md my-20">
      <Swiper spaceBetween={20} slidesPerView={1} loop className="w-full h-full">
        {flippersData.map((flipper, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src={flipper.image}
                alt={flipper.name}
                className="w-full h-[100px] md:h-[350px] object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
                <h3 className="text-xl font-semibold">{flipper.name}</h3>
                <p className="mt-2 text-sm">{flipper.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
