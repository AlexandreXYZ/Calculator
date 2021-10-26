import style from './style.module.scss'

interface props {
  value?: string,
  click: Function,
}

export const Key = ({value, click}: props) => {
  function handleClick(){
    click();
  }
  return(
    <div className={style.key} onClick={handleClick} >
      {value}
    </div>
  )
}