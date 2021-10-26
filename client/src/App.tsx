import './App.scss';
import { Key } from './components/Key';

export const App = () => {

  function test(){
     console.log('test')
  }
  return (
    <div className="App">
      <Key value='1' click={test}/>
    </div>
  )
}

