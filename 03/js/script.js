//INPUT
const arrayNumb = [];

document.getElementById("read-button").addEventListener('click', function () {
  let file = document.getElementById("file-input").files[0];
  let reader = new FileReader();
  reader.addEventListener('load', function (e) {
    let text = e.target.result;
    text = text.toString();
    text += '\n';
    document.querySelector("#file-contents").textContent = text;
    let suppVar = '';
    for (let i = 0; i < text.length; i++) {
      if (text[i] == '\n') {
        arrayNumb.push(suppVar);
        suppVar = '';
      } else {
        suppVar += text[i];
      }
    }

    let gamma = '';
    let epsilon = '';

    for (let i = 0; i < 12; i++) {
      let uno = 0;
      let zero = 0;
      for (let x = 0; x < arrayNumb.length; x++) {
        if (arrayNumb[x][i] == '0') {
          zero++;
        } else {
          uno++;
        }
      }
      if (uno > zero) {
        gamma += '1';
        epsilon += '0';
      } else {
        gamma += '0';
        epsilon += '1';
      }
    }

    // PARTE 2
    let arraySupp1 = [];
    let arraySupp2 = [];

    //Primo riempimento totale
    for (let z = 0; z < arrayNumb.length; z++) {
      let word = '';
      for (let i = 0; i < 12; i++) {
        // console.log('valore immesso:', arrayNumb[z][i]);
        word += arrayNumb[z][i];
      }
      // console.log('word è:', word);
      arraySupp1.push(word);
      arraySupp2.push(word);
    }

    console.log("Array1 START LP:", arraySupp1[arraySupp1.length - 1], "Array2: START LP", arraySupp2[arraySupp2.length - 1]);


    //Inizio algoritmo
    for (let i = 0; i < 12; i++) {
      console.log('INIZIO CICLO');
      let uno1 = 0;
      let zero1 = 0;
      let focus1 = 0;

      //ArraySupp1
      //capire se devo togliere quelli con 0 o con 1 in posizione i
      for (let x = 0; x < arraySupp1.length; x++) {
        if (arraySupp1[x][i] == '0') {
          zero1++;
        } else {
          uno1++;
        }
      }

      if (uno1 >= zero1) {
        focus1 = '1';
      } else {
        focus1 = '0';
      }
      console.log('focus1:', focus1, "perché nelle parole alla posizione", i, 'cè una maggioranza di', focus1);

      //rimuovere quelli che non hanno focus (0,1) in posizione i
      for (let x = 0; x < arraySupp1.length; x++) {
        if (arraySupp2.length > 1) {
          if (arraySupp1[x][i] != focus1) {
            arraySupp1.splice(x, 1);
            x--;
          }
        }
      }
      console.log("Array1: REMOVED", arraySupp1);
      console.log('Fine CICLO');
    }


    for (let i = 0; i < 12; i++) {
      console.log('INIZIO CICLO A2');
      //ArraySupp2
      let uno2 = 0;
      let zero2 = 0;
      let focus2 = 0;

      for (let x = 0; x < arraySupp2.length; x++) {
        console.log(arraySupp2[x][i], 'carattere alla posizione', i, 'è uguale a 0?');
        if (arraySupp2[x][i] == '0') {
          console.log("VERO");
          zero2++;
        } else {
          console.log("FALSO");
          uno2++;
        }
      }

      if (zero2 <= uno2) {
        focus2 = '0';
      } else if (uno2 > 0) {
        focus2 = '1';
      }
      console.log('focus2:', focus2, "perché nelle parole alla posizione", i, 'cè una minoranza di', focus2);

      for (let x = 0; x < arraySupp2.length; x++) {
        console.log(arraySupp2[x][i], 'è diverso da', focus2, '?A2');
        if (arraySupp2[x][i] != focus2) {
          if (arraySupp2.length > 1) {
            console.log("VERO, STO PER RIMUOVERE:", arraySupp2[x], "a causa del carattere", arraySupp2[x][i], 'in posizione', i);
            arraySupp2.splice(x, 1);
            x--;
          }
        } else {
          console.log("FALSO");
        }
      }
      console.log("Array2: REMOVED", arraySupp2);
      console.log('Fine CICLO A2');
    }


    // PARTE 1
    // let res1 = binToInt(gamma) * binToInt(epsilon);
    // document.getElementById('result1').innerHTML = 'Soluzione parte 1: ' + res1;

    //PARTE 2
    let res2 = binToInt(arraySupp1[0]) * binToInt(arraySupp2[0]);
    document.getElementById('result2').innerHTML = 'Soluzione parte 2: ' + res2;

  });
  reader.readAsText(file);
});



//FUNZIONI

//Decode binary --> int
function binToInt(word) {
  let tot = 0;
  for (let i = word.length; i >= 0; i--) {
    if (word[i] == 1) {
      let exp = word.length - (i + 1);
      tot += pow2(exp);
    }
  }
  return tot;
}

//Power function
function pow2(exp) {
  let tot = 1;
  for (let y = 0; y < exp; y++) {
    tot *= 2;
  }
  return tot;
}


// focus2 --> nell'ultima parola alla posizione 9 uno2 < zero2 ma solo perché c'è una sola parola e lui comunque elimina l'unica esistente