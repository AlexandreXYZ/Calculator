import { useEffect, useState } from 'react';
import style from './style.module.scss';

interface props {
  value: Array<string>,
  classDisplay?: string | CSSModuleClasses,
  classOutput?: string | CSSModuleClasses
}

export const Display = ({ value = [''], classDisplay = style.display, classOutput = style.display_output }: props ) => {
  const [calc, setCalc] = useState(value);
  
  useEffect(()=>{
    setCalc(value);
  }, [value])

  return(
    <div className={`${classDisplay}`}>
      <output onChange={ () => calc} className={`${classOutput} ${style.display_defaultOutput}`}>
        {calc}
      </output>
    </div>
  )
}