/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

  // check if audio is supported in the browser or not
//        if (Modernizr.audio) {
//            alert("Audio is supported");
//        }
//        else {
//            alert("Audio is NOT supported");
//        }
 
 
       // get the audio, volume and seekbar elements
       var audio = document.getElementById("audio1");
       var volumeRange = document.getElementById('volume');
       var seekbar = document.getElementById('seekbar');
 
        // attach timeupdate, durationchange event to the audio element to update the time in the lable and seekbar
        window.onload = function () {
            // go to http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-EventTarget-addEventListener to know more about addEventListener
          // (false is for bubbling and true is for event capturing)
          audio.addEventListener('timeupdate', UpdateTheTime, false);
          audio.addEventListener('durationchange', SetSeekBar, false);
          volumeRange.value = audio.volume;
        }
 
        // executeswhen volume element is changed
       function ChangeVolume() {
           var myVol = volumeRange.value;
           audio.volume = myVol;
           if (myVol == 0) {
               audio.muted = true;
           } else {
               audio.muted = false;
           }
       }
 
      // fires when page loads, it sets the min and max range of the video
     function SetSeekBar() {
         seekbar.min = 0;
         seekbar.max = audio.duration;
     }
    // fires when seekbar is changed
   function ChangeTheTime() {
       audio.currentTime = seekbar.value;
 
 
   }
 
        // executes when audio plays and the time is updated in the audio element, this writes the current duration elapsed in the label element
       function UpdateTheTime() {
           var sec = audio.currentTime;
           var h = Math.floor(sec / 3600);
           sec = sec % 3600;
           var min = Math.floor(sec / 60);
           sec = Math.floor(sec % 60);
           if (sec.toString().length < 2) sec = "0" + sec;
           if (min.toString().length < 2) min = "0" + min;
           document.getElementById('lblTime').innerHTML = h + ":" + min + ":" + sec;
 
           seekbar.min = audio.startTime;
           seekbar.max = audio.duration;
           seekbar.value = audio.currentTime;
       }
 
      // executes when Play button is clicked
     function PlayNow() {
         if (audio.paused) {
             audio.play();
         } else if (audio.ended) {
             audio.currentTime = 0;
             audio.play();
         }
    }
 
   // executes when Pause button is clicked
   function PauseNow() {
       if (audio.play) {
           audio.pause();
        }
   }
    
  // executes when Mute button is clicked
  function MuteNow() {
      if (audio.muted) {
          audio.muted = false;
          volumeRange.value = audio.volume;
      }
      else {
          audio.muted = true;
          volumeRange.value = 0;
      }
  }
 


