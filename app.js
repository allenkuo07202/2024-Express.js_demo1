const express = require("express"); // 引入從npm下載的express module，
// 而require("express")會得到一個function，用express存起來
const app = express();
// express其實是個function，執行express後會return一個object

// console.log(app);
// HTTP request常見的有4種：GET, POST, PUT, DELETE，app會根據request的種類來判斷如何應對
// 而http request的種類已經寫在header裡面，會自動去抓到

// middleware(自訂的)
app.use((req, res, next) => {
  console.log("正在經過middleware...");
  next();
});

app.use((req, res, next) => {
  console.log("正在經過遞2個middleware...");
  next();
});

// app其實就是代表我們的伺服器，兩個參數port, callback function
app.get("/", (req, res) => {
  res.send("歡迎來到網站首頁");
});

app.get("/anotherPage", (req, res) => {
  res.send("歡迎來到另一個頁面");
});

app.listen(3000, () => {
  console.log("伺服器正在聆聽port 3000....");
});
