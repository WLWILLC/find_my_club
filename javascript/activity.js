let score = {
    eSport : 0,
    cartoon:0,
    robot:0,
    thaiMusic:0,
    engMusic:0,
    duriyang:0,
    photoTriam:0,
    nanSport:0,
    leadSchool:0,
    fitness:0,
    natrasin:0,
    nitaseSin:0,
    sataranasuk:0,
    bumpenPrayod:0,
    plantree:0,
    adviserFriend:0,
    adviserFriendPsyco:0,
    editor:0,
    contentCreator:0,
    frenchChorus:0,
    epChorus:0,
    engsangtsu:0,
    engMa:0,
    watasin:0,
    cardGame:0,
    library:0,
    boardGame:0,
    makradan:0,
    artsuksa:0,
    singrapanCroche:0,
    singrapan:0,
    santanagan:0,
    createBook:0
}

let cnametoreal = {
    eSport : "ชมรมคอมพิวเตอร์ (E-Sport)",
    cartoon:"ชมรมการ์ตูน",
    robot:"ชมรมของเล่นเพื่อการเรียนรู้",
    thaiMusic:"ชมรมดนตรีไทย",
    engMusic:"ชมรมดนตรีสากล",
    duriyang:"ชมรมดุริยางค์",
    photoTriam:"ชมรมถ่ายภาพ",
    nanSport:"ชมรมนันทนาการกีฬา",
    leadSchool:"ชมรมนันทนาการกีฬา (ผู้นำเชียร์โรงเรียน)",
    fitness:"ชมรมนันทนาการกีฬา (ฟิตเนส)",
    natrasin:"ชมรมนาฏศิลป์",
    nitaseSin:"ชมรมนิเทศน์ศิลป์",
    sataranasuk:"ชมรมผู้นำยาวชนสาธารณะสุขฯ",
    bumpenPrayod:"ชมรมผู้บำเพ็ญประโยชน์",
    plantree:"ชมรมเพาะพันธุ์ไม้",
    adviserFriend:"ชมรมเพื่อนที่ปรึกษา",
    adviserFriendPsyco:"ชมรมเพื่อนที่ปรึกษา (จิตวิทยาเบื้องต้น)",
    editor:"ชมรมภาพยนตร์สั้นและสื่อโทรทัศน์",
    contentCreator:"ชมรมภาพยนตร์สั้นและสื่อโทรทัศน์ (ผลิตสื่อ)",
    frenchChorus:"ชมรมภาษาฝรั่งเศส (french chorus)",
    epChorus:"ชมรมภาษาอังกฤษ (ขับร้องประสานเสียง)",
    engsangtsu:"ชมรมภาษาอังกฤษ (สร้างสื่อและนวัตกรรมการเรียนรู้วิชาภาษาอังกฤษ)",
    engMa:"ชมรมภาษาอังกฤษ (English Drama)",
    watasin:"ชมรมวาทศิลป์",
    cardGame:"ชมรมห้องสมุด (การ์ดเกม)",
    library:"ชมรมห้องสมุด",
    boardGame:"ชมรมห้องสมุด (บอร์ดเกม)",
    makradan:"ชมรมหมากกระดาน",
    artsuksa:"ชมรมศิลปศึกษา",
    singrapanCroche:"ชมรมสิ่งละอันพันละน้อย โครเชต์",
    singrapan:"ชมรมสิ่งละอันพันละน้อย",
    santanagan:"ชมรมสันทนากร",
    createBook:"ชมรมสร้างสรรหนังสือ"
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
    sessionStorage.removeItem("clubName_activity");
    q1AddScore();
    q2AddScore();
    q3AddScore();
    q4AddScore();
    q5AddScore();
    q6AddScore();
    q7AddScore();
    q8AddScore();
    q9AddScore();
    q10AddScore();
    q11AddScore();
    q12AddScore();
    q13AddScore();
    let arr_nfinal = maxscore();
    let arr_final = [];
    for(let i=0;i<arr_nfinal.length;i++){
        arr_final.push(cnametoreal[`${arr_nfinal[i]}`]);
    }
    sessionStorage.setItem("clubName_activity", JSON.stringify(arr_final));

}

