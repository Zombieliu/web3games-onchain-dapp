const checkNumber = (e) =>{
  const value = e.target.value;
  e.target.value = e.target.value.toString().match(/^\d+(?:\.\d{0,8})?/)
  if (e.target.value.indexOf('.') < 0 && e.target.value != '') {
    e.target.value = parseFloat(e.target.value);
  }
  console.log(value);
}

const cropData = (num,n) =>{
  return parseInt(String(num * Math.pow(10, n))) / Math.pow(10, n)

}


export {
  checkNumber,cropData
}
