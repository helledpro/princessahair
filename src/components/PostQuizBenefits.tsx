import {Button,Section} from './Common';

const benefits=[
  '3–5 конкретных вариантов из наличия',
  'Реальные фото и видео каждого варианта',
  'Рекомендацию по оттенку, длине и структуре'
];

export function PostQuizBenefits(){
  return <Section className="post-quiz-benefits">
    <div className="panel post-quiz-benefits__panel">
      <h2>Что вы получите после заявки</h2>
      <p className="post-quiz-benefits__lead">После подбора вы получите:</p>
      <div className="post-quiz-benefits__grid">
        {benefits.map((benefit,index)=><article className="post-quiz-benefits__item" key={benefit}>
          <span className="post-quiz-benefits__num" aria-hidden="true">{index+1}</span>
          <p>{benefit}</p>
        </article>)}
      </div>
      <Button id="post_quiz_benefits">Получить варианты →</Button>
    </div>
  </Section>;
}
