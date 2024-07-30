import { z } from "zod";
import _ from "lodash";

const getElement = (id) => document.getElementById(id);

const nameInput = getElement("nameInput");
const ageInput = getElement("ageInput");
const ageDiv = getElement("ageDiv")
const elementDiv = getElement("elementDiv");
const button = getElement("button");
const form = getElement("form")
const httpMethod = getElement("httpMethod");
const installs = document.getElementsByClassName("install")
console.log(installs)

nameInput.addEventListener("keypress", (e) => {
  let currentInstall = "";
  if (e.key === "Enter") {
    e.preventDefault();
    currentInstall = e.target.value
    Array.from(installs).forEach((element) => {
      element.innerText = currentInstall
    })
    httpMethod.classList.remove("hidden");
  }
});
