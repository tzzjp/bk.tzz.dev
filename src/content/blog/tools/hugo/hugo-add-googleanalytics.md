---
title: "HugoのGoogleアナリティクス設定"
date: 2022-04-21T01:04:33+09:00
---

HugoはGoogleアナリティクスのV3とV4両方サポートしています、今回はV４を使います。

1. 測定IDの設定

  設定ファイル（config.toml）で測定IDを設定します
  
  ```toml
  googleAnalytics = 'G-MEASUREMENT_ID' (*G-MEASUREMENT_IDは自分の測定IDに設定*)
  ```

1. テンプレートの設定

    Hugoは下記２つのテンプレートを提供しています。

    - `_internal/google_analytics.html`

    - `_internal/google_analytics_async.html`

    V4の場合は　`_internal/google_analytics.html` を使いましょう

    `layouts/partials/footer.html` に下記追加

    ```go
    {{ template "_internal/google_analytics.html" . }}
    ```

以上でGoogleアナリティクスの設定が完了しました、結果を確認しましょう。
