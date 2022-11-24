const fs=require('fs')
// // 桃花源记
// function getPeach(){
//     return new Promise(function(resolve,reject){
//         fs.readFile('./桃花源记.md',(err,data)=>{
//             if(err)reject(err)
//             resolve(data)
//         })
//     })
// }
// const getPeach=()=>{
//     return new Promise(function(resolve,reject){
//         fs.readFile('./桃花源记.md',(err,data)=>{
//             if(err)reject(err)
//             resolve(data)
//         })
//     })
// }
// getPeach().then(getPeach)
// // 桃花源记
// function getPeach(){
//     return new Promise(function(resolve,reject){
//         fs.readFile('./桃花源记.md',(err,data)=>{
//             if(err)reject(err)
//             resolve(data)
//         })
//     })
// }
// const getPeach=()=>{
//     return new Promise(function(resolve,reject){
//         fs.readFile('./桃花源记.md',(err,data)=>{
//             if(err)reject(err)
//             resolve(data)
//         })
//     })
// }
// getPeach().then(getPeach)
// 桃花源记
function getPeach(){
    return new Promise(function(resolve,reject){
        fs.readFile('./桃花源记.md',(err,data)=>{
            if(err)reject(err)
            resolve(data)
        })
    })
}
const getPeach=()=>{
    return new Promise(function(resolve,reject){
        fs.readFile('./桃花源记.md',(err,data)=>{
            if(err)reject(err)
            resolve(data)
        })
    })
}
getPeach().then(getPeach)