import { useState } from "react"

export default  function Counter(){
    //let count =0

   // const handlePlus = () => {
     //   count++
      //  console.log(count);
    //}

    const [count, setCount] = useState (0)
    const handlePlus = () => {
        setCount(prev => prev + 1)
    }
    
    return(
        <div className='lesson-container'>
            <h4>Counter</h4>
            <p>Мы не можем хранить изменяемые данные в реакт в 
                классических переменных, потому что мы не будем видеть их
                 изменения на странице: компонент не будет обновляться 🥲</p>
                 <p>Мне нужна 'хитрая' переменная, при изменение которой
                    будет происходить обновление компонента </p>
                 <p>В каких случаях происходит обновление данных? 🧐</p>
                 <ol>
                    <li>Изменения состояния (state)</li>
                    <li>Изменение props</li>
                 </ol>
            <span>0</span>
            <button onClick={handlePlus}> +</button>
        </div>
    )
}