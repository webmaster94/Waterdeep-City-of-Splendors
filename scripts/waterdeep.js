var cityBuildings = [
	{ name:"Castle Waterdeep", color:"#58ACFA", x:1781, y:4238, txt:"<p>Thick-walled stronghold that broods over Castle Ward from the flanks of <strong><em>Mount Waterdeep</em></strong>. Pennants and banners are often hung and flown from its battlements to signal the arrival of diplomats or the commencement of ceremonies.</p>", ref:"C76"},
	{ name:"Piergeiron's Palace", color:"#58ACFA", x:1136, y:3918, txt:"<p>White marble Palace and main office location for many city officials, the majority of which are dedicated to the administration of city services, such as the Watch, the Guard, city clerks, and the Loyal Order of Street Laborers. The ruler of the city - the Open Lord of Waterdeep - resides and works here.</p>", ref:"C75"},
	{ name:"Seaseyes Tower", color:"#58ACFA", x:338, y:2172, txt:"<p>City building</p>", ref:"$71"},
	{ name:"West Gate", color:"#58ACFA", x:420, y:1759, txt:"<p>City building</p>", ref:"$72"},
	{ name:"Seawatch Tower", color:"#58ACFA", x:538, y:1429, txt:"<p>City building</p>", ref:"$73"},
	{ name:"North Tower", color:"#58ACFA", x:1020, y:375, txt:"<p>City building (The Trolltower)</p>", ref:"$74"},
	{ name:"Trolltower", color:"#58ACFA", x:1020, y:375, txt:"<p>City building</p>", ref:"$74"},
	{ name:"Armory", color:"#58ACFA", x:1134, y:488, txt:"<p>City building</p>", ref:"$75"},
	{ name:"Trollfort", color:"#58ACFA", x:824, y:221, txt:"<p>City building</p>", ref:"$79"},
	{ name:"Guard Barracks #1", color:"#58ACFA", x:2125, y:965, txt:"<p>City building</p>", ref:"N1"},
	{ name:"North Gate", color:"#58ACFA", x:2156, y:559, txt:"<p>City building</p>", ref:"N78"},
	{ name:"Farwatch Tower", color:"#58ACFA", x:2743, y:1177, txt:"<p>City building</p>", ref:"N79"},
	{ name:"Endcliff Tower", color:"#58ACFA", x:2984, y:2202, txt:"<p>City building</p>", ref:"N80"},
	{ name:"Upper Towers", color:"#58ACFA", x:2079, y:911, txt:"<p>City building</p>", ref:"N82"},
	{ name:"Palace Paddocks", color:"#58ACFA", x:1088, y:3709, txt:"<p>City building</p>", ref:"C16"},
	{ name:"Palace Stables", color:"#58ACFA", x:1079, y:3772, txt:"<p>City building</p>", ref:"C17"},
	{ name:"Guard Barracks #2", color:"#58ACFA", x:1127, y:3768, txt:"<p>City building</p>", ref:"C19"},
	{ name:"Guard Barracks #3", color:"#58ACFA", x:1131, y:3675, txt:"<p>City building</p>", ref:"C19"},
	{ name:"Bell Tower", color:"#58ACFA", x:1985, y:4317, txt:"<p>City building</p>", ref:"C46"},
	{ name:"Guard Smithy", color:"#58ACFA", x:2177, y:4333, txt:"<p>City building</p>", ref:"C47"},
	{ name:"Peaktop Aerie", color:"#58ACFA", x:933, y:4021, txt:"<p>City building</p>", ref:"C67"},
	{ name:"Watching Tower #1", color:"#58ACFA", x:1024, y:3805, txt:"<p>City building</p>", ref:"C68"},
	{ name:"Watching Tower #2", color:"#58ACFA", x:497, y:4952, txt:"<p>City building</p>", ref:"C69"},
	{ name:"Ahghairon's Tower", color:"#58ACFA", x:1265, y:3980, txt:"<p>City building</p>", ref:"C79"},
	{ name:"River Gate", color:"#58ACFA", x:2944, y:4398, txt:"<p>City building</p>", ref:"T48"},
	{ name:"Watchway Tower", color:"#58ACFA", x:2990, y:3098, txt:"<p>City building</p>", ref:"CD11"},
	{ name:"Guard Tower", color:"#58ACFA", x:2849, y:4034, txt:"<p>City building</p>", ref:"CD12"},
	{ name:"Beacon Tower", color:"#58ACFA", x:2813, y:2950, txt:"<p>City building</p>", ref:"CD13"},
	{ name:"Guard Barracks #4", color:"#58ACFA", x:2802, y:6188, txt:"<p>City building</p>", ref:"D56"},
	{ name:"Cookhouse Hall", color:"#58ACFA", x:2825, y:6185, txt:"<p>City building</p>", ref:"D57"},
	{ name:"Watch Guardpost", color:"#58ACFA", x:2654, y:5286, txt:"<p>City building</p>", ref:"S36"},
	{ name:"South Gate", color:"#58ACFA", x:3041, y:5994, txt:"<p>City building</p>", ref:"S52"},
	{ name:"East Torch Tower", color:"#58ACFA", x:2884, y:6210, txt:"<p>City building</p>", ref:"S53"},
	{ name:"Harborwatch Tower", color:"#58ACFA", x:540, y:5198, txt:"<p>City building</p>", ref:"H1"},
	{ name:"Smugglers' Bane Tower", color:"#58ACFA", x:365, y:5852, txt:"<p>City building</p>", ref:"H2"},
	{ name:"Outer Fort", color:"#58ACFA", x:796, y:6348, txt:"<p>City building</p>", ref:"H3"},
	{ name:"Inner Fort", color:"#58ACFA", x:2382, y:6636, txt:"<p>City building</p>", ref:"H4"},
	{ name:"Deepwater Beacon", color:"#58ACFA", x:3078, y:6644, txt:"<p>Underwater lighthouse at the edge of Umberlee's Cache, lit by a magical light which guides the merfolk patrols and keeps the sea wraiths confined within the caverns below.</p>", ref:"H7"},
	{ name:"Troll Gate", color:"#58ACFA", x:825, y:177, txt:"<p>City building</p>", ref:""},
	{ name:"The God Catcher", color:"#58ACFA", x:1576, y:2402, txt:"<p>One of the eight enormous statues called the Walking Statues of Waterdeep, scattered throughout Waterdeep to defend the city in times of great peril. This is perhaps the most famous walking statue in the city, thanks to its dramatic pose : a well-muscled but impassive male human with a sphere of stone floating above its right hand raised skyward.</p>", ref:""},
	{ name:"The Griffon", color:"#58ACFA", x:987, y:4106, txt:"<p>The walking statue called the Griffon is shaped like the beast for which it is named. Though it stands on all four legs, its back is fully twenty feet off the ground, making it a mount fit for a storm giant. Although it has shown itself to be capable of flight, with the granite feathers of its wings spreading like a bird's, the Griffon now merely stands in a regal pose near Peaktop Aerie atop Mount Waterdeep, looking to the southeast over the Dock Ward. Newcomers sometimes assume it to be a monument to Waterdeep's Griffon Cavalry, but Waterdavians know better.</p>", ref:""},
	{ name:"The Sahuagin Humbled", color:"#58ACFA", x:586, y:2451, txt:"<p>One of the eight enormous statues called the Walking Statues of Waterdeep, scattered throughout Waterdeep to defend the city in times of great peril. For years, the only visible walking statue of Waterdeep.</p>", ref:""},
	{ name:"The Great Drunkard", color:"#58ACFA", x:1850, y:2954, txt:"<p>One of the eight enormous statues called the Walking Statues of Waterdeep, scattered throughout Waterdeep to defend the city in times of great peril. The unconscious pose of the statue and the tavern in its lap made the name of the Great Drunkard a natural fit.</p>", ref:""},
	{ name:"The Lady Dreaming", color:"#58ACFA", x:950, y:3086, txt:"<p>One of the eight enormous statues called the Walking Statues of Waterdeep, scattered throughout Waterdeep to defend the city in times of great peril. This statue has the appearance of a titanic sculpture of a noble lady asleep in her garden.</p>", ref:""},
	{ name:"The Honorable Knight", color:"#58ACFA", x:2349, y:4694, txt:"<p>One of the eight enormous statues called the Walking Statues of Waterdeep, scattered throughout Waterdeep to defend the city in times of great peril. The Honorable Knight is a statue of a male warrior in plate armor with a shield and a longsword.</p>", ref:""},
	{ name:"The Hawk Man", color:"#58ACFA", x:1774, y:3795, txt:"<p>One of the eight enormous statues called the Walking Statues of Waterdeep, scattered throughout Waterdeep to defend the city in times of great peril. This statue looks like a winged, hawk-headed being, and thus locals call it the Hawk Man.</p>", ref:""},
	{ name:"The Swordmaiden", color:"#58ACFA", x:2626, y:2176, txt:"<p>One of the eight enormous statues called the Walking Statues of Waterdeep, scattered throughout Waterdeep to defend the city in times of great peril. This statue appears virtually identical to the Honorable Knight, except for its female form and open-faced helm.</p>", ref:""},
];

