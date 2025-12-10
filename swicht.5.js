function checkDay(day) {
  console.log("🕐 Đang kiểm tra ngày...");

  setTimeout(() => {
    switch (+day) {
      case 1:
        console.log("☀️ Chủ nhật");
        break;

      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        console.log("💼 Ngày làm việc");
        break;

      case 7:
        console.log("🎉 Thứ bảy");
        break;

      default:
        console.log("❌ Không hợp lệ");
    }
  }, 1000);

  console.log("⏳ Xong kiểm tra!");
}

checkDay("2");
