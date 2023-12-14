var express = require('express');//expressを使用
var app = express();
var http = require('http').Server(app);

const path = require('path');
const io = require('socket.io')(http);
const PORT = process.env.PORT || 3000;

app.get('/' , function(req, res){
    res.sendFile(__dirname+'/public/index.html');//chat.htmlへ移動
});





io.on('connection',function(socket){
     // メッセージ送信処理
     socket.on('chat message', function(msg, user, aid, mark, now){
         //io.emit('chat message', mvcsg);
         io.emit('chat message', {
             userName: user,
             message: msg,
             accountID: aid,
             markID: mark,
             nowTime: now
            });
            
        });
    });
    
http.listen(PORT, function(){
    console.log('server starts on port: %d', PORT);
    console.log("Starting up...");
    console.log("✅ The server worked properly\n");
    console.log("⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀");
    console.log("⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⣴⡀⡀⣿⠉⠉⢿⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⢠⡀⡀");
    console.log("⣿⡴⠛⣷⡀⢀⡾⠛⢷⡀⠘⣿⠛⡀⣿⡀⡀⣼⡀⢀⡾⠛⢷⡀⡀⣟⠞⠁⢻⠛⠃");
    console.log("⣿⡀⡀⢸⡀⣿⡀⡀⡀⣿⡀⣿⡀⡀⣿⠉⠉⡀⡀⣿⡀⡀⡀⣿⡀⣿⡀⡀⢸⡀⡀");
    console.log("⣿⡀⡀⢸⡀⠈⢷⣤⡾⠁⡀⢿⣤⡀⣿⡀⡀⡀⡀⠈⢷⣤⡾⠁⡀⣿⡀⡀⠸⣤⠄");
    console.log("⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀⡀");
    console.log("￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣\nNo  record,  Anonymous,  All  for  free\nThis service is operated by notPort Inc\n");

});

// app.use(express.static(path.join(__dirname, 'chat_room')));//chat_roomディレクトリを公開

// publicフォルダを静的なフォルダとして設定
app.use(express.static(path.join(__dirname, 'public')));
