import {Profile ,List ,BenefitIcon1,BenefitIcon2,BenefitIcon3,BenefitIcon4,BenefitIcon5} from '../../assets/index'


const Benefits = () => {
  const steps = [
    {number:BenefitIcon1, text:"В приложении Вы можете зарегистрироваться и по желанию добавить больше информации о себе"},
    {number:BenefitIcon2, text: "Сразу после регистрации Вам предложат несколько сфер для проведения исследования, выберите те которые Вам наиболее близки и проходите актуальные тесты для самоанализа и понимания разнообразных сфер своей жизни."},
    {number:BenefitIcon3, text: "После каждого теста Вам будет доступен результат в виде экспертной оценки Вашего потенциала, а также практические рекомендации для изменения в актуальных направлениях." },
    {number:BenefitIcon4, text: "Планируйте свой путь к успеху с помощью персонализированных модулей."},
    {number:BenefitIcon5, text: "Общайтесь с единомышленниками и экспертами в нашем сообществе."},
  ];

  return (
    <>
    <article className="flex mb-[128px]">
        <section className='ml-[128px] my-[128px] w-[50%]'>
      <h2 className="text-[32px] font-normal font-gotham text-office-brown-700 mb-4">Что вы получите:</h2>
      {steps.map((step, index) => (
        <div key={index} className="flex  mb-4 items-center">
          <div className="w-25 h-25 bg-[#E7F4FF] mb-[32px] text-[#48A7F8] font-gotham rounded-full flex items-center justify-center mr-4">
            <img src={step.number} alt={`${index+1}`} className='' />
          </div>
          <p className="text-[16px] mb-[32px] font-gotham font-normal text-gray-700 w-[450px]">{step.text}</p>
        </div>
      ))}
      </section>
      <div className='bg-[#F4EFE4] w-[729px]'>
      <img src={Profile} alt="Profile" className='py-[128px] pl-[78px] ' />
      </div>
    
    </article>
    <section className='mx-[132px]'>
        <h3 className='text-[32px] font-gotham mb-[40px] font-normal '>Преимущества приложения</h3>
        <img src={List} alt="Преимущества приложения" />
    </section>
    </>
  );
}

export default Benefits;
