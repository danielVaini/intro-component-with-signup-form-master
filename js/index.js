const inputs = document.querySelectorAll('input')
const imgs = document.querySelectorAll('img')
const labels = document.querySelectorAll('img')
const div = document.querySelectorAll('.inputs');






function Teste() {

  inputs.forEach((item, index) => {
    let vazio = item.value == '';
    if(vazio){
      item.style.borderColor = 'red';
      div[index].children[2].style.display = 'flex'
      imgs[index].style.display = 'block'
    }else {
      item.style.borderColor = 'hsl(248, 32%, 49%)';
      div[index].children[2].style.display = 'none'
      imgs[index].style.display = 'none'
      Validacao()
      
    }
    
  })
}


function Validacao() {
  let inputEmail = inputs[2].value;
  if(inputEmail.indexOf('@') < 1 ||
  inputEmail.indexOf('.') == -1 ||
  inputEmail.indexOf('.com') == -1 ){
    div[2].children[2].style.display = 'flex'
    imgs[2].style.display = 'block'
    inputs[2].style.borderColor = 'red';
  }
}