# jiii

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

An open-source dashboard for exploring Japan's Junior Inventor Clubs and award-winning student inventions.

## Live Demos

*   **[Junior Inventor Clubs Dashboard](https://code4fukui.github.io/jiii/)**  
    An interactive map of Japan visualizing the number of inventor clubs by prefecture. Click a prefecture to see a detailed list of clubs.

*   **[Award-Winning Inventions Search](https://code4fukui.github.io/jiii/kids-invention.html)**  
    A searchable database of award-winning projects from the National Student Invention Competition.

## Features

-   **Interactive Tabular Map**: Visualize the distribution of Junior Inventor Clubs across all prefectures of Japan.
-   **Searchable Club Directory**: Browse and search a comprehensive list of clubs with details on location, activities, and contact information.
-   **Invention Archive**: Explore a searchable database of award-winning student inventions from the National Student Invention Competition, covering Heisei 22-31 (2010-2019) and Reiwa 2-4 (2020-2022).

## Data

This project scrapes data from the Japan Invention Association's website and makes it available as CSV files.

-   `jiii.csv`: A directory of Junior Inventor Clubs in Japan.
-   `jiii-kids-invention.csv`: A list of award-winning inventions from the National Student Invention Competition.

## Development

The data is collected using Deno scripts. To update the CSV files, you will need to have [Deno](https://deno.land/) installed.

**Update Club Data:**
```sh
deno run -A deno/scrape.js
```

**Update Invention Award Data:**
```sh
deno run -A deno/scrapeKidsInvention.js
```

## Data Sources & Credits

-   **Data**: Sourced from the Japan Invention Association (JIII).
    -   [Junior Inventor Club Listings](http://kids.jiii.or.jp/modules/pico/index.php?content_id=259)
    -   [National Student Invention Competition](http://koueki.jiii.or.jp/hyosho/gakusei/gakusei_yoko.html)
-   **Application**: Created by [Taisuke Fukuno](https://fukuno.jig.jp/3505).
-   **Map Layout**: Uses [TabularMaps Japan](https://github.com/tabularmaps/hq).

This project is maintained by [Code for FUKUI](https://github.com/code4fukui/).

## License

This project is licensed under the MIT License.