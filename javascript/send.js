

let paracard = {

    dataStart:`“This technology combined with a compelling offer 
    significantly boosted our overall conversion rate 
    as compared to past campaigns without LeadPost.”`,

    startStrong:`Jason. C, General Manager`,

    para:`Health, Wellness, and Fitness Company`,
};

let start = document.querySelector(".start_para").innerHTML = paracard.dataStart;
     strong = document.querySelector(".para_strong").innerHTML = paracard.startStrong;
     light = document.querySelector(".para_health").innerHTML = paracard.para;


var paraMid = {
    dataMid:`  “I love that this software allows even small businesses with low marketing budgets to enjoy 
    the benefits of remarketing to site visitors who do not convert on the first visit.”`,

    midStrong:`Amanda T., CEO`,

    lastInfo:`Marketing and Advertising Company`
}



const midStart =   document.querySelector(".mid_para").innerHTML = paraMid.dataMid;
const midStrong =   document.querySelector(".mid_strong").innerHTML = paraMid.midStrong;
const midinfo =   document.querySelector(".midInfo").innerHTML = paraMid.lastInfo;



var lastCard = {
    lastMid:`  “What’s amazing is the ability to accurately provide leads that visit your website without no friction.”`,

    midStrong:`David J., CEO`,

    lastInfo:`E-Learning Company`
}


var lastStart =   document.querySelector(".last_para").innerHTML = lastCard.lastMid;
console.log(lastStart);
  lastStrong =   document.querySelector(".last_strong").innerHTML = lastCard.midStrong;
  lastinfo =   document.querySelector(".lastInfo").innerHTML = lastCard.lastInfo;


