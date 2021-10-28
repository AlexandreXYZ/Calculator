import style from './App.module.scss';
import { Key } from './components/Key';

export const App = () => {

  function test(){
     console.log('test')
  }
  return (
    <div className="App">
      <div className={style.container}>
        <div className={style.numeric}>
          <Key value='9' click={()=>{console.log('oi')}}/>
          <Key value='8' click={test}/>
          <Key value='7' click={test}/>
          <Key value='6' click={test}/>
          <Key value='5' click={test}/>
          <Key value='4' click={test}/>
          <Key value='3' click={test}/>
          <Key value='2' click={test}/>
          <Key value='1' click={test}/>
          <Key value='R' click={test}/>
          <Key value='0' click={test}/>
          <Key value='=' click={test}/>
        </div>  
      </div>
    </div>
  )
}

