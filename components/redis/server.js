import Redis from 'ioredis';
const redis = new Redis({
  host: 'localhost',
  port: 6379,
  password: `` //! добавил       
});


export const SaveInfoRedis = (products) =>{

    async function saveData(key, value) {
      try {
        await redis.set(key, value); // Записываем данные
        console.log(`Данные с ключом "${key}" успешно записаны в Redis!`);
      } catch (error) {
        console.error('Ошибка при записи данных в Redis:', error);
      }
    }

    saveData(`${products.id}`, `${JSON.stringify(products)}`);
    
    redis.quit();



}


