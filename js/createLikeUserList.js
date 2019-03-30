window.onload = function(){
    
    //init
    addListNode();

    var likeList = [];
    var exportFlg = true;

    document.addEventListener('DOMNodeInserted', function() {
        var targets = document.querySelectorAll('div[role="dialog"] a[title]');
        if(targets.length === 0){
            return;
        }

        var username = targets[targets.length - 1].getAttribute('title');
        if(likeList.includes(username)){
            return;
        }
        likeList.push(username);
        exportFlg = true;
    }, false);

    // ボタンをクリックしたらリスト作成
    var createListButton = document.getElementById('createListButton');
    createListButton.onclick = function(){
        if(!exportFlg){
            return;
        }
        var htmlList = '';
            for (var i=0; i<likeList.length;i++){
            htmlList += '<li>'+ likeList[i] + '</li>';
        }
        document.getElementById('userListWrap').innerHTML = htmlList;
        exportFlg = false;
        likeList = [];
    }

    // リストをクリックしたら選択してコピー
    var userListWrap = document.getElementById('userListWrap');
    userListWrap.onclick = function(){
        selectDomElm(this);
        document.execCommand('copy');
    }
};

// リストセクション（リスト生成ボタン・リスト領域）ノードの作成
function addListNode(){
    const listSection = document.createElement('div');
    const createListButton = document.createElement('a');
    const buttonText = document.createTextNode('リスト作成');
    const userListWrap = document.createElement('ul');

    listSection.id = 'listSection';
    
    //ボタン追加
    createListButton.appendChild(buttonText);
    createListButton.id = 'createListButton';
    listSection.appendChild(createListButton);
    
    //リストのwrap追加
    userListWrap.id = 'userListWrap';
    listSection.appendChild(userListWrap);
    
    document.body.appendChild(listSection);        
}

// クリックするとリストを選択・コピー
function selectDomElm(obj){
    var range = document.createRange();
    range.selectNodeContents(obj);
   
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
   }