var innsTaverns = [
	{ name:"Sated Satyr", color:"#FF0000", x:1040, y:466, txt:"<p>Tavern</p>", ref:"$1"},
	{ name:"Wyvern's Rest", color:"#FF0000", x:844, y:733, txt:"<p>Inn. Mercenaries.</p>", ref:"$2"},
	{ name:"Golden Harp Inn", color:"#FF0000", x:1980, y:1013, txt:"<p>Inn</p>", ref:"$4"},
	{ name:"The Fiery Flagon", color:"#FF0000", x:636, y:1600, txt:"<p>Tavern</p>", ref:"$37"},
	{ name:"Dacer's Inn", color:"#FF0000", x:690, y:1654, txt:"<p>Inn</p>", ref:"$39"},
	{ name:"The Ship's Wheel", color:"#FF0000", x:554, y:1777, txt:"<p>Tavern</p>", ref:"$41"},
	{ name:"The Pilgrim's Rest", color:"#FF0000", x:614, y:1770, txt:"<p>Inn</p>", ref:"$42"},
	{ name:"The Wandering Wemic", color:"#FF0000", x:661, y:1760, txt:"<p>Inn</p>", ref:"$43"},
	{ name:"Maerghoun's Inn", color:"#FF0000", x:781, y:1713, txt:"<p>Inn</p>", ref:"$45"},
	{ name:"Gounar's Tavern", color:"#FF0000", x:716, y:1817, txt:"<p>Tavern</p>", ref:"$55"},
	{ name:"The Broken Lance", color:"#FF0000", x:1103, y:2040, txt:"<p>Tavern. Mercenaries.</p>", ref:"$59"},
	{ name:"The Silken Slyph", color:"#FF0000", x:722, y:1388, txt:"<p>Tavern/inn</p>", ref:"$61"},
	{ name:"The Raging Lion", color:"#FF0000", x:2886, y:1700, txt:"<p>Inn</p>", ref:"N21"},
	{ name:"A Maiden's Tears", color:"#FF0000", x:2856, y:1780, txt:"<p>Tavern</p>", ref:"N25"},
	{ name:"Twilight Hunters", color:"#FF0000", x:2803, y:1893, txt:"<p>Tavern</p>", ref:"N26"},
	{ name:"The Misty Beard", color:"#FF0000", x:2925, y:2022, txt:"<p>Tavern</p>", ref:"N32"},
	{ name:"The Galloping Minotaur", color:"#FF0000", x:1968, y:2469, txt:"<p>Inn</p>", ref:"N47"},
	{ name:"Greenglade Tower", color:"#FF0000", x:2222, y:2689, txt:"<p>Rooming house.</p>", ref:"N71"},
	{ name:"The Grinning Lion", color:"#FF0000", x:2493, y:2646, txt:"<p>Raucous tavern adorned with (faked) battle trophies from all over Faerun. Drugs.</p>", ref:"N56"},
	{ name:"Silent Shield", color:"#FF0000", x:2471, y:1509, txt:"<p>Inn/storage. The Silent Shield is named for its secrecy. It offers secure, private storage of items or folk who are trying to hide, including adventurers or their diseased, sick, wounded, or dead companions. (Corpses are kept on ice. The others are tended carefully by the proprietors.)</p>", ref:"N65"},
	{ name:"The Singing Sword", color:"#FF0000", x:1919, y:2790, txt:"<p>Tavern</p>", ref:"C9"},
	{ name:"The Pampered Traveler", color:"#FF0000", x:2012, y:3301, txt:"<p>Inn</p>", ref:"C11"},
	{ name:"Mighty Manticore Tavern", color:"#FF0000", x:1439, y:3418, txt:"<p>Tavern</p>", ref:"C12"},
	{ name:"The Crawling Spider", color:"#FF0000", x:1783, y:3740, txt:"<p>Tavern</p>", ref:"C20"},
	{ name:"The Dragon's Head Tavern", color:"#FF0000", x:1330, y:3943, txt:"<p>Tavern</p>", ref:"C24"},
	{ name:"The Asp's Strike", color:"#FF0000", x:1254, y:4068, txt:"<p>Tavern</p>", ref:"C30"},
	{ name:"The Elfstone Tavern", color:"#FF0000", x:1907, y:3948, txt:"<p>Tavern</p>", ref:"C32"},
	{ name:"The Blue Jack", color:"#FF0000", x:2137, y:4000, txt:"<p>Tavern</p>", ref:"C35"},
	{ name:"The Jade Jug", color:"#FF0000", x:2140, y:4022, txt:"<p>Inn</p>", ref:"C38"},
	{ name:"The Yawning Portal", color:"#FF0000", x:2053, y:4472, txt:"<p>Inn. Built in 1306 DR on the ruins of Halaster Blackcloak's old tower, the Yawning Portal gained most of its renown for being the primary open route to the Undermountain. The Portal's innkeeper, Durnan, is a former adventurer of great power and renown.</p>", ref:"C48"},
	{ name:"The Red-eyed Owl", color:"#FF0000", x:2151, y:4504, txt:"<p>This is the closest thing Waterdeep has to a comfortable, unimpressive, welcoming gathering place for the neighborhood. It is the kind of place where friends will come in and hail each other across the room, the food and drink will be pleasant, if unspectacular, and you'll be allowed to sit in peace and while an evening away over a tankard or two. Food is a heavily spiced sea-food stew (called coast chowder) or roast oxen done with a sweet-and-sour sauce and a dash o brandy to flame the outside as it's brought, blazing, to your table. It is a rambling old wooden building that looks as if it's about to fall into the street. But it has looked that way for at least 40 winters, patrons assured me, and hasn't fallen down yet.</p>", ref:"C49"},
	{ name:"The Sleepy Slyph", color:"#FF0000", x:2180, y:4659, txt:"<p>Tavern</p>", ref:"C50"},
	{ name:"The Quaffing Quaggoth", color:"#FF0000", x:1263, y:4672, txt:"<p>Tavern. A favorite among sailors, merchants, and young nobles, this dwarven owned and operated establishment is known for its own specialty brew â€“ the Quaggoth, a thick house-brewed stout mixed with a shot of a house secret liquor.</p>", ref:"C53"},
	{ name:"The Sailor's Own", color:"#FF0000", x:1237, y:4868, txt:"<p>Tavern</p>", ref:"C54"},
	{ name:"Tavern of the Flagon Dragon", color:"#FF0000", x:1071, y:2856, txt:"<p>Tavern</p><p>Three Stories high, stone dragons at the base of the walls are all gouting fire, two dragon helmed guards at the door. Caters more to the less-than-noble class.</p>", ref:"C59"},
	{ name:"Sapphire House", color:"#FF0000", x:1053, y:2824, txt:"<p>Expensive rooming house on Swords Street. The inn is a five-story building.</p>", ref:"C60"},
	{ name:"Azuth's Mug", color:"#FF0000", x:1981, y:4427, txt:"<p>Tavern</p>", ref:"C73"},
	{ name:"Wyrmbones Inn", color:"#FF0000", x:2121, y:3559, txt:"<p>Inn</p>", ref:"C78"},
	{ name:"The Underdark", color:"#FF0000", x:2625, y:4690, txt:"<p>Tavern</p>", ref:"T1"},
	{ name:"Inn of the Dripping Dagger", color:"#FF0000", x:2192, y:3404, txt:"<p>The walls of this old inn are fieldstone at street level and timber for three upper floors. The owner of the inn, a former adventurer named Tessele Swiftwater, employs an extensive staff of waitresses, kitchen staff, chambermaids, hostlers and a minotaur bouncer named Thoat. The food is tasty and plentiful. Notable are panfried lout (a local small brown fish) and baked shalass (a local trout-like fish). Notable drinks include Moonshae almond brandy, elverquisst (the exotic drink of many elves), and a famed Waterdeep wine, zzar, which is fiery orange with a distinctive almond scent.</p>", ref:"T3"},
	{ name:"Gondalim's", color:"#FF0000", x:2228, y:3737, txt:"<p>Inn</p>", ref:"T8"},
	{ name:"Maelstrom's Notch", color:"#FF0000", x:2439, y:3918, txt:"<p>Inn</p>", ref:"T13"},
	{ name:"The Unicorn's Horn", color:"#FF0000", x:2218, y:4018, txt:"<p>Inn</p>", ref:"T15"},
	{ name:"The Gentle Rest", color:"#FF0000", x:2583, y:4175, txt:"<p>The Gentle Rest is an old, large, comfortable inn where it bends to meet Waterdeep Way. The inn has five floors and a stable located on an alley behind the inn. The current proprietor is Marlak Buckman, a jovial, stout, middle-aged man of average height. He greets guests warmly, saying 'Welcome to the Gentle Rest. May I fetch you a cup of wine or a tankard of ale? Or perhaps you seek lodging?' The Gentle Rest has smooth, wooden floors and walls with typical furnishings for an inn. The shortest way to the stables is the back door of the Inn. If you use the front door, you must circle (clockwise) around a long block of buildings to reach the Gentle Rest stables. That path would take a couple of minutes. The Gentle Rest stables are sizeable and a cobblestone apron provides an area for rigging wagons and carriages. Inside are typical horse stalls and a hay loft. Towards the back is space for wagon and cart storage.</p>", ref:"T32"},
	{ name:"The Bowels of the Earth", color:"#FF0000", x:2254, y:4306, txt:"<p>Tavern. Mercenaries.</p>", ref:"T36"},
	{ name:"Felzoun's Folly", color:"#FF0000", x:2731, y:4330, txt:"<p>Tavern</p><p>Felzoun's Folly has been around for a very long time, and not everything that goes on there is believed to be legal.</p>", ref:"T39"},
	{ name:"The Gray Serpent", color:"#FF0000", x:2487, y:4645, txt:"<p>Inn</p>", ref:"T43"},
	{ name:"The Singed Bolt", color:"#FF0000", x:2700, y:4427, txt:"<p>Tavern</p>", ref:"T49"},
	{ name:"The Gray Griffon", color:"#FF0000", x:1588, y:4590, txt:"<p>Tavern</p>", ref:"D1"},
	{ name:"Selune's Smile", color:"#FF0000", x:1701, y:4948, txt:"<p>Tavern</p>", ref:"D6"},
	{ name:"The Rearing Hippocampus", color:"#FF0000", x:1822, y:4926, txt:"<p>Inn</p>", ref:"D7"},
	{ name:"The Splintered Stair", color:"#FF0000", x:1984, y:4993, txt:"<p>Inn</p>", ref:"D8"},
	{ name:"The Blackstar Inn", color:"#FF0000", x:2113, y:4869, txt:"<p>This dignified, even haughty inn is like a fortress on the outside, with barred windows, stone walls, and a slate roof. Its lobby has two armed guards, and the four hostlers in the locked stables are also armed. Fees are high (typically 1 gp per head per night, plus 1 sp per animal stabled), but in return, guests get almost soundproof rooms (a rarity). Each room has a hip-bath, a double bed, water and wine provided for drinking and various pamphlets and chapbooks provided for light reading. Each room also has its own fireplace, albeit with a miserly supply of firewood, and the patrons tend to keep to themselves. A good place to get a long soundsleep. Asiyra Boldwinter is the proprietress of this inn. Her manner is one of uppercrust, noble dignity.</p>", ref:"D9"},
	{ name:"The Ship's Prow", color:"#FF0000", x:1893, y:5170, txt:"<p>Inn</p>", ref:"D11"},
	{ name:"The Thirsty Sailor", color:"#FF0000", x:1965, y:5181, txt:"<p>This decrepit old tavern has boarded-up windows and careless repairs. The interior is smoky and the repulsive odor of tar, stale beer, sour wine, sweat, and worse fills the air. The patrons divide their time here by drinking, singing bawdy songs (off-key) and brawling. No female staff or patrons grace the Thirsty Sailor, not even female sailors or dockworkers.</p>", ref:"D12"},
	{ name:"The Thirsty Throat", color:"#FF0000", x:2484, y:5037, txt:"<p>Tavern. Mercenaries.</p><p>This ramshackle assembly of wood amazes all by not fallen down.</p>", ref:"D13"},
	{ name:"Warm Beds", color:"#FF0000", x:2045, y:5308, txt:"<p>Inn.</p><p>This establishment delivers just what it promises - and little more. Each bed is warmed by three heated stones placed in it before the renter retires. There is hot water available for washing, heated by the bucket beside the same giant hearth that warms the bedstones. Rooms with one to four single beds are available. This inn has no stabling (most patrons sell their mounts or stable them at a caravan stable in South Ward), and provides no food of any kind. Quiet is expected after dark, but as long as there's no noise above low-pitched voices, renters can use their rooms for whatever purpose they please (such as conferences or meetings).</p>", ref:"D15"},
	{ name:"The Bloody Fist", color:"#FF0000", x:2240, y:5226, txt:"<p>Tavern. Members of the Bull Elk Tribe can usually be found drinking here.</p>", ref:"D17"},
	{ name:"The Sleeping Wench", color:"#FF0000", x:2286, y:5488, txt:"<p>Tavern</p>", ref:"D23"},
	{ name:"The Blue Mermaid", color:"#FF0000", x:2156, y:5572, txt:"<p>The Blue Mermaid tavern is a respectable establishment with decent food at a good price whose clientele is normally sailors and dockworkers looking for a quiet place to eat. The manager is a man named Stevian.</p>", ref:"D27"},
	{ name:"The Hanged Man", color:"#FF0000", x:2324, y:5565, txt:"<p>Tavern</p>", ref:"D32"},
	{ name:"The Sleeping Snake", color:"#FF0000", x:2474, y:5774, txt:"<p>Tavern. Members of the Black Boar Tribe can usually be found drinking here.</p>", ref:"D41"},
	{ name:"Shipmasters' Hall", color:"#FF0000", x:2574, y:5804, txt:"<p>Inn</p>", ref:"D42"},
	{ name:"The Pickled Fisherman", color:"#FF0000", x:1490, y:4862, txt:"<p>Tavern</p>", ref:"D58"},
	{ name:"The Soaring Pegasus", color:"#FF0000", x:1549, y:4881, txt:"<p>Tavern</p>", ref:"D59"},
	{ name:"The Angry Coxswain", color:"#FF0000", x:1784, y:5222, txt:"<p>The tavern contains a one-way portal connecting with a prison cell in the slave market in the Mulhorandi city of Skuld.</p>", ref:"D67"},
	{ name:"Sailor's Corner", color:"#FF0000", x:1660, y:5045, txt:"<p>Inn</p>", ref:"D73"},
	{ name:"Darth's Dolphyntyde", color:"#FF0000", x:1860, y:4773, txt:"<p>Tavern</p>", ref:"D74"},
	{ name:"The Swords' Rest", color:"#FF0000", x:2694, y:4717, txt:"<p>Tavern. Mercenaries.</p>", ref:"S1"},
	{ name:"Midnight Sun", color:"#FF0000", x:2662, y:5176, txt:"<p>Tavern</p>", ref:"S9"},
	{ name:"The Full Cup", color:"#FF0000", x:2997, y:5506, txt:"<p>Tavern. Food.</p>", ref:"S14"},
	{ name:"The Spouting Fish", color:"#FF0000", x:2646, y:5729, txt:"<p>Tavern</p>", ref:"S18"},
	{ name:"The Red Gauntlet", color:"#FF0000", x:2765, y:5806, txt:"<p>Tavern</p>", ref:"S22"},
	{ name:"The Safehaven Inn", color:"#FF0000", x:2709, y:5330, txt:"<p>Inn</p>", ref:"S41"},
	{ name:"The Beer Golem", color:"#FF0000", x:2693, y:5361, txt:"<p>Tavern</p>", ref:"S43"},
	{ name:"Tymora's Blessing", color:"#FF0000", x:2597, y:5358, txt:"<p>Tavern. Mercenaries.</p>", ref:"S47"},
	{ name:"The Endshift Tavern", color:"#FF0000", x:2832, y:1175, txt:"<p>A tavern in the Field Ward at the corner of Endshift Street and the Breezeway. It's frequented by off-duty members of the city guard.</p>", ref:""},
	{ name:"The Friendly Flounder", color:"#FF0000", x:2334, y:4940, txt:"<p>The Friendly Flounder is an unspectacular fare with a modest structure that keep it unknown to most visitors of Waterdeep, but it is a real find for those that like to not be bothered while eating and drinking.</p>", ref:""},
	{ name:"Frewn's Brews", color:"#FF0000", x:2275, y:1609, txt:"<p>A relatively new tavern with shoddy workmanship. The owner covets the location of Trollskull Manor.</p>", ref:""},
	{ name:"The Dancing Dagger", color:"#FF0000", x:3368, y:2963, txt:"<p>Inn. A merry and lively Inn boasting a resident bard, Trilian Arkalyn, and known as a safe meeting place for off the books 'businesss'.</p>", ref:""},
	{ name:"The Empty Keg", color:"#FF0000", x:2097, y:4472, txt:"<p>The Empty Keg is a rowdy beer-hall. Later at night, it sees visits from workers from Mother Salinka's next door to reinvigorate business there.</p>"},
	{ name:"Tarth's Towers", color:"#FF0000", x:1222, y:1684, txt:"<p>Luxury Inn</p>", ref:""},
	{ name:"Oblarth's Gryphon", color:"#FF0000", x:1968, y:1880, txt:"<p>Luxury Inn</p>", ref:""},
	{ name:"Dauntlynâ€™s Doors", color:"#FF0000", x:2022, y:3184, txt:"<p>Luxury Inn</p>", ref:""},
	{ name:"Bard inn", color:"#FF0000", x:1616, y:4919, txt:"<p><p>A cozy inn owned by a family of past adventurers, it appears to have been fixed up recently. Most of its visitors are sailors, but it has been known to house meetings between gangs in order to keep the peace. In the basement is a hidden underground fighting ring.</p>"},
	{ name:"The Tao Wall Street's Pub", color:"#FF0000", x:2967, y:4481, txt:"<p>The lendary warrior Taozrens once lived within these walls in the Wall Street, near the River Gate. He and his family, with a total of 6 children, shared stories of his greatness for years near the hearth. Now, years after his death in the Dungeon of the Mad Mage, a new pub is founded in the place. The innkeeper is Elmira, an older woman with great kitchen skills and even greater stories to tell. Every third day of each month, the stage is open to all and adventurers from Faerun come to share their's stories, just like Taozrens once did with his family.</p>"},
	{ name:"The Sleeping Dog", color:"#FF0000", x:1479, y:4600, txt:"<p>The Sleeping Dog is a quiet boarding house run by a sweet old halfling woman named Terricott Calumn, Terri to her friends and guests. Rooms are reasonably priced and clean. She gets a great deal of her business from The Yawning Portal and is quite friendly with Bonny (a doppelganger barmaid at the Portal). She does not tolerate roughhousing or shenanigans in her establishment and employs a burly dwarf named Grady (a retired adventurer with the stats of a veteran) who does the heavy lifting around the place and ejects any customers who don't comply with the rules. He is very much in love with Terricott, though he would never admit it and claims he is far too old for such nonsense. Terricott loves him in return, just not in the same way.</p>"},
	{ name:"Trollskull Manor", color:"#FF0000", x:2420, y:1588, txt:"<p>Inn. An old run down Inn that hasn't been open for some years now following an explosion that killed a number of patrons and the bartender</p>", ref:"T1"},
	{ name:"Knight N' Shadow", color:"#FF0000", x:2246, y:5092, txt:"<p>The Knight N' Shadow is a two story tavern. The tavern is shabby and populated by criminals and others who wish to hide their business. The two burly half-orc bouncers must be either bribed or intimidated before allowing access to the lower level of the tavern. A rickety set of stairs through a sloped tunnel leads to the lower level of the tavern. From here one can enter to Downshadow via rope lift manned by a spellscarred half-orc. Tip well for smooth trip.</p>"},
	{ name:"The Storm's Front", color:"#FF0000", x:1100, y:937, txt:"<p>A popular gathering place for the young and wealthy.</p>"},
	{ name:"Demondraught", color:"#FF0000", x:1057, y:778, txt:"<p>Tavern.</p>"},
	{ name:"Slaked Sylph", color:"#FF0000", x:910, y:2248, txt:"<p>Tavern. Patron's are a wide array of Waterdhavians, who enjoy dark ale, night black loaves, and shelves with broadsheets.</p>"},
	{ name:"Mermaid on a Dolphin", color:"#FF0000", x:1330, y:1489, txt:"<p>An expensive restaurant.</p>"},
	{ name:"The House of Purple Silks", color:"#FF0000", x:682, y:1849, txt:"<p>Festhall. Lodging. Food.</p>", ref:"$54"},
	{ name:"The Gentle Mermaid", color:"#FF0000", x:1992, y:2030, txt:"<p>Festhall. Gambling House. Tavern.</p><p>Boasting the largest and richest gambling rooms in all of Waterdeep, perhaps all of Faerun, this huge, balconied and turreted, 4-story stone structure, occupies the entire interior of the city block on which it is located. The only public entrance is in a courtyard at the end of a 40' x 20' corridor with 15' walls. It reeks of wealth, if not sophistication and taste. The interior is lushly decorated with carpets and tapestries on nearly every surface. In addition to being magically lit, the interior of the building is also magically heated and cooled, providing a welcome comfort no matter the season. Weapons are not permitted inside the Gentle Mermaid, so guests will be expected to check any they are carrying with the coatroom attendant, though guests are not searched for or even asked to remove any but openly worn weapons. The Mermaid is confident in their security. Any person not wearing ï¬ne clothes is turned away per the establishmentâ€™s dress code. Many come here to lose money at the gambling tables--or to spend it to enjoy the company of the charming & beautiful escorts, of all genders, on the Mermaid Staff.</p>", ref:"N27"},
	{ name:"Silavene's", color:"#FF0000", x:621, y:2526, txt:"<p>Festhall</p>", ref:"C3"},
	{ name:"The Smiling Siren", color:"#FF0000", x:1340, y:3004, txt:"<p>Festhall</p>", ref:"C10"},
	{ name:"Mother Tathlorn's House of Pleasure", color:"#FF0000", x:1766, y:4154, txt:"<p>Festhall. Entertainers.</p>", ref:"C43"},
	{ name:"Jhural's Dance", color:"#FF0000", x:1017, y:2878, txt:"<p>Festhall</p>", ref:"C58"},
	{ name:"Blushing Nymph", color:"#FF0000", x:1946, y:4476, txt:"<p>Festhall</p><p>The long stair links the oubliette of the Blushing Nymph festhall with Undermountain's first level.</p>", ref:"C81"},
	{ name:"Golden Horn Gambling House", color:"#FF0000", x:2158, y:4144, txt:"<p>Festhall. Entertainers. Drugs.</p>", ref:"T28"},
	{ name:"Three Pearls Nightclub", color:"#FF0000", x:2333, y:5177, txt:"<p>Festhall</p>", ref:"D18"},
	{ name:"The Hanging Lantern", color:"#FF0000", x:2214, y:5461, txt:"<p>Festnall</p>", ref:"D22"},
	{ name:"The Purple Palace", color:"#FF0000", x:2414, y:5405, txt:"<p>Festhall</p>", ref:"D25"},
	{ name:"The Mermaid's Arms", color:"#FF0000", x:2014, y:5560, txt:"<p>Festhall</p>", ref:"D26"},
	{ name:"The Blushing Mermaid", color:"#FF0000", x:2346, y:5654, txt:"<p>Festhall</p><p>A dry well in the cellar has a passage to the Port of Shadows in Undermountain.</p>", ref:"D36"},
	{ name:"The Copper Cup", color:"#FF0000", x:2968, y:6024, txt:"<p>Festhall</p>", ref:"D54"},
	{ name:"The Skewered Dragon", color:"#FF0000", x:2358, y:5468, txt:"<p>The Skewered Dragon faces an alley that runs between Net Street and Fillet Lane in the Dock Ward, not far from the Old Xoblob Shop. The Skewered Dragon looks like a ruin. Both of its front-facing windows are smashed, and a ship's anchor is lodged in the roof.</p>", ref:""},
	{ name:"The Jade Dancer", color:"#FF0000", x:2778, y:5636, txt:"<p>Festhall. Tavern, dance hall, and inn.</p>", ref:"S15"},
	{ name:"The Smiling Succubus", color:"#FF0000", x:2545, y:5721, txt:"<p>Festhall. Not exactly the pride of Wharf Street, but one of its most popular destinations.</p>"},
	{ name:"Mother Salinka's House of Pleasures", color:"#FF0000", x:2076, y:4471, txt:"<p>This is a dingy low-coin festhall owned by halflings and frequented by those who are there for a 'brief visit', or can't afford or are turned away from the Yawning Portal.</p>"},
	{ name:"Pink Flumph", color:"#FF0000", x:1707, y:3136, txt:"<p>Theater</p>", ref:""},
	{ name:"Seven Masks Theater", color:"#FF0000", x:1601, y:4809, txt:"<p>The theater caters to a lower-class clientele, and ship captains and sailors are admitted for free. The owner of the theater is a burly and jovial Shou man with a braided goatee named Rongquan Mystere.</p>"},
];

