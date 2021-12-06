//INPUT
document.getElementById("read-button").addEventListener('click', function () {
  let file = document.getElementById("file-input").files[0];
  let reader = new FileReader();
  reader.addEventListener('load', function (e) {
    let text = e.target.result;
    text = text.toString();
    document.querySelector("#file-contents").textContent = text;

    const estratti = [37, 60, 87, 13, 34, 72, 45, 49, 61, 27, 97, 88, 50, 30, 76, 40, 63, 9, 38, 67, 82, 6, 59, 90, 99, 54, 11, 66, 98, 23, 64, 14, 18, 4, 10, 89, 46, 32, 19, 5, 1, 53, 25, 96, 2, 12, 86, 58, 41, 68, 95, 8, 7, 3, 85, 70, 35, 55, 77, 44, 36, 51, 15, 52, 56, 57, 91, 16, 71, 92, 84, 17, 33, 29, 47, 75, 80, 39, 83, 74, 73, 65, 78, 69, 21, 42, 31, 93, 22, 62, 24, 48, 81, 0, 26, 43, 20, 28, 94, 79];
    let fp = 0;
    const cartella = [];

    
    //CREATE DATA STRUCTURE FROM TXT FILE
    for (let i = 0; i < 100; i++) {
      const riga = [];
      for (let x = 0; x < 5; x++) {
        const posizione = [];
        for (let y = 0; y < 5; y++) {
          let numb = '';
          while (text[fp] == '\n' || text[fp] == '' || text[fp] == '\r' || text[fp] == ' ') {
            fp++;
          }
          while (text[fp] != ' ' && text[fp] != '\n' && text[fp] != '' && text[fp] != '\r' && fp < text.length) {
            numb += text[fp];
            fp++;
          }
          posizione.push(numb);
          fp++;
        }
        riga.push(posizione);
      }
      cartella.push(riga);
    }

    let solution = estrazioni();
    let winner = cartella[solution[0]];
    let target = estratti[solution[1]];

    //CALCOLO SOMMA NUMERI RESTANTI NELLA CASELLA VINCITRICE
    let tot = 0;
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (!isNaN(winner[i][j])) {
          tot += parseInt(winner[i][j]);
        }
      }
    }

    // PARTE 1
    let res1 = tot * target;
    document.getElementById('result1').innerHTML = res1;
    // PARTE 2
    let res2;
    document.getElementById('result2').innerHTML = res2;


    //FUNZIONI
    //ESTRAI FINCHE' NON TROVI UN VINCITORE
    function estrazioni() {
      for (let i = 0; i < estratti.length; i++) {
        let target = estratti[i];
        for (let x = 0; x < 100; x++) {
          for (let y = 0; y < 5; y++) {
            for (let z = 0; z < 5; z++) {
              if (cartella[x][y][z] == target) {
                cartella[x][y][z] = 'V';
                if (checkVictory(x)) {
                  return [x, i];
                }
              }
            }
          }
        }
      }
    }
    //CHECK IF CARTELLA IS A WINNER
    function checkVictory(x) {
      for (let i = 0; i < 5; i++) {
        let countR = 0;
        let countC = 0;
        for (let k = 0; k < 5; k++) {
          if (cartella[x][i][k] == 'V') {
            countR++;
          }
          if (cartella[x][k][i] == 'V') {
            countC++;
          }
        }
        if (countR == 5 || countC == 5) {
          return true
        }
      }
      return false;
    }
  });
  reader.readAsText(file);
});