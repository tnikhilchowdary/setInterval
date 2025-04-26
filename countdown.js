let count = 5; 

const timer = setInterval(() => {
  if (count > 0) {
    console.log(`${count} seconds left...`);
  } else if (count === 0) {
    console.log("Time's up!");
    clearInterval(timer);
  }
  count--; 
}, 1000);

