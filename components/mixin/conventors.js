import { JSDOM } from "jsdom";

export const conventorPrice = (str) => {
  try {
    if (str.length > 0) {
      let number = "";
      let string = str.trim().slice(0, str.trim().length - 2);
      for (let index = 0; index < string.length; index++) {
        Number(string[index]) ? (number += string[index]) : null;
      }
      return Number(number);
    } else {
      return "не указано";
    }
  } catch (error) {
    console.error(error);

    return "не указано";
  }
};

export const conventorDescription = (str, bool = true) => {
  try {
    if (str.trim().length > 0) {
      return bool ? str.trim().slice(0, str.trim().length - 10) : str.trim();
    }
    return "не указано";
  } catch (error) {
    console.error(error);
    return "не указано";
  }
};

export const generateUniqueId = (idSelector) => {
  try {
    if (idSelector.trim().length > 0) {
      return idSelector.trim();
    }
    return `${Date.now().toString(36)}-${Math.random()
      .toString(36)
      .substring(2, 8)}`;
  } catch (error) {
    console.error(error);

    return `${Date.now().toString(36)}-${Math.random()
      .toString(36)
      .substring(2, 8)}`;
  }
};
export const isValidName = (name) => {
  try {
    if (name.trim().length > 0) {
      return name.trim();
    }
    return `не указано`;
  } catch (error) {
    console.error(error);
    return `не указано`;
  }
};

export const MakeModelSpecifications = (blockHtml = null) => {
  const modelSpecifications = [];
  if (!blockHtml) return modelSpecifications;

  try {
    blockHtml.childNodes.forEach((childNode, index) => {
      if (childNode.nodeType === 1) {
        const dom = new JSDOM(childNode.outerHTML);
        const document = dom.window.document;
        modelSpecifications.push({
          nameCategory: document
            .querySelector(".product-characteristics__group-title")
            .textContent.trim(),
        });
        document
          .querySelector(".product-characteristics__specs-list")
          .childNodes.forEach((child) => {
            const dom = new JSDOM(child.outerHTML);
            const document = dom.window.document;
            modelSpecifications[index][
              document
                .querySelector(".product-characteristics__spec-title-content")
                .textContent.trim()
            ] = document
              .querySelector(".product-characteristics__spec-value")
              .textContent.trim();
          });
      }
    });

    return modelSpecifications;
  } catch (error) {
    console.error(error);
    return modelSpecifications;
  }
};
