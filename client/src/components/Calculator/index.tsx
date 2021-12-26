import style from './style.module.scss';
import { Key } from '../Key';
import { Display } from '../Display';
import { FormEvent, useEffect, useState } from 'react';

export const Calculator = () => {
	const [calc, setCalc] = useState('') 
	const handleKey = (e: FormEvent<HTMLInputElement>) => setCalc(calc + e.currentTarget.value)

	useEffect(()=>{
		console.log(calc)
	})
	return(
		<div className={style.Calculator}>
				<Display value={calc}/>
				<div className={style.numeric}>
					<Key value='7' click={handleKey}/>
					<Key value='8' click={handleKey}/>
					<Key value='9' click={handleKey}/>
					
					<Key value='4' click={handleKey}/>
					<Key value='5' click={handleKey}/>
					<Key value='6' click={handleKey}/>

					<Key value='1' click={handleKey}/>
					<Key value='2' click={handleKey}/>
					<Key value='3' click={handleKey}/>
					<Key value='R' click={() => setCalc('')}/>
					<Key value='0' click={handleKey}/>

					<Key value='+' click={handleKey}/>
					<Key value='-' click={handleKey}/>
					<Key value='/' click={handleKey}/>

				</div>  
			</div>
	)
} 