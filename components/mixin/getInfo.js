import { JSDOM } from "jsdom";
import {
  conventorDescription,
  conventorPrice,
  generateUniqueId,
  isValidName,
  MakeModelSpecifications,
} from "./conventors.js";
export const GetInfo = (htmlPages) => {
  const dom = new JSDOM(htmlPages);
  const document = dom.window.document;
  const product = {
    id: generateUniqueId(document.querySelector(".product-card").id.trim()),
    name: isValidName(
      document.querySelector(".product-card-top__title").textContent
    ),
    descriptionSmall: conventorDescription(
      document.querySelector(".product-card-top__specs").textContent
    ),
    price: conventorPrice(
      document.querySelector(".product-buy__price").textContent
    ),
    descriptionAll: conventorDescription(
      document.querySelector(".product-card-description-text").textContent,
      false
    ),
    modelSpecifications: MakeModelSpecifications(
      document.querySelector(".product-characteristics-content"),
      document
    ),
    image: document.querySelector(".product-images-slider__main-img").src,
    instruction: document.querySelector(
      ".product-card-description-drivers__item-link"
    ).href,
  };
  console.log(product);
  return product;
};
