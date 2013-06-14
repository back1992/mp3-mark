/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


var mediaElement = document.getElementsByTagName('audio');
alert(mediaElement);

for (var i = 0; i < mediaElement.length; ++i) {
//    alert(mediaElement[i]);
    mediaElement[i].pause();
}
