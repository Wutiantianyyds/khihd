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
// // console.log(getPeach());
// // 出师表
// function getTroops(){
//     return new Promise(function(resolve,reject){
//         fs.readFile('./出师表.md',(err,data)=>{
//             if(err)reject(err)
//             resolve(data)
//         })
//     })
// }
// // 出居庸关
// function getAgent(){
//     return new Promise(function(resolve,reject){
//         fs.readFile('./出居庸关.md',(err,data)=>{
//             if(err)reject(err)
//             resolve(data)
//         })
//     })
// }

// getPeach().then(res=>{
//     return res.toString()
// }).then((data)=>{
//     let result=getTroops().then(res=>res.toString())
//     return result+data
// }).then((data1)=>{
//     console.log(data1);
//     getAgent(),then(res=>{
//         console.log(res.toString());
//     })
// })


// //抽离和封装
// function p(url){
//     return new Promise (function(resolve,reject){
//         fs.readFile(url,(err,data)=>{
//             if(err)reject(err)
//             resolve(data)
//         })
//     })
// }
// p('./桃花源记.md').then(res=>{
//     return res.toString()
// }).then((data)=>{
//     console.log(data);
//     p('./出师表.md').then(res=>{
//         console.log(res.toString());
//     })
// }).then((data1)=>{
//     console.log(data1);
//     p('./出居庸关.md').then(res=>{
//         console.log(res.toString());
//     })
// })




// // 桃花源记
// function getPeach(){
//     return new Promise(function(resolve,reject){
//         fs.readFile('./桃花源记.md',(err,data)=>{
//             if(err)reject(err)
//             resolve(data)
//         })
//     })
// }
// // console.log(getPeach());
// // 出师表
// function getTroops(){
//     return new Promise(function(resolve,reject){
//         fs.readFile('./出师表.md',(err,data)=>{
//             if(err)reject(err)
//             resolve(data)
//         })
//     })
// }
// // 出居庸关
// function getAgent(){
//     return new Promise(function(resolve,reject){
//         fs.readFile('./出居庸关.md',(err,data)=>{
//             if(err)reject(err)
//             resolve(data)
//         })
//     })
// }

// getPeach().then(res=>{
//     return res.toString()
// }).then((data)=>{
//     let result=getTroops().then(res=>res.toString())
//     return result+data
// }).then((data1)=>{
//     console.log(data1);
//     getAgent(),then(res=>{
//         console.log(res.toString());
//     })
// })


// //抽离和封装
// function p(url){
//     return new Promise (function(resolve,reject){
//         fs.readFile(url,(err,data)=>{
//             if(err)reject(err)
//             resolve(data)
//         })
//     })
// }
// p('./桃花源记.md').then(res=>{
//     return res.toString()
// }).then((data)=>{
//     console.log(data);
//     p('./出师表.md').then(res=>{
//         console.log(res.toString());
//     })
// }).then((data1)=>{
//     console.log(data1);
//     p('./出居庸关.md').then(res=>{
//         console.log(res.toString());
//     })
// })



// 桃花源记
function getPeach(){
    return new Promise(function(resolve,reject){
        fs.readFile('./桃花源记.md',(err,data)=>{
            if(err)reject(err)
            resolve(data)
        })
    })
}
// console.log(getPeach());
// 出师表
function getTroops(){
    return new Promise(function(resolve,reject){
        fs.readFile('./出师表.md',(err,data)=>{
            if(err)reject(err)
            resolve(data)
        })
    })
}
// 出居庸关
function getAgent(){
    return new Promise(function(resolve,reject){
        fs.readFile('./出居庸关.md',(err,data)=>{
            if(err)reject(err)
            resolve(data)
        })
    })
}

getPeach().then(res=>{
    return res.toString()
}).then((data)=>{
    let result=getTroops().then(res=>res.toString())
    return result+data
}).then((data1)=>{
    console.log(data1);
    getAgent(),then(res=>{
        console.log(res.toString());
    })
})


//抽离和封装
function p(url){
    return new Promise (function(resolve,reject){
        fs.readFile(url,(err,data)=>{
            if(err)reject(err)
            resolve(data)
        })
    })
}
p('./桃花源记.md').then(res=>{
    return res.toString()
}).then((data)=>{
    console.log(data);
    p('./出师表.md').then(res=>{
        console.log(res.toString());
    })
}).then((data1)=>{
    console.log(data1);
    p('./出居庸关.md').then(res=>{
        console.log(res.toString());
    })
})