---
title: "Laravelプロジェクト新規作成（with pgsql）"
date: 2022-05-09T01:05:11+09:00
tags:
    - laravel
    - pgsql
    - laravel sail
---

Laravel Sail で新規プロジェクト作成する時、デフォルトで mysql 使いますが、PostgreSQL を使いたいので、`with=pgsql` で PostgreSQL を使うようにします。

``` bash
curl -s "https://laravel.build/test-app?with=pgsql" | bash
```

*[test-app]は新規作成プロジェクト名*
