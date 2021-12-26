
export function lastIsOperator(value: string){
  const valueSplit = value.split('');

  if (valueSplit[valueSplit.length-1] === '+') return true
  else if (valueSplit[valueSplit.length-1] === '-') return true
  else if (valueSplit[valueSplit.length-1] === '/') return true
  else if (valueSplit[valueSplit.length-1] === '*') return true
  else return false
}