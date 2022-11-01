"use strict";

const form = document.getElementById("my-form");
form.addEventListener("submit", submitHandler);

function submitHandler(evt) {
  evt.preventDefault();
  const url = form.querySelector("input[id='image-url']").value;
  const textTop = form.querySelector("input[id='top-text']").value;
  const textBottom = form.querySelector("input[id='bottom-text']").value;

  if (textTop.trim() === "" && textBottom.trim() === "") {
    alert("Please add text");
    return;
  }

  if (url.trim() === "") {
    alert("Please add image");
    return;
  }

  createMeme(url, textTop, textBottom);
  form.reset();
}

function handleDeleteButton(evt) {
  const cardId = evt.target.dataset.id;
  const card = document.querySelector(`div[data-id="${cardId}"]`);
  card.remove();
}

function createMeme(url, text1, text2) {
  const cardId = Math.random();

  const img = document.createElement("img");
  img.src = url;

  const textTop = document.createElement("p");
  textTop.classList = "fixed fixed-top";
  textTop.textContent = text1;

  const textBottom = document.createElement("p");
  textBottom.classList = "fixed fixed-bottom";
  textBottom.textContent = text2;

  const cardBody = document.createElement("div");
  cardBody.classList = "card-body";
  cardBody.appendChild(img);
  cardBody.appendChild(textTop);
  cardBody.appendChild(textBottom);

  const card = document.createElement("div");
  card.classList = "card";
  card.setAttribute("data-id", cardId);
  card.appendChild(cardBody);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.setAttribute("data-id", cardId);
  deleteBtn.addEventListener("click", handleDeleteButton);

  const cardFooter = document.createElement("div");
  cardFooter.classList = "card-footer";
  cardFooter.appendChild(deleteBtn);
  card.appendChild(cardFooter);

  const results = document.getElementById("results");
  results.appendChild(card);
}