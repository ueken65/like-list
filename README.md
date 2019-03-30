# like-list
chromeの拡張機能のデベロッパーモードをオンにして、`パッケージ化されていない拡張機能を読み込む`からcloneしたディレクトリを選択
## 使い方
- 投稿のページを開く
  - ex.)https://www.instagram.com/p/Bvm1REThEgX/
- いいねユーザーのダイアログを出し、下までスクロール
- ダイアログを閉じる
- 左上のボタンをクリックするとリストが表示される
## 注意
Instagram上のhtmlツリー構造を信頼して構築しているので、向こうの仕様変更があったりしたらあっさり取れなくなるかもしれません。
そのため、特にクライアント用のレポート作成の際などは、取れたリストが期待通りのものであるか以下項目などを必ず確認してください。
- 件数は合っていそうか
- ちゃんとユーザー名が取れているか
## その他
- リストを出した後に再度ダイアログを出した後、ダイアログを閉じてリストをクリックすると更新される
- CDNキャッシュクリア
  - https://purge.jsdelivr.net/npm/ueken65/master/css/style.css
  - https://purge.jsdelivr.net/npm/ueken65/master/js/createLikeUserList.js
