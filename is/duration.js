/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function progress(e) {
    var strCurrTime = RuleTime(Math.floor(e.currentTime / 60), 2)
            + ":" +
            RuleTime(Math.floor(e.currentTime % 60), 2);
    alert(strCurrTime);
}

//转换时间格式
function RuleTime(num, n) {
    var len = num.toString().length;
    while (len < n) {
        num = "0" + num;
        len++;
    }
    return num;
}


