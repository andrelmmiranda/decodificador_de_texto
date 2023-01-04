function messageGroup() {
  const messageGroup = document.createElement("div");
  messageGroup.classList.add("message-group");

  const figure = document.createElement("figure");
  const img = document.createElement("img");
  img.setAttribute("src", "./img/looking.png");
  const title = document.createElement("p");
  title.classList.add("title");
  title.innerText = "Nenhuma mensagem encontrada";
  const text = document.createElement("p");
  text.classList.add("text");
  text.innerText =
    "Digite um texto que você deseja criptografar ou descriptografar.";

  figure.append(img);
  messageGroup.append(figure, title, text);

  return messageGroup;
}
