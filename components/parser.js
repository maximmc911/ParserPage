import { catalogFiles } from "./mixin/catalogFiles.js";
import { GetInfo } from "./mixin/getInfo.js";
import { parser_html } from "./module/parser_html/parser_html.js";
import { parser_mhtml } from "./module/parser_mhtml/parser_mhtml.js";
import path from "path";

export const HandleStartParser = () => {
  const handleFiles = (pathFile) => {
    if (pathFile.includes(".mhtml")) {
      parser_mhtml(`file://${pathFile}`, pathFile);
    } else {
      parser_html(pathFile);
    }
  };
  catalogFiles(path.resolve("page"), handleFiles);
};
