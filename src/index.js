
const getCaracter = c => {
    return c.charAt(Math.floor(Math.random() * c.length));
}

const genValues = (quantity, upper=false, alternation = false) => {
    let str ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let num = '0123456789';
    let result = ''
  	let up = (upper) ? getCaracter(str).toUpperCase() : getCaracter(str)
    
    for (let i = 1; i <= quantity; i++){
        if(alternation){
            if(i % 2  == 0){
                result += getCaracter(num)
            }else{
                
                result += (up)
            }
        }else{
            let res = (up += num)
            result += res.charAt(Math.floor(Math.random() * res.length));
        }
        
    }
  return result
}

module.exports = {
    genValues
}