let temperature: number = 30;
let isRainy: boolean = false;
let isSunny: boolean = true;


if (temperature >= 30 && isSunny) {
    console.log('هوا گرم و آفتابی است لطفا با لباس خنک برو بیرون');
} else if (temperature < 30 && isRainy) {
    console.log('هوا بارانی و خنک است لطفا با چتر برو بیرون');
} else {
    console.log('هوا نامناسب است در خانه بمان');
}