import "./Header.css";

function Header() {
  return (
    <header >
      <ul className="header">
        <img className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuzMU7DQaEoqNFi53H0qCCjPhri5RbJpaOTg&usqp=CAU"
          alt=""
        />

        <li>Mодельный ряд</li>
        <li>Автомобили в <br /> наличии</li>
        <li>Покупателям</li>
        <li>Владельцам</li>
        <li>Мир Toyota</li>
        <li>Контакты</li>
      </ul>
    </header>
  );
}
export default Header;
