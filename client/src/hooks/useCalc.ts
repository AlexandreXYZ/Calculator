interface props {
  values: Array<Number>,
  calcType: String
}
interface reducer {
  previusValue: number, 
  currentValue: number
}


export function test({ values }: props){
  const calcReduce = {
    sum: ({previusValue, currentValue}: reducer) => previusValue + currentValue,
    sub: ({previusValue, currentValue}: reducer) => previusValue - currentValue,
    div: ({previusValue, currentValue}: reducer) => previusValue * currentValue,
    mult: ({previusValue, currentValue}: reducer) => previusValue / currentValue
  } 
}


