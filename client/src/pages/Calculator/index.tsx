import style from './style.module.scss';
import { Key } from '../../components/Key';
import { Display } from '../../components/Display';
import { FormEvent, useState } from 'react';

export const Calculator = () => {
	const [calc, setCalc] = useState('')
	const test = (e: FormEvent<HTMLInputElement>) => {
		const newValue = e.currentTarget.value;
		
		switch (newValue) {
			case 'R':
				return setCalc('');
			default:
				return setCalc(calc + newValue)
		}

		
	}

	return(
		<div className={style.Calculator}>
				<Display value={calc}/>
				<div className={style.numeric}>
					<Key value='7' click={test}/>
					<Key value='8' click={test}/>
					<Key value='9' click={test}/>
					
					<Key value='4' click={test}/>
					<Key value='5' click={test}/>
					<Key value='6' click={test}/>

					<Key value='1' click={test}/>
					<Key value='2' click={test}/>
					<Key value='3' click={test}/>
					<Key value='R' click={test}/>
					<Key value='0' click={test}/>
					<Key value='=' click={test}/>

					{/* <Key value='+' click={test}/> */}

				</div>  
			</div>
	)
} 