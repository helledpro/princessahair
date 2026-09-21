import {Button,MessengerLinks,Placeholder} from './Common';

const facts=[
  ['assortment-01.jpg','100% натуральные волосы'],
  ['assortment-02.jpg','от 12 000 ₽'],
  ['hero-hair-selection.jpg','Фото конкретных волос перед покупкой']
];

export function Hero(){
  return <>
    <header className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <a className="logo" href="#" aria-label="Princessahair">
            <strong>Princessahair</strong>
          </a>
          <p className="eyebrow">Собственное производство в Санкт-Петербурге<br/><span>• Доставка по России 1–4 дня</span></p>
          <h1>Подберём натуральные славянские волосы<br/>точно в ваш оттенок</h1>
          <p className="lead">Пришлём реальные фото и видео конкретных вариантов из наличия — выбираете только после того, как увидите волосы</p>
          <div className="hero-facts">
            {facts.map(([image,text])=><div className="hero-fact" key={text}>
              <img src={`/images/${image}`} alt=""/>
              <span>{text}</span>
            </div>)}
          </div>
          <Button id="hero_quiz">Подобрать волосы →</Button>
          <small>4–5 вопросов <b>•</b> около 1 минуты <b>•</b> без звонков</small>
        </div>
        <div className="hero-visual">
          <Placeholder name="hero-main.jpg"/>
          <div className="overlap">
            <Placeholder name="assortment-05.jpg"/>
            <b><span>✦</span> Большой выбор оттенков<br/> и структур в наличии</b>
          </div>
        </div>
      </div>
    </header>
    <div className="contact-strip container">
      <b>Уже знаете, что нужно? Напишите сразу →</b>
      <MessengerLinks/>
    </div>
    <div className="trust-strip" aria-label="Преимущества Princessahair">
      <div className="container">
        {['100% натуральные волосы','Собственное производство','Реальные фото перед покупкой','Доставка 1–4 дня'].map(item=><span key={item}>{item}</span>)}
      </div>
    </div>
    <section className="social-proof" aria-label="Сообщество Princessahair">
      <div className="container social-proof__card">
        <div className="social-proof__copy">
          <span className="social-proof__kicker">Нам доверяют</span>
          <h2>Большое сообщество Princessahair</h2>
          <p>За брендом следят сотни тысяч человек — в аккаунте регулярно публикуем волосы, производство, работы и отзывы клиентов.</p>
        </div>
        <div className="social-proof__stats" aria-label="Статистика аккаунта Princessahair">
          <div><strong>440 тыс.</strong><span>подписчиков</span></div>
          <div><strong>3 300+</strong><span>публикаций</span></div>
        </div>
        <a className="social-proof__link" href="https://www.instagram.com/princessa_hair/" target="_blank" rel="noreferrer">@princessa_hair <span>↗</span></a>
      </div>
    </section>
  </>
}
