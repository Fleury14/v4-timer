// @flow
import type { Quest, Boss } from '../types/types';

const bosses: Boss[] = [{
    slug: 'dmist',
    title: 'D. Mist',
    id: 1,
    iconFile: 'FFIVFE-Bosses-1MistD-Color.png'
},
{
    slug: 'officer',
    title: 'Kaipo Guards',
    id: 2,
    iconFile: 'FFIVFE-Bosses-2Soldier-Color.png',

},
{
    slug: 'octomamm',
    title: 'Octomamm',
    id: 3,
    iconFile: 'FFIVFE-Bosses-3Octo-Color.png'
},
{
    slug: 'antlion',
    title: 'Antlion',
    id: 4,
    iconFile: 'FFIVFE-Bosses-4Antlion-Color.png',
},
{
    slug: 'waterhag',
    title: 'WaterHag',
    id: 5,
    iconFile: 'FFIVFE-Bosses-5WHag-Color.png'
},
{
    slug: 'mombomb',
    title: 'Mom Bomb',
    id: 6,
    iconFile: 'FFIVFE-Bosses-6Mombomb-Color.png',
},
{
    slug: 'fabulgauntlet',
    title: 'Fabul Gauntlet',
    id: 7,
    iconFile: 'FFIVFE-Bosses-7Gauntlet-Color.png',
},
{
    slug: 'milon/',
    title: 'Milon',
    id: 8,
    iconFile: 'FFIVFE-Bosses-8Milon-Color.png',
},
{
    slug: 'milonz',
    title: 'Milon-Z',
    id: 9,
    iconFile: 'FFIVFE-Bosses-9MilonZ-Color.png'
},
{
    slug: 'mirrorcecil',
    title: 'Dark Knight',
    id: 10,
    iconFile: 'FFIVFE-Bosses-10DKCecil-Color.png',
},
{
    slug: 'guard',
    title: 'Baron Guards',
    id: 11,
    iconFile: 'FFIVFE-Bosses-11Guards-Color.png',
},
{
    slug: 'karate',
    title: 'Karate',
    id: 12,
    iconFile: 'FFIVFE-Bosses-12Yang-Color.png',
},
{
    slug: 'baigan',
    title: 'Baigan',
    id: 13,
    iconFile: 'FFIVFE-Bosses-13Baigan-Color.png',
},
{
    slug: 'kainazzo',
    title: 'Kainazzo',
    id: 14,
    iconFile: 'FFIVFE-Bosses-14Kainazzo-Color.png',
},
{
    slug: 'darkelf',
    title: 'Dark Elf',
    id: 15,
    iconFile: 'FFIVFE-Bosses-15DElf-Color.png',
},{
    slug: 'magus',
    title: 'Magus Sisters',
    id: 16,
    iconFile: 'FFIVFE-Bosses-16MagusSis-Color.png',
},
{
    slug: 'valvalis',
    title: 'Valvalis',
    id: 17,
    iconFile: 'FFIVFE-Bosses-17Valvalis-Color.png',
},
{
    slug: 'calbrena',
    title: 'Calbrena',
    id: 18,
    iconFile: 'FFIVFE-Bosses-18Calcabrina-Color.png',
},
{
    slug: 'golbez',
    title: 'Golbez',
    id: 19,
    iconFile: 'FFIVFE-Bosses-19Golbez-Color.png' 
},
{
    slug: 'lugae',
    title: 'Dr. Lugae',
    id: 20,
    iconFile: 'FFIVFE-Bosses-20Lugae-Color.png',
},
{
    slug: 'darkimp',
    title: 'Dark Imps',
    id: 35,
    iconFile: 'FFIVFE-Bosses-35DarkImps-Color.png'
},
{
    slug: 'kingqueen',
    title: 'K/Q Eblan',
    id: 21,
    iconFile: 'FFIVFE-Bosses-21Eblan-Color.png',
},
{
    slug: 'rubicant',
    title: 'Rubicant',
    id: 22,
    iconFile: 'FFIVFE-Bosses-22Rubicante-Color.png',
},
{
    slug: 'evilwall',
    title: 'Evil Wall',
    id: 23,
    iconFile: 'FFIVFE-Bosses-23EvilWall-Color.png',
},
{
    slug: 'asura',
    title: 'Asura',
    id: 27,
    iconFile: 'FFIVFE-Bosses-27Asura-Color.png'
},
{
    slug: 'leviatan',
    title: 'Leviatan',
    id: 28,
    iconFile: 'FFIVFE-Bosses-28Leviath-Color.png',
},
{
    slug: 'odin',
    title: 'Odin',
    id: 26,
    iconFile: 'FFIVFE-Bosses-26Odin-Color.png',
},
{
    slug: 'bahamut',
    title: 'Bahamut',
    id: 29,
    iconFile: 'FFIVFE-Bosses-29Bahamut-Color.png',
},
{
    slug: 'elements',
    title: 'Elements',
    id: 24, 
    iconFile: 'FFIVFE-Bosses-24Fiends-Color.png',
},
{
    slug: 'cpu',
    title: 'CPU',
    id: 25,
    iconFile: 'FFIVFE-Bosses-25CPU-Color.png',
},
{
    slug: 'paledim',
    title: 'Pale Dim',
    id: 30,
    iconFile: 'FFIVFE-Bosses-30PaleDim-Color.png',
},
{
    slug: 'wyvern',
    title: 'Wyvern',
    id: 34,
    iconFile: 'FFIVFE-Bosses-34Wyvern-Color.png',
},
{
    slug: 'plague',
    title: 'Plague',
    id: 32,
    iconFile: 'FFIVFE-Bosses-32Plague-Color.png',
},
{
    slug: 'dlunar',
    title: 'D. Lunars',
    id: 31,
    iconFile: 'FFIVFE-Bosses-31LunarD-Color.png'
},
{
    slug: 'ogopogo',
    title: 'Ogopogo',
    id: 33,
    iconFile: 'FFIVFE-Bosses-33Ogopogo-Color.png',
},
{
    slug: 'zeromus',
    title: 'Zeromus',
    id: 36,
    iconFile: 'FFIVFE-Bosses-36Zeromus-Color.png'
},
{
    slug: 'unknown',
    title: '???',
    id: 99,
    iconFile: 'question.png',
}
]


