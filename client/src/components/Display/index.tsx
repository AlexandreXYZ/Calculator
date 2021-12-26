import { useEffect, useState } from 'react';
import { lastIsOperator } from '../../utils/lastIsSpecial';
import style from './style.module.scss';

interface props {
  value: string,
  classDisplay?: string | CSSModuleClasses,
  classOutput?: string | CSSModuleClasses
}

export const Display = (
  { 
    value = '0',
    classDisplay = style.display, 
    classOutput = style.display_output 
  }: props ) => {
  
  const [calc, setCalc] = useState(value);
  useEffect(()=>{
    setCalc(value);
  }, [value])

  return(
    <div className={`${classDisplay}`}>
      <output onChange={ () => calc} className={`${classOutput} ${style.display_defaultOutput}`}>
        {calc}
        <span className={`${style.display_output_u}`}> = </span> 
        { 
          calc == '' ? 0 :
          lastIsOperator(calc) == true ? 0 : eval(calc) 
        }
      </output>
    </div>
  )
}