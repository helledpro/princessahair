import {useState} from 'react';
import {assortment,faqs,processSteps,reviews} from '../data';
import {Button,MessengerLinks,Placeholder,Section} from './Common';

const bullets=(items:string[])=><ul>{items.map(item=><li key={item}>{item}</li>)}</ul>;

export function MainSections(){
  const [open,setOpen]=useState<number|null>(null);

  return <>
    <Section className="process-section">
      <div className="panel section-panel">
        <h2>Как происходит подбор</h2>
        <div className="four-grid process-grid">
          {processSteps.map((item,index)=><article className="process" key={item[0]}>
            <Placeholder name={`process-0${index+1}.jpg`}/>
            <b>{item[0]}</b>
            <p>{item[1]}</p>
          </article>)}
        </div>
      </div>
    </Section>

    <Section className="assort">
      <h2>Большой ассортимент</h2>
      <div className="six-grid">
        {assortment.map((item,index)=><article key={item[0]}>
          <Placeholder name={`assortment-0${index+1}.jpg`}/>
        </article>)}
      </div>
      <div className="assortment-action">
        <p>Подберём идеальный вариант под ваш запрос и бюджет</p>
        <Button id="assortment_quiz">Показать варианты моего оттенка →</Button>
      </div>
    </Section>

    <Section className="quality-section">
      <div className="panel split quality-panel">
        <Placeholder name="quality-main.jpg"/>
        <div className="quality-copy">
          <h2>Качество,<br/>которому можно доверять</h2>
          {bullets(['100% натуральные славянские волосы','Мягкие, плотные, без силикона и обработки','Не путаются, легко укладываются','Служат долго при правильном уходе','Каждая партия проходит тщательный отбор'])}
          <Button id="quality_quiz">Подобрать волосы из наличия</Button>
        </div>
      </div>
    </Section>

    <Section className="b2b-section">
      <div className="b2b">
        <article className="panel b2b-card">
          <Placeholder name="b2b-01.jpg"/>
          <div>
            <h2>Для мастеров и студий</h2>
            {bullets(['Индивидуальный подход','Поддержка и консультации','Выгодные условия для профессионалов','Рекомендации по подбору для клиентов'])}
            <Button id="masters">Работаем с мастерами</Button>
          </div>
        </article>
        <article className="panel b2b-card reverse">
          <div>
            <h2>Для опта</h2>
            {bullets(['Оптовые цены','Большие объёмы в наличии','Гибкие условия сотрудничества','Быстрая комплектация заказов'])}
            <Button id="wholesale">Сотрудничать оптом</Button>
          </div>
          <Placeholder name="process-04.jpg"/>
        </article>
      </div>
    </Section>

    <Section className="offers">
      <div className="panel offers-panel">
        <h2>Спецпредложения</h2>
        <div className="four-grid icons">
          {[['◉','Скидки для постоянных клиентов'],['□','Подарки при крупных заказах'],['✿','Индивидуальные условия для студий и салонов'],['⌘','Акции на определённые оттенки и длины']].map(([icon,text])=><div key={text}>
            <i>{icon}</i><span>{text}</span>
          </div>)}
        </div>
        <Button id="special_offer">Узнать актуальные предложения</Button>
      </div>
    </Section>

    <Section className="reviews-section">
      <h2>Реальные отзывы клиентов</h2>
      <div className="reviews">
        {reviews.map(item=><article className="card review-card" key={item[0]}>
          <div className="review-head"><b>{item[0]}</b><small>{item[1]}</small></div>
          <p>{item[2]}</p>
        </article>)}
      </div>
      <p className="review-note">Отзывы приведены по предоставленным клиентами материалам. Скриншоты можно добавить в карточки без изменения их структуры.</p>
    </Section>

    <Section className="delivery-section">
      <div className="panel split delivery">
        <Placeholder name="delivery-box.jpg"/>
        <div>
          <h2>Доставка</h2>
          {bullets(['По России — 1–4 дня','Надёжная упаковка','Отправляем СДЭК и другими удобными службами','Возможность отслеживания заказа'])}
          <Button id="delivery">Узнать стоимость и сроки</Button>
        </div>
      </div>
    </Section>

    <Section className="faq-section">
      <h2>Вопросы и ответы</h2>
      <div className="faq">
        {faqs.map((item,index)=><article key={item[0]}>
          <button type="button" aria-expanded={open===index} onClick={()=>setOpen(open===index?null:index)}><span>{item[0]}</span><b>{open===index?'−':'⌄'}</b></button>
          {open===index&&<p>{item[1]}</p>}
        </article>)}
      </div>
    </Section>

    <footer className="final" id="contacts">
      <div className="container">
        <div>
          <h2>Подберём натуральные славянские волосы<br/>именно под ваш запрос</h2>
          <p>Просто отправьте фото и скажите, что вам нужно —<br/>и мы подберём идеальные варианты из наличия<br/>и отправим реальные фото и видео.</p>
        </div>
        <div className="final-actions">
          <Button id="final_quiz">Подобрать варианты из наличия</Button>
          <MessengerLinks/>
        </div>
      </div>
    </footer>
  </>;
}
