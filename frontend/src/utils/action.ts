import normalLootData from '@/assets/json/normal_loot_data.json'
import endlessLootData from '@/assets/json/endless_loot_data.json'
import heroLootData from '@/assets/json/hero_loot_data.json'
import periodLootData from '@/assets/json/period_loot_data.json'
import bossLootData from '@/assets/json/boss_loot_data.json'
import hyperbossLootData from '@/assets/json/hyperboss_loot_data.json'
import expeditionLootData from '@/assets/json/expedition_loot_data.json'




class EnemyActions {
    view: DataView;
    strings: string[];
    enemyNorIDArray: any[];
    enemyRanIDs: any[];

    constructor(buffer: ArrayBuffer, offset: number, str: string[]) {
        this.view = new DataView(buffer, offset);
        this.strings = str;
        this.enemyNorIDArray = [];
        this.enemyRanIDs = [];
    }
}

function handleArray(buffer: ArrayBuffer ,offset: number, str: string[]): any[] {
    const array: any[] = [];
    const view = new DataView(buffer, offset);
    const uint16 = view.getUint16(0x2);
    const int16 = view.getInt16(0x4);
    const view_6 = new DataView(buffer, offset + 0x6);

    if (0x0 === int16) {
        return array;
    }

    if (0x1 === uint16) {
        for (let i = 0x0; i < int16; ++i) {
            const int32 = view_6.getInt32(0x4 * i);
            array.push(handleArray(buffer, int32, str));
        }
    } else {
        for (let o = 0x0; o < int16; ++o) {
            switch (uint16) {
                case 0x3:
                    array.push(view_6.getInt8(o));
                    break;
                case 0x4:
                    array.push(0x1 === view_6.getInt8(o));
                    break;
                case 0x5:
                    array.push(view_6.getInt16(0x2 * o));
                    break;
                case 0x6:
                    array.push(view_6.getInt32(0x4 * o));
                    break;
                case 0x7:
                    array.push(view_6.getFloat32(0x4 * o));
                    break;
                case 0x8:
                    array.push(str[view_6.getInt16(0x2 * o)]);
                    break;
                default:
                    console.error(`Unknown type: ${uint16}`);
            }
        }
    }

    return array;
}


function convert(buffer: ArrayBuffer, offset: number, array: any[]): { enemyNorIDArray: any[], enemyNorIDs: undefined, enemyRanIDs: any[] } {
    const enemy = new EnemyActions(buffer, offset, array);
    enemy['enemyNorIDArray'] = handleArray(enemy.view.buffer, enemy.view.getInt32(0xc), enemy.strings);
    enemy['enemyRanIDs'] = handleArray(enemy.view.buffer, enemy.view.getInt32(0x1c), enemy.strings);

    return {
        enemyNorIDArray: enemy['enemyNorIDArray'],
        enemyNorIDs: undefined,
        enemyRanIDs: enemy['enemyRanIDs']
    };
}


function loadContainer(this: any, buffer: ArrayBuffer, offset: number, array: any[]): any[] {
    const view = new DataView(buffer, offset);
    const uint16 = view.getUint16(0x0);
    const uint16_2 = view.getUint16(0x2);
    const int16 = view.getInt16(0x4);
    const view_6 = new DataView(buffer, offset + 0x6);

    if (0x1 === uint16) {
        const y: any[] = [];
        for (let i = 0x0; i < int16; ++i) {
            const int32 = view_6.getInt32(0x4 * i);
            const data = convert(buffer, int32, array);
            y.push(0x1 === uint16_2 ? this.loadContainer(buffer, int32, array) : data);
        }
        return y;
    }
    return [];
}

function loadBin(buffer: ArrayBuffer): any[] {
    const array: undefined[] = [];
    const offset = new DataView(buffer).getInt32(0x0);
    const int16 = new DataView(buffer, offset).getInt16(0x0);

    for (let i = 0x0; i < int16; ++i) {
        array.push(undefined);
    }
    array.filter((item) => item == undefined)
    return loadContainer.call({ loadContainer }, buffer, 0x104, array);
}


