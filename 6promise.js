function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("📦 Data loaded");
    }, 1000);
  });
}

async function showData() {
  console.log("⏳ Đang tải...");

  try {
    const result = await fetchData(); // ❌ thiếu gì đó
    console.log("Kết quả:", result); // ❌ in sai
  } catch (error) {
    console.log("Lỗi:", error); // ❌ sai tên biến
  }
}

showData();
