import { FooterImg , Social1 , Social2, Social3, Social4} from '../../assets/index'
const Footer = () => {
    return (
      <footer className="bg-[#F4EFE4] pt-[80px]">
        <div className="max-w-screen-xl mx-auto flex justify-between mb-[40px]">
          <div>
            <nav className="mb-[40px]">
              <ul className="flex space-x-8 font-gotham text-[20px] text-[#3E3838]">
                <li><a href="#">Главная</a></li>
                <li><a href="#">О нас</a></li>
                <li><a href="#">Отзывы</a></li>
              </ul>
            </nav>
            <div className="flex justify-between mb-[98px] text-[#3E3838]">
              <div className='mr-[48px]'>
                <p className="font-bold">Телефон</p>
                <p className="text-lg">+77053505119</p>
              </div>
              <div>
                <p className="font-bold">E-mail</p>
                <p className="text-lg">call.roadmap@gmail.com</p>
              </div>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#"><img src={Social1} alt="Facebook" className="w-8 h-8" /></a>
              <a href="#"><img src={Social2} alt="Instagram" className="w-8 h-8" /></a>
              <a href="#"><img src={Social3} alt="Telegram" className="w-8 h-8" /></a>
              <a href="#"><img src={Social4} alt="LinkedIn" className="w-8 h-8" /></a>
            </div>
          </div>
          <div className="w-[25rem]">
            <h3 className="text-[32px] font-bold text-gray-700 mb-4">Контакты</h3>
            <p className="text-[#645D5D] mb-[40px]">
              Связаться с нами легко! Если у вас есть вопросы, предложения или пожелания, не стесняйтесь обращаться. Мы всегда готовы помочь вам на пути к саморазвитию и достижению целей.
            </p>
            <button className="px-6 py-3 w-[25rem] bg-[#1AAAE2] text-white rounded-full">Написать нам</button>
          </div>
        </div>
        <hr />
        <section className='ml-[98px] text-[#645D5D] text-[14px] font-gotham font-normal  flex'>
            <p className='mr-[20px]'>Политика конфиденциальности</p>
            <p>Публичная оферта для партнеров</p>
        </section>
        <img className='mt-[40px] ml-[98px]' src={FooterImg} alt="footer" />
      </footer>
    );
  };
  
  export default Footer;
  