import {useState} from 'react';
import type {MouseEvent} from 'react';
import {Placeholder} from './Common';

type Question={
  title:string;
  label:string;
  options:string[];
};

const audienceQuestion:Question={
  title:'Для кого подбираем волосы?',
  label:'Формат',
  options:['Для себя','Я мастер','Для студии / салона','Опт / магазин']
};

const personalQuestions:Question[]=[
  {title:'Какая длина вам нужна?',label:'Длина',options:['40–45 см','50–55 см','60–65 см','70 см']},
  {title:'Какая структура?',label:'Структура',options:['Прямые','Волнистые','Кудрявые','Нужна помощь']},
  {title:'Какой оттенок?',label:'Оттенок',options:['Светлый','Русый','Шоколадный','Подберём по фото']}
];

const professionalQuestions:Question[]=[
  {title:'Что требуется?',label:'Интересует',options:['Срезы','Капсулы','Срезы и капсулы','Нужен ассортимент']},
  {title:'Какие длины интересуют?',label:'Длины',options:['40–45 см','50–55 см','60–65 см','Разные длины']},
  {title:'Какой объём нужен?',label:'Объём',options:['До 100 г','100–300 г','300+ г','Регулярные закупки']},
  {title:'Что для вас важнее всего?',label:'Приоритет',options:['Большой ассортимент','Выгодная цена','Быстрый подбор','Стабильные поставки']}
];

const wholesaleQuestions:Question[]=[
  {title:'Что планируете закупать?',label:'Интересует',options:['Срезы','Капсулы','Срезы и капсулы','Нужен ассортимент']},
  {title:'Какой объём первой закупки?',label:'Первая закупка',options:['До 300 г','300–500 г','500 г – 1 кг','Более 1 кг']},
  {title:'Как планируете закупать дальше?',label:'Поставки',options:['Разовая закупка','1–2 раза в месяц','Каждую неделю','Пока не знаю']}
];

const telegramProfileUrl='https://t.me/Princessahair_Studio';

function isMobileDevice(){
  return /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)
    || (navigator.maxTouchPoints>1&&window.innerWidth<1024);
}

function copyMessage(message:string){
  if(navigator.clipboard?.writeText){
    void navigator.clipboard.writeText(message).catch(()=>{});
    return;
  }

  const textarea=document.createElement('textarea');
  textarea.value=message;
  textarea.style.position='fixed';
  textarea.style.opacity='0';
  document.body.appendChild(textarea);
  textarea.select();
  try{document.execCommand('copy')}catch{}
  textarea.remove();
}

export function Quiz(){
  const [step,setStep]=useState(0);
  const [answers,setAnswers]=useState<string[]>([]);
  const [done,setDone]=useState(false);

  const audience=answers[0];
  const branchQuestions=audience==='Для себя'
    ?personalQuestions
    :audience==='Опт / магазин'
      ?wholesaleQuestions
      :professionalQuestions;
  const questions=[audienceQuestion,...branchQuestions];
  const question=questions[step]??questions[questions.length-1];

  const choose=(value:string)=>setAnswers(current=>{
    const next=[...current];
    next[step]=value;
    if(step===0) next.length=1;
    return next;
  });

  const next=()=>{
    if(!answers[step]) return;
    if(step===questions.length-1){
      setDone(true);
      return;
    }
    setStep(current=>current+1);
  };

  const answerLines=questions.map((item,index)=>answers[index]?`${item.label}: ${answers[index]}`:'').filter(Boolean);
  const requestIntro=audience==='Опт / магазин'
    ?'Здравствуйте! Хочу узнать условия оптового сотрудничества с Princessahair.'
    :audience==='Я мастер'||audience==='Для студии / салона'
      ?'Здравствуйте! Хочу подобрать волосы и узнать условия для профессионалов Princessahair.'
      :'Здравствуйте! Хочу подобрать волосы Princessahair.';
  const contactMessage=[requestIntro,...answerLines,'Пришлите, пожалуйста, подходящие варианты из наличия.'].join('\n');
  const encodedMessage=encodeURIComponent(contactMessage);
  const whatsappUrl=`https://wa.me/79633255266?text=${encodedMessage}`;
  const telegramMobileUrl=`https://t.me/Princessahair_Studio?text=${encodedMessage}`;

  const handleTelegramClick=(event:MouseEvent<HTMLAnchorElement>)=>{
    if(isMobileDevice()) return;
    event.preventDefault();
    copyMessage(contactMessage);
    window.open(telegramProfileUrl,'_blank','noopener,noreferrer');
  };

  return <section className="quiz section" id="quiz">
    <div className="container panel quiz-panel">
      {done?<div className="quiz-result">
        <span className="quiz-result-kicker">Подбор готов</span>
        <h2>Куда отправить подходящие варианты?</h2>
        <p>Ответы уже добавлены в сообщение. Выберите удобный мессенджер — останется только отправить.</p>
        <div className="quiz-result-links">
          <a className="quiz-messenger wa" href={whatsappUrl} target="_blank" rel="noreferrer"><i/>WhatsApp</a>
          <a className="quiz-messenger tg" href={telegramMobileUrl} target="_blank" rel="noreferrer" onClick={handleTelegramClick}><i/>Telegram</a>
        </div>
        <small>После перехода отправьте фото своих волос при дневном освещении — так мы точнее подберём оттенок.</small>
        <button type="button" className="quiz-restart" onClick={()=>{setStep(0);setAnswers([]);setDone(false)}}>Пройти подбор заново</button>
      </div>:<>
        {step===0&&<div className="quiz-intro">
          <span>Подбор из наличия</span>
          <h2>Подберём волосы из наличия за 1 минуту</h2>
          <p>Ответьте на несколько вопросов — пришлём подходящие варианты с реальными фото и видео.</p>
        </div>}
        <h2 className={step===0?'quiz-question first':''}>{question.title}</h2>
        <div className="quiz-options">
          {question.options.map((value,index)=><button type="button" key={value} aria-pressed={answers[step]===value} className={answers[step]===value?'selected':''} onClick={()=>choose(value)}>
            <Placeholder name={`quiz-${Math.min(step+1,5)}-${index+1}.jpg`}/>
            <b>{value}</b>
          </button>)}
        </div>
        <div className="quiz-footer">
          <div className="quiz-progress-wrap">
            <div className="progress" aria-label={`Шаг ${step+1} из ${questions.length}`}><i style={{width:`${(step+1)/questions.length*100}%`}}/></div>
            <small>Шаг {step+1} из {questions.length}</small>
          </div>
          <button id="quiz_next" type="button" disabled={!answers[step]} onClick={next} className="button">{step===questions.length-1?'Получить варианты':'Далее'} <span>→</span></button>
        </div>
        <small className="quiz-note">* Реальные фото и видео именно тех волос, которые вы покупаете.</small>
      </>}
    </div>
  </section>
}
