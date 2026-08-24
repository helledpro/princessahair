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
            <span className="crown">♛</span>
            <strong>Princessahair</strong>
          </a>
          <p className="eyebrow">Собственное производство в Санкт-Петербурге<br/><span>• Доставка по России 1–4 дня</span></p>
          <h1>Натуральные<br className="hero-break"/> славянские волосы<br/> нужного оттенка,<br/> длины и структуры</h1>
          <p className="lead">Подберём по фото и пришлём реальные фото и видео вариантов из наличия</p>
          <div className="hero-facts">
            {facts.map(([image,text])=><div className="hero-fact" key={text}>
              <img src={`/images/${image}`} alt=""/>
              <span>{text}</span>
            </div>)}
          </div>
          <Button id="hero_quiz"><span className="spark">✦</span> Подобрать варианты из наличия</Button>
          <small>4–5 вопросов <b>•</b> около 1 минуты <b>•</b> без звонков</small>
        </div>
        <div className="hero-visual">
          <Placeholder name="hero-main.jpg"/>
          <div className="overlap">
            <Placeholder name="hero-hair-selection.jpg"/>
            <b><span>✦</span> Большой выбор оттенков<br/> и структур в наличии</b>
          </div>
        </div>
      </div>
    </header>
    <div className="contact-strip container">
      <b>Уже знаете, что нужно? Напишите сразу →</b>
      <MessengerLinks/>
    </div>
  </>
}
