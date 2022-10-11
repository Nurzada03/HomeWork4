import "./Header.css";

function Content() {
  return (
    <main className="mainContent">
      <div className="content">
        <ul className="list-mean">
          <li>Описание модели</li>
          <li>Коплектации и аксессуары</li>
          <li>Цены</li>
          <li>Гарантия и сервис</li>
        </ul>
        <div>
          <button>Cмотреть Camry</button>
        </div>
      </div>

      <div className=" secondMainContent">
        <div className="comment">
          <div className="tema">
            <h1 className="h1"> CAMRY СТАНДАРТ </h1>
            <h3>- седан бизнес - класса</h3>
          </div>
          <select className="type">
            <option value="">Выбрать color</option>
            <option value="blue ">blue</option>
            <option value="">white</option>
            <option value="">black</option>
            <option value="">red</option>
          </select>

          <div className="title">
            <ul>
              <li>
                {" "}
                Светодиодные фары ближнего и <br /> дальнего света
              </li>
              <li>
                Уникальный противоугонный <br /> идентификатор Т-mark
              </li>
              <li>Двухзонный слимат-контроль </li>
              <li>
                Регулировка рулевой колонки по вылету <br /> и наклону
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Content;
