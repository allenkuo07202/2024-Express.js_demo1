const express = require("express"); // 引入從npm下載的express module，
// 而require("express")會得到一個function，用express存起來
const app = express();
// express其實是個function，執行express後會return一個object

// 若沒有下一行，則style.css無法套入，圖片也無法顯示
app.use(express.static("public"));

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  let myString = "<h1>hello world</h1>";
  res.render("index", { myString });
});

app.listen(3000, () => {
  console.log("伺服器正在聆聽port 3000....");
});