const table: number[] = [
    0,
    1996959894,
    3993919788,
    2567524794,
    124634137,
    1886057615,
    3915621685,
    2657392035,
    249268274,
    2044508324,
    3772115230,
    2547177864,
    162941995,
    2125561021,
    3887607047,
    2428444049,
    498536548,
    1789927666,
    4089016648,
    2227061214,
    450548861,
    1843258603,
    4107580753,
    2211677639,
    325883990,
    1684777152,
    4251122042,
    2321926636,
    335633487,
    1661365465,
    4195302755,
    2366115317,
    997073096,
    1281953886,
    3579855332,
    2724688242,
    1006888145,
    1258607687,
    3524101629,
    2768942443,
    901097722,
    1119000684,
    3686517206,
    2898065728,
    853044451,
    1172266101,
    3705015759,
    2882616665,
    651767980,
    1373503546,
    3369554304,
    3218104598,
    565507253,
    1454621731,
    3485111705,
    3099436303,
    671266974,
    1594198024,
    3322730930,
    2970347812,
    795835527,
    1483230225,
    3244367275,
    3060149565,
    1994146192,
    31158534,
    2563907772,
    4023717930,
    1907459465,
    112637215,
    2680153253,
    3904427059,
    2013776290,
    251722036,
    2517215374,
    3775830040,
    2137656763,
    141376813,
    2439277719,
    3865271297,
    1802195444,
    476864866,
    2238001368,
    4066508878,
    1812370925,
    453092731,
    2181625025,
    4111451223,
    1706088902,
    314042704,
    2344532202,
    4240017532,
    1658658271,
    366619977,
    2362670323,
    4224994405,
    1303535960,
    984961486,
    2747007092,
    3569037538,
    1256170817,
    1037604311,
    2765210733,
    3554079995,
    1131014506,
    879679996,
    2909243462,
    3663771856,
    1141124467,
    855842277,
    2852801631,
    3708648649,
    1342533948,
    654459306,
    3188396048,
    3373015174,
    1466479909,
    544179635,
    3110523913,
    3462522015,
    1591671054,
    702138776,
    2966460450,
    3352799412,
    1504918807,
    783551873,
    3082640443,
    3233442989,
    3988292384,
    2596254646,
    62317068,
    1957810842,
    3939845945,
    2647816111,
    81470997,
    1943803523,
    3814918930,
    2489596804,
    225274430,
    2053790376,
    3826175755,
    2466906013,
    167816743,
    2097651377,
    4027552580,
    2265490386,
    503444072,
    1762050814,
    4150417245,
    2154129355,
    426522225,
    1852507879,
    4275313526,
    2312317920,
    282753626,
    1742555852,
    4189708143,
    2394877945,
    397917763,
    1622183637,
    3604390888,
    2714866558,
    953729732,
    1340076626,
    3518719985,
    2797360999,
    1068828381,
    1219638859,
    3624741850,
    2936675148,
    906185462,
    1090812512,
    3747672003,
    2825379669,
    829329135,
    1181335161,
    3412177804,
    3160834842,
    628085408,
    1382605366,
    3423369109,
    3138078467,
    570562233,
    1426400815,
    3317316542,
    2998733608,
    733239954,
    1555261956,
    3268935591,
    3050360625,
    752459403,
    1541320221,
    2607071920,
    3965973030,
    1969922972,
    40735498,
    2617837225,
    3943577151,
    1913087877,
    83908371,
    2512341634,
    3803740692,
    2075208622,
    213261112,
    2463272603,
    3855990285,
    2094854071,
    198958881,
    2262029012,
    4057260610,
    1759359992,
    534414190,
    2176718541,
    4139329115,
    1873836001,
    414664567,
    2282248934,
    4279200368,
    1711684554,
    285281116,
    2405801727,
    4167216745,
    1634467795,
    376229701,
    2685067896,
    3608007406,
    1308918612,
    956543938,
    2808555105,
    3495958263,
    1231636301,
    1047427035,
    2932959818,
    3654703836,
    1088359270,
    936918000,
    2847714899,
    3736837829,
    1202900863,
    817233897,
    3183342108,
    3401237130,
    1404277552,
    615818150,
    3134207493,
    3453421203,
    1423857449,
    601450431,
    3009837614,
    3294710456,
    1567103746,
    711928724,
    3020668471,
    3272380065,
    1510334235,
    755167117
];

