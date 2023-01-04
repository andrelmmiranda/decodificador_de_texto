function outputGroup() {
  const divOutput = document.createElement("div");
  divOutput.classList.add("output-group");

  const textarea = document.createElement("textarea");
  textarea.classList.add("output");

  const input = document.createElement("input");
  input.classList.add("btn", "btn_transparent");
  input.setAttribute("type", "button");
  input.setAttribute("value", "copiar");

  divOutput.append(textarea, input);

  input.addEventListener("click", () => {
    const textAreaOutput = document.querySelector(".output").value;
    navigator.clipboard.writeText(textAreaOutput);
  });

  return divOutput;
}
