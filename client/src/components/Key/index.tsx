import style from './style.module.scss'
import { FormEvent } from 'react'

interface props {
	value?: string,
	click: Function,
	className?: string | CSSModuleClasses
}

export const Key = ({value, click, className = style.key}: props) => {

	return(
		<button 
			type='button' 
			value={value} 
			className={`
				${className} 
				${style.key_default}
			`} 
			onClick={(event: FormEvent) => click(event)}
		>
			{value}
		</button>
	)
}