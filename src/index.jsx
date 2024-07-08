import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
//import Lesson01 from './lessons/lesson_01/Lesson01';
//import Lesson02 from './lessons/lesson_02/Lesson02';
//import MyForm from './components/myForm/MyForm';
//import Counter from './counter/Counter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <App />
    <App/>
    {/*<Lesson02/>*/}
    {/*<Lesson01/>*/}
     {/*<MyForm/>*/}
     {/*<Counter/>*/}
    </>
    
  </React.StrictMode>
);



