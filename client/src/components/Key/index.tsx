import style from './style.module.scss'

interface props {
	value?: string,
	click: Function,
	className?: string | CSSModuleClasses
}

export const Key = ({value, click, className = style.key}: props) => {

	// ele só recebe o evento se este camarada da linha 12 também receber :b
	return(
		<button 
			type='button' 
			value={value} 
			className={`
				${className} 
				${style.key_default}
			`} 
			onClick={(event: React.FormEvent) => click(event)}
		>
			{value}
		</button>
	)
}