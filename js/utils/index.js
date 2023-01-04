const criptVowel = (digit) => {
  const criptografyKey = new Map([
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
  ]);
  return digit !== undefined || null ? criptografyKey.get(digit) : undefined;
};

const uncriptVowel = (digit) => {
  const criptografyKey = new Map([
    ["ai", "a"],
    ["enter", "e"],
    ["imes", "i"],
    ["ober", "o"],
    ["ufat", "u"],
  ]);
  return digit !== undefined || null ? criptografyKey.get(digit) : undefined;
};

const vowelReg = /[aeiou]/;


function showMessage(value){
  const output = document.querySelector('.output');

  if(Boolean(output)){
    output.innerText = value;
  }
}

function isThereOutput(textAreaInputSplitted) {
  const thereOutput = document.querySelector(".output-group");

  if (!Boolean(thereOutput) && textAreaInputSplitted.length > 0) {
    document.querySelector(".box_message").append(outputGroup());
    document.querySelector(".message-group").remove();
    
  } else if (textAreaInputSplitted.length === 0 && thereOutput !== null) {
    document.querySelector(".output-group").remove();
    document.querySelector(".box_message").append(messageGroup());
  }
}

function resize() {
  const windowWidth = window.innerWidth;

  if (windowWidth >= 1024) {
    document
      .querySelector(".input-criptografy textarea")
      .setAttribute("rows", 12);
  } else if (windowWidth >= 768) {
    document
      .querySelector(".input-criptografy textarea")
      .setAttribute("rows", 10);
  } else {
    document
      .querySelector(".input-criptografy textarea")
      .setAttribute("rows", 6);
  }

  const thereOutput = document.querySelector('.output-group');

  if (Boolean(thereOutput) && windowWidth < 1024) {
    document
      .querySelector(".output")
      .setAttribute("rows", 10);
  } else if (Boolean(thereOutput) && windowWidth >= 768) {
    document
      .querySelector(".output")
      .setAttribute("rows", 6);
  } 

  console.log(Boolean(thereOutput))
}

function include(textAreaInput, arr){
  for(let i = 0; i < arr.length; i++){
    if(textAreaInput.includes(arr[i])){
      return true;
    }   
  }
  return false;
}