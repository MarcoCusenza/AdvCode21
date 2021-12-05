//INPUT
document.getElementById("read-button").addEventListener('click', function () {
  let file = document.getElementById("file-input").files[0];
  let reader = new FileReader();
  reader.addEventListener('load', function (e) {
    let text = e.target.result;
    document.querySelector("#file-contents").textContent = text;
  });
  reader.readAsText(file);
});




// PARTE 1
let res1;
document.getElementById('result1').innerHTML = res1;

// PARTE 2
let res2;
document.getElementById('result2').innerHTML = res2;