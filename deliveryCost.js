function deliveryCost(n) {
  let dCost;
  if (n <= 100 && n >= 1) {
    return (dCost = 100 * n);
  } else if (n >= 100 && n <= 200) {
    return (dCost = 80 * (n - 100) + 10000);
  } else {
    return (dCost = 50 * (n - 200) + 18000);
  }
}

var result = deliveryCost(200);
console.log(`result`, result);
