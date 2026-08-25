import type {CSSProperties,ReactNode} from 'react';

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
const telegramUrl=`https://t.me/+79633255266?text=${encodedContactMessage}`;
const maxUrl='https://max.ru/+79633255266';

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
    <a id="telegram" className="tg" href={telegramUrl} target="_blank" rel="noreferrer"><i/>Telegram</a>
    <a id="max" className="mx" href={maxUrl} target="_blank" rel="noreferrer"><i/>MAX</a>
  </nav>
}
