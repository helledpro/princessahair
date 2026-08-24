import type {ReactNode} from 'react';
export function Placeholder({name,className='' }:{name:string,className?:string}){return <div className={`placeholder ${className}`} role="img" aria-label={`Место для оригинальной фотографии: ${name}`}><span>{name}</span></div>}
export function Button({children,id}:{children:ReactNode,id:string}){return <button id={id} className="button" onClick={()=>document.getElementById('quiz')?.scrollIntoView({behavior:'smooth'})}>{children}</button>}
export function Section({children,className='',id}:{children:ReactNode,className?:string,id?:string}){return <section className={`section ${className}`} id={id}><div className="container">{children}</div></section>}
export function MessengerLinks(){return <nav className="messengers" aria-label="Мессенджеры"><a id="whatsapp" href="#contacts">● WhatsApp</a><a id="telegram" href="#contacts">● Telegram</a><a id="max" href="#contacts">● MAX</a></nav>}
