import { fetchOrLoad } from "./fetchOrLoad.js";
import { HTMLParser } from "https://js.sabae.cc/HTMLParser.js";
import { fix0 } from "https://js.sabae.cc/fix0.js";
import { CSV } from "https://js.sabae.cc/CSV.js";

/*
const urls = [
  //"http://koueki.jiii.or.jp/hyosho/gakusei/H22/gakusei_jusho_ichiran_tokubetsu.html",
  //"http://koueki.jiii.or.jp/hyosho/gakusei/H23/gakusei_jusho_ichiran_tokubetsu.html",
  "http://koueki.jiii.or.jp/hyosho/gakusei/H24/gakusei_jusho_ichiran_tokubetsu.html",
];
*/
const urls = [];
for (let h = 22; h <= 31; h++) {
  const url = "http://koueki.jiii.or.jp/hyosho/gakusei/H" + h + "/gakusei_jusho_ichiran_tokubetsu.html";
  urls.push(url);
}
for (let r = 2; r <= 4; r++) {
  const url = "http://koueki.jiii.or.jp/hyosho/gakusei/R" + fix0(r, 2) + "/gakusei_jusho_ichiran_tokubetsu.html";
  urls.push(url);
}

const data = [];
for (const url of urls) {
  const baseurl = url.substring(0, url.lastIndexOf("/") + 1);
  const html = await fetchOrLoad(url);
  const dom = HTMLParser.parse(html);
  const div = dom.querySelector("div#column");
  const title0 = div.querySelector(".hyo").text.trim();
  const title = title0.substring(0, title0.lastIndexOf(" "));
  console.log(title);

  const sho = div.querySelectorAll(".sho-title").map(t => t.text);
  const shourl = div.querySelectorAll(".sho-title").map(t => url + "#" + t.querySelector("a").getAttribute("name"));
  const ititle = div.querySelectorAll(".hyosho-title").map(t => t.text);
  console.log(sho, ititle);
  const tbls = div.querySelectorAll("table");
  const items = tbls.map(t => {
    const tds = t.querySelectorAll("td");
    const name = tds[0].text.trim();
    console.log(name)
    if (tds.length != 3) {
      const imgc = t.querySelector("img");
      const img = baseurl + imgc.getAttribute("src");
      const body = tds[1].text;
      return { name, img, body };
    }
    if (!name) {
      return null;
    }
    const imgc = tds[1].querySelector("img");
    //console.log(t)
    if (!imgc) {
      return null;
    }
    const img = baseurl + imgc.getAttribute("src");
    const body = tds[2].text;
    return { name, img, body };
  }).filter(c => c);
  console.log(sho.length, ititle.length, tbls.length, items.length);
  for (let i = 0; i < sho.length; i++) {
    console.log(ititle[i])
    data.push({
      contest: title,
      prize: sho[i],
      title: ititle[i],
      name: items[i].name,
      body: items[i].body,
      url: shourl[i],
      //img: items[i].img,
    });
  }
}
console.log(data);
await Deno.writeTextFile("../jiii-kids-invention.csv", CSV.stringify(data));
