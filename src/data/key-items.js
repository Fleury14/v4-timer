// @flow
import type { KeyItem, ObjByKeyItem } from '../types/types';

const keyItems: KeyItem[] = [{
    id: 1,
    slug: 'crystal',
    title: 'Crystal',
    iconFile: 'FFIVFE-Icons-1THECrystal-Color.png',
},
{
    id: 3,
    slug: 'hook',
    title: 'Hook',
    iconFile: 'FFIVFE-Icons-3Hook-Color.png',
},
{
    id: 4,
    slug: 'darkness',
    title: 'Darkness',
    iconFile: 'FFIVFE-Icons-4DarkCrystal-Color.png',
},
{
    id: 5,
    slug: 'earth',
    title: 'Earth',
    iconFile: 'FFIVFE-Icons-5EarthCrystal-Color.png',
},{
    id: 2,
    slug: 'pass',
    title: 'Pass',
    iconFile: 'FFIVFE-Icons-2Pass-Color.png',
},{
    id: 6,
    slug: 'twinharp',
    title: 'Twin Harp',
    iconFile: 'FFIVFE-Icons-6TwinHarp-Color.png',
},
{
    id: 7,
    slug: 'package',
    title: 'Package',
    iconFile: 'FFIVFE-Icons-7Package-Color.png',
},
{
    id: 8,
    slug: 'sandruby',
    title: 'Sand Ruby',
    iconFile: 'FFIVFE-Icons-8SandRuby-Color.png',
},
{
    id: 10,
    slug: 'magma',
    title: 'Magma Key',
    iconFile: 'FFIVFE-Icons-10MagmaKey-Color.png',
},
{
    id: 11,
    slug: 'tower',
    title: 'Tower Key',
    iconFile: 'FFIVFE-Icons-11TowerKey-Color.png',
},
{
    id: 12,
    slug: 'luca',
    title: 'Luca Key',
    iconFile: 'FFIVFE-Icons-12LucaKey-Color.png',
},
{
    id: 9,
    slug: 'baron',
    title: 'Baron Key',
    iconFile: 'FFIVFE-Icons-9BaronKey-Color.png',
},
{
    id: 13,
    slug: 'adamant',
    title: 'Adamant',
    iconFile: 'FFIVFE-Icons-13Adamant.png',
},
{
    id: 14,
    slug: 'legend',
    title: 'Legend Sword',
    iconFile: 'FFIVFE-Icons-14LegendSword-Color.png',
},
{
    id: 15,
    slug: 'pan',
    title: 'Pan',
    iconFile: 'FFIVFE-Icons-15Pan-Color.png',
},
{
    id: 17,
    slug: 'rat',
    title: 'Rat Tail',
    iconFile: 'FFIVFE-Icons-17RatTail-Color.png',
},
{
    id: 18,
    slug: 'pink',
    title: 'Pink Tail',
    iconFile: 'FFIVFE-Icons-18PinkTail-Color.png',
},];

const objectiveItems: ObjByKeyItem[] = [{
    keyItemId: 18,
    objectiveSlug: ['tradepink'],
    row: 0,
}, {
    keyItemId: 17,
    objectiveSlug: ['traderat'],
    row: 0,
}, {
    keyItemId: 15,
    objectiveSlug: ['wakeyang', 'tradepan'],
    row: 0,
}, {
    keyItemId: 12,
    objectiveSlug: ['unlocksealedcave', 'sealedcave'],
    row: 0,
}, {
    keyItemId: 11,
    objectiveSlug: ['supercannon'],
    row: 1,
}, {
    keyItemId: 10,
    objectiveSlug: ['magma'],
    row: 1,
}, {
    keyItemId: 9,
    objectiveSlug: ['baroncastle', 'baronbasement', 'unlocksewer'],
    row: 0,
}, {
    keyItemId: 8,
    objectiveSlug: ['curefever'],
    row: 1,
},
{
    keyItemId: 7,
    objectiveSlug: ['burnmist'],
    row: 1,
}, {
    keyItemId: 6,
    objectiveSlug: ['magnes', 'music'],
    row: 1,
}, {
    keyItemId: 5,
    objectiveSlug: ['toroiatreasury', 'zot'],
    row: 1,
}, {
    keyItemId: 4,
    objectiveSlug: ['bigwhale', 'masamunealtar', 'ribbonaltar', 'whitealtar', 'crystalaltar', 'murasamealtar', 'cavebahamut', 'giant'],
    row: 2,
}, {
    keyItemId: 2,
    objectiveSlug: ['pass'],
    row: 2,
}]

export { keyItems, objectiveItems };