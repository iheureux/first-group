window.onload = function() {
     let button = document.querySelector("#randomButton");
if (!button) {
       return;
    }
    let times = 0;
    let score = 0000;
    let fos=0;
    let rig=0;
  button.onclick = function() {
    const arr=[0,0,0,0];
    let containers = document.querySelectorAll(".image-container");
      for (let i = 0;  i < containers.length;  i++) {
    let container = containers[i];
    let images = container.querySelectorAll("img");
      for (let j = 0;  j < images.length;  j++) {
          images[j].style.display = "none";
        }
    let rand = Math.floor(Math.random() * 9) + 1;
    let view = container.querySelector(
          "img:nth-child(" + rand + ")"
        );
       view.style.display = "block";
arr[i] = rand;
      }
      console.log(arr);
    };
    const inputBox = document.getElementById('input-box');
    const panduanButton = document.getElementById('panduan');
    panduanButton.addEventListener('click', function() {
      const expr = inputBox.value;
      const result = eval(expr);
    console.log(result);
    if(result===24){  score = score +1000;
                    rig++;
    }
    else{fos++;}
      inputBox.value = '';
    });
    let button1 = document.querySelector("#panduan");
    if (!button) {
           return;
        }
      button1.onclick = function() {
         arr=[0,0,0,0];
        let containers = document.querySelectorAll(".image-container");
          for (let i = 0;  i < containers.length;  i++) {
        let container = containers[i];
        let images = container.querySelectorAll("img");
          for (let j = 0;  j < images.length;  j++) {
              images[j].style.display = "none";
            }
        let rand = Math.floor(Math.random() * 9) + 1;
        let view = container.querySelector(
              "img:nth-child(" + rand + ")"
            );
           view.style.display = "block";
    arr[i] = rand;
          }
          console.log(arr);
          times++;
          console.log(times);
          const timestxt= document.getElementById("final");
          timestxt.innerHTML =`  答题次数: ${times}次<br>答对次数：${rig}次<br>答错次数：${fos}次<br>累计积分：${score}分`;

if (timestxt) {
  console.log("yes")}
  
        };
      
  };
  
        
 




