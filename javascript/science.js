let score = {
    patsak : 0,
    earth:0,
    preserveNature:0,
    science:0,
    sciResearch:0,
    sataranasuk:0,
    plantTree:0,
    computer:0,
    drone:0,
    robot:0,
    eSport:0
}

let cnametoreal = {
    patsak : "ชมรมพัฒนาศักยภาพทางวิทยาศาสตร์",
    earth:"ชมรมโลกศาสตร์",
    preserveNature:"ชมรมอนุรักษ์ธรรมชาติ",
    science:"ชมรมวิทยาศาตร์",
    sciResearch:"ชมรมวิทยาศาตร์ (วิจัย)",
    sataranasuk:"ชมรมผู้นำยาวชนสาธารณะสุขฯ",
    plantTree:"ชมรมเพาะพันธุ์ไม้",
    computer:"ชมรมคอมพิวเตอร์",
    drone:"ชมรมโดรนและเทคโนโลยีอวกาศ",
    robot:"ชมรมของเล่นเพื่อการเรียนรู้",
    eSport:"ชมรมคอมพิวเตอร์ (E-Sport)"
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
    sessionStorage.removeItem("clubName_science");
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
    sessionStorage.setItem("clubName_science", JSON.stringify(arr_final));

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
            score.computer += index;
            score.eSport += index;
            score.drone += index;
            score.robot += index;
        }
    })

}
function q2AddScore(){
    const child = document.querySelector(".js-q2").querySelectorAll(".js-cirPar .circle")
    let i=0;
    child.forEach((child, index) => {
        if(child.classList.contains("js-pressed")){
            score.earth += index;
            score.preserveNature += index;
            score.plantTree += index;
        }
    })

}
function q3AddScore(){
    const child = document.querySelector(".js-q3").querySelectorAll(".js-cirPar .circle")
    let i=0;
    child.forEach((child, index) => {
        if(child.classList.contains("js-pressed")){
            score.patsak += index;
            score.science += index;
            score.sciResearch += index;
            score.computer += index;
        }
    })

}
function q4AddScore(){
    const child = document.querySelector(".js-q4").querySelectorAll(".js-cirPar .circle")
    let i=0;
    child.forEach((child, index) => {
        if(child.classList.contains("js-pressed")){
            score.sataranasuk += index;
            score.sciResearch += index;
            score.computer += index;
            score.eSport += index;
            score.drone += index;
            score.plantTree += index;
            score.earth += index;
            score.robot += index;
        }
    })

}
function q5AddScore(){
    const child = document.querySelector(".js-q5").querySelectorAll(".js-cirPar .circle")
    let i=0;
    child.forEach((child, index) => {
        if(child.classList.contains("js-pressed")){
            score.sataranasuk += index;
            score.preserveNature += index;
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