var temples = [
	{ name:"Shrines of Nature", color:"#FFFF00", x:696, y:1146, txt:"<p>Park dedicated to Silvanus and Mielikki.</p>", ref:"$5"},
	{ name:"Temple of Beauty", color:"#FFFF00", x:1176, y:1126, txt:"<p>Temple of Sune.</p>", ref:"$10"},
	{ name:"Tower of Luck", color:"#FFFF00", x:922, y:1344, txt:"<p>Temple of Tymora.</p>", ref:"$19"},
	{ name:"House of Wonder", color:"#FFFF00", x:1150, y:1394, txt:"<p>Temple of Mystra. Most splendid temple dedicated to this deitie in all the world.</p>", ref:"$21"},
	{ name:"House of Inspired Hands", color:"#FFFF00", x:696, y:1600, txt:"<p>Temple of Gond.</p>", ref:"$38"},
	{ name:"House of the Moon", color:"#FFFF00", x:766, y:1842, txt:"<p>Temple of SelÃ»ne. The tallest tower of any temple in the city.</p>", ref:"$56"},
	{ name:"House of Heroes", color:"#FFFF00", x:610, y:2080, txt:"<p>Temple of Tempus. Largest temple in the city.</p>", ref:"$58"},
	{ name:"Holyhands House", color:"#FFFF00", x:1958, y:1728, txt:"<p>Temple of all deities. Also an inn.</p>", ref:"N16"},
	{ name:"Hospice of St. Laupsenn", color:"#FFFF00", x:2342, y:2888, txt:"<p>Temple of Ilmater.</p>", ref:"N73"},
	{ name:"Spires of the Morning", color:"#FFFF00", x:812, y:2372, txt:"<p>Temple of Lathander. Order of the Aster.</p>", ref:"C1"},
	{ name:"Font of Knowledge", color:"#FFFF00", x:1060, y:2740, txt:"<p>Temple of Oghma. Largest public library in the city.</p>", ref:"C4"},
	{ name:"Halls of Justice", color:"#FFFF00", x:1184, y:2734, txt:"<p>Temple of Tyr. Holy Order of the Knights of Samular.</p>", ref:"C5"},
	{ name:"Temple of the Seldarine", color:"#FFFF00", x:1756, y:3534, txt:"<p>Temple of all elven deities.</p>", ref:"C66"},
	{ name:"House of Two Hands", color:"#FFFF00", x:618, y:4764, txt:"<p>Monastery. Order of the Even-Handed.</p>", ref:"C74"},
	{ name:"The Zoarstar", color:"#FFFF00", x:2626, y:4103, txt:"<p>Guildhall, temple. Scriveners', Scribes', & Clerks' Guild.</p>", ref:"T25"},
	{ name:"The Plinth", color:"#FFFF00", x:2540, y:4283, txt:"<p>Temple open to any faith and employed by worshipers of gods who lack sizable congregations in the City of Splendors.</p>", ref:"T38"},
	{ name:"Monastery of the Sun", color:"#FFFF00", x:2212, y:2916, txt:"<p>Temple. Order of the Sun Soul.</p>", ref:"T46"},
	{ name:"Helm's Hall", color:"#FFFF00", x:2621, y:5330, txt:"<p>Temple of Helm.</p>", ref:"S46"},
	{ name:"The Queenspire", color:"#FFFF00", x:3077, y:6640, txt:"<p>Temple of Umberlee.</p>", ref:"H5"},
	{ name:"Sailor's Last Request", color:"#FFFF00", x:1815, y:5269, txt:"<p>Former warehouse on the corner of Dock and Odd Streets that is now a chapel to Valkur, the god of sailors.</p>", ref:""},
	{ name:"Temple of Good Cheer", color:"#FFFF00", x:2647, y:5237, txt:"<p>'Temple' of Lliira located on the second floor of a rundown row house.</p>", ref:"S29"},
	{ name:"Starry Cradles orphanage", color:"#FFFF00", x:1434, y:4600, txt:"<p>The Starry Cradles orphanage is a Dock Ward orphanage run by Matron Griselda Hoppletun, a halfling care-taker, and funded by the House of the Moon and the SelÃ»nite clergy thereof.</p>", ref:""},
	{ name:"Mystra's Arms", color:"#FFFF00", x:936, y:866, txt:"<p>Mystra's Arms Asylum is a ruined building. It is haunted and abandoned.</p>", ref:"$66"},
	{ name:"The Dancing Haven", color:"#FFFF00", x:2492, y:1110, txt:"<p>The Dancing Haven is a small tree grove, planted and grown within an abandoned, roofless building in the Northern Ward of Waterdeep (formerly the Phull Villa, now absorbed by House Ulbrinter). It is used as a base of operations for the followers of Eilistraee (drow goddess of song and moonlight) in the city.</p>", ref:"N4"},
];

