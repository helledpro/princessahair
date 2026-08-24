import type {CSSProperties,ReactNode} from 'react';

const photoPositions:Record<string,CSSProperties['objectPosition']>={
  'hero-main.jpg':'center 28%',
  'hero-hair-selection.jpg':'center 45%',
  'quality-main.jpg':'center 42%',
  'pricing-master.jpg':'center 35%',
  'delivery-box.jpg':'center 42%'
};

const IMAGE_BASE='https://raw.githubusercontent.com/helledpro/princessahair/main/public/images';

export function Placeholder({name,className='' }:{name:string,className?:string}){
  const isHero=name==='hero-main.jpg';
  return <div className={`placeholder ${className}`} role="img" aria-label={`Фото Princessahair: ${name}`}>
    <span>{name}</span>
    <img
      src={`${IMAGE_BASE}/${name}`}
      alt=""
      loading={isHero?'eager':'lazy'}
      decoding="async"
      onError={e=>{e.currentTarget.style.display='none'}}
      style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',objectPosition:photoPositions[name]??'center',display:'block',zIndex:2}}
    />
  </div>
}
export function Button({children,id}:{children:ReactNode,id:string}){return <button id={id} className="button" onClick={()=>document.getElementById('quiz')?.scrollIntoView({behavior:'smooth'})}>{children}</button>}
export function Section({children,className='',id}:{children:ReactNode,className?:string,id?:string}){return <section className={`section ${className}`} id={id}><div className="container">{children}</div></section>}
export function MessengerLinks(){return <nav className="messengers" aria-label="Мессенджеры"><a id="whatsapp" href="#contacts">● WhatsApp</a><a id="telegram" href="#contacts">● Telegram</a><a id="max" href="#contacts">● MAX</a></nav>}
