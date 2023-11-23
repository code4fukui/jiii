import { fetchOrLoad } from "./fetchOrLoad.js";
import { HTMLParser } from "https://js.sabae.cc/HTMLParser.js";
import { CSV } from "https://js.sabae.cc/CSV.js";
import { JAPAN_PREF } from "https://js.sabae.cc/JAPAN_PREF.js";

await Deno.mkdir("temp", { recursive: true });

const url = "http://kids.jiii.or.jp/modules/pico/index.php?content_id=259";
const html = await fetchOrLoad(url);
const dom = HTMLParser.parse(html);

const lls = dom.querySelectorAll(".pico_body tr");
console.log(lls.length);
let pref = null;
const data = [];
for (const ll of lls) {
  const tds = ll.querySelectorAll("td");
  const yomi = tds[0].text.trim();
  const npref = JAPAN_PREF.indexOf(yomi);
  if (npref >= 0) {
    pref = JAPAN_PREF[npref];
    continue;
  }
  const a = tds[1].querySelector("a");
  if (!a) {
    continue;
  }
  const link = a.getAttribute("href");
  const name = a.text.trim();;
  const city = tds[2].text.trim();

  const d = { name, yomi, link, pref, city };

  const html2 = await fetchOrLoad(link);
  const dom2 = HTMLParser.parse(html2);
  //const trs = dom2.querySelectorAll(".pico_body tr");
  const trs = dom2.querySelectorAll("tr");
  for (const tr of trs) {
    const tds = tr.querySelectorAll("td");
    //console.log(tds?.length);
    if (tds?.length != 3) {
      continue;
    }
    const key = tds[1].text.trim();
    const val = tds[2].text.trim();
    //console.log(key, val);
    if (key.length > 0) {
      d[key] = val;
    }
  }
  data.push(d);
  /*
  if (link == "http://kids.jiii.or.jp/modules/pico/index.php?content_id=167") {
    console.log(trs.length);
    break;
  }
  */
}
//console.log(data);
await Deno.writeTextFile("../jiii.csv", CSV.stringify(data));
