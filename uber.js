
   const baseFare = 2.50;
   const costPerMile = 1.75;
   const costPerMinute = 0.35;
   const surgeMultiplier = 1.5;
  
   const uberCalculator = new UberPriceCalculator(baseFare, costPerMile, costPerMinute, surgeMultiplier);
  
   const distance = 10;
   const time = 20;
  
  const price = uberCalculator.calculatePrice(distance, time);
  console.log(`The total Uber price is: $${price.toFixed(2)}`);
  