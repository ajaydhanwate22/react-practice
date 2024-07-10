import './App.css';
import Que1 from './Component/Que1';
import Que2 from './Component/Que2';
import Que3 from './Component/Que3';
import Que4 from './Component/Que4';
import Que5 from './Component/Que5';
const items = [
  {
    title: 'Accordion Item 1',
    content: 'Content for Accordion Item 1',
  },
  {
    title: 'Accordion Item 2',
    content: 'Content for Accordion Item 2',
  },
  {
    title: 'Accordion Item 3',
    content: 'Content for Accordion Item 3',
  },
];


const links = [
  { text: 'Que1', url: '/' },
  { text: 'Que2', url: '/form' },
  { text: 'Que3', url: '/Accordian' },
  { text: 'Que4', url: '/Stickynotes' },
];

function App() {
  return (
  <>
<div className="app  bg-gray-200 min-h-screen">

  <Que5 links={links} />
    <Que1/>
  <Que2/>
  <Que3 items={items}/>
  <Que4/>
  </div>  
</>
  );
}

export default App;
