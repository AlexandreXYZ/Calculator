import style from './style.module.scss';
import { Key } from '../Key';
import { Display } from '../Display';
import { FormEvent, useEffect, useState } from 'react';

export const Calculator = () => {
	const [calc, setCalc] = useState(['0']) 
	const addNumber = (e: FormEvent<HTMLInputElement>) => {
		if(calc[0] === '0') return setCalc(() => [`${e.currentTarget.value}`])
		if(calc[0] != '0') return setCalc(calc => [...calc, `${e.currentTarget.value}`])
	};
	const colectNumbers = () => {
		console.log(calc)
	}
	useEffect(()=>{
		colectNumbers()
	}, [calc])

	
	return(
		<div className={style.Calculator}>
				<Display value={calc}/>
				<div className={style.numeric}>
					<Key value='7' click={addNumber}/>
					<Key value='8' click={addNumber}/>
					<Key value='9' click={addNumber}/>
					
					<Key value='4' click={addNumber}/>
					<Key value='5' click={addNumber}/>
					<Key value='6' click={addNumber}/>

					<Key value='1' click={addNumber}/>
					<Key value='2' click={addNumber}/>
					<Key value='3' click={addNumber}/>
					<Key value='R' click={addNumber}/>
					<Key value='0' click={addNumber}/>
					<Key value='=' click={addNumber}/>

					<Key value='+' click={addNumber}/>

				</div>  
			</div>
	)
} 