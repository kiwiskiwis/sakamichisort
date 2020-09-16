dataSetVersion = "2020-09-16"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Group",
    key: "group",
    tooltip: "Check this to restrict to certain groups.",
    checked: false,
    sub: [
      { name: "Nogizaka46", key: "ngz" },
      { name: "Hinatazaka46", key: "hnz" },
      { name: "Keyakizaka46", key: "kyk" },
    ]
  },
  {
    name: "Filter by Status",
    key: "status",
    tooltip: "Check this to restrict different statuses.",
    checked: false,
    sub: [ { name: "Graduated", key: "g" }, 
           { name: "Current", key: "c" },  
    ]
  },
  {
    name: "Filter by Generation",
    key: "gen",
    tooltip: "Check this to restrict from generations.",
    checked: false,
    sub: [ { name: "First Generation", key: "on" }, 
           { name: "Second Generation", key: "tw" }, 
           { name: "Third Generation", key: "th" }, 
           { name: "Fourth Generation", key: "fo" },
          ]
  },
  {
    name: "Filter by Units (Hinatazaka)",
    key: "unith",
    tooltip: "Check this to restrict units (Hinatazaka).",
    checked: false,
    sub: [ { name: "Limacantik", key: "lmct" }, 
           { name: "Asakusashimai (Footsteps)", key: "fs" }, 
           { name: "Yancharu Family (Cage)", key: "yancharu" }, 
           { name: "Hanachanzu", key: "hncz" },
           { name: "FACTORY", key: "factory" },
           { name: "Kizunazu", key: "kznz" },
           { name: "DASADA7", key: "dsd" }
          ]
  }
];

