import { useEffect, useState } from 'react';
import style from './style.module.scss';

interface props {
  value?: string | number,
  className?: string | CSSModuleClasses
}

export const Display = ({value = '', className = style.display}: props ) => {
  const [calc, setCalc] = useState(value) 
  
  useEffect(()=>{
    setCalc(value);
  })

  return(
    <div className={`${className}`}>
      <output onChange={ ()=> calc} className={`${style.display_output}`}>{calc}</output>
    </div>
  )
}