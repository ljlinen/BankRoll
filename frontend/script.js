import { getData } from "./dbData.js";

const BankRollGoal = 4000;

function updateRollTotal(data) {
  let totalRoll = 0;

  data.forEach((currentData) => {
    totalRoll += parseFloat(currentData.dailyRoll);
  })
  
  const h1Total = document.querySelector('.p4');
  const h1Missedroll = document.querySelector('.p5');

  h1Total.textContent = 'R' + totalRoll;
  if (totalRoll < BankRollGoal) {
    h1Missedroll.textContent = 'missed Roll: R' + (BankRollGoal - totalRoll);
  } else {
    h1Missedroll.textContent = 'completed Roll: R' + (totalRoll);
    h1Missedroll.style.color = 'yellow';
  }
}

function addRolls(data) {

  data.forEach((currentData) => {
  let valueWhole, valuePart;

      const stroke_dashArray = '627.3';
      valueWhole = (BankRollGoal / data.length).toFixed(2);
      valuePart = currentData.dailyRoll;
          
      let stroke_dashoffsetPerc = ((valuePart / valueWhole) * 100).toFixed(2);
      let stroke_dashoffset = ((stroke_dashoffsetPerc / 100) * stroke_dashArray).toFixed(2);
      
    // alert("Goal for each roll: " + valueWhole +
    //   " dailyroll: " + valuePart +
    //   " which is percentage reached by roll: " +
    //   stroke_dashoffsetPerc + " dahhSTroke equivalent: " +
    //   stroke_dashoffset)
    
      const rolls_div = document.querySelector('.rolls');
      const rollwrapper_div = document.querySelector('.roll-wrapper');
      const rollcountbg_div = document.querySelector('.rollcount-bg');
      const svg_progress = document.querySelector('.progress');


    //Adding Rolls from database To Roll in Page
    let newDivRollWrapper = document.createElement('div');
    let newDivRollCountBg = document.createElement('div');
    let newSvgProgress = document.createElementNS('http://www.w3.org/2000/svg', "svg");
    
    let newCircleRollCount = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    newCircleRollCount.classList.add('rollcount');
    newCircleRollCount.setAttribute('cy', '105');
    newCircleRollCount.setAttribute('cx', '105');
    newCircleRollCount.setAttribute('r', '100');
    newCircleRollCount.setAttribute('fill', 'transparent');
    newCircleRollCount.setAttribute('stroke', 'black');
    newCircleRollCount.setAttribute('stroke-width', '10');
    newCircleRollCount.style.strokeDashoffset = stroke_dashArray - stroke_dashoffset;
    
    let newProllName = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    newProllName.classList.add('p-rollname-svg');
    newProllName.setAttribute('x', '105');
    newProllName.setAttribute('y', '60');
    newProllName.setAttribute('text-anchor', 'middle');
    newProllName.setAttribute('fill', '#8D8D8D');
      
    let newPdailyRoll = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    newPdailyRoll.classList.add('p-dailyroll-svg');
    newPdailyRoll.setAttribute('x', '105');
    newPdailyRoll.setAttribute('y', '130');
    newPdailyRoll.setAttribute('text-anchor', 'middle');
    newPdailyRoll.setAttribute('fill', '#8D8D8D');
      
    let newProllLocation = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    newProllLocation.classList.add('p-rolllocation-svg');
    newProllLocation.setAttribute('x', '105');
    newProllLocation.setAttribute('y', '160');
    newProllLocation.setAttribute('text-anchor', 'middle');
    newProllLocation.setAttribute('fill', '#8D8D8D');

      newProllName.textContent = currentData.rollName;
      newPdailyRoll.textContent = currentData.dailyRoll
      newProllLocation.textContent = currentData.averageRollPerMonth
      
      newSvgProgress.classList.add('progress');
      newSvgProgress.style.height = '210';
      newSvgProgress.style.width = '210';
      // newSvgProgress.setAttribute('id', currentData.rollName);
     
      newSvgProgress.append(newCircleRollCount, newProllName, newPdailyRoll, newProllLocation);

    newDivRollWrapper.append(newDivRollCountBg)
    newDivRollWrapper.classList.add('roll-wrapper');

    newDivRollWrapper.append(newSvgProgress)
    newDivRollCountBg.classList.add('rollcount-bg');
    
    rolls_div.append(newDivRollWrapper);

  })
  
}


async function BankRoll() {
  const pendingData = await getData();
  updateRollTotal(pendingData)
  addRolls(pendingData)
}

BankRoll();