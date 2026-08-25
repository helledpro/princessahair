import {Button,MessengerLinks,Placeholder} from './Common';

const facts=[
  ['assortment-01.jpg','Срезы и капсулы'],
  ['assortment-02.jpg','от 12 000 ₽'],
  ['b2b-01.jpg','для мастеров и опта']
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
          <h1>Подберём натуральные славянские волосы<br/>точно в ваш оттенок по фото</h1>
          <p className="lead">Пришлём реальные фото и видео конкретных вариантов из наличия — выбираете только после того, как увидите волосы</p>
          <div className="hero-facts">
            {facts.map(([image,text])=><div className="hero-fact" key={text}>
              <img src={`/images/${image}`} alt=""/>
              <span>{text}</span>
            </div>)}
          </div>
          <Button id="hero_quiz">Подобрать волосы по фото →</Button>
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
  </>
}
