/* ============================================================
   Gojo — profile script
   Renders the post feed from data, handles lazy loading,
   search/filter, like/save (persisted), lightbox and hero video.
   ============================================================ */

(function () {
  "use strict";

  var POSTS = [{"id":1,"text":"Discover popular mobile brands and the countries where they originated, from Apple and Samsung to Nokia, Xiaomi, Sony, and more.\n#MobileBrands #smartphonebrand #TechFacts #phonehistory #technology","media":[{"type":"image","url":"https://raw.githubusercontent.com/uuhjeike/Gojo-Back/main/100/FB_IMG_1790369997536.jpg"}]},{"id":2,"text":"যার ভালো চেয়েছিলাম\n\nআমি যখন আমার কথাগুলো\nবোঝানোর চেষ্টা করি,\nকেন যেন প্রতিটি কথার শেষে\nএকটা তর্ক জন্ম নেয়—\nআর তর্কের শেষে\nদোষটা এসে থামে\nআমারই দরজায়।\n\nআমি তো তোমার সঙ্গে\nজিততে চাইনি কোনোদিন,\nশুধু চেয়েছিলাম\nতুমি একবার বুঝে নাও—\nআমার রাগের আড়ালে কতটা ভয়,\nআমার নীরবতার নিচে কতটা শব্দ,\nআর আমার কঠিন কথাগুলোর ভেতরে\nকতটা কোমল ভালোবাসা লুকিয়ে ছিল।\n\nকিন্তু মানুষ তো হৃদয় পড়তে শেখেনি,\nসে শুধু শব্দ মনে রাখে।\n\nতাই আমি যে রাতে\nতোমার জন্য নির্ঘুম ছিলাম,\nসেটা হারিয়ে যায় অন্ধকারে;\nআমি যে শতবার\nনিজেকে থামিয়েছি তোমাকে কষ্ট দেব না বলে,\nসেসব নীরবতা কেউ দেখে না—\nসবাই শুধু মনে রাখে\nশেষবার আমি কী বলেছিলাম।\n\nঅথচ বিশ্বাস করো,\nআমি তোমার পথ আটকাতে চাইনি,\nশুধু চেয়েছিলাম\nতুমি যেন ভুল পথে গিয়ে\nনিজেকেই হারিয়ে না ফেলো।\n\nআমি তোমাকে বেঁধে রাখতে চাইনি,\nশুধু ভেবেছিলাম—\nযাকে এতটা ভালোবাসি,\nতার হাতটা যদি একবার\nসাবধানে ধরে রাখি,\nহয়তো সে পড়ে যাওয়ার আগে\nআমার হাতটুকু অনুভব করবে।\n\nকিন্তু সেই হাতই একদিন\nতোমার কাছে শেকল হয়ে গেল,\nআমার সতর্কতা হয়ে গেল সন্দেহ,\nআমার যত্ন হয়ে গেল নিয়ন্ত্রণ,\nআর আমার ভালোবাসা—\nঅকারণ এক তর্ক।\n\nতারপর একদিন\nতুমি আমাকে এমনভাবে দেখলে,\nযেন আমি তোমার জীবনের\nসবচেয়ে খারাপ মানুষ।\n\nআমি কিছু বলিনি।\n\nকারণ কিছু সত্য\nমুখে বললে ছোট হয়ে যায়,\nকিছু ভালোবাসা\nপ্রমাণ করতে গেলে অপমানিত হয়,\nআর কিছু মানুষকে\nনিজের নির্দোষিতা বোঝাতে বোঝাতে\nশেষ পর্যন্ত মানুষ নিজেকেই\nঅপরাধী মনে করতে শুরু করে।\n\nতাই আজ আর\nআমার কোনো কথা বোঝাতে চাই না।\n\nতুমি আমাকে ভুল বুঝলে—\nভুল বুঝেই থেকো।\n\nশুধু কোনো এক নীরব রাতে,\nযখন পৃথিবীর সব শব্দ থেমে যাবে,\nযখন তোমার পাশে কেউ থাকবে না\nতোমার অভিমানগুলো শুনতে,\nতখন যদি হঠাৎ\nআমার বলা কোনো কঠিন কথা মনে পড়ে—\n\nতার একটু গভীরে যেও।\n\nহয়তো দেখবে,\nসেই কথার ভেতরে রাগ ছিল না,\nছিল হারিয়ে ফেলার ভয়।\n\nঅভিযোগ ছিল না,\nছিল তোমাকে আগলে রাখার ব্যর্থ চেষ্টা।\n\nআর ঘৃণা তো একেবারেই ছিল না—\nছিল এমন এক ভালোবাসা,\nযে ভালোবাসা\nতোমার ভালো থাকার জন্য\nনিজেকেই খারাপ হতে রাজি ছিল।\n\nআজ তোমার কাছে আমি খারাপ—\nহয়তো সত্যিই তাই।\n\nকারণ পৃথিবীতে\nভালো মানুষ হওয়ার চেয়েও\nবেশি কঠিন হলো—\nকাউকে ভালোবেসে\nতার চোখে ভালো মানুষ হয়ে থাকা।\n\nতাই আমার গল্পের শেষ পাতায়\nনিজের নামে আর কোনো সাফাই লিখব না।\n\nশুধু একটি বাক্য রেখে যাব—\n\n\"যার ভালো চেয়েছিলাম,\nশেষ পর্যন্ত তার কাছেই খারাপ হয়ে গেলাম;\nতবু আফসোস নেই—\nকারণ আমার ভালোবাসা\nতার ভালো থাকাটুকুর চেয়ে\nকখনো বড় ছিল না।\"","media":[]},{"id":3,"text":"","media":[{"type":"youtube","url":"https://youtu.be/lS5UUX8pf80?si=wXW0Sh59jSFSRGo8","id":"lS5UUX8pf80"}]},{"id":4,"text":"","media":[{"type":"youtube","url":"https://youtu.be/nzN9FiJT4Ns?si=Q7xUSh9VRytLnZOb","id":"nzN9FiJT4Ns"}]},{"id":5,"text":"Moon 🌙 ⭐ ♥️","media":[{"type":"image","url":"https://raw.githubusercontent.com/uuhjeike/Gojo-Back/main/Post/Moon/20260926_005924.jpg"},{"type":"image","url":"https://raw.githubusercontent.com/uuhjeike/Gojo-Back/main/Post/Moon/20260926_005959.jpg"},{"type":"image","url":"https://raw.githubusercontent.com/uuhjeike/Gojo-Back/main/Post/Moon/20260926_010042.jpg"},{"type":"image","url":"https://raw.githubusercontent.com/uuhjeike/Gojo-Back/main/Post/Moon/20260926_010108.jpg"},{"type":"image","url":"https://raw.githubusercontent.com/uuhjeike/Gojo-Back/main/Post/Moon/20260926_005518.jpg"},{"type":"image","url":"https://raw.githubusercontent.com/uuhjeike/Gojo-Back/main/Post/Moon/20260926_005542.jpg"},{"type":"image","url":"https://raw.githubusercontent.com/uuhjeike/Gojo-Back/main/Post/Moon/20260926_005602.jpg"},{"type":"image","url":"https://raw.githubusercontent.com/uuhjeike/Gojo-Back/main/Post/Moon/20260926_005708.jpg"},{"type":"image","url":"https://raw.githubusercontent.com/uuhjeike/Gojo-Back/main/Post/Moon/20260926_005842.jpg"}]},{"id":6,"text":"","media":[{"type":"youtube","url":"https://youtu.be/CuiCkfddORU?si=l_z7utZboNzMg_3S","id":"CuiCkfddORU"}]},{"id":7,"text":"","media":[{"type":"image","url":"https://raw.githubusercontent.com/uuhjeike/Gojo-Back/main/100/IMG_20260925_172036.jpg"}]},{"id":8,"text":"","media":[{"type":"pinterest","url":"https://pin.it/5eqOmVViy"}]},{"id":9,"text":"","media":[{"type":"audio","url":"https://raw.githubusercontent.com/uuhjeike/Gojo-Back/main/100/Shada____%E0%A6%B8%E0%A6%BE%E0%A6%A6%E0%A6%BE____Minar____Tahsan____Danpite____Bangla_New_Song____Official_Lyrical_video(256k).mp3"}]},{"id":10,"text":"","media":[{"type":"image","url":"https://raw.githubusercontent.com/uuhjeike/Gojo-Back/main/100/3781790dca0b5a5c00e76c04e8b45563.jpg"}]},{"id":11,"text":"sky","media":[{"type":"image","url":"https://raw.githubusercontent.com/uuhjeike/Gojo-Back/main/100/IMG_20260925_170652.jpg"}]},{"id":12,"text":"THE DARKEST KNOWLEDGE HUMANITY COULD DISCOVER\n\nWhat if humanity eventually proves that there is no objective meaning to existence?\n\nNot that life is meaningless to us personally.\n\nSomething deeper.\n\nImagine discovering that consciousness is simply an emergent process produced by matter, that there is no cosmic purpose behind life, and that the universe does not care whether humanity survives for another million years—or disappears tomorrow.\n\nNo hidden plan.\n\nNo guaranteed destiny.\n\nNo universal observer.\n\nJust matter, energy, time… and temporary beings capable of asking why they exist.\n\nAnd the darkest part?\n\nThe universe wouldn't even need to destroy us.\n\nIt could simply continue.\n\nStars would keep forming.\n\nGalaxies would keep moving.\n\nPlanets would keep orbiting.\n\nAnd eventually, everything humanity ever created—our languages, cities, memories, wars, discoveries, photographs, names and stories—could vanish without leaving anything that remembers us.\n\nYet there is one strange possibility that makes this darkness even deeper:\n\nMaybe the universe doesn't need to have a purpose for our existence to matter.\n\nPerhaps meaning isn't something waiting to be discovered.\n\nPerhaps meaning is something consciousness creates while it is here.\n\nAnd maybe that is the most terrifying freedom of all:\n\n**There may be no answer waiting for us.\n\nWe may be the ones who have to create one.**","media":[]},{"id":13,"text":"😴😴😴","media":[]},{"id":14,"text":"cul katte hobe. \n😕😕😕\nkichi Valo jay na.\nsap 25, 2026","media":[]},{"id":15,"text":"","media":[{"type":"image","url":"https://raw.githubusercontent.com/uuhjeike/Gojo-Back/main/100/FB_IMG_1790286913702.jpg"}]},{"id":16,"text":"The Most Unusual Handguns Ever Made: A Look at the Mateba 6 Unica, Chiappa Rhino 60DS and Iconic Mauser C96 #europe #germany #italy","media":[{"type":"image","url":"https://raw.githubusercontent.com/uuhjeike/Gojo-Back/main/100/FB_IMG_1790277101247.jpg"}]},{"id":17,"text":"50+ Technologies That Changed Human Civilization 🌍💡\n#TechnologyEvolution #TechHistory#HumanCivilization#technology #TechInnovation","media":[{"type":"image","url":"https://raw.githubusercontent.com/uuhjeike/Gojo-Back/main/100/FB_IMG_1790242034599.jpg"}]},{"id":18,"text":"","media":[{"type":"image","url":"https://raw.githubusercontent.com/uuhjeike/Gojo-Back/main/100/9077c04a5cda1f1920ab08699e49c986.jpg"}]},{"id":19,"text":"","media":[{"type":"image","url":"https://raw.githubusercontent.com/uuhjeike/Gojo-Back/main/100/IMG_20260924_113726.jpg"},{"type":"image","url":"https://raw.githubusercontent.com/uuhjeike/Gojo-Back/main/100/IMG_20260924_114047.jpg"},{"type":"image","url":"https://raw.githubusercontent.com/uuhjeike/Gojo-Back/main/100/IMG_20260924_134527.jpg"}]},{"id":20,"text":"11:18 ta baje but akhni kichi hy nai. ar anek gum o paiche.","media":[]},{"id":21,"text":"11:06 akhono start hy ni.","media":[]},{"id":22,"text":"Ashakori ICT Amar temn tuff hbe na.","media":[]},{"id":23,"text":"1000 ar deshi line khekha Jane na. ar ager ta to 20,000 line a chilo ar aro kaj hto tai ar pari I nai. \n11:04 sap 24, 2026","media":[]},{"id":24,"text":"so AJ ami college a ache chi. akta event hode. kaoke cini na. na cinlei Valo Amar jno. boleche to 1st year a. dekhi ki hy akhn 11:1am baje akhn start hbe. AJke Abar kajeo Jai nai. ami ja cai ta ki pabo?","media":[]},{"id":25,"text":"","media":[{"type":"video","url":"https://raw.githubusercontent.com/uuhjeike/Gojo-Back/main/100/AQONWoXNOr9UHrJbuFNuwZJjWkt7i7cLyF4oTYG_wkdsSk_VVDST2Xg86fYjnS9E8m9WbA_hQtwLJe-SSSfrp_ikCQeMDq7QYq7dSfEXSA.mp4"}]},{"id":26,"text":"😴😴😴\n2:59am\nkalo kaj ache.","media":[]},{"id":27,"text":"","media":[{"type":"textfile","url":"https://raw.githubusercontent.com/uuhjeike/Gojo-Back/main/100/The%20City%20That%20Was%20Born%20Every%20Night.txt"}]},{"id":28,"text":"","media":[{"type":"gdoc","url":"https://docs.google.com/document/d/1Crqhf2GEOERi1tsFsn9jVr3zJtv-zPJA0JNlIXD23Yg/edit?usp=drivesdk"}]},{"id":29,"text":"Every night, just before midnight, a small yellow lamp appeared at the end of a quiet road.\n\nNobody knew who lit it.\n\nThe road itself was almost forgotten. It passed between sleeping trees, crossed a little wooden bridge, and disappeared into the darkness beyond the village.\n\nOne night, a young man named Arif noticed the lamp while walking home.\n\nHe had had a long day.\n\nHis thoughts were crowded with unfinished things—things he should have done, things he wished he had said, and things he couldn't change.\n\nWhen he reached the lamp, he sat beneath it.\n\nThe light was warm.\n\nThe trees moved gently in the wind.\n\nFor a while, he did nothing.\n\nThen he noticed something strange.\n\nEvery time he breathed out, the wind seemed to carry one of his worries away.\n\nHe breathed in.\n\nHe breathed out.\n\nI should have...\n\nThe wind took it.\n\nHe breathed in again.\n\nWhat if tomorrow...\n\nThe wind took that too.\n\nSoon, he stopped trying to think.\n\nAbove him, the branches moved slowly against the stars.\n\nSomewhere in the distance, an owl called once, then became silent.\n\nArif closed his eyes.\n\nFor the first time that day, he realized something simple:\n\nNot everything needed to be solved tonight.\n\nSome things could wait for morning.\n\nHe leaned against the old tree beside the lamp.\n\nThe warmth touched his face.\n\nHis breathing became slower.\n\nAnd just before he fell asleep, he heard a tiny sound above him.\n\nClick.\n\nThe lamp went out.\n\nBut the road did not become completely dark.\n\nThe moon was there.\n\nIt had been there all along.\n\nAnd beneath its quiet silver light, Arif slept peacefully until morning.\n\nWhen he finally woke, the lamp was gone.\n\nOnly the empty road remained.\n\nBut from that day onward, whenever life felt too loud, Arif would walk to that place, sit beneath the old tree, and remember:\n\nNight is not asking you to solve tomorrow.\nIt is only asking you to rest.\n\nAnd somehow, that was enough.\n\nGood night. 🌙","media":[]},{"id":30,"text":"2:08am","media":[]},{"id":31,"text":"😕😕😕\nkeo nai jar shathe problem share korbo.","media":[]},{"id":32,"text":"","media":[{"type":"image","url":"https://raw.githubusercontent.com/uuhjeike/Gojo-Back/main/100/87d859ef39a6ef1bb9bddb36c83c9844.jpg"}]},{"id":33,"text":"","media":[{"type":"image","url":"https://raw.githubusercontent.com/uuhjeike/Gojo-Back/main/100/c44930124416e13151bd84982765b9bf.jpg"}]},{"id":34,"text":"","media":[{"type":"facebook","url":"https://www.facebook.com/share/v/14uB1wv1w4s/"}]},{"id":35,"text":"Five Precision Rifles, Four Countries, One Mission — A Visual Comparison of Modern Long-Range Rifle Designs #usa #europe","media":[{"type":"image","url":"https://raw.githubusercontent.com/uuhjeike/Gojo-Back/main/100/FB_IMG_1790192751592.jpg"}]},{"id":36,"text":"Coming soon Motorola Signature 27 😍\n\n#motorola #smartphone","media":[{"type":"image","url":"https://raw.githubusercontent.com/uuhjeike/Gojo-Back/main/100/FB_IMG_1790192502032.jpg"}]},{"id":37,"text":"","media":[{"type":"image","url":"https://raw.githubusercontent.com/uuhjeike/Gojo-Back/main/100/581f90888a9b79b44c8d59e0af6b9acd.jpg"}]},{"id":38,"text":"","media":[{"type":"image","url":"https://raw.githubusercontent.com/uuhjeike/Gojo-Back/main/100/a3062545b1e6a2522975e39161b3a30b.jpg"}]},{"id":39,"text":"","media":[{"type":"image","url":"https://raw.githubusercontent.com/uuhjeike/Gojo-Back/main/100/ab544dc892154749ff8450839b7f0688.jpg"}]},{"id":40,"text":"Barrett M82A1: A Detailed Look at the Legendary .50 BMG Semi-Automatic Rifle and Its Distinctive Long-Range Design #usa #america","media":[{"type":"image","url":"https://raw.githubusercontent.com/uuhjeike/Gojo-Back/main/100/FB_IMG_1790188889379.jpg"}]},{"id":41,"text":"23 tarike naki class hy nai AJ ki jabo???","media":[]},{"id":42,"text":"12:39am 24 sap 2026","media":[]},{"id":43,"text":"😕😕😕","media":[]},{"id":44,"text":"ভালোবাসার চাষ\n\nতোমরা কোনোদিন ভালোবাসা চাষ করে দেখেছো?\nকতই না কষ্ট হয়—\nএক মুঠো মাটির বুকে\nস্বপ্নের বীজ পুঁতে রাখা,\nতারপর প্রতিদিন প্রতীক্ষায় থাকা\nকোনো এক অদৃশ্য ঋতুর।\n\nভালোবাসার জমিনে\nজল দিতে হয় চোখের জলে,\nরোদ দিতে হয় অপেক্ষার,\nআর আগাছার মতো\nযে সংশয় জন্মায় হৃদয়ের কোণে,\nতাহা উপড়ে ফেলিতে হয়\nনিজেরই দুই হাতে।\n\nতবু কি সব ফসল ফলে?\nসব ফুল কি সুবাস দেয়?\nসব বসন্ত কি ফিরে আসে\nএকই গাছের ডালে?\n\nনা—\nকিছু বীজ মাটির নিচেই হারায়,\nকিছু কুঁড়ি ফুটিবার আগেই ঝরে যায়,\nআর কিছু ভালোবাসা\nশুধু হৃদয়ের গোপন বাগানে\nনামহীন ফুল হয়ে থাকে।\n\nতবু মানুষ চাষ করে।\n\nকারণ মানুষ আশাবাদী,\nমানুষ স্বপ্ন দেখে,\nমানুষ জানে—\nএকদিন হয়তো\nতার শূন্য উঠোনেও\nশিউলি ঝরবে ভোরের শিশিরে।\n\nআজ তেমনই একদিন ছিল।\n\nকোনো পূর্বঘোষণা ছিল না,\nআকাশে কোনো বিশেষ মেঘ ছিল না,\nবাতাসও জানত না\nকী ঘটিতে চলেছে আমার অন্তরে।\n\nআমি গিয়েছিলাম\nঅতি সাধারণ এক প্রয়োজনে—\nমানুষ যেমন যায়,\nআসে,\nকথা বলে,\nতারপর নিজের জীবনে ফিরে যায়।\n\nকিন্তু সেদিন\nজীবন আমাকে ফিরতে দিল না\nআগের সেই মানুষ হয়ে।\n\nসেখানে,\nক্যাপিটাল হাসপাতালের ব্যস্ত কাউন্টারের পাশে\nসে দাঁড়িয়ে ছিল।\n\nনিজের কর্মে নিমগ্ন,\nঅচেনা মানুষের ভিড়ে,\nদৈনন্দিন ব্যস্ততার মাঝখানে—\nতবু কেন জানি\nআমার চোখে\nসেই মুহূর্তে পৃথিবীর আর কিছুই ছিল না।\n\nতার পরনে ছিল\nএকটি লাল পোশাক।\n\nসে লাল—\nশুধু কোনো পোশাকের লাল নয়,\nমনে হলো\nশরতের সন্ধ্যায় পশ্চিম আকাশে\nসূর্য ডোবার আগের যে রঙ,\nসেই রঙ এসে\nতার পোশাকে আশ্রয় নিয়েছে।\n\nতার ঠোঁটে\nলালেরই আরেকটি ভাষা,\nআর চোখে—\n\nআহা, সে চোখ!\n\nকী মধুময় তাহার দৃষ্টি,\nকী অদ্ভুত তাহার আলো!\n\nশত মানুষের ভিড়ের মাঝে\nশত মুখের আসা-যাওয়ার ভিতরেও\nআমার চোখ শুধু\nতার চোখ দুটির কাছেই\nবারবার ফিরে গেল।\n\nআর আশ্চর্য—\n\nতাহার চোখও\nবারবার ফিরিয়া আসিল\nআমারই দিকে।\n\nহয়তো সে কেবলই দেখেছিল,\nহয়তো তার দৃষ্টির কোনো অর্থ ছিল না,\nহয়তো আমি-ই\nএকটি সাধারণ মুহূর্তের মধ্যে\nঅসাধারণ কোনো গল্প খুঁজছিলাম।\n\nকে জানে!\n\nকবিরা তো এমনই—\nএকটি দৃষ্টির ভিতর\nসমুদ্র দেখে,\nএকটি হাসির ভিতর\nবসন্তের আগমন শোনে,\nআর একটি নীরবতার মধ্যে\nসহস্র কথা পড়ে।\n\nআমি জানি না\nসে আমার দিকে কেন তাকিয়েছিল।\n\nকোনো কথা হয়নি,\nকোনো পরিচয় হয়নি,\nনামটিও জানা হলো না।\n\nতবু তার সেই দৃষ্টি\nআমার দিনের সমস্ত শব্দকে\nকেমন যেন নীরব করে দিল।\n\nমনে হলো—\n\nভিড়ের মধ্যে\nদু'টি চোখ হঠাৎ\nদু'টি অচেনা তীর থেকে\nএকই নদীর দিকে তাকিয়েছে।\n\nসে আবার কাজে ফিরল,\nআমি দাঁড়িয়ে রইলাম।\n\nসময় চলছিল নিজের নিয়মে,\nঘড়ির কাঁটা জানত না\nআমার হৃদয়ে তখন\nকোন নতুন ঋতু জন্ম নিচ্ছে।\n\nমানুষ আসছে,\nমানুষ যাচ্ছে,\nকাউন্টারে কথার ভিড়,\nপায়ের শব্দ,\nব্যস্ততার ঢেউ—\n\nআর সেই সমস্ত কোলাহলের মাঝেও\nআমি কেবল শুনছিলাম\nআমার নিজের হৃদয়ের শব্দ।\n\nধুক্—\n\nধুক্—\n\nধুক্—\n\nযেন বহুদিনের অনাবাদী জমিতে\nপ্রথম বৃষ্টির ফোঁটা পড়েছে।\n\nতখন বুঝলাম—\n\nভালোবাসা হয়তো\nসবসময় পরিচয় দিয়ে শুরু হয় না।\n\nকখনো কখনো\nএকটি চোখের দৃষ্টি\nএকটি অচেনা বিকেলকে\nচিরদিনের স্মৃতি করে দেয়।\n\nকখনো কোনো নাম না জেনেও\nকাউকে মনে রাখা যায়।\n\nকখনো কোনো কথা না বলেও\nএকটি মানুষ\nঅসংখ্য কথা বলে যায়।\n\nআর কখনো—\n\nএকটি লাল পোশাক\nএকটি সাধারণ হাসপাতালের কাউন্টার\nএকটি ব্যস্ত দুপুর\nআর দুটি মধুময় চোখ\nএকজন মানুষের হৃদয়ে\nএকটি সম্পূর্ণ কবিতা লিখে দেয়।\n\nআজও ভাবি—\n\nসে কি সত্যিই\nবারবার আমার দিকে তাকিয়েছিল?\n\nনাকি আমার মুগ্ধ চোখই\nতার প্রতিটি দৃষ্টিকে\nআমার জন্য লেখা কোনো চিঠি ভেবেছিল?\n\nউত্তর আমি জানি না।\n\nজানিবার চেষ্টাও করি না।\n\nকারণ কিছু প্রশ্নের উত্তর\nপেয়ে গেলে\nতাদের সৌন্দর্য নষ্ট হয়ে যায়।\n\nকিছু গল্প\nঅসমাপ্ত থাকলেই\nবেশি সুন্দর।\n\nতাই আজও\nতার নামহীন স্মৃতির পাশে\nআমি কোনো নাম লিখিনি।\n\nশুধু লিখেছি—\n\n\"আজ তাকে যে দেখিলাম।\"\n\nএইটুকুই যথেষ্ট।\n\nহয়তো সে জানে না,\nকোনো এক অচেনা মানুষ\nতার চোখের আলোয়\nসেদিন নিজের হৃদয়ের\nএকটি বন্ধ জানালা খুলে দিয়েছিল।\n\nহয়তো সে জানে না,\nতার লাল পোশাকের রঙ\nসেদিন আমার নির্লিপ্ত দিনটিকে\nকীভাবে রাঙিয়ে দিয়েছিল।\n\nহয়তো সে জানে না,\nতার একটি দৃষ্টি\nআজও আমার স্মৃতির আকাশে\nজোনাকির মতো জ্বলে।\n\nতবু আমি অভিযোগ করব না।\n\nভালোবাসার চাষে\nফসল চাইতেই হবে—\nএমন কোনো নিয়ম নেই।\n\nকখনো একটি ফুল ফুটলেই\nচাষির সমস্ত পরিশ্রম সার্থক।\n\nকখনো একটি দৃষ্টি পেলেই\nএকটি হৃদয়\nসারা জীবন কবিতা লিখতে পারে।\n\nতাই আজ\nহৃদয়ের মাটিতে\nআমি কোনো দাবি বুনিনি।\n\nবুনেছি শুধু\nএকটি নীরব স্মৃতি।\n\nতার পাশে রেখেছি\nএকটু মুগ্ধতা,\nএকটু অপেক্ষা,\nআর অল্প কিছু স্বপ্ন।\n\nযদি কোনোদিন\nসে আবার তাকায়—\n\nতবে হয়তো\nএই অচেনা গল্পের\nআরেকটি পৃষ্ঠা খুলবে।\n\nআর যদি না তাকায়—\n\nতবুও ক্ষতি কী?\n\nআমি তো একদিন\nতাকে দেখেছিলাম।\n\nশত বীরের মাঝে\nশত মানুষের ভিড়ে\nতাহার চোখের আলো\nএসেছিল আমারই দিকে।\n\nবারবার।\n\nসেই একটুকু আলোই\nআজ আমার হৃদয়ের\nঅন্ধকার উঠোনে\nএকটি প্রদীপ হয়ে জ্বলুক।\n\nআমি দূর থেকেই\nতার জন্য প্রার্থনা করব—\n\nসে ভালো থাকুক,\nতার হাসি অমলিন থাকুক,\nতার চোখের সেই মধুময় আলো\nকোনোদিন নিভে না যাক।\n\nআর আমার এই হৃদয়—\n\nসে চাষ করুক।\n\nনিঃশব্দে চাষ করুক।\n\nকারণ ভালোবাসার জমিতে\nসব ফসল ঘরে তুলতে হয় না।\n\nকিছু ফুল\nশুধু ফুটে থাকবার জন্যই আসে।\n\nকিছু মানুষ\nশুধু একবার দেখা দেওয়ার জন্যই আসে।\n\nআর কিছু দৃষ্টি—\n\nসারা জীবন\nএকজন কবির হৃদয়ে\nকবিতা হয়ে বেঁচে থাকে।","media":[{"type":"image","url":"https://raw.githubusercontent.com/uuhjeike/Gojo-Back/main/100/FB_IMG_1790188609448.jpg"}]},{"id":45,"text":"অচেনা মেয়েটি\n\nসেদিনও দিনটা\nঅন্য দিনের মতোই ছিল।\nকোনো বিশেষ অপেক্ষা ছিল না,\nকোনো অচেনা গল্পেরও শুরু ছিল না।\n\nক্যাপিটাল হাসপাতালের\nব্যস্ত কাউন্টারের পাশে\nহঠাৎ তোমাকে দেখলাম।\n\nতোমার পরনে লাল পোশাক,\nচারপাশে মানুষের ভিড়—\nতবু কেন যেন\nআমার চোখ শুধু তোমার কাছেই থেমে গেল।\n\nতুমি নিজের কাজে ব্যস্ত ছিলে।\nহঠাৎ একবার তাকালে আমার দিকে।\n\nআমিও তাকিয়ে ছিলাম।\n\nকয়েক মুহূর্তের সেই চোখাচোখি—\nকথা ছিল না,\nপরিচয় ছিল না,\nতবু মনে হলো\nকেমন যেন কিছু একটা ঘটে গেল।\n\nহয়তো তুমি শুধু\nকাকতালীয়ভাবে তাকিয়েছিলে।\nহয়তো আমার মনই\nসেই দৃষ্টির ভেতর\nএকটা গল্প খুঁজে নিয়েছিল।\n\nসত্যিটা আজও জানি না।\n\nশুধু জানি,\nসেদিন বাড়ি ফেরার পর\nঅকারণেই তোমার কথা মনে পড়েছিল।\n\nতোমার নাম জানি না,\nকোথায় থাকো জানি না,\nতোমার জীবনে কী গল্প আছে\nতাও জানি না।\n\nতবু তোমাকে মনে আছে।\n\nহয়তো সব মানুষ\nআমাদের জীবনে থাকার জন্য আসে না।\nকেউ কেউ শুধু\nএকটা মুহূর্তকে সুন্দর করে\nচলে যায়।\n\nতুমিও হয়তো তেমনই।\n\nআমি তোমাকে কিছু চাই না,\nকোনো দাবি নেই,\nকোনো প্রতিশ্রুতিও নয়।\n\nশুধু মাঝে মাঝে মনে হয়—\nযদি আবার দেখা হয়ে যায়!\n\nতখন হয়তো\nতোমার নামটা জিজ্ঞেস করব।\n\nআর যদি দেখা না হয়,\nতবুও আফসোস থাকবে না।\n\nকারণ তোমাকে একবার\nদেখেছিলাম তো।\n\nএকটি ব্যস্ত হাসপাতাল,\nএকটি লাল পোশাক,\nদুটি চোখ\nআর কয়েক মুহূর্তের নীরবতা—\n\nএইটুকুই হয়তো\nআমাদের গল্পের জন্য যথেষ্ট।\n\nতুমি হয়তো আমাকে\nকোনোদিন মনে রাখবে না।\n\nকিন্তু আমার স্মৃতিতে\nতুমি থেকে যাবে—\n\nএকজন অচেনা মেয়ে হয়ে,\nযে কোনো এক সাধারণ দিনে\nহঠাৎ এসে\nআমার দিনটাকে\nএকটু অসাধারণ করে দিয়েছিল।","media":[]},{"id":46,"text":"U.S. Military Most Powerful Assault Rifles — A Detailed Comparison of the M7 Rifle, M27 IAR, and M4A1 Carbine","media":[{"type":"image","url":"https://raw.githubusercontent.com/uuhjeike/Gojo-Back/main/100/FB_IMG_1790188051584.jpg"}]},{"id":47,"text":"","media":[{"type":"image","url":"https://raw.githubusercontent.com/uuhjeike/Gojo-Back/main/100/FB_IMG_1790186539071.jpg"}]},{"id":48,"text":"","media":[{"type":"image","url":"https://raw.githubusercontent.com/uuhjeike/Gojo-Back/main/100/0ea64fa6c1ff2f096c906bcb0af3c30a.jpg"}]}]
;

  /* ---------------- storage helpers ---------------- */

  var LS_LIKES = "gojo_likes_v1";
  var LS_SAVES = "gojo_saves_v1";

  function loadSet(key) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? new Set(JSON.parse(raw)) : new Set();
    } catch (e) {
      return new Set();
    }
  }
  function saveSet(key, set) {
    try {
      localStorage.setItem(key, JSON.stringify(Array.from(set)));
    } catch (e) { /* storage unavailable — interaction still works this session */ }
  }

  var likedIds = loadSet(LS_LIKES);
  var savedIds = loadSet(LS_SAVES);

  /* ---------------- text helpers ---------------- */

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // Turns escaped plain text into safe HTML with **bold** and #hashtags.
  function formatText(text) {
    var safe = escapeHtml(text);
    safe = safe.replace(/\*\*([^\n*]+)\*\*/g, "<strong>$1</strong>");
    safe = safe.replace(/(^|[\s(])#([A-Za-z0-9_]+)/g, function (m, pre, tag) {
      return pre + '<span class="tag" data-tag="' + tag.toLowerCase() + '">#' + tag + "</span>";
    });
    return safe;
  }

  function hostnameOf(url) {
    try { return new URL(url).hostname.replace(/^www\./, ""); }
    catch (e) { return url; }
  }

  function cleanFileTitle(url) {
    try {
      var last = decodeURIComponent(url.split("/").pop() || "");
      last = last.replace(/\.[a-zA-Z0-9]+$/, "");
      last = last.replace(/[_\-]+/g, " ").replace(/\s+/g, " ").trim();
      return last || "Audio track";
    } catch (e) { return "Audio track"; }
  }

  /* ---------------- icons (inline, no external requests) ---------------- */

  var ICONS = {
    heart: '<svg viewBox="0 0 24 24" fill="none"><path d="M12 20s-7-4.35-9.5-8.8C.8 7.9 2.4 4.5 6 4.5c2 0 3.3 1.05 4 2.1.7-1.05 2-2.1 4-2.1 3.6 0 5.2 3.4 3.5 6.7C19 15.65 12 20 12 20z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
    bookmark: '<svg viewBox="0 0 24 24" fill="none"><path d="M6 4h12v16l-6-4-6 4V4z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
    share: '<svg viewBox="0 0 24 24" fill="none"><circle cx="18" cy="5" r="2.4" stroke="currentColor" stroke-width="1.7"/><circle cx="6" cy="12" r="2.4" stroke="currentColor" stroke-width="1.7"/><circle cx="18" cy="19" r="2.4" stroke="currentColor" stroke-width="1.7"/><path d="M8.1 10.7l7.8-4.4M8.1 13.3l7.8 4.4" stroke="currentColor" stroke-width="1.7"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7-11-7z"/></svg>',
    note: '<svg viewBox="0 0 24 24" fill="none"><path d="M6 3h9l4 4v14H6V3z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M9 12h6M9 16h6M9 8h3" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
    music: '<svg viewBox="0 0 24 24" fill="none"><path d="M9 18V5l11-2v13" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><circle cx="6" cy="18" r="3" stroke="currentColor" stroke-width="1.7"/><circle cx="17" cy="16" r="3" stroke="currentColor" stroke-width="1.7"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="none"><path d="M14 8.5h2.5V5H14c-2 0-3.5 1.5-3.5 3.5V11H8v3.5h2.5V21H14v-6.5h2.5l.5-3.5h-3V9c0-.4.3-.5.5-.5z" fill="currentColor"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none"><path d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><circle cx="12" cy="9" r="2.3" stroke="currentColor" stroke-width="1.7"/></svg>',
    doc: '<svg viewBox="0 0 24 24" fill="none"><path d="M6 3h9l4 4v14H6V3z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M9 12h6M9 16h6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
    link: '<svg viewBox="0 0 24 24" fill="none"><path d="M9.5 14.5l5-5M8 10l-1.5 1.5a3.5 3.5 0 005 5L13 15M16 14l1.5-1.5a3.5 3.5 0 00-5-5L11 9" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>'
  };

  /* ---------------- media renderers ---------------- */
  // Media that should lazy-load exposes data-src / data-media hooks that
  // the IntersectionObserver below fills in once the post nears the viewport.

  function renderImageSingle(url) {
    return (
      '<div class="media-block"><img class="img-single is-loading" data-src="' +
      escapeHtml(url) +
      '" alt="" loading="lazy" decoding="async"></div>'
    );
  }

  function renderCarousel(urls, postId) {
    var imgs = urls
      .map(function (u, i) {
        return (
          '<img data-src="' + escapeHtml(u) + '" alt="" loading="lazy" decoding="async" data-idx="' + i + '">'
        );
      })
      .join("");
    var dots = urls
      .map(function (_, i) {
        return '<span class="' + (i === 0 ? "is-active" : "") + '"></span>';
      })
      .join("");
    return (
      '<div class="media-block carousel" data-gallery="' + postId + '">' +
        '<div class="carousel-count">1 / ' + urls.length + '</div>' +
        '<div class="carousel-track">' + imgs + "</div>" +
        '<div class="carousel-dots">' + dots + "</div>" +
      "</div>"
    );
  }

  function renderVideo(url) {
    return (
      '<div class="media-block video-wrap"><video controls preload="none" playsinline data-src="' +
      escapeHtml(url) +
      '"></video></div>'
    );
  }

  function renderAudio(url) {
    var title = cleanFileTitle(url);
    return (
      '<div class="media-block audio-card">' +
        '<div class="audio-icon">' + ICONS.music + "</div>" +
        '<div class="audio-body">' +
          '<p class="audio-title">' + escapeHtml(title) + "</p>" +
          '<audio controls preload="none" data-src="' + escapeHtml(url) + '"></audio>' +
        "</div>" +
      "</div>"
    );
  }

  function renderYoutube(media) {
    var vid = media.id;
    var thumb = "https://img.youtube.com/vi/" + vid + "/hqdefault.jpg";
    return (
      '<div class="media-block yt-facade" data-yt="' + vid + '">' +
        '<img data-src="' + thumb + '" alt="" loading="lazy" decoding="async">' +
        '<div class="yt-play"><span>' + ICONS.play + "</span></div>" +
      "</div>"
    );
  }

  function renderLinkCard(media) {
    var kind = media.type;
    var icon = ICONS.link, title = "Open link", sub = hostnameOf(media.url);
    if (kind === "facebook") { icon = ICONS.facebook; title = "Watch on Facebook"; }
    if (kind === "pinterest") { icon = ICONS.pin; title = "View on Pinterest"; }
    if (kind === "gdoc") { icon = ICONS.doc; title = "Open Google Doc"; }
    return (
      '<a class="media-block link-card" href="' + escapeHtml(media.url) + '" target="_blank" rel="noopener noreferrer">' +
        '<div class="link-icon">' + icon + "</div>" +
        '<div class="link-body"><p class="link-title">' + title + '</p><p class="link-sub">' + escapeHtml(sub) + "</p></div>" +
        '<span class="link-arrow">&#8599;</span>' +
      "</a>"
    );
  }

  function renderNote(media, postId) {
    return (
      '<div class="media-block note-card" data-note="' + postId + '" data-note-url="' + escapeHtml(media.url) + '">' +
        '<div class="note-head">' + ICONS.note + "<span>Note</span></div>" +
        '<div class="note-loading">Loading text&hellip;</div>' +
      "</div>"
    );
  }

  function renderMedia(post) {
    var media = post.media;
    if (!media || !media.length) return "";

    var images = media.filter(function (m) { return m.type === "image"; });
    if (images.length > 1 && images.length === media.length) {
      return renderCarousel(images.map(function (m) { return m.url; }), post.id);
    }

    return media
      .map(function (m) {
        switch (m.type) {
          case "image": return renderImageSingle(m.url);
          case "video": return renderVideo(m.url);
          case "audio": return renderAudio(m.url);
          case "youtube": return renderYoutube(m);
          case "textfile": return renderNote(m, post.id);
          case "facebook":
          case "pinterest":
          case "gdoc":
          case "link":
            return renderLinkCard(m);
          default: return "";
        }
      })
      .join("");
  }

  /* ---------------- post classification ---------------- */

  function classify(post) {
    var hasMedia = post.media && post.media.length > 0;
    var textLen = (post.text || "").trim().length;
    if (!hasMedia && textLen > 0 && textLen <= 40 && !/\n/.test(post.text)) return "mood";
    if (!hasMedia && textLen > 220) return "longform";
    if (!hasMedia && textLen > 0) return "short";
    return "card";
  }

  function primaryMediaType(post) {
    if (!post.media || !post.media.length) return "text";
    var t = post.media[0].type;
    if (t === "facebook" || t === "pinterest" || t === "gdoc" || t === "textfile") return "link";
    return t;
  }

  /* ---------------- render a post ---------------- */

  function renderPost(post) {
    var kind = classify(post);
    var el = document.createElement("article");
    el.className = "post";
    el.dataset.id = post.id;
    el.dataset.mediaType = primaryMediaType(post);
    el.dataset.search = (post.text || "").toLowerCase();

    var wrapClass = "post-card";
    if (kind === "longform") wrapClass = "post-longform";
    if (kind === "mood") wrapClass = "post-mood";
    if (kind === "short") wrapClass = "post-card";

    var textHtml = post.text ? '<p class="post-text">' + formatText(post.text) + "</p>" : "";
    var mediaHtml = renderMedia(post);

    var liked = likedIds.has(post.id);
    var saved = savedIds.has(post.id);

    var actionsHtml =
      '<div class="post-actions">' +
        '<button class="action-btn action-like' + (liked ? " is-active" : "") + '" data-action="like" aria-pressed="' + liked + '">' +
          ICONS.heart + '<span>' + (liked ? "Liked" : "Like") + "</span></button>" +
        '<button class="action-btn action-save' + (saved ? " is-active" : "") + '" data-action="save" aria-pressed="' + saved + '">' +
          ICONS.bookmark + '<span>' + (saved ? "Saved" : "Save") + "</span></button>" +
        '<span class="action-spacer"></span>' +
        '<button class="action-btn action-share" data-action="share">' + ICONS.share + "<span>Share</span></button>" +
      "</div>";

    el.innerHTML =
      '<div class="' + wrapClass + '">' + textHtml + mediaHtml + actionsHtml + "</div>";

    return el;
  }

  /* ---------------- stats ---------------- */

  function computeStats() {
    var photos = 0, clips = 0;
    POSTS.forEach(function (p) {
      p.media.forEach(function (m) {
        if (m.type === "image") photos++;
        if (m.type === "video" || m.type === "youtube") clips++;
      });
    });
    return { posts: POSTS.length, photos: photos, clips: clips };
  }

  /* ---------------- lazy loading ---------------- */

  var mediaObserver;

  function hydrateMediaIn(container) {
    var lazyImgs = container.querySelectorAll("img[data-src]");
    lazyImgs.forEach(function (img) {
      if (mediaObserver) mediaObserver.observe(img);
    });
    var lazyVideos = container.querySelectorAll("video[data-src]");
    lazyVideos.forEach(function (v) {
      if (mediaObserver) mediaObserver.observe(v);
    });
    var lazyAudio = container.querySelectorAll("audio[data-src]");
    lazyAudio.forEach(function (a) {
      if (mediaObserver) mediaObserver.observe(a);
    });
    var notes = container.querySelectorAll("[data-note]");
    notes.forEach(function (n) {
      if (mediaObserver) mediaObserver.observe(n);
    });
  }

  function loadEl(el) {
    if (el.tagName === "IMG" && el.dataset.src) {
      el.src = el.dataset.src;
      el.addEventListener("load", function () { el.classList.remove("is-loading"); }, { once: true });
      el.addEventListener("error", function () { el.classList.remove("is-loading"); el.alt = "Image unavailable"; }, { once: true });
      el.removeAttribute("data-src");
    } else if (el.tagName === "VIDEO" && el.dataset.src) {
      var src = document.createElement("source");
      src.src = el.dataset.src;
      src.type = "video/mp4";
      el.appendChild(src);
      el.load();
      el.removeAttribute("data-src");
    } else if (el.tagName === "AUDIO" && el.dataset.src) {
      var asrc = document.createElement("source");
      asrc.src = el.dataset.src;
      el.appendChild(asrc);
      el.load();
      el.removeAttribute("data-src");
    } else if (el.dataset && el.dataset.note) {
      loadNote(el);
    }
  }

  function loadNote(el) {
    var url = el.dataset.noteUrl;
    fetch(url)
      .then(function (res) {
        if (!res.ok) throw new Error("bad response");
        return res.text();
      })
      .then(function (text) {
        var body = document.createElement("div");
        body.className = "note-body";
        body.textContent = text;
        var loading = el.querySelector(".note-loading");
        if (loading) loading.replaceWith(body);
      })
      .catch(function () {
        var loading = el.querySelector(".note-loading");
        if (loading) {
          loading.innerHTML = 'Could not preview this file. <a href="' + escapeHtml(url) + '" target="_blank" rel="noopener noreferrer" style="color:var(--signal);text-decoration:underline;">Open it directly &#8599;</a>';
        }
      });
    delete el.dataset.note;
  }

  function initObserver() {
    mediaObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            loadEl(entry.target);
            mediaObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "400px 0px" }
    );
  }

  /* ---------------- carousel dot sync ---------------- */

  function wireCarousels(container) {
    container.querySelectorAll(".carousel").forEach(function (car) {
      var track = car.querySelector(".carousel-track");
      var dots = car.querySelectorAll(".carousel-dots span");
      var count = car.querySelector(".carousel-count");
      var total = dots.length;
      track.addEventListener(
        "scroll",
        throttle(function () {
          var idx = Math.round(track.scrollLeft / track.clientWidth);
          idx = Math.max(0, Math.min(total - 1, idx));
          dots.forEach(function (d, i) { d.classList.toggle("is-active", i === idx); });
          if (count) count.textContent = idx + 1 + " / " + total;
        }, 100)
      );
    });
  }

  function throttle(fn, wait) {
    var t = null, last = 0;
    return function () {
      var now = Date.now();
      var args = arguments;
      if (now - last >= wait) {
        last = now;
        fn.apply(null, args);
      } else {
        clearTimeout(t);
        t = setTimeout(function () { last = Date.now(); fn.apply(null, args); }, wait - (now - last));
      }
    };
  }

  /* ---------------- youtube facade swap ---------------- */

  function wireYoutube(container) {
    container.querySelectorAll(".yt-facade").forEach(function (facade) {
      facade.addEventListener("click", function () {
        var vid = facade.dataset.yt;
        var wrap = document.createElement("div");
        wrap.className = "media-block yt-embed-wrap";
        wrap.innerHTML =
          '<iframe src="https://www.youtube-nocookie.com/embed/' +
          encodeURIComponent(vid) +
          '?autoplay=1&rel=0" title="YouTube video" allow="accelerate-encoded-media; autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>';
        facade.replaceWith(wrap);
      });
    });
  }

  /* ---------------- lightbox ---------------- */

  var lightbox = document.getElementById("lightbox");
  var lbImg = document.getElementById("lbImg");
  var lbPrev = document.getElementById("lbPrev");
  var lbNext = document.getElementById("lbNext");
  var lbClose = document.getElementById("lbClose");
  var lbCount = document.getElementById("lbCount");
  var lbGallery = [];
  var lbIndex = 0;

  function openLightbox(urls, index) {
    lbGallery = urls;
    lbIndex = index;
    updateLightbox();
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function updateLightbox() {
    lbImg.src = lbGallery[lbIndex];
    var multi = lbGallery.length > 1;
    lbPrev.hidden = !multi;
    lbNext.hidden = !multi;
    lbCount.hidden = !multi;
    if (multi) lbCount.textContent = lbIndex + 1 + " / " + lbGallery.length;
  }

  function closeLightbox() {
    lightbox.hidden = true;
    lbImg.src = "";
    document.body.style.overflow = "";
  }

  lbClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", function (e) { if (e.target === lightbox) closeLightbox(); });
  lbPrev.addEventListener("click", function () { lbIndex = (lbIndex - 1 + lbGallery.length) % lbGallery.length; updateLightbox(); });
  lbNext.addEventListener("click", function () { lbIndex = (lbIndex + 1) % lbGallery.length; updateLightbox(); });
  document.addEventListener("keydown", function (e) {
    if (lightbox.hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") lbPrev.click();
    if (e.key === "ArrowRight") lbNext.click();
  });

  function wireLightboxTriggers(container) {
    container.querySelectorAll(".img-single").forEach(function (img) {
      img.addEventListener("click", function () {
        var src = img.src || img.dataset.src;
        if (src) openLightbox([src], 0);
      });
    });
    container.querySelectorAll(".carousel").forEach(function (car) {
      var imgs = Array.from(car.querySelectorAll("img"));
      imgs.forEach(function (img, i) {
        img.addEventListener("click", function () {
          var urls = imgs.map(function (im) { return im.src || im.dataset.src; });
          openLightbox(urls, i);
        });
      });
    });
  }

  /* ---------------- toast ---------------- */

  var toastEl = document.getElementById("toast");
  var toastTimer = null;
  function showToast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove("is-visible"); }, 2000);
  }

  /* ---------------- actions: like / save / share ---------------- */

  function wireActions(container) {
    container.addEventListener("click", function (e) {
      var btn = e.target.closest(".action-btn");
      if (!btn) return;
      var postEl = e.target.closest(".post");
      var id = Number(postEl.dataset.id);

      if (btn.dataset.action === "like") {
        var isLiked = likedIds.has(id);
        if (isLiked) likedIds.delete(id); else likedIds.add(id);
        saveSet(LS_LIKES, likedIds);
        btn.classList.toggle("is-active", !isLiked);
        btn.setAttribute("aria-pressed", String(!isLiked));
        btn.querySelector("span").textContent = !isLiked ? "Liked" : "Like";
      }

      if (btn.dataset.action === "save") {
        var isSaved = savedIds.has(id);
        if (isSaved) savedIds.delete(id); else savedIds.add(id);
        saveSet(LS_SAVES, savedIds);
        btn.classList.toggle("is-active", !isSaved);
        btn.setAttribute("aria-pressed", String(!isSaved));
        btn.querySelector("span").textContent = !isSaved ? "Saved" : "Save";
        showToast(!isSaved ? "Saved to your bookmarks" : "Removed from bookmarks");
        if (savedOnly && isSaved) applyFilters();
      }

      if (btn.dataset.action === "share") {
        var url = location.href.split("#")[0] + "#post-" + id;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(url).then(function () {
            showToast("Link copied");
          }).catch(function () { showToast(url); });
        } else {
          showToast(url);
        }
      }
    });
  }

  /* ---------------- hashtag click -> filter ---------------- */

  function wireHashtags(container) {
    container.addEventListener("click", function (e) {
      var tag = e.target.closest(".tag");
      if (!tag) return;
      activeTag = tag.dataset.tag;
      searchInput.value = "";
      applyFilters();
    });
  }

  /* ---------------- feed build + filtering ---------------- */

  var feedEl = document.getElementById("feed");
  var emptyState = document.getElementById("emptyState");
  var searchInput = document.getElementById("searchInput");
  var searchClear = document.getElementById("searchClear");
  var activeFilter = "all";
  var activeTag = null;
  var savedOnly = false;
  var activeTagBar = document.getElementById("activeTagBar");
  var activeTagLabel = document.getElementById("activeTagLabel");
  var activeTagClear = document.getElementById("activeTagClear");

  var postEls = [];

  function buildFeed() {
    var frag = document.createDocumentFragment();
    POSTS.forEach(function (post) {
      var el = renderPost(post);
      el.id = "post-" + post.id;
      frag.appendChild(el);
      postEls.push(el);
    });
    feedEl.appendChild(frag);

    hydrateMediaIn(feedEl);
    wireCarousels(feedEl);
    wireYoutube(feedEl);
    wireLightboxTriggers(feedEl);
    wireActions(feedEl);
    wireHashtags(feedEl);
  }

  function applyFilters() {
    var q = searchInput.value.trim().toLowerCase();
    searchClear.hidden = q.length === 0;

    activeTagBar.hidden = !activeTag;
    if (activeTag) activeTagLabel.textContent = "#" + activeTag;

    var visibleCount = 0;

    postEls.forEach(function (el) {
      var id = Number(el.dataset.id);
      var mt = el.dataset.mediaType;
      var text = el.dataset.search;

      var matchesFilter = activeFilter === "all" || mt === activeFilter;
      var matchesQuery = !q || text.indexOf(q) !== -1;
      var matchesTag = !activeTag || text.indexOf("#" + activeTag) !== -1;
      var matchesSaved = !savedOnly || savedIds.has(id);

      var show = matchesFilter && matchesQuery && matchesTag && matchesSaved;
      el.hidden = !show;
      if (show) visibleCount++;
    });

    emptyState.hidden = visibleCount !== 0;
  }

  searchInput.addEventListener("input", throttle(applyFilters, 120));
  searchClear.addEventListener("click", function () {
    searchInput.value = "";
    applyFilters();
    searchInput.focus();
  });
  activeTagClear.addEventListener("click", function () {
    activeTag = null;
    applyFilters();
  });

  document.querySelectorAll(".feed-tab").forEach(function (tab) {
    tab.addEventListener("click", function () {
      document.querySelectorAll(".feed-tab").forEach(function (t) {
        t.classList.remove("is-active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("is-active");
      tab.setAttribute("aria-selected", "true");
      activeFilter = tab.dataset.filter;
      applyFilters();
    });
  });

  var savedToggle = document.getElementById("savedToggle");
  savedToggle.addEventListener("click", function () {
    savedOnly = !savedOnly;
    savedToggle.setAttribute("aria-pressed", String(savedOnly));
    applyFilters();
    if (savedOnly) {
      document.querySelector(".feed-shell").scrollIntoView({ behavior: "smooth", block: "start" });
      showToast("Showing your saved posts");
    }
  });

  /* ---------------- topbar / scroll chrome ---------------- */

  var topbar = document.getElementById("topbar");
  var toTop = document.getElementById("toTop");

  window.addEventListener(
    "scroll",
    throttle(function () {
      var y = window.scrollY || document.documentElement.scrollTop;
      topbar.classList.toggle("is-scrolled", y > 8);
      toTop.hidden = y < 700;
    }, 100)
  );

  toTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------------- hero video: mute toggle + pause offscreen ---------------- */

  var heroVideo = document.getElementById("heroVideo");
  var muteBtn = document.getElementById("muteBtn");
  var muteIconOn = document.getElementById("muteIconOn");
  var muteIconOff = document.getElementById("muteIconOff");

  muteBtn.addEventListener("click", function () {
    heroVideo.muted = !heroVideo.muted;
    var isMuted = heroVideo.muted;
    muteBtn.setAttribute("aria-pressed", String(isMuted));
    muteBtn.setAttribute("aria-label", isMuted ? "Unmute background video" : "Mute background video");
    muteIconOn.hidden = !isMuted;
    muteIconOff.hidden = isMuted;
  });

  var heroObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          heroVideo.play().catch(function () {});
        } else {
          heroVideo.pause();
        }
      });
    },
    { threshold: 0.1 }
  );
  heroObserver.observe(document.getElementById("hero"));

  /* ---------------- init ---------------- */

  function init() {
    var stats = computeStats();
    document.getElementById("statPosts").textContent = stats.posts;
    document.getElementById("statPhotos").textContent = stats.photos;
    document.getElementById("statClips").textContent = stats.clips;

    initObserver();
    buildFeed();

    // Deep-link support: #post-N scrolls to that post once rendered.
    if (location.hash && location.hash.indexOf("#post-") === 0) {
      var target = document.querySelector(location.hash);
      if (target) setTimeout(function () { target.scrollIntoView({ block: "center" }); }, 60);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
