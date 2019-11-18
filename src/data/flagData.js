// @flow
import type { Quest, Boss } from '../types/types';

const bosses: Boss[] = [{
    slug: 'dmist',
    title: 'D. Mist',
},
{
    slug: 'officer',
    title: 'Kaipo Guards',
},
{
    slug: 'octomamm',
    title: 'Octomamm',
},
{
    slug: 'antlion',
    title: 'D. Mist',
},{
    slug: 'Antlion',
    title: 'D. Mist',
},
{
    slug: 'waterhag',
    title: 'WaterHag',
},
{
    slug: 'mombomb',
    title: 'Mom Bomb',
},
{
    slug: 'milon/',
    title: 'Milon',
},
{
    slug: 'milonz',
    title: 'Milon-Z',
},
{
    slug: 'mirrorcecil',
    title: 'Dark Knight',
},
{
    slug: 'guard',
    title: 'Baron Guards',
},
{
    slug: 'karate',
    title: 'Karate',
},
{
    slug: 'baigan',
    title: 'Baigan',
},
{
    slug: 'kainazzo',
    title: 'Kainazzo',
},
{
    slug: 'darkelf',
    title: 'Dark Elf',
},{
    slug: 'magus',
    title: 'Magus Sisters',
},
{
    slug: 'valvalis',
    title: 'Valvalis',
},
{
    slug: 'calbrena',
    title: 'Calbrena',
},
{
    slug: 'golbez',
    title: 'Golbez',
},
{
    slug: 'lugae',
    title: 'Dr. Lugae',
},
{
    slug: 'darkimp',
    title: 'Dark Imps',
},
{
    slug: 'kingqueen',
    title: 'K/Q Eblan',
},
{
    slug: 'rubicant',
    title: 'Rubicant',
},
{
    slug: 'evilwall',
    title: 'Evil Wall',
},
{
    slug: 'asura',
    title: 'Asura',
},
{
    slug: 'leviatan',
    title: 'Leviatan',
},
{
    slug: 'odin',
    title: 'Odin',
},
{
    slug: 'bahamut',
    title: 'Bahamut',
},
{
    slug: 'elements',
    title: 'Elements',
},
{
    slug: 'cpu',
    title: 'CPU',
},
{
    slug: 'paledim',
    title: 'Pale Dim',
},
{
    slug: 'wyvern',
    title: 'Wyvern',
},
{
    slug: 'plague',
    title: 'Plague',
},
{
    slug: 'dlunar',
    title: 'D. Lunars',
},
{
    slug: 'ogopogo',
    title: 'Ogopogo',
}]


const quests: Quest[] = [{
    slug: 'mistcave',
    title: 'Mist Cave boss',
}, {
    slug: 'waterfall',
    title: 'Waterfall boss',
}, {
    slug: 'antlionnest',
    title: 'Complete the Antlion Nest',
}, {
    slug: 'hobs',
    title: 'Rescue the hostage on Mt. Hobs',
}, {
    slug: 'fabul',
    title: 'Defend Fabul',
}, {
    slug: 'ordeals',
    title: 'Complete Mt. Ordeals',
}, {
    slug: 'baroninn',
    title: 'Defeat Baron Inn bosses',
}, {
    slug: 'baroncastle',
    title: 'Liberate Baron Castle',
}, {
    slug: 'magnes',
    title: 'Complete Cave Magnes',
}, {
    slug: 'zot',
    title: 'Complete the Tower of Zot',
}, {
    slug: 'dwarfcastle',
    title: 'Defeat the bosses of Dwarf Castle',
}, {
    slug: 'lowerbabil',
    title: 'Defeat the boss of Lower Bab-il',
}, {
    slug: 'falcon',
    title: 'Launch the Falcon',
}, {
    slug: 'sealedcave',
    title: 'Complete the Sealed Cave',
}, {
    slug: 'monsterqueen',
    title: 'Asura spot boss',
}, {
    slug: 'monsterking',
    title: 'Leviatan spot boss',
}, {
    slug: 'baronbasement',
    title: 'Odin spot boss',
}, {
    slug: 'giant',
    title: 'Complete the Giant of Bab-il',
}, {
    slug: 'cavebahamut',
    title: 'Complete Cave Bahamut',
}, {
    slug: 'murasamealtar',
    title: 'Vanilla Murasame (Paledim)',
}, {
    slug: 'crystalaltar',
    title: 'Vanilla Crystal Sword (Wyvern)',
}, {
    slug: 'whitealtar',
    title: 'Vanilla White Spear (Plague)',
}, {
    slug: 'ribbonaltar',
    title: 'Vanilla Ribbon (D.Lunars)',
}, {
    slug: 'masamunealtar',
    title: 'Vanilla Masamune (Ogopogo)',
}, {
    slug: 'burnmist',
    title: 'Burn the village Mist with the Package',
}, {
    slug: 'curefever',
    title: 'Cure the fever with the SandRuby',
}, {
    slug: 'unlocksewer',
    title: 'Unlock the sewer with the Baron Key',
}, {
    slug: 'music',
    title: 'Break the Dark Elf\'s spell with the TwinHarp',
}, {
    slug: 'toroiatreasury',
    title: 'Open the Toroia treasury',
}, {
    slug: 'magma',
    title: 'Drop the Magma Key into the Agart well',
}, {
    slug: 'supercannon',
    title: 'Destroy the Super Cannon',
}, {
    slug: 'unlocksealedcave',
    title: 'Unlock the Sealed Cave',
}, {
    slug: 'bigwhale',
    title: 'Raise the Big Whale',
}, {
    slug: 'traderat',
    title: 'Trade away Rat Tail',
}, {
    slug: 'forge',
    title: 'Have Kokkol Forge',
}, {
    slug: 'wakeyang',
    title: 'Wake Yang with the Pan',
}, {
    slug: 'tradepan',
    title: 'Return the Pan to Yang\'s wife',
}, {
    slug: 'tradepink',
    title: 'Trade away the Pink Tail',
}, {
    slug: 'pass',
    title: 'Unlock the Pass door in Toroia',
}];

export { quests, bosses }