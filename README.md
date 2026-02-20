# Survey App アンケートサイト

このプロジェクトは、Node.js と Express を使用したシンプルなアンケートウェブサイトです。

## 機能
- アンケート回答フォーム
- 回答データの保存
- 回答結果の集計表示

## セットアップ手順
### 1. リポジトリをクローン
```bash
git clone https://github.com/Tyap1o/survey-app.git
cd survey-app
```

### 2. 依存パッケージをインストール
```bash
npm install
```

### 3. サーバーを起動
```bash
npm start
```

### 4. ブラウザでアクセス
ブラウザを開いて以下のURLにアクセスしてください:
```bash
http://localhost:3000
```

## ファイル構成
```
survey-app/
├── server.js         # メインサーバーファイル
├── package.json      # プロジェクト設定
├── responses.json    # 回答データ（自動生成）
└── public/
    ├── index.html    # HTML
    ├── style.css     # スタイル
    └── script.js     # JavaScriptロジック
```

## 使い方
1. フォームに名前、メールアドレス、満足度を入力
2. 「送信」ボタンをクリック
3. 下部の結果セクションで、すべての回答の集計結果が表示されます

## ライセンス
MIT