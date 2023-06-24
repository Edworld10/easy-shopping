function generateNumber() {
  const min = Math.ceil(parseInt(document.querySelector('.input-entre').value));
  const max = Math.floor(parseInt(document.querySelector('.input-e').value));
  const result = Math.floor(Math.random() * (max - min + 1) + min);
  

 
    document.getElementById('valor').value = result;
  

  
}

function resetInputs() {
  document.querySelector('.input-entre').value = '';
  document.querySelector('.input-e').value = '';
  document.getElementById('valor').value = '';
}