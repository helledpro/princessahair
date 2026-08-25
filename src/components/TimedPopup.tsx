import {useEffect,useState} from 'react';

const SESSION_KEY='princessahair_timed_popup_seen';
const POPUP_DELAY=25000;

export function TimedPopup(){
  const [open,setOpen]=useState(false);

  useEffect(()=>{
    if(sessionStorage.getItem(SESSION_KEY)==='1') return;

    const timer=window.setTimeout(()=>{
      setOpen(true);
      sessionStorage.setItem(SESSION_KEY,'1');
    },POPUP_DELAY);

    return ()=>window.clearTimeout(timer);
  },[]);

  useEffect(()=>{
    if(!open) return;
    const handleKeyDown=(event:KeyboardEvent)=>{
      if(event.key==='Escape') setOpen(false);
    };
    window.addEventListener('keydown',handleKeyDown);
    return ()=>window.removeEventListener('keydown',handleKeyDown);
  },[open]);

  if(!open) return null;

  const goToQuiz=()=>{
    setOpen(false);
    window.setTimeout(()=>document.getElementById('quiz')?.scrollIntoView({behavior:'smooth',block:'start'}),50);
  };

  return <div className="timed-popup" role="presentation" onMouseDown={event=>{
    if(event.target===event.currentTarget) setOpen(false);
  }}>
    <div className="timed-popup__dialog" role="dialog" aria-modal="true" aria-labelledby="timed-popup-title">
      <button className="timed-popup__close" type="button" aria-label="Закрыть" onClick={()=>setOpen(false)}>×</button>
      <span className="timed-popup__kicker">Подбор из наличия</span>
      <h2 id="timed-popup-title">Не нашли подходящий вариант?</h2>
      <p>Ответьте на несколько вопросов — подберём 3–5 конкретных вариантов волос из наличия и пришлём реальные фото и видео.</p>
      <div className="timed-popup__benefits">
        <span>3–5 вариантов</span>
        <span>около 1 минуты</span>
        <span>без звонков</span>
      </div>
      <button className="button timed-popup__cta" type="button" onClick={goToQuiz}>Подобрать волосы →</button>
      <button className="timed-popup__skip" type="button" onClick={()=>setOpen(false)}>Продолжить смотреть сайт</button>
    </div>
  </div>;
}
