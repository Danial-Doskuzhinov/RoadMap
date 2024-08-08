import { useState } from 'react';
import { MainContainer2 ,User1 } from '../../assets/index';

const testimonials = [
  {
    name: 'Алия Ансат',
    title: 'предприниматель',
    image: User1, 
    text: 'Спасибо за тест и рекомендации. Я долгое время не могла сама это всё четко отследить и в одну систему собрать и сформулировать. Очень детальный и точный анализ на определение профориентации, я в последние несколько лет стараюсь разобраться в себе, и теперь есть четкое понимание и структурность, все гениальное - просто!',
  },
  {
    name: 'Иван Иванов',
    title: 'дизайнер',
    image: 'path_to_image', 
    text: 'Очень полезное приложение! Помогло мне определить мои сильные стороны и выбрать направление для дальнейшего развития.',
  },
  {
    name: 'Мария Петрова',
    title: 'разработчик',
    image: 'path_to_image', 
    text: 'Приложение очень удобно в использовании и дает ценные рекомендации. Благодаря ему я смогла улучшить свои профессиональные навыки.',
  },
  {
    name: 'Сергей Кузнецов',
    title: 'маркетолог',
    image: 'path_to_image', 
    text: 'Отличный инструмент для саморазвития! Рекомендую всем, кто хочет лучше понять свои сильные стороны и возможности.',
  },
  {
    name: 'Анна Смирнова',
    title: 'аналитик',
    image: 'path_to_image', 
    text: 'Мне очень понравилось приложение. Оно помогает структурировать мысли и понять, в каком направлении двигаться дальше.',
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    if (current < testimonials.length - 1) {
      setCurrent((current) => current+ 1);
    }
  };
  const progressPercentage = ((current + 1) / testimonials.length) * 100;
  const handlePrev = () => {
    if (current > 0) {
      setCurrent((current) =>current - 1);
    }
  }
  return (
    <>
    <div className="mx-[128px] mt-[280px] mb-[128px] ">
        <section className=''>
      <h2 className="text-2xl font-bold text-office-brown-700 mb-2">Отзывы пользователей</h2>
      <p className="text-base text-[#645D5D] w-[640px] mb-8">Узнайте, как наше приложение помогло другим пользователям достичь своих целей. Истории успеха, отзывы и рекомендации</p>
      </section>
      <div className="flex justify-between">
        <section>
        <img
          src={testimonials[current].image}
          alt={testimonials[current].name}
          className="w-16 h-16 rounded-full mr-4"
        />
          <p className="text-lg font-bold text-gray-700">{testimonials[current].name}</p>
          <p className="text-sm text-gray-500 mb-2">{testimonials[current].title}</p>
          </section>
          <p className="text-[24px] w-[933px] font-normal leading-[22.4px] text-gray-700">{testimonials[current].text}</p>
        </div>
       
      <div className="flex mb-12 items-center justify-between mt-6">
      <div className="w-full h-1 bg-gray-200 rounded-full  mr-5">
        <div className="h-1 bg-blue-500 rounded-full transition-all duration-300" style={{ width: `${progressPercentage}%` }}></div>
      </div>
        <div className="flex space-x-2">
          <button 
            onClick={handlePrev} 
            className={`w-8 h-8  rounded-full flex items-center justify-center ${current === 0?'bg-gray-200':'bg-blue-600 text-white'}`}>
            <span>&lt;</span>
          </button>
          <button 
            onClick={handleNext} 
            className={`w-8 h-8  rounded-full flex items-center justify-center ${current <testimonials.length - 1?'bg-blue-600 text-white':'bg-gray-200'}`}>
            <span>&gt;</span>
          </button>
        </div>
       
      </div>
      <button className="px-4 py-2 bg-blue-600 text-blue-100 rounded-full">Написать отзыв</button>

    </div>
    <div className='bg-[#FFD14C]'>
    <img className='' src={MainContainer2} alt="О нас " />
    </div>
    </>
  );
}

export default Testimonials;
