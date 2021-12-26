
export function lastIsOperator(value: string){
  const valueSplit = value.split('');
  console.log(valueSplit)
  if (valueSplit[valueSplit.length-1] === '+') return true
  else if (valueSplit[valueSplit.length-1] === '-') return true
  else if (valueSplit[valueSplit.length-1] === '/') return true
  else if (valueSplit[valueSplit.length-1] === '*') return true
  else {console.log(false); return false}
}
