let score = {
    temis : 0,
    budda:0,
    religionAndWatanatamThai:0,
    economics:0,
    manageBussiness:0,
    tuActivists:0,
    laktasanaprawat:0,
    socialBook:0,
    pakeeSangkom:0,
    bumpenprayod:0
}

let cnametoreal = {
    temis : "ชมรมกฎหมายน่ารู้",
    budda:"ชมรมพระพุทธศาสนา",
    religionAndWatanatamThai:"ชมรมศาสนาและวัฒนธรรมไทย",
    economics:"ชมรมเศรษฐศาสตร์",
    manageBussiness:"ชมรมบริหารธุรกิจ",
    tuActivists:"ชมรมสังคมศึกษา (TU activists)",
    laktasanaprawat:"ชมรมสังคมศึกษา (หลากทัศนะประวัติศาสตร์)",
    socialBook:"ชมรมสังคมศึกษา (หนังสังคม)",
    pakeeSangkom:"ชมรมสังคมศึกษา (ภาคีสังคมศึกษา)",
    bumpenprayod:"ชมรมผู้บำเพ็ญประโยชน์"
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
    sessionStorage.removeItem("clubName_social");
    q1AddScore();
    q2AddScore();
    q3AddScore();
    q4AddScore();
    q5AddScore();
    let arr_nfinal = maxscore();
    let arr_final = [];
    for(let i=0;i<arr_nfinal.length;i++){
        arr_final.push(cnametoreal[`${arr_nfinal[i]}`]);
    }
    sessionStorage.setItem("clubName_social", JSON.stringify(arr_final));

}

function q1AddScore(){
    const child = document.querySelector(".js-q1").querySelectorAll(".js-cirPar .circle")
    let i=0;
    child.forEach((child, index) => {
        if(child.classList.contains("js-pressed")){
            score.temis += index;
        }
    })

}
function q2AddScore(){
    const child = document.querySelector(".js-q2").querySelectorAll(".js-cirPar .circle")
    let i=0;
    child.forEach((child, index) => {
        if(child.classList.contains("js-pressed")){
            score.socialBook += index;
            score.laktasanaprawat += index;
            score.tuActivists += index;
            score.pakeeSangkom += index;
        }
    })

}
function q3AddScore(){
    const child = document.querySelector(".js-q3").querySelectorAll(".js-cirPar .circle")
    let i=0;
    child.forEach((child, index) => {
        if(child.classList.contains("js-pressed")){
            score.tuActivists += index;
            score.pakeeSangkom += index;
            score.bumpenprayod += index;
        }
    })

}
function q4AddScore(){
    const child = document.querySelector(".js-q4").querySelectorAll(".js-cirPar .circle")
    let i=0;
    child.forEach((child, index) => {
        if(child.classList.contains("js-pressed")){
            score.economics += index;
            score.manageBussiness += index;
        }
    })

}
function q5AddScore(){
    const child = document.querySelector(".js-q5").querySelectorAll(".js-cirPar .circle")
    let i=0;
    child.forEach((child, index) => {
        if(child.classList.contains("js-pressed")){
            score.budda += index;
            score.religionAndWatanatamThai += index;
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