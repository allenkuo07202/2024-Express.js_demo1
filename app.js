const express = require("express"); // 引入從npm下載的express module，
// 而require("express")會得到一個function，用express存起來
const app = express();
// express其實是個function，執行express後會return一個object

// console.log(app);
// HTTP request常見的有4種：GET, POST, PUT, DELETE，app會根據request的種類來判斷如何應對
// 而http request的種類已經寫在header裡面，會自動去抓到

// middlewares:檢查content-type
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// 加這個{ extended: true }，會擴展urlencoded的功能
// 在form裡面，就可以給string以外的資料

// app其實就是代表我們的伺服器，兩個參數port, callback function
app.get("/", (req, res) => {
  res.send("歡迎來到網站首頁");
});

app.get("/anotherPage", (req, res) => {
  res.send("歡迎來到另一個頁面");
});

app.get("/example1", (req, res) => {
  res.send("<h1>這是一個h1標籤的示範</h1>"); // send會自動作
  //   res.send("<p>這是一個段落</p>"); // 會報錯！(先註解)
  // HTTP Response包含2部分：header(包含status code, encoding...), content，
  // 當我們執行send()時，express會自動幫我們做好header, content(就是send裡面放的東西)
  // 而header不能重複設定，所以報錯！
});

// 若要response一個html頁面給使用者要怎麼做？
app.get("/example2", (req, res) => {
  res.sendFile(__dirname + "/example.html"); //注意：要寫絕對路徑！！
});

app.get("/example3", (req, res) => {
  let obj = {
    title: "Web Design",
    website: "udemy",
  };
  res.json(obj);
});

app.get("/example4", (req, res) => {
  res.redirect("/actualExample");
});

app.get("/actualExample", (req, res) => {
  res.send("真正的資源在這！");
});

app.get("/fruit", (req, res) => {
  res.send("歡迎來到水果頁面");
});

app.get("/fruit/:someFruit", (req, res) => {
  res.send("歡迎來到" + req.params.someFruit + "頁面");
});

app.get("/example", (req, res) => {
  res.sendFile(__dirname + "/example.html");
});

app.get("/formHandling", (req, res) => {
  //   console.log(req.query);
  res.send(
    "伺服器已經收到你的表單。你所提交的資料為名稱" +
      req.query.name +
      "以及年齡為" +
      req.query.age
  );
});

app.post("/formHandling_p", (req, res) => {
  //   console.log(req.body); // undefined
  // ==>此時就要用2個middleware(要放在程式碼的一開始)
  let { email, password } = req.body;
  res.send("你的信箱是" + email);
});

// 這個一定要放在其他get之後，listen之前，不然會影響到其他path
app.get("*", (req, res) => {
  res.send("你所找的頁面不存在");
});

app.listen(3000, () => {
  console.log("伺服器正在聆聽port 3000....");
});