const createForOfIteratorHelperLoose = (n: any, t: any) => {
    var u = 'undefined' != ("undefined" == typeof Symbol ? "undefined" : typeof (Symbol)) && n[Symbol['iterator']] || n['@@iterator'];
    if (u)
        return (u = u['call'](n))['next']['bind'](u);
    //@ts-ignore
    if (Array['isArray'](n) || (u = o(n)) || t && n && 'number' == typeof (n['length'])) {
        u && (n = u);
        var i = 0;
        return function() {
            return i >= n['length'] ? {
                done: !0
            } : {
                done: !1,
                value: n[i++]
            }
        }
    }
    throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
}


function getActionTag(start: number, actionInfos: any[], enemyActions: any, type: 'normal'|'endless'|'hero'|'boss'|'period'|'hyperboss'|'expedition'): number {
    void 0x0 === start && (start = 0x0);
    const array: any[] = [];
    let lootData: any[] = [];
    switch (type) {
        case 'normal':
            lootData = normalLootData;
            break
        case 'endless':
            lootData = endlessLootData;
            break
        case 'hero':
            lootData = heroLootData;
            break
        case 'period':
            lootData = periodLootData;
            break
        case 'boss':
            lootData = bossLootData;
            break
        case 'hyperboss':
            lootData = hyperbossLootData;
            break
        case 'expedition':
            lootData = expeditionLootData;
            break
        default:
            throw new Error('type is not support');
    }
    const _lootData = lootData;
    for (let i = 0x0; i < actionInfos['length']; i++) {
        const enemyAction = enemyActions[start + i];
        const actionInfo = actionInfos[i];
        enemyAction['enemyNorIDs'] = enemyAction['enemyNorIDArray'][actionInfo['norId']];
        for (let z, j = createForOfIteratorHelperLoose(enemyAction['enemyNorIDs'], false); !(z = j())['done'];) {
            const z_value = z['value'];
            array.push(z_value);
        }
        enemyAction['lootEnemyIDs'] = actionInfo['lootEnemyIds'];
        enemyAction['lootWaveIDs'] = actionInfo['lootWaveIds'];
        enemyAction['lootIds'] = actionInfo['lootIds'];
        for (let o, loose = createForOfIteratorHelperLoose(enemyAction['lootIds'], false); !(o = loose())['done'];) {
            const o_value = o['value'];
            array.push(o_value);
            // @ts-ignore
            array.push(_lootData[o_value]['itemNum']);
        }
    }
    const arrayBuffer = new ArrayBuffer(0x4 * array.length);
    const view = new DataView(arrayBuffer);
    for (let i = 0x0; i < array.length; i++)
        view['setInt32'](0x4 * i, array[i]);
    return compute(arrayBuffer, 0x0, arrayBuffer.byteLength);
}

function compute(buffer: ArrayBuffer, offset: number = 0x0, len: number): number {
    const uint8Array = new Uint8Array(buffer, offset, len);
    let s = 0xffffffff;
    for (let i = 0x0; i < uint8Array.length; i++) {
        const y = uint8Array[i];
        s = s >>> 0x8 ^ table[0xff & (s ^ y)];
    }
    return (0xffffffff ^ s) >>> 0x0;
}


const loadAllBin = async (binConfig: {name:string, url:string}[], callback: (file: string ,data: any[]) => void) => {
    console.debug(`本次加载的文件数量:${binConfig.length}`)
    for (let i = 0; i < binConfig.length; i++){
        console.debug(`正在加载${binConfig[i].name}:${binConfig[i].url}`)
        try {
            const response = await fetch(`${binConfig[i].url}`)
            const buffer: ArrayBuffer = await response.arrayBuffer()
            const data = loadBin(buffer)
            callback(binConfig[i].name, data)
        } catch (e) {
            console.error(e)
        }
    }
}


export const action = {
    loadAllBin: loadAllBin,
    getActionTag: getActionTag
}