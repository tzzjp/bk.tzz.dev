---
title: "Hugoでfontawesomeを使う"
date: 2022-04-25T00:23:17+09:00
---

[Font Awesome](https://fontawesome.com/)をHugoで使いたいので、その手順を記録します。
>`@fortawesome/fontawesome-free`は簡単だけど、使ってないアイコンも入っているのでファイルのサイズが大きくなります。
なので、今回は`@fortawesome/fontawesome-svg-core`を使います。

1. FontAwesomeのパッケージをインストール

  ```bash
  yarn add -D @fortawesome/fontawesome-svg-core
  yarn add -D @fortawesome/free-regular-svg-icons
  yarn add -D @fortawesome/free-solid-svg-icons
  ```

1. jsファイルをビルドするには`ESBuild`が必要なので、インストール

  ```bash
  yarn add -D esbuild
  ```

1. jsファイル作成

  `assets/js/main.js`ファイルを作成、内容は下記となります。
  
  ```js
  import {config,dom,library} from '@fortawesome/fontawesome-svg-core';
  import {faDragon} from '@fortawesome/free-solid-svg-icons';
  library.add(faDragon);
  dom.i2svg();
  ```

1. jsファイルを読み込み

  ```go
  {{ $built := resources.Get "js/main.js" | js.Build }}
  <script type="text/javascript" src="{{ $built.RelPermalink }}" defer></script>
  ```

1. アイコンを使います

  ```html
  <i class="fa fa-dragon"></i>
  ```

以上。
