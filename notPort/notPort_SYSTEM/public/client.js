// ランダムな文字列を生成
const len = 8;
const str = "abcdefghijklmnopqrstuvwxyz";
const strLen = str.length;
let randomId = "";
// 名前(NickName)
let nicknamenumber = "名無しさん";
for (let i = 0; i < len; i++) {
  randomId += str[Math.floor(Math.random() * strLen)];
}

document.getElementById("userID-show").innerHTML = "現在のID: " + randomId;

document.getElementById("ai").value=randomId;



var socket = io();
//var userName = 'test';
$(function () {
var userName = '';
  // メッセージを送信する
  $('form').submit(function(){
    socket.emit('chat message', $('#m').val(), $('#u').val(),$('#ai').val(),$('#mark'),$('#now').val());
    $('#m').val('');
    return false;
  });

  // 受信したメッセージを表示
  // ul id ="messages"の部分
  socket.on('chat message', function(data){
    if (data.message !== '' && data.userName !== '' && data.accountID !== '') {
      console.log(data.markID)
      if (data.markID == 'Admin') {
        // var user_info = '<div id="user_info"><div id="divicon"><img src="icon.png" id="icon"></div><div id="texts"><div id="_user"><div id="nickname">' + data.userName + '</div><div id="accountid">@' + data.accountID + '</div></div><div id="message">' + data.message + '</div></div></div>';
        var user_info = '<div id="user_info"><div id="divicon"><img src="icon.png" id="icon"></div><div id="texts"><div id="_user"><div id="nickname">' + data.userName + '<i class="material-icons verified large-size">verified</i></div><div id="accountid">@' + data.accountID + '</div></div><div id="message">' + data.message + '</div></div></div>';
        $('#messages').prepend($('<div id="chat">').html(user_info));
      } else {

        var user_info = '<div id="user_info"><div id="divicon"><img src="icon.png" id="icon"></div><div id="texts"><div id="_user"><div id="nickname">' + data.userName + '<img src="" id=""></div><div id="accountid">@' + data.accountID + '</div><div id="accountid"> ' + data.nowTime + '</div></div><div id="message"><p>' + data.message.split('\n').join('<br>') + '</p></div></div></div>';

        // var user_info = '<div id="user_info"><div id="divicon"><img src="icon.png" id="icon"></div><div id="texts"><div id="_user"><div id="nickname">' + data.userName + '</div><div id="accountid">@' + data.accountID + '</div></div><div id="message">' + data.message + '</div></div></div>';
        // var user_info = '<div id="user_info"><div id="divicon"><img src="icon.png" id="icon"></div><div id="texts"><div id="_user"><div id="nickname">' + data.userName + '<img src="" id=""></div><div id="accountid">@' + data.accountID + '</div></div><div id="message">' + data.message + '</div></div></div>';
        $('#messages').prepend($('<div id="chat">').html(user_info));
      }
    }
  });
  
});


