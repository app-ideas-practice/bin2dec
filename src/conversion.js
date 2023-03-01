export default function conversion(input){
    let total = 0
    let counter = input.length - 1;

    for(let i=0; i<input.length; i++){
        total += parseInt(input.charAt(i)) * Math.pow(2, counter)
        counter--;
    }

    return total
}