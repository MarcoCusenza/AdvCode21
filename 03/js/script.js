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
        arrayNumb.push(parseInt(suppVar));
        suppVar = '';
      } else {
        suppVar += text[i];
      }
    }



    // PARTE 1
    let res2 = horizontal * vertical;
    document.getElementById('result2').innerHTML = 'Soluzione parte 2: ' + res2;
  });
  reader.readAsText(file);
});