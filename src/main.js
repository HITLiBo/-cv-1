let html = document.querySelector('#html');
let string = `
/*你好，我是一名前端新人
这是我的一个小项目————动态简历
接下来我要给它加样式了
我要加的样式是*/
body{
    color:red;
}
/*接下来我演示如何在网页制作一个太极
*首先创建一个div标签,并给予样式
*/
#div1 {
    border: 2px solid red;
    width: 200px;
    height: 200px;
}
/*
*接下来把div变成一个八卦图
*首先先把div变成一个圆
*/
#div1{
    border-radius:50%;
    box-shadow:0 0 5px rgba(0,0,0,0.5);
    border:none;
}
/*
*八卦石阴阳形成的
*一黑一白
**/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);}
/*加两个神秘的小球*/
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background:#000;
    border-radius:50%;
}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:#fff;
    border-radius:50%;
}
`;

let string2 = '';
let n = 0;

let step = () => {
    setTimeout(() => {
        if (string[n] === '\n') {
            string2 += "<br>"
        }
        else if (string[n] === " ") {
            string2 += "&nbsp"
        }
        else {
            string2 += string[n];
        }
        //简写 string2 += string[n] === '\n'?string2 += "<br>":string2 += string[n];
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 999);
        html.scrollTo(0, 999);
        if (n < string.length - 1) {
            n += 1;
            step();
        }
    }, 5);
};

step();

// let style = document.querySelector("#style");
// setTimeout(() => {
//     style.innerHTML = `
//     body{
//         color:red;
//     }
//     `
// }, 300)