dataSet[dataSetVersion].characterData = [
{
    name: "Ushio Sarina",
    img: "NxAQf9B.jpg",
    opts: {
      group: [ "hnz" ],
      status: ["c"],
      gen: ["on"],
      unith: ["lmct"]
    }
  },
 {
    name: "Kageyama Yuuka",
    img: "yz6nZTa.jpg",
    opts: {
      group: [ "hnz" ],
      status: ["c"],
      gen: ["on"]
    }
  },
 {
    name: "Kato Shiho",
    img: "cVN9lgY.jpg",
    opts: {
      group: [ "hnz" ],
      status: ["c"],
      gen: ["on"],
      unith: ["lmct", "kznz", "dsd"]
    }
  },
  {
    name: "Saito Kyoko",
    img: "24PynnJ.jpg",
    opts: {
      group: [ "hnz" ],
      status: ["c"],
      gen: ["on"],
      unith: ["dsd", "lmck", "kznz"]
    }
  },
  {
    name: "Sasaki Kumi",
    img: "RJZiI9C.jpg",
    opts: {
      group: [ "hnz" ],
      status: ["c"],
      gen: ["on"],
      unith: ["lmck", "fs", "dsd"]
    }
  },
  {
    name: "Sasaki Mirei",
    img: "7Elvl84.jpg",
    opts: {
      group: [ "hnz" ],
      status: ["c"],
      gen: ["on"],
      unith: ["fs", "dsd", "kznz"]
    }
  },
  {
    name: "Takase Mana",
    img: "kUSSZQI.jpg",
    opts: {
      group: [ "hnz" ],
      status: ["c"],
      gen: ["on"]
    }
  },
  {
    name: "Takamoto Ayaka",
    img: "ShthFGz.jpg",
    opts: {
      group: [ "hnz" ],
      status: ["c"],
      gen: ["on"],
      unith: ["lmck", "fs"]
    }
  },
    {
    name: "Higashimura Mei",
    img: "khOPmIM.jpg",
    opts: {
      group: [ "hnz" ],
      status: ["c"],
      gen: ["on"],
      unith: ["yancharu", "factory"]
    }
  },
    {
    name: "Kanemura Miku",
    img: "PQXNAqO.jpg",
    opts: {
      group: [ "hnz" ],
      status: ["c"],
      gen: ["tw"],
      unith: ["yancharu"]
    }
  },
    {
    name: "Kawata Hina",
    img: "dFRxTKB.jpg",
    opts: {
      group: [ "hnz" ],
      status: ["c"],
      gen: ["tw"],
      unith: ["factory", "yancharu"]
    }
  },
    {
    name: "Kosaka Nao",
    img: "f6zxSde.jpg",
    opts: {
      group: [ "hnz" ],
      status: ["c"],
      gen: ["tw"],
      unith: ["fs", "dsd"]
    }
  },
    {
    name: "Tomita Suzuka",
    img: "nS3BYp9.jpg",
    opts: {
      group: [ "hnz" ],
      status: ["c"],
      gen: ["tw"],
      unith: ["hncz", "dsd"]
    }
  },
    {
    name: "Nibu Akari",
    img: "0oX3xml.jpg",
    opts: {
      group: [ "hnz" ],
      status: ["c"],
      gen: ["tw"],
      unith: ["yancharu"]
    }
  },
     {
    name: "Hamagishi Hiyori",
    img: "qvf58sX.jpg",
    opts: {
      group: [ "hnz" ],
      status: ["c"],
      gen: ["tw"]
    }
  },
     {
    name: "Matsuda Konoka",
    img: "8giTYDz.jpg",
    opts: {
      group: [ "hnz" ],
      status: ["c"],
      gen: ["tw"],
      unith: ["hncz", "factory"]
    }
  },
     {
    name: "Miyata Manamo",
    img: "XWldn4n.jpg",
    opts: {
      group: [ "hnz" ],
      status: ["c"],
      gen: ["tw"]
    }
  },
     {
    name: "Watanabe Miho",
    img: "CSqT0zt.jpg",
    opts: {
      group: [ "hnz" ],
      status: ["c"],
      gen: ["tw"],
      unith: ["dsd"]
    }
  },
  {
    name: "Kamimura Hinano",
    img: "TwPJz20.jpg",
    opts: {
      group: [ "hnz" ],
      status: ["c"],
      gen: ["th"]
    }
  },
  {
    name: "Takahashi Mikuni",
    img: "4GZuQm1.jpg",
    opts: {
      group: [ "hnz" ],
      status: ["c"],
      gen: ["th"]
    }
  },
  {
    name: "Morimoto Marie",
    img: "9xQOHmo.jpg",
    opts: {
      group: [ "hnz" ],
      status: ["c"],
      gen: ["th"]
    }
  },
  {
    name: "Yamaguchi Haruyo",
    img: "qiDfaXH.jpg",
    opts: {
      group: [ "hnz" ],
      status: ["c"],
      gen: ["th"]
    }
  },
 {
    name: "Iguchi Mao",
    img: "8JuoKVu.jpg",
    opts: {
      group: [ "hnz" ],
      status: ["g"],
      gen: ["on"]
    }
  },
  {
    name: "Kakizaki Memi",
    img: "Vvldo4t.jpg",
    opts: {
      group: ["hnz"],
      status: ["g"],
      gen: ["on"]
    }
  },  
  {
    name: "Akimoto Manatsu",
    img: "AaWELda.jpg",
    opts: {
      group: [ "ngz" ],
      status: ["c"],
      gen: ["on"]
    }
  },
  {
    name: "Ikuta Erika",
    img: "5VxwFvl.jpg",
    opts: {
      group: [ "ngz" ],
      status: ["c"],
      gen: ["on"]
    }
  },
  {
    name: "Saito Asuka",
    img: "uaxYoNx.jpg",
    opts: {
      group: [ "ngz" ],
      status: ["c"],
      gen: ["on"]
    }
  },
  {
    name: "Shiraishi Mai",
    img: "UFX4UAI.jpg",
    opts: {
      group: [ "ngz" ],
      status: ["c"],
      gen: ["on"]
    }
  },
  {
    name: "Takayama Kazumi",
    img: "peEthv7.jpg",
    opts: {
      group: [ "ngz" ],
      status: ["c"],
      gen: ["on"]
    }
  },
  {
    name: "Nakada Kana",
    img: "247Uu6w.jpg",
    opts: {
      group: [ "ngz" ],
      status: ["c"],
      gen: ["on"]
    }
  },
  {
    name: "Higuchi Hina",
    img: "Gm0RTcA.jpg",
    opts: {
      group: [ "ngz" ],
      status: ["c"],
      gen: ["on"]
    }
  },
  {
    name: "Hoshino Minami",
    img: "JZ2BrVr.jpg",
    opts: {
      group: [ "ngz" ],
      status: ["c"],
      gen: ["on"]
    }
  },
  {
    name: "Matsumura Sayuri",
    img: "PrsFHMB.jpg",
    opts: {
      group: [ "ngz" ],
      status: ["c"],
      gen: ["on"]
    }
  },
    {
    name: "Wada Maaya",
    img: "ZOnc6PE.jpg",
    opts: {
      group: [ "ngz" ],
      status: ["c"],
      gen: ["on"]
    }
  },
   {
    name: "Itou Junna",
    img: "ScT5uN1.jpg",
    opts: {
      group: [ "ngz" ],
      status: ["c"],
      gen: ["tw"]
    }
  },
    {
    name: "Kitano Hinako",
    img: "a8uf807.jpg",
    opts: {
      group: [ "ngz" ],
      status: ["c"],
      gen: ["tw"]
    }
  },
    {
    name: "Shinuchi Mai",
    img: "yZBMWON.jpg",
    opts: {
      group: [ "ngz" ],
      status: ["c"],
      gen: ["tw"]
    }
  },
    {
    name: "Suzuki Ayane",
    img: "uHnrJtK.jpg",
    opts: {
      group: [ "ngz" ],
      status: ["c"],
      gen: ["tw"]
    }
  },
   {
    name: "Terada Ranze",
    img: "IfgZQr2.jpg",
    opts: {
      group: [ "ngz" ],
      status: ["c"],
      gen: ["tw"]
    }
  },
   {
    name: "Hori Miona",
    img: "ywQ8yy3.jpg",
    opts: {
      group: [ "ngz" ],
      status: ["c"],
      gen: ["tw"]
    }
  },
   {
    name: "Yamazaki Rena",
    img: "HBuz2a6.jpg",
    opts: {
      group: [ "ngz" ],
      status: ["c"],
      gen: ["tw"]
    }
  },
  {
    name: "Watanabe Miria",
    img: "yYQqN56.jpg",
    opts: {
      group: [ "ngz" ],
      status: ["c"],
      gen: ["tw"]
    }
  },
  {
    name: "Itou Riria",
    img: "q81dGPU.jpg",
    opts: {
      group: [ "ngz" ],
      status: ["c"],
      gen: ["th"]
    }
  },
  {
    name: "Iwamoto Renka",
    img: "j2VHreS.jpg",
    opts: {
      group: [ "ngz" ],
      status: ["c"],
      gen: ["th"]
    }
  },
   {
    name: "Umezawa Minami",
    img: "dXMQ0WI.jpg",
    opts: {
      group: [ "ngz" ],
      status: ["c"],
      gen: ["th"]
    }
  },
  {
    name: "Ozono Momoko",
    img: "lO0ngoo.jpg",
    opts: {
      group: [ "ngz" ],
      status: ["c"],
      gen: ["th"]
    }
  },
  {
    name: "Sakaguchi Tamami",
    img: "3sqCDlJ.jpg",
    opts: {
      group: [ "ngz" ],
      status: ["c"],
      gen: ["th"]
    }
  },
  {
    name: "Sato Kaede",
    img: "Y15FSyC.jpg",
    opts: {
      group: [ "ngz" ],
      status: ["c"],
      gen: ["th"]
    }
  },
 {
    name: "Nakamura Reno",
    img: "y2cxKLU.jpg",
    opts: {
      group: [ "ngz" ],
      status: ["c"],
      gen: ["th"]
    }
  },
 {
    name: "Mukai Hazuki",
    img: "jMrVNum.jpg",
    opts: {
      group: [ "ngz" ],
      status: ["c"],
      gen: ["th"]
    }
  },
 {
    name: "Yamashita Mizuki",
    img: "FWbYAud.jpg",
    opts: {
      group: [ "ngz" ],
      status: ["c"],
      gen: ["th"]
    }
  },
 {
    name: "Yoshida Ayano Christie",
    img: "kOatEA1.jpg",
    opts: {
      group: [ "ngz" ],
      status: ["c"],
      gen: ["th"]
    }
  },
  {
    name: "Yoda Yuki",
    img: "O2j1FuV.jpg",
    opts: {
      group: [ "ngz" ],
      status: ["c"],
      gen: ["th"]
    }
  },
  {
    name: "Endo Sakura",
    img: "1NElTqS.jpg",
    opts: {
      group: [ "ngz" ],
      status: ["c"],
      gen: ["fo"]
    }
  },
  {
    name: "Kaki Haruka",
    img: "PkOQzSf.jpg",
    opts: {
      group: [ "ngz" ],
      status: ["c"],
      gen: ["fo"]
    }
  },
 {
    name: "Kakehashi Sayaka",
    img: "g92Ted3.jpg",
    opts: {
      group: [ "ngz" ],
      status: ["c"],
      gen: ["fo"]
    }
  },
  {
    name: "Kanagawa Saya",
    img: "j2KHXqS.jpg",
    opts: {
      group: [ "ngz" ],
      status: ["c"],
      gen: ["fo"]
    }
  },
  {
    name: "Kitagawa Yuri",
    img: "ngD3mem.jpg",
    opts: {
      group: [ "ngz" ],
      status: ["c"],
      gen: ["fo"]
    }
  },
  {
    name: "Shibata Yuna",
    img: "xKJyJ8L.jpg",
    opts: {
      group: [ "ngz" ],
      status: ["c"],
      gen: ["fo"]
    }
  },
  {
    name: "Seimiya Rei",
    img: "o4hXS4f.jpg",
    opts: {
      group: [ "ngz" ],
      status: ["c"],
      gen: ["fo"]
    }
  },
  {
    name: "Tamura Mayu",
    img: "QktMEnb.jpg",
    opts: {
      group: [ "ngz" ],
      status: ["c"],
      gen: ["fo"]
    }
  },
  {
    name: "Tsutsui Ayame",
    img: "kIC7oHz.jpg",
    opts: {
      group: [ "ngz" ],
      status: ["c"],
      gen: ["fo"]
    }
  },
  {
    name: "Hayakawa Seira",
    img: "tzjsppV.jpg",
    opts: {
      group: [ "ngz" ],
      status: ["c"],
      gen: ["fo"]
    }
  },
  {
    name: "Yakubo Mio",
    img: "veub5to.jpg",
    opts: {
      group: [ "ngz" ],
      status: ["c"],
      gen: ["fo"]
    }
  },
 {
    name: "Ishimori Nijika",
    img: "sIcT6iR.jpg",
    opts: {
      group: [ "kyk" ],
      status: ["c"],
      gen: ["on"]
    }
  },
  {
    name: "Uemura Rina",
    img: "Rx86j7C.jpg",
    opts: {
      group: [ "kyk" ],
      status: ["c"],
      gen: ["on"]
    }
  },
   {
    name: "Ozeki Rika",
    img: "ih2DBSx.jpg",
    opts: {
      group: [ "kyk" ],
      status: ["c"],
      gen: ["on"]
    }
  },
   {
    name: "Koike Minami",
    img: "BepxDBS.jpg",
    opts: {
      group: [ "kyk" ],
      status: ["c"],
      gen: ["on"]
    }
  },
   {
    name: "Kobayashi Yui",
    img: "kgjH9nB.jpg",
    opts: {
      group: [ "kyk" ],
      status: ["c"],
      gen: ["on"]
    }
  },
  {
    name: "Saito Fuyuka",
    img: "3vuAwDS.jpg",
    opts: {
      group: [ "kyk" ],
      status: ["c"],
      gen: ["on"]
    }
  },
  {
    name: "Sato Shiori",
    img: "zRvdBEt.jpg",
    opts: {
      group: [ "kyk" ],
      status: ["c"],
      gen: ["on"]
    }
  },
  {
    name: "Sugai Yuuka",
    img: "fJ67ApO.jpg",
    opts: {
      group: [ "kyk" ],
      status: ["c"],
      gen: ["on"]
    }
  },
  {
    name: "Habu Mizuho",
    img: "QFWvaGR.jpg",
    opts: {
      group: [ "kyk" ],
      status: ["c"],
      gen: ["on"]
    }
  },
   {
    name: "Harada Aoi",
    img: "1Pjvrlw.jpg",
    opts: {
      group: [ "kyk" ],
      status: ["c"],
      gen: ["on"]
    }
  },
 {
    name: "Moriya Akane",
    img: "gT4Drrr.jpg",
    opts: {
      group: [ "kyk" ],
      status: ["c"],
      gen: ["on"]
    }
  },
  {
    name: "Watanabe Rika",
    img: "6n38UnU.jpg",
    opts: {
      group: [ "kyk" ],
      status: ["c"],
      gen: ["on"]
    }
  },
  {
    name: "Watanabe Risa",
    img: "RlQCtnb.jpg",
    opts: {
      group: [ "kyk" ],
      status: ["c"],
      gen: ["on"]
    }
  },
  {
    name: "Inoue Rina",
    img: "uyerS2n.jpg",
    opts: {
      group: [ "kyk" ],
      status: ["c"],
      gen: ["tw"]
    }
  },
   {
    name: "Seki Yumiko",
    img: "fREBo9Z.jpg",
    opts: {
      group: [ "kyk" ],
      status: ["c"],
      gen: ["tw"]
    }
  },
   {
    name: "Takemoto Yui",
    img: "LUhoTVt.jpg",
    opts: {
      group: [ "kyk" ],
      status: ["c"],
      gen: ["tw"]
    }
  },
  {
    name: "Tamura Hono",
    img: "EdA8Ibx.jpg",
    opts: {
      group: [ "kyk" ],
      status: ["c"],
      gen: ["tw"]
    }
  },
  {
    name: "Fujiyoshi Karin",
    img: "VFkhq6j.jpg",
    opts: {
      group: [ "kyk" ],
      status: ["c"],
      gen: ["tw"]
    }
  },
  {
    name: "Matsuda Rina",
    img: "iz2QZGf.jpg",
    opts: {
      group: [ "kyk" ],
      status: ["c"],
      gen: ["tw"]
    }
  },
  {
    name: "Matsudaira Riko",
    img: "s0QCXOW.jpg",
    opts: {
      group: [ "kyk" ],
      status: ["c"],
      gen: ["tw"]
    }
  },
  {
    name: "Morita Hikaru",
    img: "xBTQoN2.jpg",
    opts: {
      group: [ "kyk" ],
      status: ["c"],
      gen: ["tw"]
    }
  },
 {
    name: "Yamazaki Ten",
    img: "ofPHDOQ.jpg",
    opts: {
      group: [ "kyk" ],
      status: ["c"],
      gen: ["tw"]
    }
  },
  {
    name: "Endo Hikari",
    img: "NOyWfnL.jpg",
    opts: {
      group: [ "kyk" ],
      status: ["c"],
      gen: ["tw"]
    }
  },
  {
    name: "Oozono Rei",
    img: "FBw1d7t.jpg",
    opts: {
      group: [ "kyk" ],
      status: ["c"],
      gen: ["tw"]
    }
  },
  {
    name: "Oonuma Akiho",
    img: "gnMFer5.jpg",
    opts: {
      group: [ "kyk" ],
      status: ["c"],
      gen: ["tw"]
    }
  },
  {
    name: "Kosaka Marino",
    img: "36vK9uZ.jpg",
    opts: {
      group: [ "kyk" ],
      status: ["c"],
      gen: ["tw"]
    }
  },
{
    name: "Masumoto Kira",
    img: "FCn6DIl.jpg",
    opts: {
      group: [ "kyk" ],
      status: ["c"],
      gen: ["tw"]
    }
  },
 {
    name: "Moriya Rena",
    img: "0RE9WS3.jpg",
    opts: {
      group: [ "kyk" ],
      status: ["c"],
      gen: ["tw"]
    }
  },
  {
    name: "Imaizumi Yui",
    img: "8jogQob.jpg",
    opts: {
      group: ["kyk"],
      status: ["g"],
      gen: ["on"]
    }
  },
  {
    name: "Shida Manaka",
    img: "Fb3uPlf.jpg",
    opts: {
      group: ["kyk"],
      status: ["g"],
      gen: ["on"]
    }
  },
 {
    name: "Yonetani Nanami",
    img: "GFLCbUl.jpg",
    opts: {
      group: ["kyk"],
      status: ["g"],
      gen: ["on"]
    }
  },
  {
    name: "Oda Nana",
    img: "NWPo3PP.jpg",
    opts: {
      group: ["kyk"],
      status: ["g"],
      gen: ["on"]
    }
  },
   {
    name: "Hirate Yurina",
    img: "xkZgBZ4.jpg",
    opts: {
      group: ["kyk"],
      status: ["g"],
      gen: ["on"]
    }
  },
   {
    name: "Suzumoto Miyu",
    img: "28VeKGI.jpg",
    opts: {
      group: ["kyk"],
      status: ["g"],
      gen: ["on"]
    }
  },
   {
    name: "Nagasawa Nanako",
    img: "GR894Kz.jpg",
    opts: {
      group: ["kyk"],
      status: ["g"],
      gen: ["on"]
    }
  },
  {
    name: "Hanataka Seira",
    img: "MqdqLXL.jpg",
    opts: {
      group: ["ngz"],
      status: ["g"],
      gen: ["on"]
    }
  },
   {
    name: "Nagashima Seira",
    img: "GNHtnek.jpg",
    opts: {
      group: ["ngz"],
      status: ["g"],
      gen: ["on"]
    }
  },
   {
    name: "Fukugawa Mai",
    img: "cF5PmLO.jpg",
    opts: {
      group: ["ngz"],
      status: ["g"],
      gen: ["on"]
    }
  },
   {
    name: "Hashimoto Nanami",
    img: "PSnCObT.jpg",
    opts: {
      group: ["ngz"],
      status: ["g"],
      gen: ["on"]
    }
  },
  {
    name: "Ito Marika",
    img: "TpJiGX1.jpg",
    opts: {
      group: ["ngz"],
      status: ["g"],
      gen: ["on"]
    }
  },
 {
    name: "Nakamoto Himeka",
    img: "8ETfwQB.jpg",
    opts: {
      group: ["ngz"],
      status: ["g"],
      gen: ["on"]
    }
  },
   {
    name: "Kawamura Mahiro",
    img: "PilwWa6.jpg",
    opts: {
      group: ["ngz"],
      status: ["g"],
      gen: ["on"]
    }
  },
   {
    name: "Ikoma Rina",
    img: "gfeKta0.jpg",
    opts: {
      group: ["ngz"],
      status: ["g"],
      gen: ["on"]
    }
  },
   {
    name: "Saito Chiharu",
    img: "SchxdOX.jpg",
    opts: {
      group: ["ngz"],
      status: ["g"],
      gen: ["on"]
    }
  },
   {
    name: "Wakatsuki Yumi",
    img: "G8u69nU.jpg",
    opts: {
      group: ["ngz"],
      status: ["g"],
      gen: ["on"]
    }
  },
   {
    name: "Noujo Ami",
    img: "R7miyje.jpg",
    opts: {
      group: ["ngz"],
      status: ["g"],
      gen: ["on"]
    }
  },
   {
    name: "Kawago Hina",
    img: "A7JObyy.jpg",
    opts: {
      group: ["ngz"],
      status: ["g"],
      gen: ["on"]
    }
  },
   {
    name: "Nishino Nanase",
    img: "tIDYvGI.jpg",
    opts: {
      group: ["ngz"],
      status: ["g"],
      gen: ["on"]
    }
  },
  {
    name: "Eto Misa",
    img: "fb3zPT0.jpg",
    opts: {
      group: ["ngz"],
      status: ["g"],
      gen: ["on"]
    }
  },
   {
    name: "Saito Yuri",
    img: "pJrNobA.jpg",
    opts: {
      group: ["ngz"],
      status: ["g"],
      gen: ["on"]
    }
  },
   {
    name: "Sakurai Reika",
    img: "KnCRgdZ.jpg",
    opts: {
      group: ["ngz"],
      status: ["g"],
      gen: ["on"]
    }
  },
   {
    name: "Inoue Sayuri",
    img: "4dZ7ouu.jpg",
    opts: {
      group: ["ngz"],
      status: ["g"],
      gen: ["on"]
    }
  },
  {
    name: "Sagara Iori",
    img: "ISR33K5.jpg",
    opts: {
      group: ["ngz"],
      status: ["g"],
      gen: ["tw"]
    }
  }
];
