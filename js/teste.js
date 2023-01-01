const windowState = {
  windowWidth: window.innerWidth,
  windowHeigth: window.innerHeight
};

const teste = {
  func: ()=> {console.log('func')}
}

function windowSetState() {
  windowState.windowWidth = window.innerWidth;
}

window.exec = function () {
  windowSetState();
  teste.func();
  const windowWidth = windowState.windowWidth;

  if (windowWidth >= 768) {
    document.querySelector('.input').setAttribute('rows', 12);
    document.querySelector('.output').setAttribute('rows', 12);
  } else{
    document.querySelector('.input').setAttribute('rows', 6);
    document.querySelector('.output').setAttribute('rows', 6);
  }

  if(windowWidth < 1024){
      document.querySelector('.message-group svg').classList.add('hide');
  } else{
    document.querySelector(".message-group svg").classList.remove("hide");
  }
};
