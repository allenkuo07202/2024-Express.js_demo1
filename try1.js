const try2 = require("./try2");
// 之前在node.js示範的作法：
// 此行執行後會拿到module.exports這個object
// 在express.js示範的作法：
// 此行執行後會拿到function

// 之前在node.js示範的作法：
try2.try2Function();
// 此行執行try2的屬性try2Function

// 在express.js示範的作法：
try2();
// 直接執行try2即可
