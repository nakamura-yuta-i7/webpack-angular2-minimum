# webpack-angular2-minimum
Webpack with Angular2 最小構成（SPA静的HTML）のサンプル。

**Other Sample**

[Webpack & Node Backend , Client Side(es6,coffee,Typescript,PostCSS...)](https://bitbucket.org/Yuta-Nakamura/webpack-backend-clientside)

# Getting started

### 前提条件
* centos6
* git

#### npm (nvm, node, npm)
```
$ cd ~
$ curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | sh
$ nvm install 0.12.7 # nodeインストール(新しいバージョンでは未検証)
$ vim ~/.bash_profile
## 追記する
source ~/.nvm/nvm.sh
nvm use 0.12.7

$ node -v
v0.12.7
```

#### git clone & modules Install
サンプルRepositoryのセットアップ
```
$ git clone git@bitbucket.org:Yuta-Nakamura/webpack-angular2-minimum.git
$ cd webpack-angular2-minimum

## webpackコマンド有効化
## ※プロジェクト毎にバージョン限定される場合はしない方が良い
$ npm i -g webpack

## 型定義ファイル管理コマンド導入 for Typescript
$ npm i -g tsd

## Repositoryには既にtsd init & tsd.json 設定済み
## 設定内容
## Angular2 brower.d.ts & jquery(FileUploadProgress等)

## 依存モジュールのインストール
$ npm i 

## npm i でエラーが起きたら
## 一括でインストールするとうまくいかない事がある模様

## エラーがあったモジュールをnode_modules配下からディレクトリごと一度削除
$ rm -rf ./node_modules/{{ error module }}
## もう一度 npm i してみる
$ npm i

Error: ENOSPC(DISK量に余りがあるにも関わらず)の場合
$ npm cache clean
$ npm i

### エラーなく npm i が通るようになったら先に進む
```

#### Build & Http server Start
```
$ npm start

## see: http://localhost:8080
```

#### Develop Mode ( webpack --watch & Http server )

```
$ npm run develop
## see: http://localhost:8080
```

#### Other run npm scripts
```
## Webpack watch
$ npm run webpack:w

## Webpack simple build
$ npm run webpack

## Http Server
$ npm run http-server
## see: http://localhost:8080
```
