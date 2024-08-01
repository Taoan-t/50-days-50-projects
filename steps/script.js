const progress = document.getElementById("progress");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
/* 返回Nodelist值，类似一个Array */
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}

/* set initial values for circles and buttons */
// circles[0].classList.add("active");
// next.classList.add("active");

/* handle prev button click 
   1. decreasing one step by clicking  
   2. when only step 1 is active, set prev button to be inactive and next button to be active 
*/
// prev.addEventListener("click", () => {
//   for (let i = circles.length - 1; i >= 0; i--) {
//     if (circles[i].classList.contains("active")) {
//       circles[i].classList.remove("active");
//       break;
//     }
//   }

//   setButtonsStatus(circles, prev, next);
// });
/* handle next button click 
    1. increasing one step by clicking  
    2. when all steps are active, set next button to be inactive and prev button to be active
*/
// next.addEventListener("click", () => {
//   for (let i = 0; i < circles.length; i++) {
//     if (!circles[i].classList.contains("active")) {
//       circles[i].classList.add("active");
//       break;
//     }
//   }

//   setButtonsStatus(circles, prev, next);
// });

// function setButtonsStatus(steps, prevBtn, nextBtn) {
//   let activeStepNum = 0;

//   steps.map((step) => {
//     if (step.classList.contains("active")) {
//       activeStepNum += 1;
//     }
//   });

//   if (activeStepNum > 1 && !prevBtn.classList.contains("active")) {
//     prevBtn.classList.add("active");
//   }

//   if (activeStepNum === steps.length) {
//     nextBtn.classList.remove("active");
//     prevBtn.classList.add("active");
//   }

//   if (activeStepNum === 1) {
//     prevBtn.classList.remove("active");
//     nextBtn.classList.add("active");
//   }
// }
