import s_pItemDatas from '@/assets/json/p_Items_140.json';
import ui from '@/assets/json/icon_ui_140.json';


interface ItemData {
    itemID: number;
    starID: number;
    levelMax: number;
    levelMin: number;
    name: string;
    star: number;
    icon: string;
}

interface JsonItem {
    name: string;
    color: string;
    num: number;
    level?: number;
    type?: number;
    icon?: { url: string; url2: string } | undefined;
    desc?: string;
}

//@ts-ignore
const initItemId = function (t: number, e: number, i: number, a: number, n: number, s: number, m: number): ItemData | null {
    return r_create(e, t, m, n, s);
};

//@ts-ignore
const r_create = function (t: number, e: number, i: number, a: number, n: number): ItemData | null {
    return getItemData(t, e, i, n);
};

function getItemData(a: number, r: number, n: number, i: number = -1): ItemData | null {
    if (s_pItemDatas) {
        //@ts-ignore
        if (a >= s_pItemDatas.length) {
            return null;
        }
        //@ts-ignore
        const u = s_pItemDatas[a];
        for (let j = 0; j < u.length; j++) {
            const l = u[j];
            if (i !== -1) {
                if (l.itemID === r && l.starID === n && l.levelMax >= i && l.levelMin <= i) {
                    return l;
                }
            } else if (l.itemID === r && l.starID === n) {
                return l;
            }
        }
    }
    return null;
}

const m = {
    "kItemSortEngine": 0,
    "kItemSortArmor": 1,
    "kItemSortWeapon": 2,
    "kItemSortWingman": 3,
    "kItemSortProp": 4,
    "kItemSortGift": 5,
    "kItemSortExtra": 6,
    "kItemSortWheelEffect": 7,
    "kItemSortDrug": 8,
    "kItemSortExpand": 9,
    "kItemSortLoot": 10,
    "kItemSortReady": 11,
    "kItemSortBox": 12,
    "kItemSortMoney": 13,
    "kItemSortKey": 14,
    "kItemSortMaterial": 15,
    "kItemSortPilot": 16,
    "kItemSortEngineSkin": 17
};


function gain2json(e: string, n: boolean): JsonItem {
    const f = e.split("x");
    const g = f[0];
    if ("M1" === g)
        return {
            "name": "金币",
            "color": "",
            "num": parseInt(f[1])
        };
    else if ("M2" === g)
        return {
            "name": "钻石",
            "color": "#409eff",
            "num": parseInt(f[1])
        };
    else if ("ENERGY" === g)
        return {
            "name": "体力",
            "color": "#ff9002",
            "num": parseInt(f[1])
        };
    else if ("PACK" === g)
        return {
            "name": "PACK",
            "color": "",
            "num": parseInt(f[1])
        };
    else if ("FP" === g)
        return {
            "name": "FP",
            "color": "",
            "num": parseInt(f[1])
        };
    else if ("PVP" === g)
        return {
            "name": "PVP",
            "color": "",
            "num": parseInt(f[1])
        };

    let c = 0, B = 0, h = 0, y = 0, k = 0, S = 1, C = 0;
    B = parseInt(f[n ? 1 : 0]);
    if (n) c = parseInt(f[0]);
    h = parseInt(f[n ? 2 : 1]);
    y = parseInt(f[n ? 3 : 2]);
    k = parseInt(f[n ? 4 : 3]);
    const D = B === m.kItemSortEngine || B === m.kItemSortArmor || B === m.kItemSortWeapon || B === m.kItemSortWingman;
    S = D ? 1 : parseInt(f[n ? 5 : 4]);
    if (n) C = D ? parseInt(f[6]) : 0;

    const item = initItemId(h, B, S, c, C, k, y) as ItemData;
    const itemName = item.name;
    const color = item.star === 1 ? '' : item.star === 2 ? 'green' : item.star === 3 ? '#409eff' : item.star === 4 ? 'purple' : '';

    return {
        "name": itemName,
        "color": color,
        "num": S,
        "level": k + 1,
        "type": B,
        "icon": icon2url(item.icon),
        //@ts-ignore
        "desc": item?.desc
    };
}

function gain2jsonarray(data: string): JsonItem[] {
    let gain_json_array: JsonItem[] = [];
    data = data.replace(/#/g, ',');
    let gain_str = data.split(',');
    gain_str.forEach(function (e) {
        if (!e) return;
        try {
            gain_json_array.push(gain2json(e, true));
        } catch {
            gain_json_array.push({"name": `未知物品(${e})`, "color": "black", "num": 0});
        }
    });
    return gain_json_array;
}

function json_parse4equips(json: {
    id: number,
    type: number,
    sd_id: number,
    quality: number,
    level: number,
    count: number
}[]): JsonItem[] {
    let result = '';
    for (let i = 0; i < json.length; i++) {
        result += json[i].id + 'x' + json[i].type + 'x' + json[i].sd_id + 'x' + json[i].quality + 'x' + json[i].level + 'x' + json[i].count + ',';
    }
    return gain2jsonarray(result);
}

const icon2url = function (icon: string): { url: string; url2: string } | undefined {
    for (const key in ui) {
        if (key.includes(icon)) {
            //@ts-ignore
            const data = ui[key];
            return generateResourceURL(data);
        }
    }
    return undefined;
};

const generateResourceURL = function (obj: { uuid: string, nativeVer: string }): { url: string; url2: string } {
    const uuid = obj.uuid;
    const nativeVer = obj.nativeVer;
    const uuidPrefix = uuid.substring(0, 2);
    return {
        url: `https://wxmini-cdn.jj5agame.com/clover/remote/resources/native/${uuidPrefix}/${uuid}.${nativeVer}.jpg`,
        url2: `https://wxmini-cdn.jj5agame.com/clover/remote/resources/native/${uuidPrefix}/${uuid}.${nativeVer}.png`,
    };
};


export const gain = {
    gain2jsonarray,
    json_parse4equips
}
