// メニュー

var modal = document.querySelector("#modal");
var modalOverlay = document.querySelector("#modal-overlay");
var closeButton = document.querySelector("#close-button");
var openButton = document.querySelector("#open-button");

//閉じるボタン
closeButton.addEventListener("click", function close() {
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
});

//開くボタン
openButton.addEventListener("click", function () {
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
});



// 現在位置

function TickLoad() {
  var now = new Date();
  
  function whatTimeIsIt() {
    var Year = now.getFullYear();
    var Month = now.getMonth()+1;
    var Date = now.getDate();
    var Hour = now.getHours();
    var Min = now.getMinutes();
    var nowtime = Year + "/" + Month + "/" + Date + " " + Hour + ":" + Min;
    
    var nowInput = document.getElementById("now");
    nowInput.value = "" + nowtime;
        
  }
  whatTimeIsIt();
  let input_room = document.querySelector("input[name=login_rooms]:checked");
  if (input_room) {
      var selectedRadioId = null;

      var radioGroup = document.getElementsByName('login_rooms');
      for (var i = 0; i < radioGroup.length; i++) {
          if (radioGroup[i].checked) {
              selectedRadioId = radioGroup[i].nextElementSibling.classList[1].replace('_roomlink', '');
              break;
          }
      }

      // if (selectedRadioId) {
      //     console.log('選択されているラジオボタンのID:', selectedRadioId);
      // } else {
      //     console.log('ラジオボタンが選択されていません。');
      // }
      // document.getElementById("_whereiam").innerText = "現在場所: " + selectedRadioId;

      // 場所をテキストとして表示
      if (selectedRadioId == "_idR1") {
        var roomName = "Room 1";
        // document.getElementById("_idR1").style.backgroundColor = 'red';
      } else if (selectedRadioId == "_idR2") {
        var roomName = "Room 2";
      } else if (selectedRadioId == "_idR3") {
        var roomName = "Room 3";
      } else if (selectedRadioId == "_idRS") {
        var roomName = "SnapShot";
      }

      document.getElementById("_whereiam").innerText = "現在位置: " + roomName;
      document.getElementById("_whereiam-show").innerText = "現在位置: " + roomName;
      
      
    }
}

// 例として、TickLoadを呼び出すトリガーが必要な場合は以下をコメントアウトを外して使用できます。
window.onload = function() {
setInterval("TickLoad()", 1);
};



// function getSelectedRadioId() {
  //   var radioGroup = document.getElementsByName('login_rooms');
  //   var selectedRadioId = null;
  
  //   for (var i = 0; i < radioGroup.length; i++) {
    //       if (radioGroup[i].checked) {
//           selectedRadioId = radioGroup[i].id;
//           break;
//       }
//   }

//   if (selectedRadioId) {
  //       console.log('選択されているラジオボタンのID:', selectedRadioId);
  //   } else {
    //       console.log('ラジオボタンが選択されていません。');
    //   }
    // }
