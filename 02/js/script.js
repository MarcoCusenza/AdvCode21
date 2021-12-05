// //INPUT
// const arrayInst = [];
// const arrayNumb = [];

// document.getElementById("read-button").addEventListener('click', function () {
//   let file = document.getElementById("file-input").files[0];
//   let reader = new FileReader();
//   reader.addEventListener('load', function (e) {
//     let text = e.target.result;
//     text += '\n';
//     document.querySelector("#file-contents").textContent = text;
//     let suppVar = '';
//     for (let i = 0; i < text.length; i++) {
//       if (text[i] == ' ') {
//         arrayInst.push(suppVar);
//         suppVar = '';
//       } else if (text[i] == '\n') {
//         arrayNumb.push(parseInt(suppVar));
//         suppVar = '';
//       } else {
//         suppVar += text[i];
//       }
//     }

//     let horizontal = 0;
//     let vertical = 0;



//     arrayInst.forEach((el, i) => {
//       console.log('aaa', arrayNumb[i]);
//       if (el === 'forward') {
//         horizontal += arrayNumb[i];
//       } else {
//         if (el === 'up') {
//           vertical -= arrayNumb[i];
//         } else {
//           vertical += arrayNumb[i];
//         }
//       }
//     });

//     // PARTE 1
//     console.log(horizontal);
//     console.log(vertical);
//     let res1 = horizontal * vertical;

//     document.getElementById('result1').innerHTML = 'Soluzione parte 1: ' + res1;
//   });
//   reader.readAsText(file);
// });

//INPUT
const arrayInst = [];
const arrayNumb = [];

document.getElementById("read-button").addEventListener('click', function () {
  let file = document.getElementById("file-input").files[0];
  let reader = new FileReader();
  reader.addEventListener('load', function (e) {
    let text = e.target.result;
    text += '\n';
    document.querySelector("#file-contents").textContent = text;
    let suppVar = '';
    for (let i = 0; i < text.length; i++) {
      if (text[i] == ' ') {
        arrayInst.push(suppVar);
        suppVar = '';
      } else if (text[i] == '\n') {
        arrayNumb.push(parseInt(suppVar));
        suppVar = '';
      } else {
        suppVar += text[i];
      }
    }

    let horizontal = 0;
    let vertical = 0;
    let aim = 0;



    arrayInst.forEach((el, i) => {
      console.log('aaa', arrayNumb[i]);
      if (el === 'forward') {
        horizontal += arrayNumb[i];
        vertical += arrayNumb[i] * aim;
      } else {
        if (el === 'up') {
          aim -= arrayNumb[i];
        } else {
          aim += arrayNumb[i];
        }
      }
    });

    // PARTE 2
    let res2 = horizontal * vertical;
    document.getElementById('result2').innerHTML = 'Soluzione parte 2: ' + res2;
  });
  reader.readAsText(file);
});