const quests: Quest[] = [{
    slug: 'mistcave',
    title: 'Mist Cave boss',
    buttonText: 'Mist Cave',
}, {
    slug: 'waterfall',
    title: 'Waterfall boss',
    buttonText: 'Waterfall',
}, {
    slug: 'antlionnest',
    title: 'Complete the Antlion Nest',
    buttonText: 'Antion Cave',
}, {
    slug: 'hobs',
    title: 'Rescue the hostage on Mt. Hobs',
    buttonText: 'Mt. Hobbs',
}, {
    slug: 'fabul',
    title: 'Defend Fabul',
    buttonText: 'Fabul',
}, {
    slug: 'ordeals',
    title: 'Complete Mt. Ordeals',
    buttonText: 'Ordeals',
}, {
    slug: 'baroninn',
    title: 'Defeat Baron Inn bosses',
    buttonText: 'Baron Inn',
}, {
    slug: 'baroncastle',
    title: 'Liberate Baron Castle',
    buttonText: 'Baron King',
}, {
    slug: 'magnes',
    title: 'Complete Cave Magnes',
    buttonText: 'Cave Magnes',
}, {
    slug: 'zot',
    title: 'Complete the Tower of Zot',
    buttonText: 'Tower of Zot',
}, {
    slug: 'dwarfcastle',
    title: 'Defeat the bosses of Dwarf Castle',
    buttonText: 'Dwarf Castle',
}, {
    slug: 'lowerbabil',
    title: 'Defeat the boss of Lower Bab-il',
    buttonText: 'Lugae Spot',
}, {
    slug: 'falcon',
    title: 'Launch the Falcon',
    buttonText: 'Launch Falcon',
}, {
    slug: 'sealedcave',
    title: 'Complete the Sealed Cave',
    buttonText: 'Sealed Cave',
}, {
    slug: 'monsterqueen',
    title: 'Asura spot boss',
    buttonText: 'Asura Spot',
}, {
    slug: 'monsterking',
    title: 'Leviatan spot boss',
    buttonText: 'Leviatan Spot',
}, {
    slug: 'baronbasement',
    title: 'Odin spot boss',
    buttonText: 'Odin Spot',
}, {
    slug: 'giant',
    title: 'Complete the Giant of Bab-il',
    buttonText: 'Giant of Bab-il',
}, {
    slug: 'cavebahamut',
    title: 'Complete Cave Bahamut',
    buttonText: 'Cave Bahamut',
}, {
    slug: 'murasamealtar',
    title: 'Vanilla Murasame (Paledim)',
    buttonText: 'Murasame Spot',
}, {
    slug: 'crystalaltar',
    title: 'Vanilla Crystal Sword (Wyvern)',
    buttonText: 'Wyvern Spot',
}, {
    slug: 'whitealtar',
    title: 'Vanilla White Spear (Plague)',
    buttonText: 'Plague Spot',
}, {
    slug: 'ribbonaltar',
    title: 'Vanilla Ribbon (D.Lunars)',
    buttonText: 'D. Lunar Spot',
}, {
    slug: 'masamunealtar',
    title: 'Vanilla Masamune (Ogopogo)',
    buttonText: 'Ogopogo Spot',
}, {
    slug: 'burnmist',
    title: 'Burn the village Mist with the Package',
    buttonText: 'Burn Mist',
}, {
    slug: 'curefever',
    title: 'Cure the fever with the SandRuby',
    buttonText: 'Turn in Sandruby',
}, {
    slug: 'unlocksewer',
    title: 'Unlock the sewer with the Baron Key',
    buttonText: 'Unlock Baron Sewer',
}, {
    slug: 'music',
    title: 'Break the Dark Elf\'s spell with the TwinHarp',
    buttonText: 'Cave Magnes',
}, {
    slug: 'toroiatreasury',
    title: 'Open the Toroia treasury',
    buttonText: 'Toroia Treasury',
}, {
    slug: 'magma',
    title: 'Drop the Magma Key into the Agart well',
    buttonText: 'Turn Magma Key',
}, {
    slug: 'supercannon',
    title: 'Destroy the Super Cannon',
    buttonText: 'Super Cannon',
}, {
    slug: 'unlocksealedcave',
    title: 'Unlock the Sealed Cave',
    buttonText: 'Unlock Sealed Cave',
}, {
    slug: 'bigwhale',
    title: 'Raise the Big Whale',
    buttonText: 'Big Whale',
}, {
    slug: 'traderat',
    title: 'Trade away Rat Tail',
    buttonText: 'Rat Tail',
}, {
    slug: 'forge',
    title: 'Have Kokkol Forge',
    buttonText: 'Kokkol Forge',
}, {
    slug: 'wakeyang',
    title: 'Wake Yang with the Pan',
    buttonText: 'Wake Yang',
}, {
    slug: 'tradepan',
    title: 'Return the Pan to Yang\'s wife',
    buttonText: 'Turn in Pan',
}, {
    slug: 'tradepink',
    title: 'Trade away the Pink Tail',
    buttonText: 'Pink Tail',
}, {
    slug: 'pass',
    title: 'Unlock the Pass door in Toroia',
    buttonText: 'Turn in Pass',
}];

export { quests, bosses }