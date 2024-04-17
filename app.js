const express = require("express"); // 引入從npm下載的express module，
// 而require("express")會得到一個function，用express存起來
const app = express();
// express其實是個function，執行express後會return一個object

// 若沒有下一行，則style.css無法套入，圖片也無法顯示
app.use(express.static("public"));

// 法1
// app.get("/", (req, res) => {
//   res.render("index.ejs"); // express會去views資料夾找index.ejs並轉成index.html後再送到客戶端
// });

// 法2
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/:name", (req, res) => {
  let { name } = req.params;
  res.render("index", { name: name });
  // 在JS當中，出現object屬性(ex.name)與variable(ex.name)相同的狀況，則只要寫一個(name)即可
  // res.render("index", { name });
});

app.listen(3000, () => {
  console.log("伺服器正在聆聽port 3000....");
});