var guildHalls = [
	{ name:"The House of Crystal", color:"#2eb82e", x:1886, y:2510, txt:"<p>Guildhall. Guild of Glassblowers, Glaziers, & Spectacle-makers.</p>", ref:"N46"},
	{ name:"The House of Healing", color:"#2eb82e", x:2136, y:2574, txt:"<p>Guildhall. Drugs. Poisons. Potions. Guild of Apothecaries & Physicians.</p>", ref:"N51"},
	{ name:"The Market Hall", color:"#2eb82e", x:1810, y:2627, txt:"<p>Guildhall. Council of Farmer-Grocers.</p>", ref:"C8"},
	{ name:"Tower of the Order", color:"#2eb82e", x:1957, y:3460, txt:"<p>Guildhall. Magic items. Scrolls. Watchful Order of Magists & Protectors.</p>", ref:"C15"},
	{ name:"House of the Fine Carvers", color:"#2eb82e", x:2116, y:3666, txt:"<p>Guildhall. Guild of Fine Carvers.</p>", ref:"C21"},
	{ name:"The Master Bakers' Hall", color:"#2eb82e", x:1825, y:3927, txt:"<p>Guildhall. Baker's Guild.</p>", ref:"C27"},
	{ name:"Pewterers' and Casters' Guildhall", color:"#2eb82e", x:2136, y:3969, txt:"<p>Guildhall. Guild of Trusted Pewterers & Casters.</p>", ref:"C34"},
	{ name:"Guildhall of the Order", color:"#2eb82e", x:2051, y:4004, txt:"<p>Guildhall. Solemn Order of Recognized Furriers & Woolmen.</p>", ref:"C36"},
	{ name:"Fellowship Hall", color:"#2eb82e", x:1737, y:4103, txt:"<p>Guildhall. Fellowship of Innkeepers.</p>", ref:"C39"},
	{ name:"The Map House", color:"#2eb82e", x:1800, y:4103, txt:"<p>Guildhall. Surveyors', Map & Chart-makers' Guild.</p>", ref:"C40"},
	{ name:"The House of Gems", color:"#2eb82e", x:1884, y:4115, txt:"<p>Guildhall</p>", ref:"C44"},
	{ name:"Citadel of the Arrow", color:"#2eb82e", x:2259, y:3792, txt:"<p>Guildhall. Fellowship of Bowers & Fletchers.</p>", ref:"T10"},
	{ name:"Costumers' Hall", color:"#2eb82e", x:2209, y:3875, txt:"<p>Guildhall. Order of Master Tailors, Glovers, & Mercers. Clothing.</p>", ref:"T11"},
	{ name:"The League Office", color:"#2eb82e", x:2606, y:3975, txt:"<p>Guildhall. League of Basketmakers & Wickerworkers.</p>", ref:"T14"},
	{ name:"The House of Song", color:"#2eb82e", x:2422, y:4031, txt:"<p>Guildhall. Entertainers. Council of Musicians, Instrument-Makers, & Choristers.</p>", ref:"T19"},
	{ name:"The House of Cleanliness", color:"#2eb82e", x:2653, y:3993, txt:"<p>Guildhall</p>", ref:"T22"},
	{ name:"The Old Guildhall", color:"#2eb82e", x:2756, y:4059, txt:"<p>Guildhall. Cellarers' & Plumbers' Guild.</p>", ref:"T26"},
	{ name:"The House of Textiles", color:"#2eb82e", x:2725, y:4087, txt:"<p>Guildhall. Most Excellent Order of Weavers & Dyers.</p>", ref:"T27"},
	{ name:"The House of Light", color:"#2eb82e", x:2330, y:4160, txt:"<p>Guildhall. Guild of Chandlers & Lamplighters.</p>", ref:"T29"},
	{ name:"Stationers' Hall", color:"#2eb82e", x:2415, y:4175, txt:"<p>Guildhall. Stationers' Guild.</p>", ref:"T31"},
	{ name:"The Guild Paddock", color:"#2eb82e", x:2845, y:4227, txt:"<p>Guildhall. Stablemasters' & Farriers' Guild. Mounts.</p>", ref:"T34"},
	{ name:"Cobblers' and Corvisers' House", color:"#2eb82e", x:2357, y:4390, txt:"<p>Guildhall. Order of Cobblers & Corvisers. Clothing.</p>", ref:"T37"},
	{ name:"Wheel Hall", color:"#2eb82e", x:2903, y:4427, txt:"<p>Guildhall</p>", ref:"T42"},
	{ name:"The Metal House of Wonders", color:"#2eb82e", x:2062, y:4603, txt:"<p>Guildhall. Splendid Order of Armorers, Locksmiths, & Finesmiths. Adventuring gear. Armor. Tools. </p>", ref:"D3"},
	{ name:"Shipwrights' House", color:"#2eb82e", x:1860, y:5425, txt:"<p>Guildhall. Order of Master Shipwrights.</p>", ref:"D19"},
	{ name:"Muleskull Tavern", color:"#2eb82e", x:2133, y:5498, txt:"<p>Tavern/guild. Dungsweepers' Guild.</p>", ref:"D21"},
	{ name:"Shippers' Hall", color:"#2eb82e", x:2212, y:5528, txt:"<p>Guildhall. Fellowship of Salters, Packers, & Joiners.</p>", ref:"D28"},
	{ name:"Coopers' Rest", color:"#2eb82e", x:2259, y:5542, txt:"<p>Guildhall. Coopers' Guild.</p>", ref:"D31"},
	{ name:"Full Sails", color:"#2eb82e", x:2127, y:5686, txt:"<p>Tavern/guildhall. Most Diligent League of Sail-makers & Cordwainers.</p>", ref:"D35"},
	{ name:"Seaswealth Hall", color:"#2eb82e", x:2272, y:5730, txt:"<p>Guildhall. Fishmongers' Fellowship.</p>", ref:"D39"},
	{ name:"Watennens' Hall", color:"#2eb82e", x:2475, y:5825, txt:"<p>Guildhall. Guild of Watermen.</p>", ref:"D43"},
	{ name:"Mariners' Hall", color:"#2eb82e", x:2653, y:5869, txt:"<p>Guildhall. Master Mariners' Guild.</p>", ref:"D44"},
	{ name:"League Hall", color:"#2eb82e", x:2727, y:5916, txt:"<p>Guildhall</p>", ref:"D46"},
	{ name:"The Butchers' Guildhall", color:"#2eb82e", x:2828, y:5951, txt:"<p>Guildhall. Guild of Butchers.</p>", ref:"D47"},
	{ name:"Jester's Clubhouse", color:"#2eb82e", x:2215, y:5398, txt:"<p>Guildhall</p>", ref:"D61"},
	{ name:"The Pavilion of Paving Stones", color:"#2eb82e", x:2462, y:5069, txt:"<p>Guildhall. Loyal Order of Street Laborers.</p>", ref:"D72->D70b"},
	{ name:"The Stone House", color:"#2eb82e", x:2624, y:4771, txt:"<p>Guildhall. Carpenters', Roofers', & Plaisterers' Guild.</p>", ref:"S2"},
	{ name:"The House of Good Spirits", color:"#2eb82e", x:2831, y:4816, txt:"<p>Guildhall. Vintners', Distillers', & Brewers' Guild.</p>", ref:"S3"},
	{ name:"The Coach and Wagon Hall", color:"#2eb82e", x:2745, y:4945, txt:"<p>Guildhall. Wagonmakers' & Coach Builders' Guild.</p>", ref:"S5"},
	{ name:"Saddlers' & Harness-Makers' Hall", color:"#2eb82e", x:2759, y:4906, txt:"<p>Guildhall. Saddlers' & Harness-Makers' Guild. Mounts.</p>", ref:"S6"},
	{ name:"Builders' Hall", color:"#2eb82e", x:2992, y:5460, txt:"<p>Guildhall. Guild of Stonecutters, Masons, Potters, & Tile-makers.</p>", ref:"S11"},
	{ name:"The Road House", color:"#2eb82e", x:2954, y:5527, txt:"<p>Guild house. Fellowship of Carters & Coachmen.</p>", ref:"S13"},
	{ name:"Metalmasters' Hall", color:"#2eb82e", x:2954, y:5728, txt:"<p>Guildhall. Most Careful Order of Skilled Smiths & Metalforgers. Tools.</p>", ref:"S20"},
];

