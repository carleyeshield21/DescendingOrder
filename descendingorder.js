// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript
function descendingOrder(n){
    let nstr = n.toString()
    let narr = []
    for(i=0; i<=nstr.length-1; i++){
        narr.push(parseInt(nstr[i]))                                                                                                                                                                                                                                                                                                                            
    }
    narr.sort(function(a, b){return b-a})
    console.log(`n = ${n}`)
    console.log(parseInt(narr.join('')))
}
descendingOrder(42145)
console.log('========')
descendingOrder(145263)
console.log('========')
descendingOrder(123456789)
console.log('========')