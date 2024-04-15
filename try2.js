function try2Function() {
  console.log("hello from try2");
}
// 之前在node.js示範的作法：
// 設定module.exports這個empty object的一個屬性叫作try2Function等於上面定義的try2Function
module.exports.try2Function = try2Function;

// 在express.js示範的作法：
// 若要讓try2直接export try2Function，則改成下列程式碼
module.exports = try2Function;
// 這樣module.exports就會從object變成function
