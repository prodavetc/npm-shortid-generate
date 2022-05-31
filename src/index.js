const str ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const num = '0123456789';

const getCaracter = c => {
    return c.charAt(Math.floor(Math.random() * c.length));
  }


const genValues = (str, num, quantity, upper = false, alternation = false) => {
let result = ''
  
  
  
  for (let i = 1; i <= quantity; i++){
    if(alternation){
      if(i % 2  == 0){
      	result += (getCaracter(num))
      }else{
        let up = (upper) ? getCaracter(str).toUpperCase() : getCaracter(str)
        result += (up)
      }
    }else{
      let res = str+=num
      result += res.charAt(Math.floor(Math.random() * res.length));
    }
    
  }
  return result
}

//genValues(str, num, 4, true)
module.exports = {
    genValues
}