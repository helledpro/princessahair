import {Hero} from './components/Hero';
import {PostQuizBenefits} from './components/PostQuizBenefits';
import {Quiz} from './components/Quiz';
import {MainSections} from './components/Sections';
import {MobileStickyCTA} from './components/Common';
import {TimedPopup} from './components/TimedPopup';

export function App(){
  return <main><Hero/><Quiz/><PostQuizBenefits/><MainSections/><MobileStickyCTA/><TimedPopup/></main>
}
