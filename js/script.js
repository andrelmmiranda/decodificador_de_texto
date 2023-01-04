resize();

window.addEventListener("resize", () => {
  resize();
});

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

    isThereOutput(textAreaInputSplitted);
    showMessage(textAreaInputSplitted.join(""), textAreaInputSplitted);

    resize();
  });

document
  .querySelector('[value="Descriptografar"]')
  .addEventListener("click", () => {
    let textAreaInput = document.querySelector(".input").value;
    const arr = ["ai", "enter", "imes", "ober", "ufat"];

    if (!include(textAreaInput, arr)) return;

    arr.map((el) => {
      textAreaInput = textAreaInput.replaceAll(el, uncriptVowel(el));
    });

    isThereOutput(textAreaInput.split(""));
    showMessage(textAreaInput);

    resize();
  });
