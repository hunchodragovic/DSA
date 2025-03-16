function countdown(n) {
  if (n <= 0) {
    console.log("Done!");
    return;
  }
  console.log(n);
  countdown(n - 1); // The function calls itself with a smaller number
}

countdown(5);
