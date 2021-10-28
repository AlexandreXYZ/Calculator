import style from './style.module.scss'

interface props {
  value?: string,
  click: Function,
}

export const Key = ({value, click}: props) => {

  return(
    <button type='button' className={style.key} onClick={() => click()} >
      {value}
    </button>
  )
}