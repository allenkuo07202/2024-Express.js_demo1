const express = require("express"); // 引入從npm下載的express module，
// 而require("express")會得到一個function，用express存起來
const app = express();
// express其實是個function，執行express後會return一個object

// 若沒有下一行，則style.css無法套入，圖片也無法顯示
app.use(express.static("public"));

// app其實就是代表我們的伺服器，兩個參數port, callback function
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("*", (req, res) => {
  // res.status(404);
  // // res.status()會自動return res object(method chaining)，所以這兩行可以寫在一起
  // res.send("錯誤頁面...");
  // // res.send()的status code預設是200，因為就是接受client端的請求，才會回應
  res.status(404).send("錯誤頁面...");
});

app.listen(3000, () => {
  console.log("伺服器正在聆聽port 3000....");
});
