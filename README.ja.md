# jiii

日本の少年少女発明クラブと受賞発明作品を探索するためのオープンソースダッシュボードです。

## ライブデモ

*   **[少年少女発明クラブ ダッシュボード](https://code4fukui.github.io/jiii/)**  
    都道府県別に発明クラブの数を可視化した日本のインタラクティブ地図。都道府県をクリックしてクラブの詳細リストを表示できます。

*   **[受賞作品サーチ](https://code4fukui.github.io/jiii/kids-invention.html)**  
    全日本学生児童発明くふう展の受賞作品を検索可能なデータベース。

## 機能

-   **インタラクティブなカラム地図**: 日本全国の都道府県別に少年少女発明クラブの分布を可視化します。
-   **検索可能なクラブ一覧**: 所在地や活動内容、連絡先などの詳細情報を含むクラブの包括的なリストを閲覧・検索できます。
-   **発明アーカイブ**: 平成22〜31年（2010〜2019年）および令和2〜4年（2020〜2022年）の全日本学生児童発明くふう展の受賞作品を検索可能なデータベースで探せます。

## データ

本プロジェクトは発明協会のウェブサイトからデータをスクレイピングし、CSVファイルとして提供します。

-   `jiii.csv`: 日本の少年少女発明クラブ一覧。
-   `jiii-kids-invention.csv`: 全日本学生児童発明くふう展の受賞作品リスト。

## 開発

データはDenoスクリプトを使用して収集されます。CSVファイルを更新するには[Deno](https://deno.land/)をインストールする必要があります。

**クラブデータの更新:**
```sh
deno run -A deno/scrape.js
```

**発明受賞データの更新:**
```sh
deno run -A deno/scrapeKidsInvention.js
```

## データソースとクレジット

-   **データ**: 発明協会（JIII）から提供。
    -   [少年少女発明クラブ一覧](http://kids.jiii.or.jp/modules/pico/index.php?content_id=259)
    -   [全日本学生児童発明くふう展](http://koueki.jiii.or.jp/hyosho/gakusei/gakusei_yoko.html)
-   **アプリケーション**: [福野泰介](https://fukuno.jig.jp/3505) 作成。
-   **地図レイアウト**: [TabularMaps Japan](https://github.com/tabularmaps/hq) を使用。

本プロジェクトは [Code for FUKUI](https://github.com/code4fukui/) がメンテナンスしています。

## ライセンス

本プロジェクトは MIT License のもとで公開されています。
