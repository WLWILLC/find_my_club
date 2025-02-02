let score = {
    korea : 0,
    chinese:0,
    japanese:0,
    thai:0,
    frech:0,
    germany:0,
    spainish:0,
    engStudentExchange:0,
    crossWord:0,
    engDebate:0,
    engMovie:0,
    engStoryTelling:0,
    intensiveEnglishMedis:0,
    langAndIntercultural:0,
    mun:0,
    oracle:0,
    publicSpeak:0,
    engQuizzes:0,
    wannasin:0,
    upskillVocab:0,
    engMC:0,
    epChorus:0,
    engMa:0,
    watasin:0,
    frenchChorus:0
}

let cnametoreal = {
    korea : "ชมรมภาษาเกาหลี",
    chinese:"ชมรมภาษาจีน",
    japanese:"ชมรมภาษาญี่ปุ่น",
    thai:"ชมรมภาษาไทย",
    frech:"ชมรมภาษาฝรั่งเศส",
    germany:"ชมรมภาษาเยอรมัน",
    spainish:"ชมรมภาษาสเปน",
    engStudentExchange:"ชมรมภาษาอังกฤษ (นักเรียนแลกเปลี่ยน)",
    crossWord:"ชมรมภาษาอังกฤษ (Crossword)",
    engDebate:"ชมรมภาษาอังกฤษ (Debate)",
    engMovie:"ชมรมภาษาอังกฤษ (English Movie Club M.4-6)",
    engStoryTelling:"ชมรมภาษาอังกฤษ English Story Telling M.4-5",
    intensiveEnglishMedis:"ชมรมภาษาอังกฤษ (Intensive English Media M.5",
    langAndIntercultural:"ชมรมภาษาอังกฤษ (Language and Intercultural Communication)",
    mun:"ชมรมภาษาอังกฤษ (MUN)",
    oracle:"ชมรมภาษาอังกฤษ (Oracle)",
    publicSpeak:"ชมรมภาษาอังกฤษ (Public Speaking)",
    engQuizzes:"ชมรมภาษาอังกฤษ (Quiz)",
    wannasin:"ชมรมวรรณศิลป์ ตอ.",
    upskillVocab:"ชมรม English Skills (Vocabulary) M.4",
    engMC:"ชมรมภาษาอังกฤษ MC (ชมรมพิธีกรภาษาอังกฤษ) M.4-6",
    epChorus:"ชมรมภาษาอังกฤษ (ขับร้องประสานเสียง)",
    engMa:"ชมรมภาษาอังกฤษ (English Drama)",
    watasin:"ชมรมวาทศิลป์",
    frenchChorus:"ชมรมภาษาฝรั่งเศส (French Chorus)"
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
    sessionStorage.removeItem("clubName_lang");
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
    sessionStorage.setItem("clubName_lang", JSON.stringify(arr_final));

}

function q1AddScore(){
    const child = document.querySelector(".js-q1").querySelectorAll(".js-cirPar .circle")
    let i=0;
    child.forEach((child, index) => {
        if(child.classList.contains("js-pressed")){
            score.korea += index;
            score.chinese += index;
            score.japanese += index;
            score.thai += index;
            score.frech += index;
            score.germany += index;
            score.spainish += index;
            score.wannasin += index;
            score.engStudentExchange += index;
            score.upskillVocab += index;
        }
    })

}
function q2AddScore(){
    const child = document.querySelector(".js-q2").querySelectorAll(".js-cirPar .circle")
    let i=0;
    child.forEach((child, index) => {
        if(child.classList.contains("js-pressed")){
            score.engDebate += index;
            score.engStoryTelling += index;
            score.langAndIntercultural += index;
            score.mun += index;
            score.publicSpeak += index;
            score.engMC += index;
            score.watasin += index;
        }
    })

}
function q3AddScore(){
    const child = document.querySelector(".js-q3").querySelectorAll(".js-cirPar .circle")
    let i=0;
    child.forEach((child, index) => {
        if(child.classList.contains("js-pressed")){
            score.langAndIntercultural += index;
            score.oracle += index;
            score.engQuizzes += index;
        }
    })

}
function q4AddScore(){
    const child = document.querySelector(".js-q4").querySelectorAll(".js-cirPar .circle")
    let i=0;
    child.forEach((child, index) => {
        if(child.classList.contains("js-pressed")){
            score.frenchChorus += index;
            score.crossWord += index;
            score.engMa += index;
            score.engStudentExchange += index;
            score.mun += index;
            score.engMC += index;
            score.epChorus += index;
            score.engDebate += index;
        }
    })

}
function q5AddScore(){
    const child = document.querySelector(".js-q5").querySelectorAll(".js-cirPar .circle")
    let i=0;
    child.forEach((child, index) => {
        if(child.classList.contains("js-pressed")){
            score.frenchChorus += index;
            score.engMa += index;
            score.engMovie += index;
            score.intensiveEnglishMedis += index;
            score.engMC += index;
            score.watasin += index;
            score.epChorus += index;
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