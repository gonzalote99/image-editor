const imgEl = document.querySelector('img');
const filtersEl = document.querySelectorAll('input');
const anglesEl = document.querySelectorAll('li');

const fileEl = document.querySelector('.file');
const chooseBtnEl = document.querySelector('.chooseBtn');
const saveBtnEl = document.querySelector('.saveBtn');
const resetBtnEl = document.querySelector('.resetBtn');


let saturation = "100", blur = "0", brightness= "100", contrast = "100";

let rotate = 0, flipV = 1, flipH = 1;


const loadEl = () => {
  filtersEl[0].value = '100';
  filtersEl[1].value = '0';
  filtersEl[2].value = '100';
  filtersEl[3].value = '100';
}

const generateResult = () => {
  imgEl.style.filter = `saturate(${saturation}%) blur(${blur}px) brightness(${brightness}%) contrast(${contrast}%)`;
  imgEl.style.transform = `rotate(${rotate}deg) scale(${flipH},  ${flipV})`;


}


anglesEl.forEach(element => {
  element.addEventListener('click', () => {
    if(element.id === "vertical") {
      flipV = flipV === 1 ? -1 : 1;
    } 
    else if(element.id === "horizontal") {
      flipH = flipH === 1 ? -1 : 1;
    }
    else if(element.id === "left") {
      rotate = rotate - 90;
    } else {
      rotate = rotate + 90;
    }
    generateResult();
  });
});



filtersEl.forEach(element => {
element.addEventListener('input', () => {
if(element.id === "saturation") {
 saturation = filtersEl[0].value;
}
else if(element.id === "blur") {
 blur = filtersEl[1].value;
}
else if(element.id === "brightness") {
 brightness = filtersEl[2].value;
} else {
 contrast = filtersEl[3].value;
}
generateResult();
});
});

resetBtnEl.addEventListener('click', () => {
  saturation = "100", blur="0", brightness = "100", contrast = "100";
  rotate = "0", flipH = "1", flipV = "1";
  generateResult();
  loadEl();
})


fileEl.addEventListener('change', () => {
  let file = fileEl.files[0];
  console.log(fileEl)
  if(!file) return;
  imgEl.src = URL.createObjectURL(file);
  imgEl.addEventListener('load', () => {
    resetBtnEl.click();
  });

})

chooseBtnEl.addEventListener('click', () => {
  fileEl.click();
})




loadEl();