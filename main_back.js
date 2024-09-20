import './style.scss'

// console.log('a')
// // 1000仅代表最少延迟时间，settimeout 必须等其他消息处理完
// // callback
// // setTimeout(()=>{console.log('b')},1000)
// // console.log('c')

// // document.querySelector('btn').addEventListener('click',callback)
// console.clear()

// // function printString(string,callback ){
// //                     setTimeout(()=>{
// //                                         console.log(string)
// //                                         callback()
// //                     },Math.floor(Math.random()*100)+1)
// // }

 function printSringPromise(string){
return new Promise((resolve) => {
                    setTimeout(()=>{
                                        console.log(string)
                                       resolve()
                    },Math.floor(Math.random()*100)+1)

})


 }




// // function printAll(){
// //                     printString('a',()=>{
// //                                         printString('b',()=>{
// //                                                             printString('c',()=>{})  
// //                                         })             
// //                     })    
                      
                   
// // }
// // printAll()

// function printAll()  {
// printSringPromise('a').then(()=>printSringPromise('b')).then(()=>printSringPromise('c'))

// }

// printAll()

async function printAllAsync(){
await printSringPromise('a')
await printSringPromise('b')
await printSringPromise('c')

}
printAllAsync()
// // fuction 的语法糖 class
// class user{
// constructor(name,age,income){
// this.name=name
// this.age=age
// this.income=income
//  }
//  printName(){
//                     console.log(this.name)
//  }
//  printAge(){
//                     console.log(this.age)
//  }
// }
// const realUser = new user('joshua',17,1000)
// realUser.printName()
// realUser.printAge()

// console.clear()




// // promsie
// const result2 = new Promise((resolve)=>{
// console.log('promise')
// resolve('done')

// }).then(val=>{
//                     console.log(val)
// })
// console.log(result2)



// const result3 =new Promise((resolve)=>{
// const dick = 1+3

// resolve(dick)
// // reject(fku)
// }).then((val)=>{console.log(val*2) })



// const result4 = new Promise((resolve, reject) => {
//                     const dick = 1 -2;
//                     const fku = 'fku';
                    
//                     // 根据逻辑选择调用 resolve 或 reject
//                     if (dick > 0) {
//                       resolve(dick);  // 成功调用
//                     } else {
//                       reject(fku);    // 失败调用
//                     }
//                   })
//                     .then((val) => {
//                       return val * 2;  // 成功时，返回val的两倍
//                     })
//                     .catch((val) => {
//                       console.log(val);  // 捕获失败并打印
//                     });
                  
//                   console.log(result3);  // Promise 对象会立即打印，但值要等Promise完成后才会处理
                  