var businesses = [
	{ name:"Selchoun's Sundries", color:"#FF00FF", x:1248, y:976, txt:"<p>Business</p>", ref:"$3"},
	{ name:"Aurora's Realms Shop, Singing Dolphin Catalog Counter", color:"#FF00FF", x:846, y:1400, txt:"<p>Business. Magic items.</p>", ref:"$18"},
	{ name:"Halazar's Fine Gems", color:"#FF00FF", x:1746, y:2258, txt:"<p>Business</p>", ref:"$60"},
	{ name:"Gerin's Breads", color:"#FF00FF", x:860, y:512, txt:"<p>Business. Food.</p>", ref:"$62"},
	{ name:"Melvar's Chapbooks and Folios", color:"#FF00FF", x:828, y:1352, txt:"<p>Business</p>", ref:"$63"},
	{ name:"Velatha's Delights", color:"#FF00FF", x:578, y:1406, txt:"<p>Business</p>", ref:"$64"},
	{ name:"Tammerbund's Glasswares", color:"#FF00FF", x:1446, y:1630, txt:"<p>Business</p>", ref:"$65"},
	{ name:"High Flagon Gambling House", color:"#FF00FF", x:2032, y:1134, txt:"<p>Business. Drugs.</p>", ref:"$76"},
	{ name:"Ragathan Furriers", color:"#FF00FF", x:2861, y:2296, txt:"<p>Business. Clothing.</p>", ref:"N43"},
	{ name:"Meraedos Fine Furs", color:"#FF00FF", x:2038, y:2472, txt:"<p>Business. Clothing.</p>", ref:"N48"},
	{ name:"Sulmest's Splendid Shoes & Boots", color:"#FF00FF", x:2045, y:2532, txt:"<p>Business. Clothing.</p>", ref:"N49"},
	{ name:"Aurora's Realms Shop, High Road Catalogue Counter", color:"#FF00FF", x:2125, y:2517, txt:"<p>Business</p>", ref:"N50"},
	{ name:"Fallen Stars Fish", color:"#FF00FF", x:2180, y:2662, txt:"<p>Business. Food.</p>", ref:"N54"},
	{ name:"Downybeard Tobacconist", color:"#FF00FF", x:2406, y:2856, txt:"<p>Business</p>", ref:"N60"},
	{ name:"Hriiat Fine Pastries", color:"#FF00FF", x:2511, y:2972, txt:"<p>Business. Food.</p>", ref:"N61"},
	{ name:"Irbryth Authamaun's residence", color:"#FF00FF", x:2383, y:1262, txt:"<p>Business</p>", ref:"N62"},
	{ name:"Taurntyrith Adornments", color:"#FF00FF", x:1956, y:1898, txt:"<p>Business</p>", ref:"N66"},
	{ name:"Bhephel's Bottles/Exotic Wines and Cordials", color:"#FF00FF", x:2033, y:1979, txt:"<p>One of the finest spirits shops in Waterdeep, specializing in having the widest offerings from around FaerÃ»n. Their small size belies their actual business, for many of their customers simply have them ship their purchases directly from warehouse to residences, without ever entering the shop.</p>", ref:"N67"},
	{ name:"Sarsantyr's Tapestries & Draperies", color:"#FF00FF", x:2038, y:1490, txt:"<p>Business</p>", ref:"N68"},
	{ name:"Tirelessly Turning Wheel/Caravan Curios From All Far Faerun", color:"#FF00FF", x:2009, y:2346, txt:"<p>Business</p>", ref:"N69"},
	{ name:"Millomyr Harps", color:"#FF00FF", x:2445, y:2787, txt:"<p>Business</p>", ref:"N70"},
	{ name:"Obelos -The Only- Braeril's residence", color:"#FF00FF", x:1814, y:1790, txt:"<p>Business</p>", ref:"N72"},
	{ name:"The Bent Nail", color:"#FF00FF", x:2467, y:1620, txt:"<p>Business. Wooden furniture, as well as bows and crossbows. The owner is an half-elf carpenter named Talisolvanar Fellbranch.</p>", ref:"N77-T2"},
	{ name:"Steam and Steel", color:"#FF00FF", x:2457, y:1650, txt:"<p>Business. The forge is owned and operated by a fire genasi named Embric and his husband, a water genasi named Avi, who made metal weapons, armor, and tools.</p>", ref:"T3"},
	{ name:"Corellon's Crown", color:"#FF00FF", x:2413, y:1636, txt:"<p>Business. Fala Lefaliir is a wood elf druid, an herbalist, and a member of the Guild of Apothecaries and Physicians.</p>", ref:"T4"},
	{ name:"Tiger's Eye", color:"#FF00FF", x:2359, y:1586, txt:"<p>Business. Vincent Trench is a human private detective.</p>", ref:"T5"},
	{ name:"Book Wyrm's Treasure", color:"#FF00FF", x:2304, y:1580, txt:"<p>Business. Library managed by a dragonborn named Rishaal the Page-Turner. He also has a small collection of spellbooks and allows wizards to copy spells if they pay.</p>", ref:"T6"},
	{ name:"Diloontier's Apothecary", color:"#FF00FF", x:1708, y:3514, txt:"<p>Assassins. Drugs. Poisons. Potions.</p><p>Now renamed to 'Diloontierâ€™s & Sons Apothecary'.</p></p>This upscale store catered to the elite of Waterdhavian society. Those who had the right credentials and money for it could quietly purchase poisons and more nefarious potions from the proprietor.</p>", ref:"C13"},
	{ name:"Balthorr's Rare & Wondrous Treasures", color:"#FF00FF", x:1870, y:3529, txt:"<p>Business. Magic items.</p><p>Balthorr 'The Bold' Olaskos will fence stolen items for 40% market value.</p>", ref:"C14"},
	{ name:"Halls of Hilmer, Master Armorer", color:"#FF00FF", x:1962, y:3754, txt:"<p>Magic Armor</p>", ref:"C23"},
	{ name:"Halambar Lutes & Harps", color:"#FF00FF", x:1895, y:3824, txt:"<p>Business. Entertainers.</p>", ref:"C25"},
	{ name:"The Golden Key Locksmiths", color:"#FF00FF", x:1737, y:3903, txt:"<p>Business</p>", ref:"C26"},
	{ name:"Olmhazan's Jewels", color:"#FF00FF", x:2132, y:3897, txt:"<p>Business</p>", ref:"C29"},
	{ name:"Rebeleigh's Elegant Headwear", color:"#FF00FF", x:1829, y:4011, txt:"<p>Business. Clothing.</p>", ref:"C31"},
	{ name:"Phalantar's Philtres & Components", color:"#FF00FF", x:2046, y:3961, txt:"<p>Business. Drugs. Poisons. Potions.</p><p>Phalantar Orivan will fence stolen goods for 40% market value.</p>", ref:"C33"},
	{ name:"Aurora's Realms Shop, Waterdeep Way Catalogue Counter", color:"#FF00FF", x:2101, y:4025, txt:"<p>A large building featuring a street-facing showroom with offices above it, and ample storage in the back part of the building on both floors as well as a practically cavernous cellars, these offices are the heart of the empire that is Aurora's Emporium. The back ground floor also features a printing facility for the broadsheets the Emporium prints. Many folk in the Castle Ward enjoy spending an hour or so browsing through the most fascinating wonders on display in the showroom. Aurora's Emporium frequently has need of mages to do certain work for them, and they pay well for it. The offices are also the location of Aurora's Academy, a Watchful Order-run school for wizardry.</p>", ref:"C37"},
	{ name:"Eilean's Maztican Delights", color:"#FF00FF", x:1638, y:2619, txt:"<p>Business</p>", ref:"C55"},
	{ name:"Lightsinger Theater", color:"#FF00FF", x:1901, y:2903, txt:"<p>Business. Entertainers.</p>", ref:"C56"},
	{ name:"Sorynth's Silverware", color:"#FF00FF", x:1737, y:3108, txt:"<p>Business</p>", ref:"C57"},
	{ name:"Old Knot Shop", color:"#FF00FF", x:1859, y:3433, txt:"<p>Adventuring gear</p>", ref:"C64"},
	{ name:"Sharkroar - Harth Shalark's Broadsheets", color:"#FF00FF", x:1709, y:2632, txt:"<p>Business</p>", ref:"C65"},
	{ name:"The Curious Past", color:"#FF00FF", x:1348, y:3414, txt:"<p>Business is run by Bronwyn Caradoon, dealing in exotic items while also being a front for Harper Activity.</p>", ref:"C85"},
	{ name:"Paethier's Pipeweed", color:"#FF00FF", x:1522, y:2545, txt:"<p>Business</p>", ref:"C86"},
	{ name:"Khammeral's Coins", color:"#FF00FF", x:2174, y:3248, txt:"<p>Business</p>", ref:"T2"},
	{ name:"The Riven Shield Shop", color:"#FF00FF", x:2196, y:3450, txt:"<p>Armor & Magic Armor</p>", ref:"T4"},
	{ name:"Saern's Fine Swords", color:"#FF00FF", x:2206, y:3779, txt:"<p>Business. Weapons & Magic Weapons</p>", ref:"T7"},
	{ name:"Dunblast Roofing Company", color:"#FF00FF", x:2396, y:3587, txt:"<p>Business</p>", ref:"T9"},
	{ name:"Thentavva's Boots", color:"#FF00FF", x:2267, y:3962, txt:"<p>Business. Clothing.</p>", ref:"T12"},
	{ name:"Aurora's Realms Shop, Street of Tusks Catalogue Counter", color:"#FF00FF", x:2283, y:4027, txt:"<p>Business</p>", ref:"T16"},
	{ name:"Orsabbas's Fine Imports", color:"#FF00FF", x:2330, y:4008, txt:"<p>Business</p><p>Ildar 'the Duke of Darkness' Orsabba will fence stolen goods for 30% market value.</p>", ref:"T17"},
	{ name:"Riautar's Weaponry", color:"#FF00FF", x:2322, y:4127, txt:"<p>Business. Weapons & Magic Weapons.</p>", ref:"T18"},
	{ name:"Patient Fingers Finework", color:"#FF00FF", x:2500, y:4017, txt:"<p>Business</p>", ref:"T20"},
	{ name:"Belmonder's Meats", color:"#FF00FF", x:2440, y:4127, txt:"<p>Business. Food.</p>", ref:"T23"},
	{ name:"Thond Glass and Glazing Shop", color:"#FF00FF", x:2475, y:4098, txt:"<p>Business</p>", ref:"T24"},
	{ name:"The Gentle Rest Stables", color:"#FF00FF", x:2622, y:4174, txt:"<p>Business</p>", ref:"T33"},
	{ name:"Meiroth's Fine Silks", color:"#FF00FF", x:2262, y:4250, txt:"<p>Business. Clothing.</p>", ref:"T35"},
	{ name:"Surtlan's Metalwares", color:"#FF00FF", x:2785, y:4380, txt:"<p>Business</p>", ref:"T40"},
	{ name:"Rejviik's Mortuary", color:"#FF00FF", x:2366, y:3722, txt:"<p>Business</p>", ref:"T45"},
	{ name:"Huulfor Manor", color:"#FF00FF", x:2725, y:4025, txt:"<p>Business</p>", ref:"T47"},
	{ name:"Henndever's Coffins and Coffers", color:"#FF00FF", x:2262, y:3561, txt:"<p>Business</p>", ref:"T51"},
	{ name:"Turnstone Plumbing and Pipefitting", color:"#FF00FF", x:1862, y:4653, txt:"<p>Business</p>", ref:"D2"},
	{ name:"Whistling Blades", color:"#FF00FF", x:2141, y:4759, txt:"<p>Business. Weapons.</p>", ref:"D5"},
	{ name:"Serpentil Books & Folios", color:"#FF00FF", x:2359, y:4840, txt:"<p>Business</p>", ref:"D10"},
	{ name:"Lanternmaker Zorth Ulmaril", color:"#FF00FF", x:2096, y:5261, txt:"<p>Business</p>", ref:"D16"},
	{ name:"Aurora's Realms Shop, Zastrow Street Catalogue Counter", color:"#FF00FF", x:2408, y:5338, txt:"<p>Business</p>", ref:"D24"},
	{ name:"House of Pride Perfumes", color:"#FF00FF", x:2475, y:5493, txt:"<p>Business</p>", ref:"D33"},
	{ name:"Felhaur's Fine Fish", color:"#FF00FF", x:2456, y:5650, txt:"<p>Business. Food.</p>", ref:"D37"},
	{ name:"Khostal Hannass, Fine Nuts", color:"#FF00FF", x:2483, y:5608, txt:"<p>Business. Food.</p>", ref:"D38"},
	{ name:"Nestaur the Ropemaker", color:"#FF00FF", x:2509, y:5853, txt:"<p>Adventuring gear</p>", ref:"D40"},
	{ name:"Torpus the Tanner", color:"#FF00FF", x:2693, y:5935, txt:"<p>Business</p>", ref:"D45"},
	{ name:"Melgard's Fine Leathers", color:"#FF00FF", x:2929, y:5945, txt:"<p>Business. Clothing.</p>", ref:"D48"},
	{ name:"Telethar Leatherworks", color:"#FF00FF", x:2745, y:6029, txt:"<p>Adventuring gear. League of Skinners & Tanners. Clothing.</p>", ref:"D50"},
	{ name:"Smokehouse", color:"#FF00FF", x:2832, y:6091, txt:"<p>Business. Food.</p>", ref:"D52"},
	{ name:"Gelfuril the Trader", color:"#FF00FF", x:2893, y:6116, txt:"<p>Business. Weapons. Tools.</p><p>This large and sprawling shop is neat and tidy. Two younger men are helping customers. Towards the back of the store is a high desk behind which sits a burly blond gentleman with a full beard, called 'Junior' by his staff.</p>", ref:"D55"},
	{ name:"The Fishscale Smithy", color:"#FF00FF", x:1946, y:5056, txt:"<p>Adventuring gear</p>", ref:"D60"},
	{ name:"Horizon's Sails", color:"#FF00FF", x:2030, y:5217, txt:"<p>Business</p>", ref:"D62"},
	{ name:"Mother Jatha's", color:"#FF00FF", x:2133, y:5069, txt:"<p>Business</p>", ref:"D63"},
	{ name:"Talnu's Ropeworks", color:"#FF00FF", x:1838, y:4983, txt:"<p>Adventuring gear</p>", ref:"D64"},
	{ name:"Merlook Nets & Knotware", color:"#FF00FF", x:2506, y:5566, txt:"<p>Business</p>", ref:"D65"},
	{ name:"Ralagut's Wheelhouse", color:"#FF00FF", x:2175, y:4720, txt:"<p>Business</p>", ref:"D66"},
	{ name:"The Old Xoblob Shop", color:"#FF00FF", x:2412, y:5429, txt:"<p>This curiosity shop is filled with lots of battle trophies and souvenirs from Undermountain. Worth a look to see the stuffed beholder for which the shop is named. The shopkeeper is a deep gnome.</p>", ref:"D71"},
	{ name:"The Redbridle Stables", color:"#FF00FF", x:2970, y:4791, txt:"<p>Business. Mounts.</p>", ref:"S4"},
	{ name:"Brian the Swordmaster's Smithy", color:"#FF00FF", x:2652, y:5018, txt:"<p>Armor. Weapons.</p>", ref:"S7"},
	{ name:"The Old Monster Shop", color:"#FF00FF", x:2966, y:5078, txt:"<p>Business. Poisons.</p>", ref:"S8"},
	{ name:"Nelkaush the Weaver", color:"#FF00FF", x:3035, y:5464, txt:"<p>Business. Clothing.</p>", ref:"S12"},
	{ name:"Tehmak's Coaches", color:"#FF00FF", x:2902, y:5633, txt:"<p>Business</p>", ref:"S16"},
	{ name:"Hlakken Stables", color:"#FF00FF", x:3021, y:5600, txt:"<p>Business. Mounts.</p><p>Surrolph Hlakken is a chief information gatherer for the Red Sashes.</p>", ref:"S17"},
	{ name:"Nueth's Fine Nets", color:"#FF00FF", x:2709, y:5715, txt:"<p>Business</p>", ref:"S19"},
	{ name:"Aurora's Realms Shop, South High Road Catalogue Counter", color:"#FF00FF", x:2707, y:5769, txt:"<p>Business</p>", ref:"S21"},
	{ name:"Pelauvir's Counter", color:"#FF00FF", x:2871, y:5859, txt:"<p>Business</p>", ref:"S23"},
	{ name:"Bellister's Hand", color:"#FF00FF", x:2946, y:5805, txt:"<p>Business</p>", ref:"S24"},
	{ name:"Orm's Highbench", color:"#FF00FF", x:2981, y:5874, txt:"<p>Business. Mercenaries.</p>", ref:"S26"},
	{ name:"Athal's Stables", color:"#FF00FF", x:3085, y:5888, txt:"<p>Business. Mounts.</p>", ref:"S27"},
	{ name:"Essimuth's Equipment", color:"#FF00FF", x:2633, y:5232, txt:"<p>Adventuring gear. Tools.</p>", ref:"S28"},
	{ name:"Amrani's Laundry", color:"#FF00FF", x:2670, y:5243, txt:"<p>Business</p>", ref:"S31"},
	{ name:"Piatran's Clothiers", color:"#FF00FF", x:2666, y:5256, txt:"<p>Business. Clothing.</p>", ref:"S32"},
	{ name:"Hemmerem's Stables", color:"#FF00FF", x:2708, y:5271, txt:"<p>Business. Mounts.</p>", ref:"S34"},
	{ name:"The Garrulous Grocer", color:"#FF00FF", x:2632, y:5284, txt:"<p>Business. Food.</p>", ref:"S37"},
	{ name:"Krabbellor Silversmiths", color:"#FF00FF", x:2690, y:5314, txt:"<p>Business</p>", ref:"S38"},
	{ name:"Laran' Cartographers", color:"#FF00FF", x:2663, y:5318, txt:"<p>Business</p>", ref:"S39"},
	{ name:"Waukeen's Wares", color:"#FF00FF", x:2638, y:5318, txt:"<p>Located on Grocer's Lane is a small moneylenders and pawn shop with an old copper sign of Waukeen swinging in the breeze out front. Within is a cluttered, hopelessly disorganized (to all but the owner) shop of curios, trinkets, and some valuable items pawned for quick sums of pocket money. The proprietor, a bald little human by the name of Alek Lenter, is a hyperactive, skinny fellow who can't sit still for more than 10 seconds at a time. He is more than happy to accept nearly anything of value and pay up to 70% of what it's worth; of course, the interest fees are 12% per tenday to buy back the same item, and few return to pick up their goods.<br/>After four months, items are for sale at 90-100% of their value to all but the original seller. Despite Alek's apparent harmlessness, people who cheated him have never been seen after they've left his shop.</p>", ref:"S40"},
	{ name:"The Daily Trumpet", color:"#FF00FF", x:2628, y:5390, txt:"<p>Business</p>", ref:"S45"},
	{ name:"The Medusa's Glare", color:"#FF00FF", x:2595, y:5340, txt:"<p>Business</p>", ref:"S48"},
	{ name:"Flame of Hope", color:"#FF00FF", x:2815, y:4961, txt:"<p>Business</p>", ref:"S49"},
	{ name:"Berendarr's World of Words", color:"#FF00FF", x:2884, y:5802, txt:"<p>A bookshop well in excess of a century old, owned by Master Berendarr, a shield dwarf, who is now in his dotage. Its massive shelves are tall, and many are packed with books not out in the public in fifty years or more. It has no system of cataloguing, so shopping here is a little more like treasure-hunting.</p>", ref:"S50"},
	{ name:"Hlethvagi's Coins", color:"#FF00FF", x:2767, y:5709, txt:"<p>Business. Moneylender.</p>", ref:"S51->S48b"},
	{ name:"Sea Elf Trading Outpost", color:"#FF00FF", x:3405, y:6594, txt:"<p>Business. Food.</p>", ref:"H6"},
	{ name:"Zephyr Post", color:"#FF00FF", x:2367, y:1637, txt:"<p>Birds of all colors can be seen delivering letters through the upper windows of this sky-blue townhouse at all hours of the day. The residents of Trollskull Alley and other nearby streets use the Zephyr Post to deliver letters to friends, colleagues, and mercenaries throughout Waterdeep. The inside of the shop is filled with the sweet aroma of Calishite incense.</p><p>The Zephyr Postâ€™s hawks can deliver a message to any address in Waterdeep for 2 sp. Additionally, mercenaries and other hirelings can be contracted through the Zephyr Post. By sending a hawk and attaching their fee in advance, an NPC hireling will arrive at the charactersâ€™ residence the next morning. There are only so many mercenaries in Waterdeep, and you may deny any unreasonable requests.</p>", ref:""},
	{ name:"Thortâ€™s Findings", color:"#FF00FF", x:2613, y:2140, txt:"<p>The head of the Swordmaiden sits in a stand of tall trees in the center of the block of the North Ward bounded by Hassantyrâ€™s Street, Tarsarâ€™s Street, Whaelgond Way, and Ussilbran Street. The center of its jaw and mouth have been replaced by a door, which leads into the shop known as Thortâ€™s Findings. Undevvur Thort is a wizened ex-adventurer who leans on a cane (which some locals insist is more than just a cane). He lives in the small shop, whose many levels, staircases, and landings fill the hollowed-out interior of the head, and which is crammed with oddments sold to Thort by adventurers and other travelers. These items bear little placards in Thortâ€™s beautiful, flowing handwriting that identify them (or at least provide speculation as to their origin and purpose).</p>", ref:""},
	{ name:"The Grand Salle", color:"#FF00FF", x:1882, y:2206, txt:"<p>The Grand Salle is a highly respected school of the fighting arts operated by House Agundar.</p>"},
	{ name:"Waterdeep Wazoo", color:"#FF00FF", x:2771, y:1474, txt:"<p>The Waterdeep Wazoo is one of Waterdeep's Premier tabloid.</p>"},
	{ name:"Bronzeleaf Bowyers", color:"#FF00FF", x:2181, y:1396, txt:"<p>Bronzeleaf Bowyers is a weapons shop specializing in ranged weapons, primarily longbows, shortbows, and crossbows. It is owned by Quildor and Roseani Bronzeleaf.</p>"},
	{ name:"Verdas' potions and poisons", color:"#FF00FF", x:2933, y:5330, txt:"<p>Business. Potions & poisons.</p><p>Run by an old lizardfolk with more then a few screws loose, this shop sells a wide variety of potions and potent poisons at a reasonable price.</p>"},
	{ name:"Sword Coast Traders' Bank", color:"#FF00FF", x:2877, y:5489, txt:"<p>In addition to serving as a normal bank, providing loans and wealth-keeping services, this holding of House Anteos is also capable of taking in coin in one of its three locations (Waterdeep, Baldur's Gate, and Daggerford), and communicating those numbers to any of its other branches magically, almost instantaneously. Rather than risking transporting coin on caravan or shipping routes, merchants moving between one of these three sites may simply place coin in their keeping in one spot, and come by to withdraw it from another (for a modest fee).</p>"},
	{ name:"Telvar's Tipples", color:"#FF00FF", x:2810, y:4725, txt:"<p>Only all-night wine shop in South Ward.</p>"},
	{ name:"Dandy Mops", color:"#FF00FF", x:2313, y:3885, txt:"<p>Wig shop that provides access to the sewers and Lossar Miklave's lair.</p>"},
	{ name:"Weirdbottle's Concoctions", color:"#FF00FF", x:2260, y:3103, txt:"<p> Weirdbottle's Concoctions is managed Skeemo Weirdbottle. This rock gnome sold non-magical potions.</p>"},
	{ name:"Ohmtalakar's Fine Gems ", color:"#FF00FF", x:1563, y:1422, txt:"<p>Located on the second floor.</p>"},
	{ name:"Chanszobur's Manywares", color:"#FF00FF", x:1565, y:1447, txt:"<p>Glittering and highly regarded store. Favorite of nobles. Expensive but superior merchandise.</p>"},
	{ name:"Kiana's Mystericum", color:"#FF00FF", x:2436, y:4049, txt:"<p>The shop can be reached through a flight of stone stairs leading underground behind the House of Song. On the way down there are niches covered in thick spider webs from which eminates a faint glow of green light. Once at the bottom there is a stone entrance with an old door, covered in blistering paint. One can still faintly see painted letters spelling out 'Kiana's Mystericum - Shop for books, the wonderful and the weird'.</p>"},
	{ name:"Blackwell's Fine Books and Good Tomes", color:"#FF00FF", x:1470, y:2391, txt0:"<p>Owned and operated by the Blackwell Family. Specializing in rare prints, restoration, document preservation, and The Bookstore occupies the bottom of a three story building in the shadow of The God Catcher. The upper two stories are the Blackwell's lavish townhome apartment.</p>"},
];

