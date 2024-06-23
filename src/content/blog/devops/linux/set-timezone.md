---
title: "timedatectlでタイムゾーンを変更する方法"
date: 2022-07-02T02:47:11+09:00
tags:
    - timedatectl
    - timezone
    - タイムゾーン
---

AWS EC2で新しいインスタンスを起動してから、デフォルトはUTCなので、タイムゾーンを変更する必要があります。  
以前は `etc/sysconfig/clock` ファイルを編集する方法使いましたが、今回は `timedatectl` コマンドを使います。  

```bash
timedatectl set-timezone Asia/Tokyo
```

これだけです。　お楽しみに！
