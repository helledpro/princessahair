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

const whatsappUrl='https://wa.me/79633255266?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BF%D0%BE%D0%B4%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D1%8C%20%D0%B2%D0%BE%D0%BB%D0%BE%D1%81%D1%8B%20Princessahair.';

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
    <a id="telegram" className="tg" href="#contacts"><i/>Telegram</a>
    <a id="max" className="mx" href="#contacts"><i/>MAX</a>
  </nav>
}