var warehouses = [
	{ name:"House of Crystal Storage", color:"#000066", x:1849, y:2481, txt:"<p>Warehouse</p>", ref:"N45"},
	{ name:"Palace Storage", color:"#000066", x:1129, y:3725, txt:"<p>Warehouse</p>", ref:"C18"},
	{ name:"Hilmer Storage", color:"#000066", x:1923, y:3776, txt:"<p>Warehouse</p>", ref:"C22"},
	{ name:"Crammer's Warehouse", color:"#000066", x:1257, y:4611, txt:"<p>Warehouse</p>", ref:"C51"},
	{ name:"League of Basketmakers & Wickerworkers Storage", color:"#000066", x:2605, y:4001, txt:"<p>Warehouse</p>", ref:"T21"},
	{ name:"House of Light Storage", color:"#000066", x:2411, y:4218, txt:"<p>Warehouse</p>", ref:"T30"},
	{ name:"Dhaermos Storage", color:"#000066", x:1522, y:4743, txt:"<p>Warehouse</p>", ref:"D4"},
	{ name:"Helmstar Warehouse", color:"#000066", x:1829, y:5316, txt:"<p>Warehouse</p>", ref:"D14"},
	{ name:"Red Sails", color:"#000066", x:2061, y:5467, txt:"<p>Warehouse</p>", ref:"D20"},
	{ name:"Shippers' Storage", color:"#000066", x:2187, y:5554, txt:"<p>Warehouse</p>", ref:"D29"},
	{ name:"The House of Tarmagus", color:"#000066", x:2249, y:5583, txt:"<p>A nondescript warehouse complex in the Dock Ward that rents out its space to those needing to store goods. Concealed in its cavernous cellar is the The Keelhauled Dwarf, a subterranean tavern with low ceilings, good dwarf-brewed ale, and a dark, smoky ambiance. It is favored by duergar and their ilk, as well as many of the city's half-orcs, thugs, and ruffians.</p>", ref:"D30"},
	{ name:"Thomm Storage", color:"#000066", x:2871, y:5983, txt:"<p>Warehouse</p>", ref:"D49"},
	{ name:"Fellowship Storage", color:"#000066", x:2785, y:6073, txt:"<p>Warehouse</p>", ref:"D51"},
	{ name:"Maernath Storage", color:"#000066", x:2433, y:5023, txt:"<p>Warehouse</p>", ref:"D69"},
	{ name:"Alex Lenter's Storage", color:"#000066", x:1512, y:4639, txt:"<p>Warehouse</p>", ref:"D70"},
	{ name:"Bellister's House", color:"#000066", x:2978, y:5830, txt:"<p>Warehouse</p>", ref:"S25"},
	{ name:"Ingerr & Ingerr Warehouses", color:"#000066", x:2714, y:5354, txt:"<p>Warehouse</p>", ref:"S42"},
];

