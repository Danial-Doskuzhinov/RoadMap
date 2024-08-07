import {GooglePlay ,AppStore,Container} from '../../assets/index'
const HeaderContainer = () => {
  return (
    <div  className="pt-[128px] bg-custom-image flex flex-col items-center bg-no-repeat  bg-top-4 justify-center bg-[#F4EFE4]">
       <div className="text-center  mb-8">
        <h1 className="text-[80px] font-bold">Your way to <span className="text-yellow-500">Success</span></h1>
        <p className="text-[20px] font-serif text-[#645D5D]">Карьера • Саморазвитие • Успех</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex space-x-4 mb-8">
          <img src={GooglePlay} alt="Google Play" />
          <img src={AppStore} alt="AppStore" />
        </div>
          <img src={Container} alt="Container" />
      </div> 

    </div>
  )
}

export default HeaderContainer;


{/* <div className="flex justify-between mb-4">
            <div className="bg-yellow-300 p-4 rounded w-1/2 mr-2">
              <p className="text-center">Тестирование для выявления сильных сторон с применением проверенных методик</p>
            </div>
            <div className="bg-yellow-300 p-4 rounded w-1/2 ml-2">
              <p className="text-center">Рекомендации под каждый конкретный запрос и персонифицированную цель</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-gray-200 p-4 rounded mb-4">
             <img src={Data} alt="Illustration" />
            </div>
            <button className="bg-blue-500 text-white px-6 py-2 rounded">Начать</button>
          </div>
        </div> */}