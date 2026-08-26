import {useState} from 'react';
import {faqs,processSteps} from '../data';
import {Button,MessengerLinks,Placeholder,Section} from './Common';

const bullets=(items:string[])=><ul>{items.map(item=><li key={item}>{item}</li>)}</ul>;
const reviewImages=['image (10).png','image (9).png','image (8).png','image (7).png','image (6).png','image (5).png'];
const assortmentImages=[
  'assortment-01.jpg',
  'assortment-02.jpg',
  'assortment-03.jpg',
  'assortment-04.jpg',
  'assortment-05.jpg',
  'assortment-06.jpg',
  'assortment-07.jpg',
  'assortment-08.jpg',
  'assortment-09.jpg',
  'assortment-10.jpg',
  'assortment-11.jpg',
  'assortment-12.jpg',
  'assortment-13.jpg',
  'assortment-14.jpg',
  'assortment-15.jpg',
  'assortment-16.jpg'
];

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
        {assortmentImages.map(image=><article key={image}>
          <Placeholder name={image}/>
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

    <Section className="reviews-section">
      <h2>Реальные отзывы клиентов</h2>
      <p className="reviews-subtitle">Что говорят о волосах и подборе наши клиенты</p>
      <div className="review-proof-grid">
        {reviewImages.map((image,index)=><article className="review-proof-card" key={image}>
          <img src={`/images/${image}`} alt={`Реальный отзыв клиента Princessahair ${index+1}`} loading="lazy"/>
        </article>)}
      </div>
      <p className="review-proof-note">Отзывы опубликованы в исходном виде</p>
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
      <div className="container final-main">
        <div>
          <h2>Подберём натуральные славянские волосы<br/>именно под ваш запрос</h2>
          <p>Просто отправьте фото и скажите, что вам нужно —<br/>и мы подберём идеальные варианты из наличия<br/>и отправим реальные фото и видео.</p>
        </div>
        <div className="final-actions">
          <Button id="final_quiz">Подобрать варианты из наличия</Button>
          <MessengerLinks/>
        </div>
      </div>

      <div className="container business-proof">
        <div className="business-proof__intro">
          <strong>Princessahair Studio</strong>
          <span>Собственное производство в Санкт-Петербурге</span>
          <span>Работаем с частными клиентами, мастерами и студиями</span>
          <span>Доставка по России</span>
        </div>
        <div className="business-proof__contacts">
          <b>Студия</b>
          <span>Новочеркасский просп., 33, корп. 2, Санкт-Петербург</span>
          <a href="https://yandex.ru/maps/org/princessahair_studio/185516093035" target="_blank" rel="noreferrer">Открыть в Яндекс Картах ↗</a>
          <a href="https://vk.ru/princessahair" target="_blank" rel="noreferrer">ВКонтакте ↗</a>
          <a href="tel:+79633255266">+7 963 325-52-66</a>
        </div>
        <div className="business-proof__legal">
          <b>Юридическая информация</b>
          <span>ИП Курочкина С. В.</span>
          <span>ИНН 471006851090</span>
          <span>ОГРНИП 314471006300036</span>
          <span>ОКПО 0189508647</span>
          <span>Юридический адрес: 188238, Ленинградская обл., Лужский р-н, г. Луга, ул. Партизанская, д. 30</span>
        </div>
      </div>

      <div className="container legal-links">
        <span>© 2026 Princessahair Studio</span>
        <nav aria-label="Юридические документы">
          <a href="/privacy.html" target="_blank" rel="noreferrer">Политика обработки персональных данных</a>
          <a href="/consent.html" target="_blank" rel="noreferrer">Согласие на обработку персональных данных</a>
        </nav>
      </div>
    </footer>
  </>;
}