function q1AddScore(){
    const child = document.querySelector(".js-q1").querySelectorAll(".js-cirPar .circle")
    let i=0;
    child.forEach((child, index) => {
        if(child.classList.contains("js-pressed")){
            score.eSport += index;
            score.robot += index;
        }
    })

}
function q2AddScore(){
    const child = document.querySelector(".js-q2").querySelectorAll(".js-cirPar .circle")
    let i=0;
    child.forEach((child, index) => {
        if(child.classList.contains("js-pressed")){
            score.photoTriam += index;
            score.cartoon += index;
            score.createBook += index;
            score.engsangtsu += index;
            score.editor += index;
            score.contentCreator += index;
        }
    })

}
function q3AddScore(){
    const child = document.querySelector(".js-q3").querySelectorAll(".js-cirPar .circle")
    let i=0;
    child.forEach((child, index) => {
        if(child.classList.contains("js-pressed")){
            score.thaiMusic += index;
            score.engMusic += index;
            score.duriyang += index;
        }
    })

}
function q4AddScore(){
    const child = document.querySelector(".js-q4").querySelectorAll(".js-cirPar .circle")
    let i=0;
    child.forEach((child, index) => {
        if(child.classList.contains("js-pressed")){
            score.nanSport += index;
            score.fitness += index;
        }
    })

}
function q5AddScore(){
    const child = document.querySelector(".js-q5").querySelectorAll(".js-cirPar .circle")
    let i=0;
    child.forEach((child, index) => {
        if(child.classList.contains("js-pressed")){
            score.sataranasuk += index;
            score.bumpenPrayod += index;
        }
    })

}
function q6AddScore(){
    const child = document.querySelector(".js-q6").querySelectorAll(".js-cirPar .circle")
    let i=0;
    child.forEach((child, index) => {
        if(child.classList.contains("js-pressed")){
            score.adviserFriend += index;
            score.adviserFriendPsyco += index;
        }
    })

}
function q7AddScore(){
    const child = document.querySelector(".js-q7").querySelectorAll(".js-cirPar .circle")
    let i=0;
    child.forEach((child, index) => {
        if(child.classList.contains("js-pressed")){
            score.artsuksa += index;
        }
    })

}
function q8AddScore(){
    const child = document.querySelector(".js-q8").querySelectorAll(".js-cirPar .circle")
    let i=0;
    child.forEach((child, index) => {
        if(child.classList.contains("js-pressed")){
            score.cardGame += index;
            score.boardGame += index;
            score.makradan += index;
        }
    })

}
function q9AddScore(){
    const child = document.querySelector(".js-q9").querySelectorAll(".js-cirPar .circle")
    let i=0;
    child.forEach((child, index) => {
        if(child.classList.contains("js-pressed")){
            score.plantTree += index;
            score.library += index;
        }
    })

}
function q10AddScore(){
    const child = document.querySelector(".js-q10").querySelectorAll(".js-cirPar .circle")
    let i=0;
    child.forEach((child, index) => {
        if(child.classList.contains("js-pressed")){
            score.leadSchool += index;
            score.natrasin += index;
            score.santanagan += index;
            score.nitaseSin += index;
            score.engMa += index;
        }
    })

}
function q11AddScore(){
    const child = document.querySelector(".js-q11").querySelectorAll(".js-cirPar .circle")
    let i=0;
    child.forEach((child, index) => {
        if(child.classList.contains("js-pressed")){
            score.epChorus += index;
            score.frenchChorus += index;
        }
    })

}
function q12AddScore(){
    const child = document.querySelector(".js-q12").querySelectorAll(".js-cirPar .circle")
    let i=0;
    child.forEach((child, index) => {
        if(child.classList.contains("js-pressed")){
            score.watasin += index;
        }
    })

}
function q13AddScore(){
    const child = document.querySelector(".js-q13").querySelectorAll(".js-cirPar .circle")
    let i=0;
    child.forEach((child, index) => {
        if(child.classList.contains("js-pressed")){
            score.singrapan += index;
            score.singrapanCroche += index;
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