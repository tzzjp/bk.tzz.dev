---
title: "Mac で Command Not Found Code 問題の解決方法"
date: 2022-05-28T14:44:34+09:00
---

## 環境

Mac OS

## やりたいこと

`code .` コマンドで現在のフォルダをVScodeで開く  
`code test` コマンドで `test` フォルダをVScodeで開く

## 問題

`command not found: code` エラーになる

## 原因

`code` コマンドインストールしてない

## 解決方法

1. VScode を起動
1. コマンドパレットを開く（F1）
1. `install code` を入力
1. `シェルコマンド：PATH 内に 'code' コマンドをインストールします` が表示されるはずなので、選択してインストールします。

以上で完了、無事 `code` コマンドが使えるようになるはず。  
ですが、、、万が一、`./MacOS/Electron: No such file or directory` のようなエラーになる場合は、[これを参照](../code-no-such-file)

以上、お楽しみ。