var nobleVillas = [
	{ name:"Adarbrent Villa", color:"#F4900A", x:1810, y:2393, txt:"<p>Noble villa. House Adarbrent is one Waterdeep's leading shipping clans, with strong ties to the navy and the Master Mariners' Guild.</p>", ref:"N39"},
	{ name:"Agundar Villa", color:"#F4900A", x:1878, y:2132, txt:"<p>Noble villa. House Agundar operates several mercenary companies and runs the Grand Salle, a school of the fighting arts.</p>", ref:"N33"},
	{ name:"Amcathra Villa", color:"#F4900A", x:2128, y:2250, txt:"<p>Noble villa. House Amcathra has a long and distinguished history in the service of Waterdeep, and a wide variety of trading interests. Tethyrian family.</p>", ref:"N34"},
	{ name:"Ammakyl Villa", color:"#F4900A", x:1848, y:1374, txt:"<p>Noble villa. House Ammakyl was a Waterdeep noble family known for being farmers and vintners. Their manor was located between Copper Street and Shield Street.</p>", ref:"$27"},
	{ name:"Anteos Villa", color:"#F4900A", x:2439, y:1089, txt:"<p>Noble villa.</p>", ref:"N3"},
	{ name:"Artemel Villa", color:"#F4900A", x:1665, y:1419, txt:"<p>Noble villa.</p>", ref:"$26"},
	{ name:"Assumbar Villa", color:"#F4900A", x:1048, y:1688, txt:"<p>Noble villa. Houses the small temple to Siamorphe who is a demigod of Nobility.</p>", ref:"$47"},
	{ name:"Belabranta Villa", color:"#F4900A", x:1450, y:1840, txt:"<p>Noble villa.</p>", ref:"$52"},
	{ name:"Bladesemmer Villa", color:"#F4900A", x:1638, y:1856, txt:"<p>Noble villa.</p>", ref:"$53"},
	{ name:"Brokengulf Villa", color:"#F4900A", x:1359, y:1140, txt:"<p>Noble villa.</p>", ref:"$11"},
	{ name:"Brossfeather Villa", color:"#F4900A", x:2230, y:1105, txt:"<p>Noble villa.</p>", ref:"N2"},
	{ name:"Cassalanter Villa", color:"#F4900A", x:1139, y:1657, txt:"<p>Noble villa.</p>", ref:"$48"},
	{ name:"Cragsmere Villa", color:"#F4900A", x:1992, y:1496, txt:"<p>Noble villa.</p>", ref:"N13"},
	{ name:"Crommor Villa", color:"#F4900A", x:2152, y:1275, txt:"<p>Noble villa.</p>", ref:"N6"},
	{ name:"Dezlentyr Villa", color:"#F4900A", x:1272, y:1685, txt:"<p>Noble villa.</p>", ref:"$51"},
	{ name:"Durinbold Villa", color:"#F4900A", x:2238, y:1989, txt:"<p>Noble villa.</p>", ref:"N28"},
	{ name:"Eagleshield Villa", color:"#F4900A", x:1221, y:1845, txt:"<p>Noble villa.</p>", ref:"$50"},
	{ name:"Eirontalar Villa", color:"#F4900A", x:1283, y:1481, txt:"<p>Noble villa.</p>", ref:"$33"},
	{ name:"Eltorchul Villa", color:"#F4900A", x:1205, y:1227, txt:"<p>Noble villa. Also serves as an Academy for the arcane.</p>", ref:"$22"},
	{ name:"Emveolstone Villa", color:"#F4900A", x:794, y:1204, txt:"<p>Noble villa.</p>", ref:"$6"},
	{ name:"Estelmer Villa", color:"#F4900A", x:2340, y:2072, txt:"<p>Noble villa.</p>", ref:"N29"},
	{ name:"Gauntyl Villa", color:"#F4900A", x:1147, y:1172, txt:"<p>Noble villa.</p>", ref:"$9"},
	{ name:"Gost Villa", color:"#F4900A", x:2546, y:2657, txt:"<p>Noble villa.</p>", ref:"N57"},
	{ name:"Gralhund Villa", color:"#F4900A", x:2669, y:1636, txt:"<p>Noble villa.</p>", ref:"N20"},
	{ name:"Gundwynd Villa", color:"#F4900A", x:1467, y:1409, txt:"<p>Noble villa.</p>", ref:"$24"},
	{ name:"Hawkwinter Villa", color:"#F4900A", x:2553, y:1394, txt:"<p>Noble villa.</p>", ref:"N11"},
	{ name:"Helmfast Villa", color:"#F4900A", x:2667, y:2653, txt:"<p>Noble villa.</p>", ref:"N58"},
	{ name:"Hiilgauntlet Villa", color:"#F4900A", x:934, y:1230, txt:"<p>Noble villa.</p>", ref:"$7"},
	{ name:"Hunabar Villa", color:"#F4900A", x:2238, y:2130, txt:"<p>Noble villa.</p>", ref:"N35"},
	{ name:"Husteem Villa", color:"#F4900A", x:938, y:1479, txt:"<p>Noble villa.</p>", ref:"$31"},
	{ name:"Hothemer Villa", color:"#F4900A", x:2380, y:2520, txt:"<p>Noble villa. Home to House Hothemer, a wealthy merchant family ennobled in 1248 DR.</p>", ref:"N52"},
	{ name:"Ilitul Villa", color:"#F4900A", x:767, y:1254, txt:"<p>Noble villa.</p>", ref:"$17"},
	{ name:"Ilzimmer Villa", color:"#F4900A", x:868, y:1563, txt:"<p>Noble villa.</p>", ref:"$40"},
	{ name:"Irlingstar Villa", color:"#F4900A", x:1559, y:1651, txt:"<p>Noble villa.</p>", ref:"$35"},
	{ name:"Ilvastarr Villa", color:"#F4900A", x:2835, y:2470, txt:"<p>Noble villa.</p>", ref:"N53"},
	{ name:"Jardeth Villa", color:"#F4900A", x:2552, y:1711, txt:"<p>Noble villa. The Jardeth family headquarters was a walled compound of two-story buildings surrounding some gardens located in the North Ward of Waterdeep.</p>", ref:"N19"},
	{ name:"Jhansczil Villa", color:"#F4900A", x:1988, y:1136, txt:"<p>Noble villa.</p>", ref:"$14"},
	{ name:"Kormallis Villa", color:"#F4900A", x:2708, y:2166, txt:"<p>Noble villa.</p>", ref:"N38"},
	{ name:"Kothont Villa", color:"#F4900A", x:1884, y:1721, txt:"<p>Noble villa.</p>", ref:"N15"},
	{ name:"Lanngolyn Villa", color:"#F4900A", x:2123, y:1694, txt:"<p>Noble villa.</p>", ref:"N17"},
	{ name:"Lathkule Villa", color:"#F4900A", x:2544, y:2160, txt:"<p>Noble villa.</p>", ref:"N37"},
	{ name:"Maerklos Villa", color:"#F4900A", x:2361, y:1873, txt:"<p>Noble villa.</p>", ref:"N22"},
	{ name:"Majarra Villa", color:"#F4900A", x:2703, y:2006, txt:"<p>Noble villa. House Majarra is an old family descended from Delimbiyran nobility. They are in the business of harping, harp-making, and silver mining.</p>", ref:"N31"},
	{ name:"Manthar Villa", color:"#F4900A", x:1733, y:1607, txt:"<p>Noble villa.</p>", ref:"$36"},
	{ name:"Margaster Villa", color:"#F4900A", x:2401, y:2353, txt:"<p>Noble villa. Illuskan family with business in land-based shipping and bulk goods trading.</p>", ref:"N41"},
	{ name:"Massalan Villa", color:"#F4900A", x:2142, y:1631, txt:"<p>Noble villa.</p>", ref:"N14"},
	{ name:"Moonstar Villa", color:"#F4900A", x:942, y:1831, txt:"<p>Noble villa. House Moonstar is one of Waterdeep's oldest families, with strong ties to the Church of Selune, the Master Mariners' Guild, and the Surveyors', Map & Chart-makers' Guild.</p>", ref:"$57"},
	{ name:"Melshimber' Villa", color:"#F4900A", x:712, y:1321, txt:"<p>Noble villa.</p>", ref:"$16"},
	{ name:"Mitsunari Villa", color:"#F4900A", x:1701, y:2080, txt:"<p>House Mitsunari is a transplant house from Kozakura, a region in Kara-Tur. They are a merchant family that specializes in fine silks, dyes, and porcelain.</p>"},
	{ name:"Nandar Villa", color:"#F4900A", x:2452, y:1822, txt:"<p>Noble villa.</p>", ref:"N23"},
	{ name:"Nesher Villa", color:"#F4900A", x:1371, y:1290, txt:"<p>Noble villa.</p>", ref:"$23"},
	{ name:"Phaulkonmere", color:"#F4900A", x:2660, y:5353, txt:"<p>Noble villa. The walls of this noble villa, owned by descendants of two wealthy families - the Tarms and the Phaulkons - enclose fabulous gardens, and the buildings are covered with moss and ivy.</p>", ref:"S44"},
	{ name:"Phylund Villa", color:"#F4900A", x:1959, y:2395, txt:"<p>Noble villa. Tashlutar family that captures and sells monsters.</p>", ref:"N40"},
	{ name:"Piiradost Villa", color:"#F4900A", x:2209, y:1310, txt:"<p>Noble villa.</p>", ref:"N7"},
	{ name:"Raventree Villa", color:"#F4900A", x:1544, y:1197, txt:"<p>Noble villa.</p>", ref:"$12"},
	{ name:"Rosznar Villa", color:"#F4900A", x:1892, y:1122, txt:"<p>Noble villa. Tethyrian family with business in wine-making and gem trading.</p>", ref:"$13"},
	{ name:"Roaringhorn Villa", color:"#F4900A", x:2738, y:2292, txt:"<p>Noble villa. Roaringhorn was a noble house of Waterdeep. Both the Waterdhavian and Cormyrean branches of the family had a historical reputation for being bold, impetuous, and living with a zest for life. Their detractors characterized them as reckless, boorish, and lustful.</p>", ref :"N42"},
	{ name:"Ruldegost Villa", color:"#F4900A", x:674, y:1455, txt:"<p>Noble villa.</p>", ref:"$29"},
	{ name:"Silmerhelve Villa", color:"#F4900A", x:2036, y:1344, txt:"<p>Noble villa. Silmerhelve is one of the older noble houses; traditionally their trade and business interest include guardianship, warrior-training and pandering. The Silmerhelve's history seems almost charmed in comparison to so many of their fellows. The Wailing Years seem to have affected them almost not at all, with their businesses booming. Of course, the fact that their essential identity is centered around the idea of protecting folk just means they had more than enough work to keep them secure and prosperous. The wall surrounding Shieldwatch seems prepared for war: it is ten feet tall and of an imposing thickness. It is also dotted with arrow slit openings every ten feet.</p>", ref:"$28"},
	{ name:"Snome Villa", color:"#F4900A", x:2582, y:1216, txt:"<p>Noble villa.</p>", ref:"N5"},
	{ name:"Stormweather Villa", color:"#F4900A", x:2641, y:1819, txt:"<p>Noble villa.</p>", ref:"N24"},
	{ name:"Sultlue Villa", color:"#F4900A", x:1884, y:1497, txt:"<p>Noble villa.</p>", ref:"N12"},
	{ name:"Talmost Villa", color:"#F4900A", x:2116, y:1411, txt:"<p>Noble villa. The lavish family home to the Talmost noble family.</p>", ref:"N9"},
	{ name:"Tarm Villa", color:"#F4900A", x:2575, y:2002, txt:"<p>Noble villa.</p>", ref:"N30"},
	{ name:"Tchazzam Villa", color:"#F4900A", x:718, y:1703, txt:"<p>Noble villa.</p>", ref:"$44"},
	{ name:"Tesper Villa - Tespergates", color:"#F4900A", x:1329, y:1621, txt:"<p>Noble villa.</p>", ref:"$34"},
	{ name:"Thann Villa", color:"#F4900A", x:2410, y:1356, txt:"<p>Noble villa. House Thann is one of Waterdeep's leading vintners, with large land-holdings in the South and strong ties to Blackstaff Tower. They have strong ties with the Vintners', Distillers' & Brewers' Guild.</p>", ref:"N10"},
	{ name:"Thongolir Villa", color:"#F4900A", x:1166, y:1818, txt:"<p>Noble villa.</p>", ref:"$49"},
	{ name:"Thorp Villa", color:"#F4900A", x:2344, y:2188, txt:"<p>Noble villa.</p>", ref:"N36"},
	{ name:"Thunderstaff Villa", color:"#F4900A", x:2270, y:1207, txt:"<p>Noble villa.</p>", ref:"N8"},
	{ name:"Ulbrinter Villa", color:"#F4900A", x:2350, y:1699, txt:"<p>Noble villa. Remallia Haventree is the lady of House Ulbrinter. She became an active force for good in the city after assassins killed her husband, Arthagast Ulbrinter.</p>", ref:"N18"},
	{ name:"Urmbrusk Villa", color:"#F4900A", x:902, y:1695, txt:"<p>Noble villa of House Urmbrusk, who made their wealth on money lending and land-owning and rose to political power in Waterdeep.</p>", ref:"$46"},
	{ name:"Wands Villa", color:"#F4900A", x:2328, y:2665, txt:"<p>Noble villa. House Wands is one of Waterdeep's leading magecraft clans, with strong ties to the Watchful Order of Magists & Protectors and Blackstaff Tower.</p>", ref:"N55"},
	{ name:"Wavesilver Villa", color:"#F4900A", x:1027, y:1335, txt:"<p>Noble villa.</p>", ref:"$20"},
	{ name:"Zulpair Villa", color:"#F4900A", x:1133, y:1543, txt:"<p>Noble villa.</p>", ref:"$32"},
	{ name:"Zun Villa", color:"#F4900A", x:2946, y:2270, txt:"<p>Noble villa.</p>", ref:"N44"},
];

var placesAndStreets = [
	{ name:"Field of Triumph", color:"#FFFFFF", x:624, y:2230, txt:"<p>Huge open-air stadium. Site of many spectacles staged for the populace of Waterdeep.</p>", ref:"$77"},
	{ name:"Fetlock Court", color:"#FFFFFF", x:1087, y:3590, txt:"<p>Large paved courtyard adjoining the Palace paddocks and stables. Staging area for any mounted contingent of the guard before they head out of the city for outlying patrols.</p>", ref:""},
	{ name:"The Market", color:"#FFFFFF", x:1548, y:2719, txt:"<p>Open marketplace. Largest open space in the city surrounded by stone buildings that enclose the maze of temporary stalls and carts that appear here day and night.</p>", ref:""},
	{ name:"Blackstaff Tower", color:"#FFFFFF", x:989, y:2842, txt:"<p>Blackstaff is the title and name given to the master of the eponymous staff and the Archmage of Waterdeep. Vajra Safahr Vajra, a young woman from Tethyr, is the current Blackstaff.</p>", ref:"C6"},
	{ name:"The Cynosure", color:"#FFFFFF", x:1369, y:2660, txt:"<p>Since 1359, the Lords of Waterdeep annexed this former temple building and put it to use as a public hall, available for rent by nobles and wealthy merchants for parties, balls, weddings, and other events.</p>", ref:"C7"},
	{ name:"New Olamn's academy of music and other arts", color:"#FFFFFF", x:712, y:2701, txt:"<p>Prominent center of education and bardcraft, constantly exposed to the sea winds and spray of the ocean below.</p>", ref:"C72"},
	{ name:"Waymoot", color:"#FFFFFF", x:2930, y:5895, txt:"<p>High signpost mounted in the middle of the crossroads with hanging arrows pointing toward the harbor and each of the city gates. It magically directs travelers to locations spoken into a crystal on the post.</p>", ref:""},
	{ name:"Roads' End", color:"#FFFFFF", x:2804, y:3318, txt:"<p>Vault. Final resting place for travelers who die while in the city.</p>", ref:"CD1"},
	{ name:"The House of the Homeless", color:"#FFFFFF", x:2487, y:3468, txt:"<p>Tomb. Vast mausoleum with a row of low steps leading up to its high metal gates. Leads to an endless labyrinth of underground caverns where lie all the dead of Waterdeep who do not merit a place in any other tomb.</p>", ref:"CD2"},
	{ name:"Ahghairon's Statue", color:"#FFFFFF", x:2619, y:3343, txt:"<p>Tomb. A tall, marble sculpture of a bearded, robed wizard standing atop concentric steps and facing west toward the skyline of Waterdeep, his hands outstretched and a broad smile on his face.</p>", ref:"CD3"},
	{ name:"Merchants' Rest", color:"#FFFFFF", x:2566, y:3521, txt:"<p>Tomb. Reserved for those who prepay for the honor of burial here.</p>", ref:"CD4"},
	{ name:"Warriors' Monument", color:"#FFFFFF", x:2680, y:3551, txt:"<p>Tomb and fountain. It depicts a circle of women and men striking down trolls, orcs, hobgoblins, bugbears, and barbarians. The wounds on these combatants gush water!</p>", ref:"CD5"},
	{ name:"Lords' Respite", color:"#FFFFFF", x:2751, y:3739, txt:"<p>Tomb. Resting place of those Lords who wish to be buried in state.</p>", ref:"CD6"},
	{ name:"The Hall of the Sages", color:"#FFFFFF", x:2633, y:3807, txt:"<p>Special tomb for sages.</p>", ref:"CD7"},
	{ name:"The Hall of Heroes", color:"#FFFFFF", x:2743, y:3892, txt:"<p>Tomb. Official warriors' tomb of Waterdeep, for fighters and all who fall in battle.</p>", ref:"CD8"},
	{ name:"Deepwinter Vault", color:"#FFFFFF", x:2668, y:3053, txt:"<p>Tomb of the nowvanished Deepwinter family.</p>", ref:"CD10"},
	{ name:"Sultlue Vault", color:"#FFFFFF", x:2518, y:3284, txt:"<p>Tomb.</p>", ref:"CD14"},
	{ name:"Mariners' Rest", color:"#FFFFFF", x:2820, y:3992, txt:"<p>Tomb.</p>", ref:"CD9"},
	{ name:"Brandath Mausoleum", color:"FFFFFF", x:2761, y:3169, txt:"<p>Brandath family Mausoleum. Four generations of the Brandath family lie here.</p>"},
	{ name:"Stormhaven Island", color:"#FFFFFF", x:281, y:5874, txt:"<p>Island</p>", ref:""},
	{ name:"Deepwater Isle", color:"#FFFFFF", x:1306, y:6728, txt:"<p>Island</p>", ref:""},
	{ name:"Lhestyn's Court", color:"#FFFFFF", x:1980, y:1216, txt:"<p>Court</p>", ref:""},
	{ name:"Trollskull Alley", color:"#FFFFFF", x:2381, y:1612, txt:"<p>Street</p>", ref:""},
];

