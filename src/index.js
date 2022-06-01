const getCaracter = c => {
    const char = c.charAt(Math.floor(Math.random() * c.length));
    if(Math.round(Math.random())) return char.toUpperCase()
    return char
}

const genValues = (quantity, upper=false, alternation = false) => {
    let str ='abcdefghijklmnopqrstuvwxyz';
    let num = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = ''
    
    for (let i = 1; i <= quantity; i++){
        if(alternation){
            if(i % 2  === 0){
                result += Math.floor(Math.random() * 10)
            }else{   
                result += upper ? getCaracter(str).toUpperCase() : getCaracter(str)
            }
        }else{
            result += upper ? getCaracter(str).toUpperCase() : getCaracter(num)
        }
    }
  return result
}

module.exports = {
    genValues
}