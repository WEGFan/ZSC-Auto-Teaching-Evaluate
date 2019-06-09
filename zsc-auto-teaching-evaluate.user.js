// ==UserScript==
// @name        ZSC Auto Teaching Evaluate
// @namespace   wegfan
// @include     http://jwgln.zsc.edu.cn/jsxsd/xspj/xspj_edit.do?xnxq01id=*
// @version     0.1
// @grant       none
// @supportUrl  https://github.com/WEGFan/ZSC-Auto-Teaching-Evaluate/issues
// @updateURL   https://raw.githubusercontent.com/WEGFan/ZSC-Auto-Teaching-Evaluate/master/zsc-auto-teaching-evaluate.user.js
// @downloadURL https://raw.githubusercontent.com/WEGFan/ZSC-Auto-Teaching-Evaluate/master/zsc-auto-teaching-evaluate.user.js
// ==/UserScript==

var probs = document.querySelectorAll("input[name='pj06xh']");
for (var i of probs) {
    if (document.querySelector("#pj0601id_" + i.value + "_3").nextSibling.data.match("差不多")) {
        document.querySelector("#pj0601id_" + i.value + "_3").click();
    } else {
        document.querySelectorAll("#pj0601id_" + i.value + "_" + parseInt(Math.random() + 0.5 + 4))[0].click();
    }
}
document.querySelector("#tsxx").value = " ";
document.querySelector("#tj").click();