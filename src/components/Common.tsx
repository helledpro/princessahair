import type {CSSProperties,MouseEvent,ReactNode} from 'react';

const photoPositions:Record<string,CSSProperties['objectPosition']>={
  'hero-main.jpg':'center 24%',
  'hero-hair-selection.jpg':'center 48%',
  'quality-main.jpg':'center 46%',
  'pricing-master.jpg':'center 38%',
  'delivery-box.jpg':'center 48%',
  'b2b-01.jpg':'center 42%',
  'b2b-02.jpg':'center 38%'
};

const contactMessage='Здравствуйте! Хочу подобрать волосы Princessahair.';
const encodedContactMessage=encodeURIComponent(contactMessage);
const whatsappUrl=`https://wa.me/79633255266?text=${encodedContactMessage}`;
const telegramProfileUrl='https://t.me/Princessahair_Studio';
const telegramMobileUrl=`https://t.me/Princessahair_Studio?text=${encodedContactMessage}`;
const maxUrl=`https://max.ru/:share?text=${encodedContactMessage}`;

function copyContactMessage(){
  if(navigator.clipboard?.writeText){
    void navigator.clipboard.writeText(contactMessage).catch(()=>{});
    return;
  }

  const textarea=document.createElement('textarea');
  textarea.value=contactMessage;
  textarea.style.position='fixed';
  textarea.style.opacity='0';
  document.body.appendChild(textarea);
  textarea.select();
  try{document.execCommand('copy')}catch{}
  textarea.remove();
}

function isMobileDevice(){
  return /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)
    || (navigator.maxTouchPoints>1&&window.innerWidth<1024);
}

function handleTelegramClick(event:MouseEvent<HTMLAnchorElement>){
  if(isMobileDevice()) return;
  event.preventDefault();
  copyContactMessage();
  window.open(telegramProfileUrl,'_blank','noopener,noreferrer');
}

export function Placeholder({name,className='' }:{name:string,className?:string}){
  const isHero=name==='hero-main.jpg';
  return <div className={`placeholder ${className}`} role="img" aria-label={`Фото Princessahair: ${name}`}>
    <span>{name}</span>
    <img
      src={`/images/${name}`}
      alt=""
      loading={isHero?'eager':'lazy'}
      decoding="async"
      onError={e=>{e.currentTarget.style.display='none'}}
      style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',objectPosition:photoPositions[name]??'center',display:'block',zIndex:2}}
    />
  </div>
}

export function Button({children,id}:{children:ReactNode,id:string}){
  return <button id={id} className="button" type="button" onClick={()=>document.getElementById('quiz')?.scrollIntoView({behavior:'smooth'})}>{children}</button>
}

export function Section({children,className='',id}:{children:ReactNode,className?:string,id?:string}){
  return <section className={`section ${className}`} id={id}><div className="container">{children}</div></section>
}

export function MessengerLinks(){
  return <nav className="messengers" aria-label="Мессенджеры">
    <a id="whatsapp" className="wa" href={whatsappUrl} target="_blank" rel="noreferrer"><i/>WhatsApp</a>
    <a id="telegram" className="tg" href={telegramMobileUrl} target="_blank" rel="noreferrer" onClick={handleTelegramClick}><i/>Telegram</a>
    <a id="max" className="mx" href={maxUrl} target="_blank" rel="noreferrer"><i/>MAX</a>
  </nav>
}
