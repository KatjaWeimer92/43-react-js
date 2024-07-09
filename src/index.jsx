import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import Lesson04 from './lessons/lesson_04/Lesson04';
import Homework02 from './homeworks/homework02/Homework02';
//import Homework04 from './homeworks/Homework04';
//import Lesson01 from './lessons/lesson_01/Lesson01';
//import Lesson02 from './lessons/lesson_02/Lesson02';
//import MyForm from './components/myForm/MyForm';
//import Counter from './counter/Counter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <App />
    {/*<Lesson02/>*/}
    {/*<Lesson01/>*/}
     {/*<MyForm/>*/}
     {/*<Counter/>*/}
     {/*<Homework04/>*/}
     <Homework02/>
     {/*<Lesson04/>*/}
    </>
    
  </React.StrictMode>
);



