import style from './style.module.scss';

interface props {
  className?: string | CSSModuleClasses
}

export const Display = ({className = style.display}: props ) => {

  console.log({className})

  return(
    <div className={`${className}`}>

    </div>
  )
}