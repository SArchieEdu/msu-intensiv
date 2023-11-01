export async function getWeather() {
    const result = await fetch('https://api.weather.yandex.ru/v2/forecast?lat=55.75396&lon=37.620393&extra=true&lang=ru_RU', {
        headers: {
            'X-Yandex-API-Key': 'fbe402ff-ad8a-4ac1-b1f1-ddc440026910'
          }
    });

    return await result.json();
}