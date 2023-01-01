exec();

window.addEventListener("resize", () => {
  exec();
});

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

document
  .querySelector('[value="Criptografar"]')
  .addEventListener("click", () => {
    let textAreaInput = document.querySelector(".input");
    let textAreaInputSplitted = textAreaInput.value.split("");

    textAreaInputSplitted.map((digit, i) => {
      if (vowelReg.test(digit)) {
        if (textAreaInputSplitted[i] !== undefined)
          textAreaInputSplitted[i] = criptVowel(digit);
      }
    });

    innerText(textAreaInputSplitted.join(""));
  });

document.querySelector('[value="copiar"]').addEventListener("click", () => {
  const textAreaOutput = document.querySelector(".output").value;
  navigator.clipboard.writeText(textAreaOutput);
});

document
  .querySelector('[value="Descriptografar"]')
  .addEventListener("click", () => {
    let textAreaInput = document.querySelector(".input").value;
    const arr = ["ai", "enter", "imes", "ober", "ufat"];

    if (!textAreaInput.includes(...arr)) return;

    arr.map((el) => {
      textAreaInput = textAreaInput.replaceAll(el, uncriptVowel(el));
    });

    innerText(textAreaInput);
  });

function showMessage(array) {
  if (array.length > 0) {
    document.querySelector(".message-group").classList.add("hide");
    document.querySelector(".output-group").classList.remove("hide");
  } else {
    document.querySelector(".message-group").classList.remove("hide");
    document.querySelector(".output-group").classList.add("hide");
  }
}

function innerText(input) {
  document.querySelector(".output").innerText = input;

  showMessage(input);
}
