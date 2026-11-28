// ============================================================
// キャラメルマップのお店データ
// 新しいお店を追加するときは、下の { ... }, をコピーして
// 中身を書き換え、リストに貼り付けてください（並び順は自動で
// 「都道府県（北から）→ 地域名の五十音順 → 店名の五十音順」になるので、どこに貼っても大丈夫）。
// ============================================================
//
// 各項目の意味
//   id        : お店ごとに違う英数字（写真のファイル名などに使う）
//   name      : 店名
//   kana      : 店名のよみがな（ひらがな）。お店の一覧の五十音順に使う
//   area      : 地域（例：東京・新宿）
//   areaEn    : 地域の英語表記（例：SHINJUKU）
//   areaKana  : 地域名（「・」の後ろ）のよみがな（例：しんじゅく）。お店一覧で地域を五十音順に並べるのに使う
//   address   : 住所
//   lat, lng  : 緯度・経度（Googleマップでお店を長押しすると出る数字）
//   date      : 行った日（例：2026-11-23）
//   items     : 食べた・飲んだキャラメルのメニュー
//     type    : "drink"（●）か "sweets"（■）
//     name    : 商品名
//     kind    : 種類（チャートで絞り込むためのタグ）。例：キャラメルラテ／キャラメルマキアート／
//               チーズケーキ／プリン／パンケーキ など。同じ種類は同じ書き方でそろえる
//     sweet   : 味わいチャートの横軸  0＝ほろ苦い 〜 10＝甘い（小数OK 例：6.5）
//     caramel : 味わいチャートの縦軸  0＝さっぱり 〜 10＝濃厚（小数OK）
//     instagram : （任意）この商品だけ別の投稿に飛ばしたい時のURL。なければお店の instagram が使われる
//     tag     : ポップアップの一番上に出す吹き出しのひとこと（なければ ""）
//   photo     : images フォルダに入れた店舗外観の写真のファイル名（縦長3:4がおすすめ、なければ ""）
//   instagram : インスタの投稿のURL（なければ ""）
//   comment   : ひとこと（なければ ""）
// ============================================================

window.SHOPS = [
  {
    id: "caffice-shinjuku",
    name: "Caffice",
    kana: "かふぃす",
    area: "東京・新宿",
    areaEn: "SHINJUKU",
    areaKana: "しんじゅく",
    address: "東京都新宿区新宿4-2-23 新四curumuビル 2F",
    lat: 35.6884,
    lng: 139.7036,
    date: "2026-11-23",
    items: [
      { type: "drink", name: "キャラメルラテ（ICE）", kind: "キャラメルラテ", sweet: 6.0, caramel: 4.0, tag: "" }
    ],
    photo: "caffice-shinjuku.jpg",
    instagram: "https://www.instagram.com/p/DgHsWHik03a/",
    comment: ""
  }
  ,
  {
    id: "factory45-shinokubo",
    name: "FACTORY45",
    kana: "ふぁくとりーよんじゅうご",
    area: "東京・新大久保",
    areaEn: "SHIN-OKUBO",
    areaKana: "しんおおくぼ",
    address: "東京都新宿区大久保1-16-27 2F",
    lat: 35.6996,          // おおよその位置
    lng: 139.7031,
    date: "2026-11-28",
    items: [
      { type: "drink",  name: "キャラメルマキアート（HOT）", kind: "キャラメルマキアート", sweet: 7.0, caramel: 6.0, tag: "" },
      { type: "sweets", name: "キャラメルプリンケーキ",       kind: "プリンケーキ",       sweet: 8.0, caramel: 4.3, tag: "" }
    ],
    photo: "factory45-shinokubo.jpg",
    instagram: "https://www.instagram.com/p/DgSScQTEywB/",
    comment: ""
  }
];
