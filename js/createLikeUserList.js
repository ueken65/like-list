window.onload = function(){
    const p = document.createElement('div');
    const text = document.createTextNode('button');

    // プロパティ、値の設定 

    // ノードの挿入
    p.id = 'csv_button';
    p.appendChild(text);
    document.body.appendChild(p);


    var likeList = [];
    var exportFlg = true;

    document.addEventListener('DOMNodeInserted', function() {
        var targets = document.querySelectorAll('div[role="dialog"] div div div div div a[title]');
        var username = targets[targets.length - 1].getAttribute('title');
        if(likeList.includes(username)){
            return;
        }
        likeList.push(username);
        exportFlg = true;
        // console.log(likeList.length);
    }, false);

    p.onclick = function(){
        if(!exportFlg){
            return;
        }
        var htmlList = '';
            for (var i=0; i<likeList.length;i++){
            htmlList += '<p>'+ likeList[i] + '</p>';　// = ではなく += を使う
        }
        document.getElementById('csv_button').innerHTML = htmlList;
        exportFlg = false;
        likeList = [];
    }
};
