/**
 * BASQUE NIGHT TALES — script.js
 * Optimized, encapsulated, and accessible interactive script.
 */

(function () {
  'use strict';

  // ---- TALE DATA (fox tale uses illustrations, others text-only) ----
  const TALES = [
    {
      id: 0,
      category: 'basque',
      num: {
        basque: 'I. Ipuina',
        georgian: 'ზღაპარი I',
        english: 'Tale I'
      },
      title: {
        basque: 'Ipurtargia eta Axeria',
        georgian: 'ციცინათელა და მელა',
        english: 'The Firefly and the Fox'
      },
      bg: 'assets/images/firefly/fox_background3.svg',
      ending: {
        basque: '"Argirik txikienak ere itzalik ilunena gaindi dezake."',
        georgian: '"ყველაზე პატარა შუქსაც კი შეუძლია აჯობოს ყველაზე ბნელ ჩრდილს."',
        english: '"Even the smallest light can outwit the darkest shadow."'
      },
      beats: [
        {
          img: 'assets/images/firefly/fox_background1.svg',
          text: {
            basque: 'Euskal Herriko baso goroldiotsuetan barrena, ipurtargi txiki batek iluntasuna margotzen zuen bere argi urreztatu beroarekin.',
            georgian: 'ბასკეთის ხავსიან ტყეებში, პატარა ციცინათელა თავისი თბილი, ოქროსფერი შუქით ხატავდა სიბნელეს.',
            english: 'Deep in the mossy forests of the Basque Country, a tiny Firefly painted the darkness with his warm, golden light.'
          }
        },
        {
          img: null,
          text: {
            basque: 'Gauero antzinako haritzen artean egiten zuen dantza, eta zuhaitz bakoitza argiagoa zirudien bera ezagutzeagatik soilik.',
            georgian: 'ყოველ ღამით ის ცეკვავდა უძველეს მუხებს შორის და ყოველი ხე უფრო კაშკაშა ჩანდა მხოლოდ მისი გაცნობის გამო.',
            english: 'Every night he danced among the ancient oaks, and every tree seemed brighter just for knowing him.'
          }
        },
        {
          img: 'assets/images/firefly/fox_background2.svg',
          text: {
            basque: 'Baina itzal bat begira zegoen — azeri gose bat, buztan laranja harro eta bihurrikeriaz beteriko bihotza zituena.',
            georgian: 'მაგრამ ერთი ჩრდილი უთვალთვალებდა — მშიერი მელა ფუმფულა ნარინჯისფერი კუდითა და ოინებით სავსე გულით.',
            english: 'But one shadow was watching — a hungry Fox with a bushy orange tail and a heart full of mischief.'
          }
        },
        {
          img: null,
          text: {
            basque: '"Mesedez, azeri jatorra," xuxurlatu zuen ipurtargiak. "Ez itzali nire argia. Gau ilunetan zehar gida zaitzaket."',
            georgian: '"გთხოვ, კეთილო მელავ," ჩაჩურჩულა ციცინათელამ. "ნუ ჩამიქრობ შუქს. მე შემიძლია გაგიძღვე ყველაზე ბნელ ღამეებში."',
            english: '"Please, kind Fox," the Firefly whispered. "Do not put out my light. I can guide you through the darkest nights."'
          }
        },
        {
          img: 'assets/images/firefly/fox_background3.svg',
          text: {
            basque: 'Azeriak barre besterik ez zuen egin — txori loak beren adarretatik sakabanatu zituen soinu zorrotza.',
            georgian: 'მელამ მხოლოდ გაიცინა — ბასრმა ხმამ ტოტებიდან მძინარე ჩიტები დააფრთხო.',
            english: 'The Fox only laughed — a sharp sound that scattered the sleeping birds from their branches.'
          }
        },
        {
          img: null,
          text: {
            basque: '"Orduan ireki ahoa zabal," esan zuen ipurtargi argiak, "eta barrura saltatuko dut — otordu dotorea azeri dotore batentzat."',
            georgian: '"მაშინ პირი ფართოდ გააღე," თქვა ჭკვიანმა ციცინათელამ, "და პირდაპირ შიგნით ჩავხტები — გემრიელი ლუკმა მშვენიერი მელასთვის."',
            english: '"Then open wide," said the clever Firefly, "and I will jump right in — a graceful meal for a fine fox."'
          }
        },
        {
          img: 'assets/images/backgrounds/forest_4.svg',
          text: {
            basque: 'Azeri ergelak masailezurrak ireki zituen, eta ipurtargiak flash urreztatu itsugarri bat egin zuen, bera estropezu eginez utziz.',
            georgian: 'სულელმა მელამ ხახა გააღო და ციცინათელა დააბრმავებელ ოქროსფერ ნათებად აფეთქდა, რამაც მელა დააბნია.',
            english: 'The foolish Fox opened his jaws, and the Firefly burst into a blinding golden flash that left him stumbling.'
          }
        },
        {
          img: null,
          text: {
            basque: 'Azeriak berriro ikusi ahal izan zuenerako, ipurtargia hostoen goialdetik kliskatzen ari zen izar txiki bat besterik ez zen — betiko aske.',
            georgian: 'სანამ მელა მხედველობას დაიბრუნებდა, ციცინათელა უკვე ფოთლებიდან მომციმციმე პატარა ვარსკვლავად ქცეულიყო — სამუდამოდ თავისუფალი.',
            english: 'By the time the Fox could see again, the Firefly was just a tiny star winking from high in the leaves — free forever.'
          }
        }
      ]
    },
    {
      id: 1,
      category: 'basque',
      num: {
        basque: 'II. Ipuina',
        georgian: 'ზღაპარი II',
        english: 'Tale II'
      },
      title: {
        basque: 'Basajaunaren Oparia',
        georgian: 'ბასაჟაუნის საჩუქარი',
        english: "The Basajaun's Gift"
      },
      bg: 'assets/images/backgrounds/forest_2.svg',
      ending: {
        basque: '"Basoak denok elikatzen gaitu. Ez ahaztu inoiz aurretik etorri zirenak."',
        georgian: '"ტყე ყველას გვკვებავს. არასოდეს დაივიწყოთ ისინი, ვინც ჩვენამდე იყვნენ."',
        english: '"The forest feeds us all. Never forget those who came before."'
      },
      beats: [
        {
          img: 'assets/images/Basajaun/basajaun_1.svg',
          text: {
            basque: 'Duela asko Pirinio garaietan, Basajaun izeneko erraldoi iletsu handi bat bizi zen — Basoko Jauna.',
            georgian: 'დიდი ხნის წინ მაღალ პირენეებში ცხოვრობდა დიდი ბანჯგვლიანი გიგანტი, სახელად ბასაჟაუნი — ტყის უფალი.',
            english: 'Long ago in the high Pyrenees, there lived a great shaggy giant called the Basajaun — the Lord of the Forest.'
          }
        },
        {
          img: 'assets/images/Basajaun/untxia_1.svg',
          text: {
            basque: 'Basatia eta ozena zen, eta animaliek beldurra zioten — inoiz ihes egiten ez zuen untxi txiki eta bitxi bat izan ezik.',
            georgian: 'ის იყო ველური და ხმაურიანი, და ცხოველებს მისი ეშინოდათ — გარდა ერთი პატარა, ცნობისმოყვარე კურდღლისა, რომელიც არასოდეს გარბოდა.',
            english: 'He was wild and loud, and the animals feared him — all except one small, curious Rabbit who never ran away.'
          }
        },
        {
          img: 'assets/images/backgrounds/forest_1.svg',
          text: {
            basque: 'Negu gogor batean, lunak herria lurperatu zuen eta jendeak ez zuen zer janik.',
            georgian: 'ერთ მკაცრ ზამთარს თოვლმა დაფარა სოფელი და ხალხს საჭმელი აღარაფერი დარჩა.',
            english: 'One bitter winter, snow buried the village and the people had nothing left to eat.'
          }
        },
        {
          img: 'assets/images/backgrounds/forest_2.svg',
          text: {
            basque: '"Mesedez, Basajaun handia," deitu zuen untxi txikiak mjegunean gora. "Haurrak gose dira. Lagundu al dezakezu?"',
            georgian: '"გთხოვ, დიდო ბასაჟაუნ," დაუძახა პატარა კურდღელმა ნისლში. "ბავშვები მშივრები არიან. შეგიძლია დაგვეხმარო?"',
            english: '"Please, great Basajaun," the little Rabbit called up into the mist. "The children are hungry. Can you help?"'
          }
        },
        {
          img: 'assets/images/Basajaun/basajaun_2.svg',
          text: {
            basque: 'Basajaunek marmar egin eta buru goroldiotsu izugarria hazkatu zuen. Gero, poliki-poliki, hymen egin zuen.',
            georgian: 'ბასაჟაუნმა ჩაიდუდუნა და თავისი უზარმაზარი ხავსიანი თავი მოიქექა. მერე, ნელ-ნელა, გაიღიმა.',
            english: 'The Basajaun grumbled and scratched his enormous mossy head. Then, slowly, he smiled.'
          }
        },
        {
          img: 'assets/images/Basajaun/basajaun_3.svg',
          text: {
            basque: 'Bere armarrian sakon sartu eta haziak atera zituen — garia, artoa eta zekalea — mila uzta jasotzeko adina.',
            georgian: 'მან ღრმად ჩაყო ხელი თავის დიდ ლაბადაში და ამოიღო თესლები — ხორბალი, სიმინდი და ჭვავი — ათასი მოსავლისთვის საკმარისი.',
            english: 'He reached deep into his great coat and pulled out seeds — wheat, corn, and rye — enough for a thousand harvests.'
          }
        },
        {
          img: 'assets/images/Basajaun/basajaun_4.svg',
          text: {
            basque: '"Landatu hauek," esan zuen emeki, "eta ez ahaztu inoiz elikatzen zaituen basoa." Gero mjegunean desagertu zen.',
            georgian: '"დათესეთ ესენი," დაიგრიალა მან რბილად, "და არასოდეს დაივიწყოთ ტყე, რომელიც გაჭმევთ." შემდეგ ის ნისლში გაუჩინარდა.',
            english: '"Plant these," he rumbled softly, "and never forget the forest that feeds you." Then he vanished into the mist.'
          }
        }
      ]
    },
    {
      id: 2,
      category: 'basque',
      num: {
        basque: 'III. Ipuina',
        georgian: 'ზღაპარი III',
        english: 'Tale III'
      },
      title: {
        basque: 'Ilargiaren Negar Malkoak',
        georgian: 'მთვარის ცრემლები',
        english: "The Moon's Teardrops"
      },
      bg: 'assets/images/backgrounds/background_1.svg',
      ending: {
        basque: '"Munduko lore bakoitza Ilargiaren maitasun tanta gisa hasi zen."',
        georgian: '"სამყაროში ყოველი ყვავილი მთვარის სიყვარულის წვეთით დაიწყო."',
        english: '"Every flower in the world began as a drop of the Moon\'s love."'
      },
      beats: [
        {
          img: null,
          text: {
            basque: 'Gauero, Ilargiak azpiko mundu loari begiratzen zion eta izugarri bakarti sentitzen zen.',
            georgian: 'ყოველ ღამით მთვარე დაჰყურებდა მძინარე სამყაროს და თავს საშინლად, საშინლად მარტოსულად გრძნობდა.',
            english: 'Every night, the Moon looked down at the sleeping world below and felt terribly, terribly lonely.'
          }
        },
        {
          img: null,
          text: {
            basque: 'Haurrak barre egiten eta ohe beroetan loak hartzen ikusten zituen — eta zilarrezko malko bakarra erori zituen masailean behera.',
            georgian: 'ის უყურებდა, როგორ იცინოდნენ და იძინებდნენ თბილ ლოგინებში ბავშვები — და ლოყაზე ერთი ვერცხლისფერი ცრემლი ჩამოუგორდა.',
            english: 'She watched the children laugh and fall asleep in warm beds — and a single silver tear rolled down her cheek.'
          }
        },
        {
          img: null,
          text: {
            basque: 'Malkoa zeru ilunean zehar erori eta erori zen, lurrerantz erortzen zen heinean euri-tanta distiratsu bihurtuz.',
            georgian: 'ცრემლი ეცემოდა და ეცემოდა ბნელ ცაში და დედამიწისკენ დაშვებისას კაშკაშა წვიმის წვეთად იქცა.',
            english: 'The tear fell and fell through the dark sky, turning into a shining raindrop as it tumbled toward the earth.'
          }
        },
        {
          img: null,
          text: {
            basque: 'Lurra ukitu zuenean, lore txiki batek begiak ireki zituen lehen aldiz eta zerura begiratu zuen.',
            georgian: 'როდესაც ის მიწას შეეხო, პატარა ყვავილმა პირველად გაახილა თვალები და ცას ახედა.',
            english: 'When it touched the ground, a little flower opened its eyes for the very first time and looked up at the sky.'
          }
        },
        {
          img: null,
          text: {
            basque: '"Nor zara zu?" galdetu zuen loreak. "Ilargiaren maitasun zati bat naiz," esan zuen euri-tantak hymen batekin.',
            georgian: 'ვინ ხარ შენ? ჰკითხა ყვავილმა. მე მთვარის სიყვარულის ნაწილი ვარ, უპასუხა წვიმის წვეთმა ღიმილით.',
            english: '"Who are you?" asked the flower. "I am a piece of the Moon\'s love," said the raindrop with a smile.'
          }
        },
        {
          img: null,
          text: {
            basque: 'Geroztik gauero, Ilargiak pozik zegoen malko txiki bat egiten zuen negar — eta goizero lore berri bat loratzen zen.',
            georgian: 'ამის შემდეგ ყოველ ღამით მთვარე ერთ პატარა ბედნიერ ცრემლს ღვრიდა — და ყოველ დილით ახალი ყვავილი იშლებოდა.',
            english: 'Every night after that, the Moon cried one small happy tear — and every morning, a new flower bloomed.'
          }
        },
        {
          img: null,
          text: {
            basque: 'Eta horregatik dago mundua lorez beteta, eta horregatik begiratzen digu Ilargiak hain emeki.',
            georgian: 'და აი, ჩემო ძვირფასო ბავშვო, ამიტომაა სამყარო ყვავილებით სავსე — და ამიტომ შემოგვყურებს მთვარე ასე რბილად.',
            english: 'And that, dear child, is why the world is so full of flowers — and why the Moon always looks so softly at us.'
          }
        }
      ]
    },
    {
      id: 3,
      category: 'georgian',
      num: {
        basque: 'IV. Ipuina',
        georgian: 'ზღაპარი IV',
        english: 'Tale IV'
      },
      title: {
        basque: 'Orena eta Eguzkia',
        georgian: 'ირემი და მზე',
        english: 'The Deer and the Sun'
      },
      bg: 'assets/images/backgrounds/forest_1.svg',
      ending: {
        basque: '"Benetako laguntasuna ekaitz batek ere itzal ezin dezakeen argia da."',
        georgian: '"ნამდვილი მეგობრობა არის შუქი, რომელსაც ვერანაირი ქარიშხალი ვერ ჩააქრობს."',
        english: '"True friendship is a light that no storm can ever dim."'
      },
      beats: [
        {
          img: 'assets/images/backgrounds/forest_1.svg',
          text: {
            basque: 'Kaukasoko baso sakonetan, adar urreztatuak zituen orein dotore batek goizero ikusten zuen eguzkia ateratzen.',
            georgian: 'კავკასიის ღრმა ტყეებში, დიდებული ირემი ოქროს რქებით ყოველ დილით უყურებდა მზის ამოსვლას.',
            english: 'In the deep forests of the Caucasus, a majestic Deer with golden antlers watched the sun rise every morning.'
          }
        },
        {
          img: null,
          text: {
            basque: 'Eguzkiak oreina maite zuen eta izpi bereziki beroak bidaltzen zituen oreinak atsedena hartzen zuen soilgunera.',
            georgian: 'მზეს ძალიან უყვარდა ირემი და განსაკუთრებით თბილ სხივებს ჰფენდა იმ მინდორს, სადაც ირემი ისვენებდა.',
            english: 'The Sun loved the Deer and would shine extra warm rays upon the glade where the Deer rested.'
          }
        },
        {
          img: 'assets/images/backgrounds/forest_3.svg',
          text: {
            basque: 'Egun batean, ekaitz-hodei ilunek Eguzkia ezkutatu zuten, basoa hotz eta ilun utziz.',
            georgian: 'ერთ დღეს, ბნელმა საავდრო ღრუბლებმა დაფარეს მზე და ტყე ცივი და ბნელი დატოვეს.',
            english: 'One day, dark storm clouds hid the Sun, leaving the forest cold and dark.'
          }
        },
        {
          img: null,
          text: {
            basque: 'Oreina gailurrik gorenera igo eta dei egin zuen, bere adar urrezkoak argituz Eguzkia bueltan gidatzeko.',
            georgian: 'ირემი ყველაზე მაღალ მწვერვალზე ავიდა და დაუძახა, მისი ოქროს რქები ანათებდა, რათა მზისთვის გზა ეჩვენებინა.',
            english: 'The Deer climbed the highest peak and called out, his golden antlers glowing to guide the Sun back.'
          }
        },
        {
          img: 'assets/images/backgrounds/forest_4.svg',
          text: {
            basque: 'Argia ikusita, Eguzkiak hodeiak zeharkatu zituen eta lurra berotu zuen berriro.',
            georgian: 'შუქის დანახვაზე მზემ ღრუბლები გაარღვია და დედამიწა კვლავ გაათბო.',
            english: 'Seeing the light, the Sun broke through the clouds and warmed the land once more.'
          }
        }
      ]
    },
    {
      id: 4,
      category: 'georgian',
      num: {
        basque: 'V. Ipuina',
        georgian: 'ზღაპარი V',
        english: 'Tale V'
      },
      title: {
        basque: 'Urrezko Brossulia',
        georgian: 'ოქროს ბროწეული',
        english: 'The Golden Pomegranate'
      },
      bg: 'assets/images/backgrounds/background_1.svg',
      ending: {
        basque: '"Eskuzabaltasuna fruiturik gozoena da."',
        georgian: '"გულუხვობა ყველაზე ტკბილი ხილია."',
        english: '"Generosity is the sweetest fruit of all."'
      },
      beats: [
        {
          img: 'assets/images/backgrounds/background_1.svg',
          text: {
            basque: 'Ezkutuko lorategi batean, zuhaitz berezi bat hazten zen, Urrezko Brossuli bakarra ematen zuena.',
            georgian: 'დამალულ ბაღში იზრდებოდა გამორჩეული ხე, რომელზეც მხოლოდ ერთი ოქროს ბროწეული ასხია.',
            english: 'In a hidden garden, there grew a singular tree that bore a single Golden Pomegranate.'
          }
        },
        {
          img: null,
          text: {
            basque: 'Lorezain zahar batek zaintzen zuen, granada heldu eta nahi bat emango zuen gauaren zain.',
            georgian: 'მოხუცი მებაღე უვლიდა მას და ელოდა ღამეს, როდესაც ბროწეული დამწიფდებოდა და სურვილს შეასრულებდა.',
            english: 'An old gardener cared for it, waiting for the night the pomegranate would ripen and grant a wish.'
          }
        },
        {
          img: 'assets/images/backgrounds/forest_1.svg',
          text: {
            basque: 'Bidaiari gazte bat iritsi zen, lassatuta eta goseak, etxerik gabe.',
            georgian: 'ახალგაზრდა მოგზაური მოვიდა, დაღლილი და მშიერი, რომელსაც სახლი არ გააჩნდა.',
            english: 'A young traveler arrived, tired and hungry, with no home to call their own.'
          }
        },
        {
          img: null,
          text: {
            basque: 'Lorezainak Urrezko Brossulia kendu eta bidaiariarekin partekatu zuen.',
            georgian: 'მებაღემ მოწყვიტა ოქროს ბროწეული და მოგზაურს გაუყო.',
            english: 'The gardener plucked the Golden Pomegranate and shared it with the traveler.'
          }
        },
        {
          img: 'assets/images/backgrounds/forest_2.svg',
          text: {
            basque: 'Jaten zuten bitartean, haziak benetako urre bihurtu ziren, lorategiari oparotasuna eta berotasuna emanez.',
            georgian: 'ჭამისას თესლები ნამდვილ ოქროდ იქცა, რამაც ბაღს კეთილდღეობა და სითბო მოუტანა.',
            english: 'As they ate, the seeds turned into real gold, bringing prosperity and warmth to the garden.'
          }
        }
      ]
    },
    {
      id: 5,
      category: 'georgian',
      num: {
        basque: 'VI. Ipuina',
        georgian: 'ზღაპარი VI',
        english: 'Tale VI'
      },
      title: {
        basque: 'Tsikarilaren Izarra',
        georgian: 'ციკარილას ვარსკვლავი',
        english: 'The Tsikarila Star'
      },
      bg: 'assets/images/backgrounds/forest_2.svg',
      ending: {
        basque: '"Izarrik txikienak ere etxera gida gaitzake."',
        georgian: '"ყველაზე პატარა ვარსკვლავსაც კი შეუძლია სახლამდე გზა გაგვინათოს."',
        english: '"Even the smallest star can guide us home."'
      },
      beats: [
        {
          img: 'assets/images/backgrounds/forest_2.svg',
          text: {
            basque: 'Tsikarila Georgiako mendi berdeetan bizi zen behia orban dun berezi bat zen.',
            georgian: 'ციკარილა იყო ჯადოსნური აჭრელებული ძროხა, რომელიც საქართველო მწვანე მთებში ცხოვრობდა.',
            english: 'Tsikarila was a magical spotted cow who lived high in the green mountains of Georgia.'
          }
        },
        {
          img: null,
          text: {
            basque: 'Zilarrezko izar txiki bat zuen otsapean, zoriontsu zegoen bakoitzean distira egiten zuena.',
            georgian: 'მას შუბლზე პატარა ვერცხლისფერი ვარსკვლავი ჰქონდა, რომელიც ყოველთვის ციმციმებდა, როცა ის ბედნიერი იყო.',
            english: 'She had a tiny silver star on her forehead that sparkled whenever she was happy.'
          }
        },
        {
          img: 'assets/images/backgrounds/forest_3.svg',
          text: {
            basque: 'Galdutako ardiak herrira itzultzen laguntzen zituen izarren pean.',
            georgian: 'მას დაკარგული ცხვრები სოფელში მიჰყავდა ვარსკვლავებით მოჭედილი ცის ქვეშ.',
            english: 'She guided the lost sheep back to the village under the starry sky.'
          }
        },
        {
          img: null,
          text: {
            basque: 'Gau batean, mjegun lodia sartu zen, bidea ikustea ezinezkoa eginez.',
            georgian: 'ერთ ღამეს სქელი ნისლი ჩამოწვა და გზის დანახვა შეუძლებელი გახდა.',
            english: 'One night, a dense fog rolled in, making it impossible to see the path.'
          }
        },
        {
          img: 'assets/images/backgrounds/forest_1.svg',
          text: {
            basque: 'Tsikarilak marru leun bat egin zuen, eta bere otsapeko izarrak itsasargi txiki bat bezala distiratu zuen, denak etxera gidatuz.',
            georgian: 'ციკარილამ რბილად დაიბღავლა და მისმა შუბლის ვარსკვლავმა პატარა შუქურასავით გაანათა, რითაც ყველას გზა უჩვენა სახლისკენ.',
            english: 'Tsikarila let out a soft moo, and her forehead star shone like a small lighthouse, guiding everyone home.'
          }
        }
      ]
    }
  ];

  // ---- STATE ----
  let currentTale = null;
  let menuOpen = false;
  let menuLocked = false;
  let currentLang = localStorage.getItem('lang') || 'english';

  // ---- DOM ELEMENTS ----
  const canvas = document.getElementById('starsCanvas');
  const ctx = canvas.getContext('2d');
  const welcomeScreen = document.getElementById('welcome-screen');
  const taleReader = document.getElementById('tale-reader');
  const menuToggle = document.getElementById('menu-toggle');
  const menuPanel = document.getElementById('menu-panel');
  const backToTop = document.getElementById('back-to-top');
  const fireflyEl = document.getElementById('firefly-container');
  const audio = document.getElementById('bg-audio');
  const audioToggle = document.getElementById('audio-toggle');
  const iconOff = document.getElementById('audio-icon-off');
  const iconOn = document.getElementById('audio-icon-on');
  const bookMenu = document.getElementById('book-menu');
  const themeToggle = document.getElementById('theme-toggle');
  const themeIconSun = document.getElementById('theme-icon-sun');
  const themeIconMoon = document.getElementById('theme-icon-moon');
  const langToggle = document.getElementById('lang-toggle');
  const langDropdown = document.getElementById('lang-dropdown');

  // ---- STARFIELD ENGINE ----
  let stars = [];
  const STAR_COUNT = 180;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    generateStars();
  }

  function generateStars() {
    stars = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.4,
      a: Math.random(),
      s: Math.random() * 0.012 + 0.004
    }));
  }

  // Optimized: Draw stars grouped by rounded opacity steps to minimize state/path changes
  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const opacityGroups = {};

    stars.forEach(s => {
      s.a += s.s;
      if (s.a <= 0 || s.a >= 1) {
        s.s *= -1;
      }
      s.a = Math.max(0, Math.min(1, s.a));

      // Group by rounded opacity (0.0 to 1.0 in steps of 0.1)
      const opKey = Math.round(s.a * 10) / 10;
      if (!opacityGroups[opKey]) {
        opacityGroups[opKey] = [];
      }
      opacityGroups[opKey].push(s);
    });

    for (const [opacity, group] of Object.entries(opacityGroups)) {
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.beginPath();
      group.forEach(s => {
        ctx.moveTo(s.x + s.r, s.y);
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      });
      ctx.fill();
    }

    requestAnimationFrame(drawStars);
  }

  window.addEventListener('resize', resize, { passive: true });
  resize();
  drawStars();

  // ---- AUDIO CONTROLLER ----
  let audioPlaying = false;
  audio.volume = 0.15;

  audioToggle.addEventListener('click', () => {
    audioPlaying = !audioPlaying;
    if (audioPlaying) {
      audio.play().catch(() => {
        // Handle browser autoplay restriction gracefully
        audioPlaying = false;
        iconOff.style.display = '';
        iconOn.style.display = 'none';
      });
      iconOff.style.display = 'none';
      iconOn.style.display = '';
    } else {
      audio.pause();
      iconOff.style.display = '';
      iconOn.style.display = 'none';
    }
  });

  // ---- THEME CONTROLLER ----
  function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'night';
    if (savedTheme === 'day') {
      document.documentElement.classList.add('day-mode');
      themeIconSun.style.display = 'none';
      themeIconMoon.style.display = '';
    } else {
      document.documentElement.classList.remove('day-mode');
      themeIconSun.style.display = '';
      themeIconMoon.style.display = 'none';
    }
  }

  themeToggle.addEventListener('click', () => {
    const isDay = document.documentElement.classList.toggle('day-mode');
    if (isDay) {
      localStorage.setItem('theme', 'day');
      themeIconSun.style.display = 'none';
      themeIconMoon.style.display = '';
    } else {
      localStorage.setItem('theme', 'night');
      themeIconSun.style.display = '';
      themeIconMoon.style.display = 'none';
    }
  });

  initTheme();

  // ---- SIDE TALES MENU & SUBMENUS ----
  const secBtnBasque = document.getElementById('sec-btn-basque');
  const secBtnGeorgian = document.getElementById('sec-btn-georgian');
  const submenuBasque = document.getElementById('submenu-basque');
  const submenuGeorgian = document.getElementById('submenu-georgian');

  function openSubmenu(type) {
    if (type === 'basque') {
      submenuBasque.classList.add('open');
      secBtnBasque.classList.add('active');
      submenuGeorgian.classList.remove('open');
      secBtnGeorgian.classList.remove('active');
    } else {
      submenuGeorgian.classList.add('open');
      secBtnGeorgian.classList.add('active');
      submenuBasque.classList.remove('open');
      secBtnBasque.classList.remove('active');
    }
  }

  function closeAllSubmenus() {
    submenuBasque.classList.remove('open');
    submenuGeorgian.classList.remove('open');
    secBtnBasque.classList.remove('active');
    secBtnGeorgian.classList.remove('active');
  }

  secBtnBasque.addEventListener('mouseenter', () => openSubmenu('basque'));
  secBtnGeorgian.addEventListener('mouseenter', () => openSubmenu('georgian'));

  secBtnBasque.addEventListener('click', (e) => {
    e.stopPropagation();
    if (submenuBasque.classList.contains('open')) {
      closeAllSubmenus();
    } else {
      openSubmenu('basque');
    }
  });

  secBtnGeorgian.addEventListener('click', (e) => {
    e.stopPropagation();
    if (submenuGeorgian.classList.contains('open')) {
      closeAllSubmenus();
    } else {
      openSubmenu('georgian');
    }
  });

  // Toggle click behavior of main menu button (for mobile and accessibility)
  menuToggle.addEventListener('click', (e) => {
    if (menuLocked) return;
    e.stopPropagation();
    menuOpen = !menuOpen;
    menuPanel.classList.toggle('open', menuOpen);
    if (!menuOpen) {
      closeAllSubmenus();
    }
  });

  // Open on hover (mouse entering bookMenu area)
  let menuCloseTimeout = null;
  bookMenu.addEventListener('mouseenter', () => {
    if (menuLocked) return;
    if (menuCloseTimeout) {
      clearTimeout(menuCloseTimeout);
      menuCloseTimeout = null;
    }
    menuOpen = true;
    menuPanel.classList.add('open');
  });

  // Close when mouse leaves bookMenu area (with 300ms hover-tunnel delay)
  bookMenu.addEventListener('mouseleave', () => {
    if (menuLocked) return;
    if (menuCloseTimeout) {
      clearTimeout(menuCloseTimeout);
    }
    menuCloseTimeout = setTimeout(() => {
      menuOpen = false;
      menuPanel.classList.remove('open');
      closeAllSubmenus();
      menuCloseTimeout = null;
    }, 300);
  });

  document.addEventListener('click', e => {
    if (!bookMenu.contains(e.target)) {
      menuOpen = false;
      menuPanel.classList.remove('open');
      closeAllSubmenus();
    }
  });

  // ---- TALE SELECTION ----
  document.querySelectorAll('.tale-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      loadTale(parseInt(btn.dataset.tale, 10));
      menuOpen = false;
      menuPanel.classList.remove('open');
      closeAllSubmenus();
    });
  });

  // ---- OBSERVER (Scroll trigger animation) ----
  let scrollObserver = null;

  function setupObserver() {
    if (scrollObserver) {
      scrollObserver.disconnect();
    }

    scrollObserver = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          scrollObserver.unobserve(e.target);
        }
      });
    }, { rootMargin: '-8% 0px' });

    document.querySelectorAll('.beat-section').forEach(s => scrollObserver.observe(s));
  }

  function lockMenu(locked) {
    // Menu is never locked, keeping it always available when scrolling down
    menuLocked = false;
    menuToggle.classList.remove('locked');
  }

  // ---- LOAD TALE ----
  function loadTale(idx) {
    currentTale = idx;
    const tale = TALES[idx];

    document.querySelectorAll('.tale-btn').forEach((b, i) => b.classList.toggle('active', i === idx));

    // Hide welcome screen via class to support smooth CSS animation state
    welcomeScreen.classList.add('hidden');
    taleReader.classList.add('active');
    taleReader.innerHTML = '';
    lockMenu(false); // Do not lock menu
    window.scrollTo({ top: 0, behavior: 'instant' });
    backToTop.classList.remove('visible');

    // Header Element
    const h = document.createElement('div');
    h.className = 'tale-header';
    if (tale.bg) {
      h.style.backgroundImage = `linear-gradient(var(--welcome-blend-start), var(--welcome-blend-end)), url('${tale.bg}')`;
      h.style.backgroundSize = 'cover';
      h.style.backgroundPosition = 'center center';
      h.style.backgroundRepeat = 'no-repeat';
    }

    const activeNum = tale.num[currentLang] || tale.num.english;
    const activeTitle = tale.title[currentLang] || tale.title.english;
    let activeSub = '';
    if (currentLang === 'english') {
      activeSub = tale.title[tale.category] || '';
    } else {
      activeSub = tale.title.english || '';
    }

    h.innerHTML = `
      <p class="tale-header-num">${activeNum}</p>
      <h2 class="tale-header-title">${activeTitle}</h2>
      <p class="tale-header-sub">${activeSub}</p>
    `;
    taleReader.appendChild(h);

    // Beats Elements
    tale.beats.forEach(beat => {
      const s = document.createElement('section');
      s.className = 'beat-section';
      const textVal = beat.text[currentLang] || beat.text.english;
      if (beat.img) {
        s.innerHTML = `
          <div class="beat-illustration">
            <img src="${beat.img}" alt="Illustration" loading="lazy">
          </div>
          <div class="beat-text">
            <p>${textVal}</p>
          </div>
        `;
      } else {
        s.innerHTML = `
          <div class="beat-text">
            <p>${textVal}</p>
          </div>
        `;
      }
      taleReader.appendChild(s);
    });

    // Ending with clickable rating stars
    const activeEnding = tale.ending[currentLang] || tale.ending.english;
    const end = document.createElement('div');
    end.className = 'tale-end';
    
    // Localized star labels
    const t = TRANSLATIONS[currentLang];
    end.innerHTML = `
      <div class="tale-end-stars">
        <span class="tale-end-star" role="button" aria-label="${t.rateStar1}" data-star="0">★</span>
        <span class="tale-end-star" role="button" aria-label="${t.rateStar2}" data-star="1">★</span>
        <span class="tale-end-star" role="button" aria-label="${t.rateStar3}" data-star="2">★</span>
        <span class="tale-end-star" role="button" aria-label="${t.rateStar4}" data-star="3">★</span>
        <span class="tale-end-star" role="button" aria-label="${t.rateStar5}" data-star="4">★</span>
      </div>
      <p class="tale-end-text">${activeEnding}</p>
    `;
    taleReader.appendChild(end);

    // Star click interaction logic
    end.querySelectorAll('.tale-end-star').forEach(star => {
      star.addEventListener('click', () => {
        const val = parseInt(star.dataset.star, 10);
        end.querySelectorAll('.tale-end-star').forEach((s, i) => {
          s.classList.toggle('lit', i <= val);
        });
      });
    });

    setupObserver();
  }

  // ---- BACK TO TOP ----
  backToTop.addEventListener('click', () => {
    taleReader.classList.remove('active');
    taleReader.innerHTML = '';
    welcomeScreen.classList.remove('hidden');
    backToTop.classList.remove('visible');
    lockMenu(false);
    currentTale = null;
    document.querySelectorAll('.tale-btn').forEach(b => b.classList.remove('active'));
    window.scrollTo({ top: 0, behavior: 'instant' });
  });

  // ---- FIREFLY CONTROLLER: spins while scrolling, wanders when idle ----
  let ffCurX = 0, ffCurY = 0, ffCurRot = 0;
  let lastScrollY = window.scrollY;
  let idleTimer = 0;
  let lastFrameTime = 0;

  let wanderAngle = Math.random() * Math.PI * 2;
  let wanderX = window.innerWidth * 0.5;
  let wanderY = window.innerHeight * 0.5;
  let scrollSpeed = 0;       // current scroll velocity (decays over time)

  // Spiral pattern variables (randomized on scroll triggers)
  let spiralDirection = 1;      // 1 or -1 for clockwise or counter-clockwise
  let spiralMaxRadius = 150;    // maximum radius of the widening spiral
  let spiralExpansionRate = 1;  // rate of radius growth
  let spiralVerticalRange = 100;// how far up/down it travels
  let spiralVerticalFreq = 0.5; // frequency of up/down wave
  let spiralProgress = 0;       // accumulates scroll progress
  let spiralBlend = 0;          // smoothly interpolates between wandering and spiraling

  function randomizeSpiralPattern() {
    spiralDirection = Math.random() < 0.5 ? 1 : -1;
    spiralMaxRadius = 120 + Math.random() * 160;     // 120px to 280px wide
    spiralExpansionRate = 0.6 + Math.random() * 1.4; // controls growth steepness
    spiralVerticalRange = 100 + Math.random() * 120; // 100px to 220px up/down travel
    spiralVerticalFreq = 0.4 + Math.random() * 0.8;  // frequency of vertical cycles
    spiralProgress = 0;
  }

  // Initialize first spiral pattern
  randomizeSpiralPattern();

  // Combined passive scroll listener for optimization
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    const d = currentScroll - lastScrollY;
    lastScrollY = currentScroll;

    // If transitioning from idle, randomize the spiral pattern!
    if (idleTimer > 0.3) {
      randomizeSpiralPattern();
    }
    idleTimer = 0;

    // Accumulate scroll into spin speed
    scrollSpeed += d * 0.08;

    // Check bottom boundary inside tales
    if (currentTale !== null) {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const atBottom = currentScroll >= maxScroll - 60;
      if (atBottom) {
        lockMenu(false);
        backToTop.classList.add('visible');
      }
    }
  }, { passive: true });

  // Update loop using high precision timestamp parameter
  function updateFirefly(timestamp) {
    if (!lastFrameTime) {
      lastFrameTime = timestamp;
    }
    const dt = (timestamp - lastFrameTime) / 1000;
    lastFrameTime = timestamp;

    idleTimer += dt;

    const W = window.innerWidth;
    const H = window.innerHeight;
    const t = timestamp * 0.001;

    // Decay scroll speed smoothly
    scrollSpeed *= 0.95;

    // Accumulate spiral progress based on scroll speed
    spiralProgress += Math.abs(scrollSpeed) * dt * 0.8;

    // Smoothly blend between wandering and spiraling
    if (idleTimer < 0.3) {
      spiralBlend += (1 - spiralBlend) * 0.1;
    } else {
      spiralBlend += (0 - spiralBlend) * 0.05;
    }

    // Base wander position (random walk when idle)
    if (idleTimer > 0.3) {
      wanderAngle += ((Math.random() - 0.5) * 2.5) * dt;
      const speed = 70 * dt;
      wanderX += Math.cos(wanderAngle) * speed;
      wanderY += Math.sin(wanderAngle) * speed;

      const margin = 120;
      if (wanderX < margin || wanderX > W - margin) {
        wanderAngle = Math.PI - wanderAngle;
      }
      if (wanderY < margin || wanderY > H - margin) {
        wanderAngle = -wanderAngle;
      }
      wanderX = Math.max(margin, Math.min(W - margin, wanderX));
      wanderY = Math.max(margin, Math.min(H - margin, wanderY));
    }

    // --- SPIRAL MATHEMATICS ---
    // Angle increases with spiral progress
    const theta = spiralProgress * spiralDirection;

    // Radius starts at 0 (narrower) and expands up to max (wider) as progress accumulates
    const radius = Math.min(spiralMaxRadius, spiralProgress * spiralExpansionRate * 12);

    // X and Y offsets for the spiral:
    // math.cos/sin creates circular orbit; multiplying Y by 0.4 creates an isometric/flattened perspective
    const spiralX = Math.cos(theta) * radius;
    // Goes up and down: sin(theta) * radius * 0.4 is the circular component,
    // and sin(theta * freq) * verticalRange causes the up-and-down wave movement.
    const spiralY = Math.sin(theta) * radius * 0.4 + Math.sin(theta * spiralVerticalFreq) * spiralVerticalRange;

    // Target position combines wander center + blended spiral offset
    const targetX = wanderX - W / 2 + spiralX * spiralBlend;
    const targetY = wanderY - H / 2 + spiralY * spiralBlend;

    // Smooth linear interpolation (lerp)
    const lerpFactor = 0.05;
    ffCurX += (targetX - ffCurX) * lerpFactor;
    ffCurY += (targetY - ffCurY) * lerpFactor;

    // Rotation follows movement direction + spin
    const dx = targetX - ffCurX;
    const dy = targetY - ffCurY;
    let dirRot = 0;
    if (Math.hypot(dx, dy) > 1) {
      dirRot = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
    }

    // Rotation incorporates the spiral spin
    const spinRot = theta * (180 / Math.PI) * 0.3 * spiralBlend;
    let targetRot = dirRot + spinRot;

    let rotDiff = targetRot - ffCurRot;
    while (rotDiff > 180) {
      rotDiff -= 360;
    }
    while (rotDiff < -180) {
      rotDiff += 360;
    }
    ffCurRot += rotDiff * 0.08;

    const wobble = Math.sin(t * 1.4) * 3;
    fireflyEl.style.transform = `translate(calc(-50% + ${ffCurX}px), calc(-50% + ${ffCurY}px)) rotate(${ffCurRot + wobble}deg)`;

    requestAnimationFrame(updateFirefly);
  }

  // ---- LANGUAGE SELECTOR CONTROLLER ----
  const TRANSLATIONS = {
    basque: {
      welcomeEyebrow: '✦ Ipurtargia ✦',
      welcomeTitle: 'Gauko ipuinak',
      welcomeSub: 'Aukeratu ipuin bat eta jarraitu argiari...',
      scrollHint: '▾ korritu ▾',
      menuBasqueTitle: 'Euskal ipuinak',
      menuGeorgianTitle: 'Georgiar ipuinak',
      submenuBasqueLabel: '✦ Euskal Ipuinak',
      submenuGeorgianLabel: '✦ Georgiar Ipuinak',
      backToTop: 'Itzuli gora',
      rateStar1: 'Baloratu izar 1ekin',
      rateStar2: 'Baloratu 2 izarrekin',
      rateStar3: 'Baloratu 3 izarrekin',
      rateStar4: 'Baloratu 4 izarrekin',
      rateStar5: 'Baloratu 5 izarrekin'
    },
    georgian: {
      welcomeEyebrow: '✦ ციცინათელა ✦',
      welcomeTitle: 'ღამის ზღაპრები',
      welcomeSub: 'აირჩიეთ ზღაპარი და მიჰყევით სინათლეს...',
      scrollHint: '▾ ჩამოსქროლეთ ▾',
      menuBasqueTitle: 'ბასკური ზღაპრები',
      menuGeorgianTitle: 'ქართული ზღაპრები',
      submenuBasqueLabel: '✦ ბასკური ზღაპრები',
      submenuGeorgianLabel: '✦ ქართული ზღაპრები',
      backToTop: 'ზევით დაბრუნება',
      rateStar1: 'შეაფასეთ 1 ვარსკვლავით',
      rateStar2: 'შეაფასეთ 2 ვარსკვლავით',
      rateStar3: 'შეაფასეთ 3 ვარსკვლავით',
      rateStar4: 'შეაფასეთ 4 ვარსკვლავით',
      rateStar5: 'შეაფასეთ 5 ვარსკვლავით'
    },
    english: {
      welcomeEyebrow: '✦ Ipurtargia ✦',
      welcomeTitle: 'Night tales',
      welcomeSub: 'Choose a tale and follow the light...',
      scrollHint: '▾ scroll ▾',
      menuBasqueTitle: 'Basque night tales',
      menuGeorgianTitle: 'Georgian night tales',
      submenuBasqueLabel: '✦ Basque Tales',
      submenuGeorgianLabel: '✦ Georgian Tales',
      backToTop: 'Back to top',
      rateStar1: 'Rate 1 star',
      rateStar2: 'Rate 2 stars',
      rateStar3: 'Rate 3 stars',
      rateStar4: 'Rate 4 stars',
      rateStar5: 'Rate 5 stars'
    }
  };

  function translateUI() {
    document.documentElement.setAttribute('lang', currentLang === 'basque' ? 'eu' : currentLang === 'georgian' ? 'ka' : 'en');
    
    const t = TRANSLATIONS[currentLang];
    
    // Update welcome screen
    const eyebrow = document.querySelector('#welcome-screen .welcome-eyebrow');
    if (eyebrow) eyebrow.innerText = t.welcomeEyebrow;
    
    const title = document.getElementById('welcome-title');
    if (title) title.innerText = t.welcomeTitle;
    
    const sub = document.querySelector('#welcome-screen .welcome-sub');
    if (sub) sub.innerText = t.welcomeSub;
    
    const hint = document.querySelector('#welcome-screen .scroll-hint');
    if (hint) hint.innerText = t.scrollHint;
    
    // Update Menu headers
    const secBasque = document.querySelector('#sec-btn-basque .section-title');
    if (secBasque) secBasque.innerText = t.menuBasqueTitle;
    
    const secGeorgian = document.querySelector('#sec-btn-georgian .section-title');
    if (secGeorgian) secGeorgian.innerText = t.menuGeorgianTitle;
    
    const labelBasque = document.querySelector('#submenu-basque .menu-label');
    if (labelBasque) labelBasque.innerText = t.submenuBasqueLabel;
    
    const labelGeorgian = document.querySelector('#submenu-georgian .menu-label');
    if (labelGeorgian) labelGeorgian.innerText = t.submenuGeorgianLabel;
    
    // Update back-to-top button
    const backBtnText = document.getElementById('back-to-top');
    if (backBtnText) {
      const svg = backBtnText.querySelector('svg');
      backBtnText.innerHTML = '';
      if (svg) backBtnText.appendChild(svg);
      backBtnText.appendChild(document.createTextNode(' ' + t.backToTop));
    }
    
    // Update tale selection buttons inside submenus
    document.querySelectorAll('.tale-btn').forEach(btn => {
      const idx = parseInt(btn.dataset.tale, 10);
      const tale = TALES[idx];
      if (tale) {
        const spanPrimary = btn.querySelector('.tale-btn-basque');
        const spanSecondary = btn.querySelector('.tale-btn-en');
        
        if (spanPrimary) {
          spanPrimary.innerText = tale.title[currentLang] || tale.title.english;
        }
        if (spanSecondary) {
          if (currentLang === 'english') {
            spanSecondary.innerText = tale.title[tale.category] || tale.title.english;
          } else {
            spanSecondary.innerText = tale.title.english;
          }
        }
      }
    });

    // Update active dropdown item highlight
    document.querySelectorAll('.lang-option').forEach(opt => {
      opt.classList.toggle('active', opt.dataset.lang === currentLang);
    });

    // Translate open tale reader content in-place without scrolling or resetting!
    if (currentTale !== null) {
      const tale = TALES[currentTale];
      
      const taleNum = document.querySelector('.tale-header-num');
      if (taleNum) taleNum.innerText = tale.num[currentLang] || tale.num.english;
      
      const taleTitle = document.querySelector('.tale-header-title');
      if (taleTitle) taleTitle.innerText = tale.title[currentLang] || tale.title.english;
      
      const taleSub = document.querySelector('.tale-header-sub');
      if (taleSub) {
        if (currentLang === 'english') {
          taleSub.innerText = tale.title[tale.category] || '';
        } else {
          taleSub.innerText = tale.title.english || '';
        }
      }
      
      const beatsList = document.querySelectorAll('.beat-section');
      beatsList.forEach((sec, i) => {
        if (tale.beats[i]) {
          const p = sec.querySelector('.beat-text p');
          if (p) {
            p.innerText = tale.beats[i].text[currentLang] || tale.beats[i].text.english;
          }
        }
      });
      
      const endText = document.querySelector('.tale-end-text');
      if (endText) endText.innerText = tale.ending[currentLang] || tale.ending.english;
    }
  }

  // Language Picker dropdown handlers
  langToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle('open');
  });

  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', (e) => {
      currentLang = btn.dataset.lang;
      localStorage.setItem('lang', currentLang);
      translateUI();
      langDropdown.classList.remove('open');
    });
  });

  document.addEventListener('click', (e) => {
    if (langDropdown && !langDropdown.contains(e.target) && e.target !== langToggle) {
      langDropdown.classList.remove('open');
    }
  });

  // Init language UI
  translateUI();

  // Start the firefly update loop
  requestAnimationFrame(updateFirefly);

})();
