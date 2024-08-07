import { useState } from 'react';

const testimonials = [
  {
    name: 'Алия Ансат',
    title: 'предприниматель',
    image: 'path_to_image', 
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

  const handlePrev = () => {
    if (current > 0) {
      setCurrent((current) =>current - 1);
    }
  }
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-office-brown-700 mb-2">Отзывы пользователей</h2>
      <p className="text-base text-gray-500 mb-8">Узнайте, как наше приложение помогло другим пользователям достичь своих целей. Истории успеха, отзывы и рекомендации</p>
      <div className="flex items-start mb-4">
        <img
          src={testimonials[current].image}
          alt={testimonials[current].name}
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <p className="text-lg font-bold text-gray-700">{testimonials[current].name}</p>
          <p className="text-sm text-gray-500 mb-2">{testimonials[current].title}</p>
          <p className="text-base font-normal leading-[22.4px] text-gray-700">{testimonials[current].text}</p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-6">
        <button className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full">Написать отзыв</button>
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
    </div>
  );
}

export default Testimonials;
