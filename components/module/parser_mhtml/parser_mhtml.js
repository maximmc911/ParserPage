import  fs  from "fs";
import puppeteer from "puppeteer";
import path from "path";
import { GetInfo } from "../../mixin/getInfo.js";
import { SaveInfoRedis } from "../../redis/server.js";


export const parser_mhtml = (fileUrl , mhtmlFilePath) =>{

    (async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
    
        if (fs.existsSync(mhtmlFilePath)) {
            await page.goto(fileUrl, { waitUntil: 'domcontentloaded' });
            const htmlContent = await page.content();
       
            SaveInfoRedis( GetInfo(htmlContent))
        } else {
            console.error('MHTML файл не найден:', mhtmlFilePath);
        }
    
        await browser.close();
    })();
}
