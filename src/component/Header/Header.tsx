import { Logo } from "../../assets/index"
const Header = () => {
  return (
    <header className="h-[54px] flex justify-between items-center">
        <img className="ml-[32px] h-[36px]" src={Logo} alt="logo" />

        <nav className="text-[18px] mr-[32px] font-normal text-[#3E3838]">
        <a className="mr-[32px]">Главная</a>
        <a className="mr-[32px]">О нас</a>
        <a className="mr-[32px]">Отзывы</a>
        <a className="mr-[32px]">Контакты</a>
        </nav>
        <button className="mr-[32px] bg-[#1AAAE2] text-amber-50 rounded-[30px] w-[190px] h-[46px]">Написать нам</button>
    </header>
  )
}

export default Header