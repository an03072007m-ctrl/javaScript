function dotask() {
  return new Promise(resolve => {
    console.log("Bắt đầu học");
    setTimeout(() => {
      resolve("Học xong!");
    }, 3000);
  });
}

async function main() {
  const result = await dotask(); // chờ xong dotask
  console.log(result);
}

main();
