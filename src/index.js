import { z } from "zod";
import _ from "lodash";

const getElement = (id) => document.getElementById(id);

const nameInput = getElement("nameInput");
const ageInput = getElement("ageInput");
const ageDiv = getElement("ageDiv")
const elementDiv = getElement("elementDiv");
const button = getElement("button");
const form = getElement("form")

nameInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    ageDiv.classList.remove("hidden");
  }
});

ageInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    elementDiv.classList.remove("hidden");
  }
});

elementDiv.addEventListener("click", (e) => {
  button.classList.remove("hidden");
});

form.addEventListener("submit", (e) => {
  e.preventDefault()
  
})