var misc = [
	{ name:"Naingate", color:"#AAAAAA", x:671, y:1393, txt:"<p>Wizard's domicile.</p>", ref:"$15"},
	{ name:"Tessalar's Tower", color:"#AAAAAA", x:1557, y:1309, txt:"<p>Wizard's domicile.</p>", ref:"$25"},
	{ name:"Furjur the Flippant's residence", color:"#AAAAAA", x:934, y:1023, txt:"<p>House.</p>", ref:"$67"},
	{ name:"Hlethvagi Anteos's residence", color:"#AAAAAA", x:1327, y:1417, txt:"<p>Villa.</p>", ref:"$68"},
	{ name:"Stagdown Manse", color:"#AAAAAA", x:1076, y:1091, txt:"<p>Villa.</p>", ref:"$69"},
	{ name:"Myrna Cassalanter's residence", color:"#AAAAAA", x:1131, y:1257, txt:"<p>House</p>", ref:"$78"},
	{ name:"Melody Mount Walk (west)", color:"#AAAAAA", x:735, y:2735, txt:"<p>A magically lit tunnel that runs west up to the cliffs on which the New Olamn barding college is situated. The tunnel contains a little-known portal between Waterdeep and the keep in Rassalantar. The tunnel continuously resounds with music due to an ongoing concert known as the Neverending String of Pearls that is performed by bardic students from New Olamn in a small alcove in the tunnel.</p>"},
	{ name:"Melody Mount Walk (east)", color:"#AAAAAA", x:883, y:2745, txt:"<p>A magically lit tunnel that runs west up to the cliffs on which the New Olamn barding college is situated. The tunnel contains a little-known portal between Waterdeep and the keep in Rassalantar. The tunnel continuously resounds with music due to an ongoing concert known as the Neverending String of Pearls that is performed by bardic students from New Olamn in a small alcove in the tunnel.</p>"},
	{ name:"Kolat's Towers", color:"#AAAAAA", x:2683, y:5287, txt:"<p>Wizards' domiciles</p>", ref:"S35"},
	{ name:"Mirt's Mansion", color:"#AAAAAA", x:771, y:4704, txt:"<p>Villa. Mirt is a friend of Durnan (see The Yawning Portal). Both used magic to extend their lives.</p>", ref:"C52"},
	{ name:"Umberlee's Cache", color:"#AAAAAA", x:1588, y:6106, txt:"<p>Underground caverns completely flooded by sea water. All tithes and donations to Umberlee that are thrown in the bay are sucked into Umberlee's Cache. Guarded by Sea Wraiths that are trapped in Umberlee's Cache by Deepwater Beacon, an undersea lighthouse that prevents the Sea Wraiths from pouring into Waterdeep Harbor.</p>", ref:""},
	{ name:"Thayan Embassy", color:"#AAAAAA", x:1382, y:2526, txt:"<p>Waterdeep's wealth and role as Gateway to the North makes it an obvious choice for a Thayan enclave. Representatives of Thay established an embassy in Castle Ward overlooking the Market between the Sutherlane, Mendever Street, and Trader's Way in 1370 DR. As an embassy, the building is considered sovereign territory of Thay, exempt from the laws of Waterdeep. However, the Lords of Waterdeep flatly rejected the Three Laws of the Enclave, refusing to compromise Waterdeep's sovereignty or countenance the sale of slaves within the city. Because the Red Wizards are careful never to conduct business within the embassy proper, it is in no danger of losing its sovereign status.</p>", ref:"C70"},
	{ name:"The Dragon Tower", color:"#AAAAAA", x:842, y:1501, txt:"<p>Previous home of Aurinax the Gold Dragon, and Maaril the Archmage.</p>", ref:"$30"},
	{ name:"Brandarthall", color:"#AAAAAA", x:1374, y:2134, txt:"<p>Residents are Renaer 'Ren' Neverember (son of Dagult Neverember and Lady Brandarth, sage and book-collector, rake by night), Madrak Salibuck (Renaer calls him 'old hin', white-haired halfling butler, looked out for Renaer since childhood, was servant to Renaers mother) and Bramal Salibuck (Madrak's son, manages bulk of Neverember business as Renaers proxy).</p>", ref:""},
	{ name:"Talebran House", color:"#AAAAAA", x:2181, y:5501, txt:"<p>Lord Talebran's Waterdeep House</p>"},
	{ name:"Fenerus Stormcastle's House", color:"#AAAAAA", x:2688, y:4027, txt:"<p>Fenerus Stormcastle was the founder of the Blood Hawk Posse, a gang of horse-riding brigands that, to this day, harries travelers on the road to Amphail. When he was drummed out of the gang after a botched raid, Fenerus 'retired' to Waterdeep and joined the Guild of Chandlers and Lamplighters. He supplements his income by spying for the city of Luskan and providing his contacts with information on the political climate in Waterdeep, as well as juicy bits of news overheard on his nightly rounds through the Trades Ward.</p>"},
	{ name:"Ordalth House", color:"#AAAAAA", x:1723, y:3452, txt:"<p>Marble four-story villa owned by Renaer Neverember.</p>"},
	{ name:"Madame Garah's Boarding House", color:"#AAAAAA", x:2661, y:5237, txt:"", ref:"S30"},
	{ name:"Fair Winds", color:"#AAAAAA", x:552, y:2536, txt:"<p>Villa. For rent.</p>"},
	{ name:"Chazlauth Yarghorn Residence", color:"#AAAAAA", x:2129, y:2405, txt:"<p>A tall stone house with a tower on one corner. Chazlauth Yarghorn is a so called 'dragon expert' and friend of Naxene Drathkala, the resident mage of Golden Fields. An Illuskan mage who keeps the company of a silver dragon wyrmling named Irizzorl, that he keeps hidden in the tower, along with several cats that the dragon likes to terrorize. The tower is prone to constant racket.</p>"},
	{ name:"Mhair's Tower", color:"#AAAAAA", x:2314, y:3465, txt:"<p>Domicile of the wizard Mhair Szeltune, leader of the Watchful Order of Magists and Protectors till 1372 DR.</p>", ref:"T6"},
	{ name:"Roarke House", color:"#AAAAAA", x:1580, y:928, txt:"<p>An imposing three-story bilding with a well-kept stone front. The interior has an atrium, and the tiles that cover the main floor are beautifully detailed in stars, moons, and pairs of eyes. Built by Volam Roarke, an exceedingly devout worshipper of Selune. Owned by Renaer Neverember and let out as a summer house, usually. It was used it as a gathering place for Renear's secret moonstars-like group, and several of Renaer's friends are intombed in a hall of doors hidden in the cellars below the property.</p>"},
	{ name:"Thantilvur Investments", color:"#AAAAAA", x:2173, y:2462, txt:"<p>A former wealthy citizens private mansion, recently renovated, secret hideout for the Masked Lord Cozandur. Was destroyed durind the Open Lord's spell duel with two mages on the payroll of Braethan Cazondur.</p>"},
];

// // Function to find a folder ID based on the folder name
// function findFolderIdByName(folderName) {
//     console.log("Searching for folder:", folderName);

//     // Search through all folders in the game
//     const folder = game.folders.find(f => f.name === folderName);

//     if (folder) {
//         console.log("Folder found:", folder.name, "with ID:", folder.id);
//         return folder.id;
//     } else {
//         console.log("Folder not found:", folderName);
//         return null;  // Return null if the folder isn't found
//     }
// }

// function printFolders() {
// 	const folders = game.folders;

// 	folders.forEach(folder => {
// 		console.log(`Folder Name: ${folder.name}, ID: ${folder.id}`);
// 	});
// }

function getFolderIdsByNames(folderNames) {
    console.log("Matching folder names:", folderNames);

    // Filter folders that match any name in the folderNames array
    const matchedFolders = game.folders
        .filter(folder => folderNames.includes(folder.name))
        .map(folder => {
            return { name: folder.name, id: folder.id };
        });

    console.log("Matched folder array:", matchedFolders);
    return matchedFolders;
}

function getIdByName(name, foldersArray) {
    const folder = foldersArray.find(folder => folder.name === name);
    return folder ? folder.id : null;  // Returns null if no folder with the name is found
}

async function addData(folderId, icon, data) {
    console.log("Adding data to folder:", folderId);

    for (const interactiveMapData of data) {
        console.log("Processing entry:", interactiveMapData.name);

        // Check if the journal entry already exists
        const existingEntry = game.journal.contents.find(entry => entry.name === interactiveMapData.name);
        console.log("Checking existing journal entry:", game.journal.contents);

        if (existingEntry) {
            console.log("Found existing journal entry:", existingEntry.name);

            // Check if the page already exists in the journal entry
            const existingPage = existingEntry.pages.find(page => page.name === interactiveMapData.name);

            if (existingPage) {
                // If the page exists, update the content
                console.log("Updating existing page:", existingPage.name);
                await existingPage.update({
                    text: {
                        content: interactiveMapData.txt,
                        format: CONST.JOURNAL_ENTRY_PAGE_FORMATS.HTML
                    }
                });
            } else {
                // If the page doesn't exist, add it
                console.log("Adding new page to existing entry:", interactiveMapData.name);
                await existingEntry.createEmbeddedDocuments("JournalEntryPage", [{
                    name: interactiveMapData.name,
                    type: "text",
                    text: {
                        content: interactiveMapData.txt,
                        format: CONST.JOURNAL_ENTRY_PAGE_FORMATS.HTML
                    }
                }]);
            }
        } else {
            // If the journal entry doesn't exist, create a new one
            console.log("Creating new journal entry for:", interactiveMapData.name);
            await JournalEntry.create({
                name: interactiveMapData.name,
                folder: folderId,
                pages: [{
                    name: interactiveMapData.name,
                    type: "text",
                    text: {
                        content: interactiveMapData.txt,
                        format: CONST.JOURNAL_ENTRY_PAGE_FORMATS.HTML
                    }
                }]
            });
        }
    }

    console.log("Data added/updated successfully in folder:", folderId);
}


Hooks.on("canvasReady", async () => {
    console.log("Foundry VTT is ready, running setup...");

    try {
        const folderNames = [
            "City Buildings",
            "Inns & Taverns",
            "Temples",
            "Guildhalls",
            "Businesses",
            "Warehouses",
            "Noble Villas",
            "Places & Streets",
            "Misc"
        ];

        const foldersArray = getFolderIdsByNames(folderNames);
        console.log("Folder IDs retrieved:", foldersArray);

        const dataMap = {
            "City Buildings": { icon: "icons/svg/castle.svg", data: cityBuildings },
            "Inns & Taverns": { icon: "icons/svg/tankard.svg", data: innsTaverns },
            "Temples": { icon: "icons/svg/temple.svg", data: temples },
            "Guildhalls": { icon: "icons/svg/chest.svg", data: guildHalls },
            "Businesses": { icon: "icons/svg/hanging-sign.svg", data: businesses },
            "Warehouses": { icon: "icons/svg/barrel.svg", data: warehouses },
            "Noble Villas": { icon: "icons/svg/house.svg", data: nobleVillas },
            "Places & Streets": { icon: "icons/svg/bridge.svg", data: placesAndStreets },
            "Misc": { icon: "icons/svg/city.svg", data: misc }
        };

        // Iterate over each folder and add/update corresponding data
        for (const folderName of folderNames) {
            const folderId = getIdByName(folderName, foldersArray);
            if (folderId) {
                const { icon, data } = dataMap[folderName];
                await addData(folderId, icon, data);
            } else {
                console.warn(`Folder '${folderName}' not found in the foldersArray.`);
            }
        }

        console.log("Setup completed successfully.");
    } catch (error) {
        console.error("Error during setup:", error);
    }
});
