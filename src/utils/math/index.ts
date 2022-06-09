const checkNumber = (e) =>{
  const value = e.target.value;
  e.target.value = e.target.value.toString().match(/^\d+(?:\.\d{0,8})?/)
  if (e.target.value.indexOf('.') < 0 && e.target.value != '') {
    e.target.value = parseFloat(e.target.value);
  }
  console.log(value);
}


export {
  checkNumber
}
