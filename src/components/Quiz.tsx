import {useState} from 'react';
import {Placeholder} from './Common';

const questions:Array<[string,string[]]>=[
  ['Для кого подбираем волосы?',['Для себя','Для салона','Для мастера','Опт / магазин']],
  ['Какая длина вам нужна?',['40–45 см','50–55 см','60–65 см','70 см']],
  ['Какая структура?',['Прямые','Волнистые','Кудрявые','Нужна помощь']],
  ['Какой оттенок?',['Светлый','Русый','Шоколадный','Тёмный']],
  ['Как удобнее получить подбор?',['WhatsApp','Telegram','MAX','По телефону']]
];

export function Quiz(){
  const [step,setStep]=useState(0);
  const [answers,setAnswers]=useState<string[]>([]);
  const [done,setDone]=useState(false);
  const choose=(value:string)=>setAnswers(current=>{const next=[...current];next[step]=value;return next});
  const next=()=>answers[step]&&(step===questions.length-1?setDone(true):setStep(current=>current+1));

  return <section className="quiz section" id="quiz">
    <div className="container panel quiz-panel">
      {done?
        <form className="lead-form" onSubmit={event=>{event.preventDefault();alert('Спасибо! Заявка сохранена в демо-режиме.')}}>
          <h2>Куда отправить варианты?</h2>
          <input required aria-label="Имя" placeholder="Ваше имя"/>
          <input required aria-label="Телефон или мессенджер" placeholder="Телефон или мессенджер"/>
          <button className="button" type="submit">Отправить запрос</button>
          <small>Демо-форма. TODO: подключить CRM/webhook.</small>
        </form>
      :<>
        <h2>{questions[step][0]}</h2>
        <div className="quiz-options">
          {questions[step][1].map((value,index)=><button type="button" key={value} aria-pressed={answers[step]===value} className={answers[step]===value?'selected':''} onClick={()=>choose(value)}>
            <Placeholder name={`quiz-${step+1}-${index+1}.jpg`}/>
            <b>{value}</b>
          </button>)}
        </div>
        <div className="quiz-footer">
          <div className="quiz-progress-wrap">
            <div className="progress" aria-label={`Шаг ${step+1} из ${questions.length}`}><i style={{width:`${(step+1)/questions.length*100}%`}}/></div>
          </div>
          <button id="quiz_next" type="button" disabled={!answers[step]} onClick={next} className="button">Далее <span>→</span></button>
        </div>
        <small className="quiz-note">* Реальные фото и видео именно тех волос, которые вы покупаете.</small>
      </>}
    </div>
  </section>
}
