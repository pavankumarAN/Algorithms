//approach 1
function add(num) {
    let sum=0;
    for(let i=0;i<num;i++) {
         sum+=i; 
    }
    return sum;
}

let t1 = performance.now();
add(1234567890);
let t2 = performance.now();
document.write("The time taken by the function to add the number is "+ (t2-t1)/1000+" seconds"+"<br>");

//approach 2
function add2(num) {
    return num*(num+1);
}

let time1 = performance.now();
add2(1234567890);
let time2 = performance.now();
document.write("The time taken by the function to add the number is "+ (time2-time1)/1000+" seconds");
