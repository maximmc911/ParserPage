import fs from "fs";
import path from "path";
export const catalogFiles = (directory, handleFiles) => {
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.error("Ошибка при чтении директории:", err);
      return;
    }
    files.forEach((file) => {
      const fullPath = path.join(directory, file);
      fs.stat(fullPath, (err, stats) => {
        if (err) {
          console.error("Ошибка при получении информации о файле:", err);
          return;
        }

        if (stats.isFile()) {
          handleFiles(fullPath);
        }
      });
    });
  });
};
