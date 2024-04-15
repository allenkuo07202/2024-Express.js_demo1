const express = require("express"); // 引入從npm下載的express module，
// 而require("express")會得到一個function，用express存起來
const app = express();
// express其實是個function，執行express後會return一個object

// app其實就是我們的伺服器，兩個參數port, callback function
app.listen(3000, () => {
  console.log("伺服器正在聆聽port 3000....");
});
