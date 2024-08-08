import {Icon1 ,Icon2 ,Icon3 ,MainContainer } from '../../assets/index'
const MainApp = () => {
  return (
    <>
    <main className="bg-white py-[128px] mt-[-15rem] pt-[15rem]">
        <section className="w-[1170px] ml-[148px]">
        <h1 className="text-[#645D5D] font-gotham text-base font-normal  leading-[22.4px] "><i>Актуальные проблемы </i> <span className="font-gotham ml-[3rem] text-[28px] font-bold text-gray-900 mb-8">
          Сегодня у многих есть сложности с высоким уровнем <p className="pt-[0.3rem] pb-[1rem] ">конкуренции конкуренции на рынке труда, незнанием своих сильных сторон или с </p>
          <p>поиском работы в целом.</p>
          </span>
        </h1>
        </section>
       
        <div className="flex justify-between items-start mt-[42px] w-[1200px] ">
          <div className="items-center ml-[148px] ">
              <img src={Icon1} alt="Стресс" className='' /> 
            <p className="font-semibold text-gray-700 w-[170px] mb-2">Стресс, выгорание, плохая обстановка на работе</p>
          </div>
          <div className="">
              <img src={Icon3} alt="Карьера" className='' /> 
            <p className="font-semibold text-gray-700  w-[200px] mb-2">Отсутствие карьерного роста на протяжении нескольких лет</p>
          </div>
          <div className="">
              <img src={Icon2} alt="Несправедливость" className='' />
            <p className="font-semibold text-gray-700 w-[150px] mb-2">Несправедливость в оценке и оплате труда</p>
          </div>
     <section className='w-[400px] mt-8'>
        <p className="text-[#645D5D] font-gotham text-[20px] font-normal  leading-[22.4px]">
          Все эти и ряд других сложностей можно и нужно для начала осознать, а потом построить план по изменению ситуации.
        </p>
        <p className="font-bold text-lg text-gray-900 mt-2">
          В этом Вам поможет RoadMap
        </p>
     </section>
        </div>
    </main>
    <div className='bg-[#1AAAE2]'>
    <img src={MainContainer} alt="Welcome" />
    </div>
    </>
  );
};

export default MainApp;
