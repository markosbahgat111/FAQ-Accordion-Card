import './App.scss';
import illustartion from './assets/images/illustration-woman-online-desktop.svg';
import box from './assets/images/illustration-box-desktop.svg';
import shadow from './assets/images/bg-pattern-desktop.svg';
import data from './data.json';
import DropDown from './dropDown/dropDown.component';

function App() {
  return (
  <div className='App'>
      <div className='img_container'>
        <img src={illustartion} alt="illustration" className='draw'/>
        <img src={box} alt="box" className='box'/>
        <img src={shadow} alt="shadow" className='pattern'/>
      </div>
      <div className='faqs_container'>
        <h1 className='title'>FAQs</h1>
        <section>
          {data.map((question, index) => (
            <DropDown key={index} question={question}/>
          ))}
        </section>
      </div>
  </div>
  );
}

export default App;
