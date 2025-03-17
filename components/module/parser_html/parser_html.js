import fs from "fs";
import { GetInfo } from "../../mixin/getInfo.js";
import { SaveInfoRedis } from "../../redis/server.js";

export const parser_html = (pathFile) => {
  try {
    fs.readFile(pathFile, "utf8", (err, data) => {
      if (err) {
        console.error("Ошибка при чтении файла!!!:", err);
        return;
      }
      const htmlContent = data.match(/<html.*?>([\s\S]*?)<\/html>/i);

      if (htmlContent) {
        SaveInfoRedis( GetInfo(htmlContent))
      } else {
        console.log("Не удалось найти HTML содержимое");
      }
    });
  } catch (error) {
    console.error("Ошибка при чтении файла:", error);
  }
};
