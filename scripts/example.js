// ==NemScript==
// @name         example
// @version      1.0.0
// @icon         https://p3.music.126.net/tBTNafgjNnTL1KlZMt7lVA==/18885211718935735.jpg
// @description  example js!
// @author       example
// @site       https://github.com/LauZzL/ltzj-nem
// ==/NemScript==


(async function(){
  nem.logger('success', '开始执行了');
  // 延迟3秒
  await nem.sleep(3000);
  nem.message.success('执行结束');
})()