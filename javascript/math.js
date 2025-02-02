let score = {
    math : 0,
    quickMath:0,
    innoMath:0,
    calculus:0,
    newsMath:0,
    goMath:0,
    aMath:0,
    moneyMath:0
}

let cnametoreal = {
    math : 'ชมรมคณิตศาสตร์',
    quickMath:'ชมรมคณิตศาสตร์ (คณิตคิดเร็ว)',
    innoMath:'ชมรมคณิตศาสตร์ (ประกวดโครงงาน)',
    calculus:'ชมรมคณิตศาสตร์ (พัฒนาความสามารถด้านแคลคูลัส)',
    newsMath:'ชมรมคณิตศาสตร์ (วารสารออนไลน์ด้านคณิตศาสตร์)',
    goMath:'ชมรมคณิตศาสตร์ (หมากล้อม)',
    aMath:'ชมรมคณิตศาสตร์ (A-Math)',
    moneyMath:'ชมรมคณิตศาสตร์ (Quant การเงินเชิงปริมาณ)'
}

function pressbtn(btnClass, questionClass){
    const button = document.querySelector(`${questionClass}`).querySelector(`${btnClass}`);
    const children = document.querySelector(`${questionClass}`).querySelectorAll(".js-cirPar .circle")
    children.forEach((child, index) => {
        console.log(`Child ${index}:`, child);
        child.classList.remove('js-pressed')
    })
    button.classList.add('js-pressed')
}

function submitpressed(){
    sessionStorage.removeItem("clubName_math");
    q1AddScore();
    q2AddScore();
    q3AddScore();
    q4AddScore();
    let arr_nfinal = maxscore();
    let arr_final = [];
    for(let i=0;i<arr_nfinal.length;i++){
        arr_final.push(cnametoreal[`${arr_nfinal[i]}`]);
    }
    sessionStorage.setItem("clubName_math", JSON.stringify(arr_final));

    console.log(`math: ${score.math}
quickmath: ${score.quickMath}
innomath: ${score.innoMath}
calculus: ${score.calculus}
newsmath: ${score.newsMath}
gomath: ${score.goMath}
amath: ${score.aMath}
moneymath: ${score.moneyMath}`)
}

function q1AddScore(){
    const child = document.querySelector(".js-q1").querySelectorAll(".js-cirPar .circle")
    let i=0;
    child.forEach((child, index) => {
        if(child.classList.contains("js-pressed")){
            score.aMath += index;
            score.goMath += index;
        }
    })

}
function q2AddScore(){
    const child = document.querySelector(".js-q2").querySelectorAll(".js-cirPar .circle")
    let i=0;
    child.forEach((child, index) => {
        if(child.classList.contains("js-pressed")){
            score.moneyMath += index;
            score.innoMath += index;
            score.newsMath += index;
        }
    })

}
function q3AddScore(){
    const child = document.querySelector(".js-q3").querySelectorAll(".js-cirPar .circle")
    let i=0;
    child.forEach((child, index) => {
        if(child.classList.contains("js-pressed")){
            score.newsMath += index;
        }
    })

}
function q4AddScore(){
    const child = document.querySelector(".js-q4").querySelectorAll(".js-cirPar .circle")
    let i=0;
    child.forEach((child, index) => {
        if(child.classList.contains("js-pressed")){
            score.math += index;
            score.quickMath += index;
            score.calculus += index;
        }
    })

}

function maxscore(){
    let max=-1;
    let arr =[];

    for(const [key,value] of Object.entries(score)){
        if(value>max){
            max=value;
        }
    }

    for(const [key,value] of Object.entries(score)){
        if(value===max){
            arr.push(key);
        }
    }
    return arr;
}