---
title: "VuePressのGoogleアナリティクス設定方法"
date: 2022-05-02T02:26:01+09:00
tags:
    - vuepress
    - googleアナリティクス
---

VuePressの公式プラグインに[@vuepress/plugin-google-analytics](https://v2.vuepress.vuejs.org/reference/plugin/google-analytics.html)があります。

このプラグインを使って、[Google Analytics 4](https://support.google.com/analytics/answer/10089681)の設定ができます。

設定方法は下記となります。

1. インストール

    ```bash
    yarn add -D @vuepress/plugin-google-analytics@next
    ```

1. 設定ファイル修正（`/docs/.vuepress/config.ts`）

    ```ts
    import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

    export default defineUserConfig({
        plugins: [
            googleAnalyticsPlugin({
                id: 'G-XXXXXXXXXX',
            }),
        ],
    })
    ```

以上。
