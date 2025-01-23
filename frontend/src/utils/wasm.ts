// @ts-ignore
import wasm from "@/assets/wasm/wasm.wasm";
import a0_0x10cc from "@/assets/json/ast.json";


interface _0xf78821 {
    "0": string;
    "1": string;
    Json: number;
    ProtoBuf: number;
}


const _0xf78821: _0xf78821 = {
    "0": "Json",
    "1": "ProtoBuf",
    Json: 0,
    ProtoBuf: 1,
};

class TextEncoderDecoder {
    private constructor() {
    }

    public static decodeText(data: Uint8Array): string {
        let text = "";
        for (let i = 0; i < data.length; i++) {
            const byte = data[i];
            if (byte < 0x80) {
                text += String.fromCharCode(byte);
            } else if (byte > 0xbf && byte < 0xe0) {
                const nextByte = data[++i];
                text += String.fromCharCode(((0x1f & byte) << 6) | (0x3f & nextByte));
            } else if (byte > 0xdf && byte < 0xf0) {
                const nextByte1 = data[++i];
                const nextByte2 = data[++i];
                text += String.fromCharCode(
                    ((0xf & byte) << 12) | ((0x3f & nextByte1) << 6) | (0x3f & nextByte2)
                );
            } else if (byte > 0xef && byte < 0xf8) {
                const codePoint =
                    (((0x7 & byte) << 18) |
                        ((0x3f & data[++i]) << 12) |
                        ((0x3f & data[++i]) << 6) |
                        (0x3f & data[++i])) -
                    0x10000;
                text += String.fromCharCode(
                    0xd800 + (codePoint >> 10),
                    0xdc00 + (0x3ff & codePoint)
                );
            }
        }
        return text;
    }

    public static encodeText(str: string): Uint8Array {
        const bytes: number[] = [];
        for (let i = 0; i < str.length; i++) {
            let codePoint = str.charCodeAt(i);
            if (codePoint < 0x80) {
                bytes.push(codePoint);
            } else if (codePoint < 0x800) {
                bytes.push(0xc0 | (codePoint >> 6), 0x80 | (0x3f & codePoint));
            } else if (codePoint < 0x10000) {
                bytes.push(
                    0xe0 | (codePoint >> 12),
                    0x80 | ((codePoint >> 6) & 0x3f),
                    0x80 | (0x3f & codePoint)
                );
            } else {
                i++;
                codePoint =
                    0x10000 + (((0x3ff & codePoint) << 10) | (0x3ff & str.charCodeAt(i)));
                bytes.push(
                    0xf0 | (codePoint >> 18),
                    0x80 | ((codePoint >> 12) & 0x3f),
                    0x80 | ((codePoint >> 6) & 0x3f),
                    0x80 | (0x3f & codePoint)
                );
            }
        }
        return new Uint8Array(bytes);
    }
}


type Uint8ArrayType = Uint8Array | null;

function _typeof(obj: any): string {
    "@babel/helpers - typeof";
    return typeof obj;
}

function _0x4e5e8f(_0x447104: number): void {
    const _0x44cb41: void = _0x1103c0(_0x447104);
    return (
        (function (_0x19ad3f: number): void {
            if (_0x19ad3f < 0x84) {
                _0x4e9f7e[_0x19ad3f] = _0x30fd47;
                _0x30fd47 = _0x19ad3f;
            }
        })(_0x447104),
            _0x44cb41
    );
}

let _0x28021b: any = null;

function _0x25184d() {
    return (
        (null === _0x28021b ||
            !0x0 === _0x28021b[a0_0x10cc[4251]][a0_0x10cc[12263]] ||
            (void 0x0 === _0x28021b[a0_0x10cc[4251]][a0_0x10cc[12263]] &&
                _0x28021b[a0_0x10cc[4251]] !==
                _0x1cd24c[a0_0x10cc[12261]][a0_0x10cc[4251]])) &&
        (_0x28021b = new DataView(_0x1cd24c[a0_0x10cc[12261]][a0_0x10cc[4251]])),
            _0x28021b
    );
}

function _0x519b70(_0x1f294b: any, _0x261684: any) {
    return (
        (_0x1f294b >>>= 0x0),
            //@ts-ignore
            _0x46b3e7()[a0_0x10cc[12262]](_0x1f294b / 0x1, _0x1f294b / 0x1 + _0x261684)
    );
}

//@ts-ignore
function _0x56e980(_0x4e61d8: any): any {
    // @ts-ignore
    return _0x2ba575.apply(this, arguments);
}

let _0x24acff: Uint8ArrayType = null;

function _0x46b3e7() {
    return (
        //@ts-ignore
        (null !== _0x24acff && 0x0 !== _0x24acff[a0_0x10cc[5109]]) ||
        (_0x24acff = new Uint8Array(
            _0x1cd24c[a0_0x10cc[12261]][a0_0x10cc[4251]]
        )),
            _0x24acff
    );
}

let _0x18f822: number = 0;

function _0x1269d7(_0x44715a: any, _0x3832e7: any) {
    var _0x52bc2b = _0x3832e7(0x1 * _0x44715a[a0_0x10cc[54]], 0x1) >>> 0x0;
    //@ts-ignore
    return (
        //@ts-ignore
        _0x46b3e7()[a0_0x10cc[227]](_0x44715a, _0x52bc2b / 0x1),
            (_0x18f822 = _0x44715a[a0_0x10cc[54]]),
            _0x52bc2b
    );
}

type WBGFunction = (...args: any[]) => any;

interface IWBGlobals {
    __wbg_random_dcc13e3a22966e32?: WBGFunction;
    __wbindgen_number_new: (num: number) => any;
    __wbg_crypto_1d1f22824a6a080c: any;
    __wbg_process_4a72847cc503995b: any;
    __wbg_versions_f686565e586dd935: any;
    __wbg_node_104a2ff8d6ea03a2: any;
    __wbg_require_cca90b1a94a0255b: any;
    __wbg_msCrypto_eb05e62b530a1508: any;
    __wbg_randomFillSync_5c9c955aa56b6049: any;
    __wbg_getRandomValues_3aa56aa6edec874c: any;
    __wbg_newnoargs_76313bd6ff35d0f2: any;
    __wbg_call_89af060b4e1523f2: any;
    __wbg_call_1084a111329e68ce: any;
    __wbg_subarray_7c2e3576afe181d1: any;
    __wbg_self_3093d5d1f7bcb682: any;
    __wbg_window_3bcfc4d31bc012f8: any;
    __wbg_globalThis_86b222e13bdf32ed: any;
    __wbg_buffer_b7b08af79b0b0974: any;
    __wbg_new_ea1883e1e5e86686: any;
    __wbg_newwithbyteoffsetandlength_8a2cb9ca96b27ec9: any;
    __wbg_set_d1e79e2388520f18: any;
    __wbg_global_e5a3fe56f8be9485: any;
    __wbg_newwithlength_ec548f448387c968: any;
    __wbindgen_is_object: (obj: any) => boolean;
    __wbindgen_is_string: (str: any) => boolean;
    __wbindgen_object_drop_ref: (obj: any) => void;
    __wbindgen_is_function: (func: any) => boolean;
    __wbindgen_string_new: (ptr: number, len: number) => string;
    __wbindgen_object_clone_ref: (obj: any) => any;
    __wbindgen_is_undefined: (obj: any) => boolean;
    __wbindgen_throw: (ptr: number, len: number) => never;
    __wbindgen_memory: () => WebAssembly.Memory;
    // ... other functions
}

interface IWBGlobalsWithWBG extends IWBGlobals {
    wbg: IWBGlobals;
}

var f: IWBGlobalsWithWBG = (function _0x17eece(): IWBGlobalsWithWBG {
    var _0xfaaafa: string,
        // @ts-ignore
        _0x3996bd: IWBGlobalsWithWBG = {wbg: {}};
    return (
        (_0x3996bd.wbg["__wbg_random_dcc13e3a22966e32"] =
            typeof Math.random === "function"
                ? Math.random
                : function () {
                    throw new Error(_0xfaaafa + " is not defined");
                }),
            (_0x3996bd["wbg"]["__wbindgen_number_new"] = function (_0x34a98e) {
                return _0x2f916f(_0x34a98e);
            }),
            (_0x3996bd["wbg"]["__wbg_crypto_1d1f22824a6a080c"] = function (
                _0x4d6477: any
            ) {
                return _0x2f916f(_0x1103c0(_0x4d6477)["crypto"]);
            }),
            (_0x3996bd["wbg"]["__wbindgen_is_object"] = function (_0x5ddcaf) {
                var _0x14ad1e = _0x1103c0(_0x5ddcaf);
                return "object" == _typeof(_0x14ad1e) && null !== _0x14ad1e;
            }),
            (_0x3996bd["wbg"]["__wbg_process_4a72847cc503995b"] = function (
                _0x42f3c6: any
            ) {
                return _0x2f916f(_0x1103c0(_0x42f3c6)["process"]);
            }),
            (_0x3996bd["wbg"]["__wbg_versions_f686565e586dd935"] = function (
                _0x266696: any
            ) {
                return _0x2f916f(_0x1103c0(_0x266696)["versions"]);
            }),
            (_0x3996bd["wbg"]["__wbg_node_104a2ff8d6ea03a2"] = function (
                _0x244f95: any
            ) {
                return _0x2f916f(_0x1103c0(_0x244f95)["node"]);
            }),
            (_0x3996bd["wbg"]["__wbindgen_is_string"] = function (_0x29e772) {
                return "string" == typeof _0x1103c0(_0x29e772);
            }),
            (_0x3996bd["wbg"]["__wbindgen_object_drop_ref"] = function (_0x37d664) {
                _0x4e5e8f(_0x37d664);
            }),
            (_0x3996bd["wbg"]["__wbg_require_cca90b1a94a0255b"] = function () {
                return _0x4d426b(function () {
                    // @ts-ignore
                    return _0x2f916f(_0x45a672["require"]);
                }, arguments);
            }),
            (_0x3996bd["wbg"]["__wbindgen_is_function"] = function (_0x293d8f) {
                return "function" == typeof _0x1103c0(_0x293d8f);
            }),
            (_0x3996bd["wbg"]["__wbindgen_string_new"] = function (
                _0x73989,
                _0x839e7f
            ) {
                //@ts-ignore
                return _0x2f916f(_0x3bc1b6(_0x73989, _0x839e7f));
            }),
            (_0x3996bd["wbg"]["__wbg_msCrypto_eb05e62b530a1508"] = function (
                _0xfaddb0: any
            ) {
                return _0x2f916f(_0x1103c0(_0xfaddb0)["msCrypto"]);
            }),
            (_0x3996bd["wbg"]["__wbg_randomFillSync_5c9c955aa56b6049"] = function () {
                return _0x4d426b(function (_0x358cad: any, _0x30434a: any) {
                    _0x1103c0(_0x358cad)["randomFillSync"](_0x4e5e8f(_0x30434a));
                }, arguments);
            }),
            (_0x3996bd["wbg"]["__wbg_getRandomValues_3aa56aa6edec874c"] = function () {
                return _0x4d426b(function (_0x659d84: any, _0x5a9ca9: any) {
                    _0x1103c0(_0x659d84)["getRandomValues"](_0x1103c0(_0x5a9ca9));
                }, arguments);
            }),
            (_0x3996bd["wbg"]["__wbg_newnoargs_76313bd6ff35d0f2"] = function (
                _0xcdae27: any,
                _0x3349f3: any
            ) {
                //@ts-ignore
                return _0x2f916f(new Function(_0x3bc1b6(_0xcdae27, _0x3349f3)));
            }),
            (_0x3996bd["wbg"]["__wbg_call_1084a111329e68ce"] = function () {
                return _0x4d426b(function (_0x3aa416: any, _0x7fe749: any) {
                    return _0x2f916f(_0x1103c0(_0x3aa416)["call"](_0x1103c0(_0x7fe749)));
                }, arguments);
            }),
            (_0x3996bd["wbg"]["__wbindgen_object_clone_ref"] = function (_0x13002a) {
                return _0x2f916f(_0x1103c0(_0x13002a));
            }),
            (_0x3996bd["wbg"]["__wbg_self_3093d5d1f7bcb682"] = function () {
                return _0x4d426b(function () {
                    return _0x2f916f(self["self"]);
                }, arguments);
            }),
            (_0x3996bd["wbg"]["__wbg_window_3bcfc4d31bc012f8"] = function () {
                return _0x4d426b(function () {
                    return _0x2f916f(window["window"]);
                }, arguments);
            }),
            (_0x3996bd["wbg"]["__wbg_globalThis_86b222e13bdf32ed"] = function () {
                return _0x4d426b(function () {
                    return _0x2f916f(globalThis["globalThis"]);
                }, arguments);
            }),
            (_0x3996bd["wbg"]["__wbg_global_e5a3fe56f8be9485"] = function () {
                return _0x4d426b(function () {
                    //@ts-ignore
                    return _0x2f916f(global["global"]);
                }, arguments);
            }),
            (_0x3996bd["wbg"]["__wbindgen_is_undefined"] = function (_0x17229b) {
                return void 0x0 === _0x1103c0(_0x17229b);
            }),
            (_0x3996bd["wbg"]["__wbg_call_89af060b4e1523f2"] = function () {
                return _0x4d426b(function (
                        _0x2b97ad: any,
                        _0x2c1826: any,
                        _0x1c9924: any
                    ) {
                        return _0x2f916f(
                            _0x1103c0(_0x2b97ad)["call"](
                                _0x1103c0(_0x2c1826),
                                _0x1103c0(_0x1c9924)
                            )
                        );
                    },
                    arguments);
            }),
            (_0x3996bd["wbg"]["__wbg_buffer_b7b08af79b0b0974"] = function (
                _0x1deddf: any
            ) {
                return _0x2f916f(_0x1103c0(_0x1deddf)["buffer"]);
            }),
            (_0x3996bd["wbg"]["__wbg_newwithbyteoffsetandlength_8a2cb9ca96b27ec9"] =
                function (_0x309baf: any, _0x33f190: any, _0x5fea21: any) {
                    return _0x2f916f(
                        new Uint8Array(
                            _0x1103c0(_0x309baf),
                            _0x33f190 >>> 0x0,
                            _0x5fea21 >>> 0x0
                        )
                    );
                }),
            (_0x3996bd["wbg"]["__wbg_new_ea1883e1e5e86686"] = function (
                _0x2c112c: any
            ) {
                return _0x2f916f(new Uint8Array(_0x1103c0(_0x2c112c)));
            }),
            (_0x3996bd["wbg"]["__wbg_set_d1e79e2388520f18"] = function (
                _0x44ebb9: any,
                _0x53d5cb: any,
                _0x73df6a: any
            ) {
                _0x1103c0(_0x44ebb9)["set"](_0x1103c0(_0x53d5cb), _0x73df6a >>> 0x0);
            }),
            (_0x3996bd["wbg"]["__wbg_newwithlength_ec548f448387c968"] = function (
                _0x353810: any
            ) {
                return _0x2f916f(new Uint8Array(_0x353810 >>> 0x0));
            }),
            (_0x3996bd["wbg"]["__wbg_subarray_7c2e3576afe181d1"] = function (
                _0x1dc7c5: any,
                _0x263610: any,
                _0x126ea9: any
            ) {
                return _0x2f916f(
                    _0x1103c0(_0x1dc7c5)["subarray"](_0x263610 >>> 0x0, _0x126ea9 >>> 0x0)
                );
            }),
            (_0x3996bd["wbg"]["__wbindgen_throw"] = function (_0x5d4146, _0x54a057) {
                //@ts-ignore
                throw new Error(_0x3bc1b6(_0x5d4146, _0x54a057));
            }),
            (_0x3996bd["wbg"]["__wbindgen_memory"] = function () {
                return _0x2f916f(_0x1cd24c["memory"]);
            }),
            _0x3996bd
    );
})();
//@ts-ignore
var _0x4e9f7e = new Array(0x80)[a0_0x10cc[235]](void 0x0);
let wbg = f.wbg;
var _0x30fd47 = _0x4e9f7e[a0_0x10cc[54]];

function _0x2f916f(_0x4e2eb8: any) {
    _0x30fd47 === _0x4e9f7e[a0_0x10cc[54]] &&
    _0x4e9f7e[a0_0x10cc[50]](_0x4e9f7e[a0_0x10cc[54]] + 0x1);
    var _0x30bae6 = _0x30fd47;
    return (
        (_0x30fd47 = _0x4e9f7e[_0x30bae6]),
            (_0x4e9f7e[_0x30bae6] = _0x4e2eb8),
            _0x30bae6
    );
}

function _0x1103c0(_0x2c994b: any) {
    return _0x4e9f7e[_0x2c994b];
}

function _0x4d426b(_0x502bf2: any, _0x1d4613: any) {
    try {
        //@ts-ignore
        return _0x502bf2[a0_0x10cc[170]](this, _0x1d4613);
    } catch (_0x1f8592) {
        _0x1cd24c[a0_0x10cc[12264]](_0x2f916f(_0x1f8592));
    }
}

interface IWebAssemblyExports {
    d: (arg0: number, arg1: number, arg2: number) => void;
    e: (arg0: number, arg1: number, arg2: number) => void;
    __wbindgen_free: (ptr: number, size: number, type: number) => void;
    getInt32: (offset: number, littleEndian: boolean) => number;
}

//@ts-ignore
interface IModule {
    [key: string]: any;

    instance: {
        exports: IWebAssemblyExports;
    };
}

var _0x1e2f79: {
    d: (arg0: any) => any;
    e: (arg0: any) => any;
} = {
    d: function _0x5337b1(_0x8d3bc0: string): string {
        try {
            const _0xb3b1ba: number = _0x1cd24c[a0_0x10cc[12251]](-0x10);
            const _0x30a810: number = _0x1269d7(
                _0x8d3bc0,
                _0x1cd24c[a0_0x10cc[12252]]
            );
            const _0x2f5ea3: number = _0x18f822;
            _0x1cd24c["d"](_0xb3b1ba, _0x30a810, _0x2f5ea3);
            const _0x3c1762: number = _0x25184d()["getInt32"](_0xb3b1ba + 0x0, true);
            const _0x776cc: number = _0x25184d()["getInt32"](_0xb3b1ba + 0x4, true);
            const _0x2e877f: number = _0x25184d()["getInt32"](_0xb3b1ba + 0x8, true);
            if (_0x25184d()["getInt32"](_0xb3b1ba + 0xc, true))
                throw _0x4e5e8f(_0x2e877f);
            //@ts-ignore
            var _0x3d77b4 = _0x519b70(_0x3c1762, _0x776cc)["slice"]();
            _0x1cd24c["__wbindgen_free"](_0x3c1762, 0x1 * _0x776cc, 0x1);
            return _0x3d77b4;
        } finally {
            _0x1cd24c[a0_0x10cc[12251]](0x10);
        }
    },
    e: function _0xe3f2e6(_0x586254: string): ArrayBuffer {
        try {
            var _0x547d76 = _0x1cd24c[a0_0x10cc[12251]](-0x10)
                , _0x4fa523 = _0x1269d7(_0x586254, _0x1cd24c[a0_0x10cc[12252]])
                , _0x3a3eca = _0x18f822;
            _0x1cd24c['e'](_0x547d76, _0x4fa523, _0x3a3eca);
            var _0x54f338 = _0x25184d()[a0_0x10cc[4242]](_0x547d76 + 0x0, !0x0)
                , _0x393745 = _0x25184d()[a0_0x10cc[4242]](_0x547d76 + 0x4, !0x0)
                , _0x28ad81 = _0x519b70(_0x54f338, _0x393745)[a0_0x10cc[75]]();
            return _0x1cd24c[a0_0x10cc[12253]](_0x54f338, 0x1 * _0x393745, 0x1),
                _0x28ad81;
        } finally {
            _0x1cd24c[a0_0x10cc[12251]](0x10);
        }
    },
};

//@ts-ignore
interface INetReduceGoods {
    reduceCoin: number;
    reduceDiamond: number;
    reducePvpCoin: number;
    reduceEnergy: number;
    reduceFriendPower: number;
    removeItems: any[];
    removeReadys: any[];
    reduceBossTicket: number;
    reduceBossTicketBuy: number;
    reducePeriodTimes: Record<string, any>;
}

const ltzj = {
    // 传入json数据
    // 返回buffer数据
    encrypt: function (e: any): ArrayBuffer | string {
        const that: any = {
            referenceCount: 3,
            protocolType: 3,
            connectionType: 0,
            zoneUrl: "https://wxmini.jj5agame.com/p.f",
            protocol: "",
            requestProtocol: "Request",
            fullUrl: "https://wxmini.jj5agame.com/p.f",
            data: e,
            _sequence: e.head.cmdSequence,
            connectionSequence: 0,
            isShowConnect: false,
            isSync: true,
            isShowLog: false,
            encodeType: 0,
            isEncrypt: true,
            resendCount: 0,
            operationTimestamp: 0,
            sendTimestamp: 0,
            callback: null,
            requestCmdId: e.head.cmdId,
            netReduceGoods: {
                reduceCoin: 0,
                reduceDiamond: 0,
                reducePvpCoin: 0,
                reduceEnergy: 0,
                reduceFriendPower: 0,
                removeItems: [],
                removeReadys: [],
                reduceBossTicket: 0,
                reduceBossTicketBuy: 0,
                reducePeriodTimes: {},
            },
        };

        try {
            let _0x1a1819: string, _0x48ba5a: Uint8Array;
            switch (that[a0_0x10cc[2694]] = that[a0_0x10cc[11874]], that[a0_0x10cc[11409]]) {
                //@ts-ignore
                case _0xf78821[a0_0x10cc[11410]]:
                    //@ts-ignore
                    _0x1a1819 = JSON.stringify(that.data), that[a0_0x10cc[11411]] && (_0x48ba5a = TextEncoderDecoder.encodeText(_0x1a1819)[a0_0x10cc[4251]], _0x1a1819 = void 0x0);
            }
            //@ts-ignore
            return _0x1e2f79.e(new Uint8Array(_0x48ba5a))[a0_0x10cc[4251]];
        } catch (err: any) {
            console.error(`加密时出现了异常: ${err}, data: ${e}`);
            return err;
        }
    },

    // 指定数据类型为arraybuffer
    // 类型错误则无法正常解密
    decrypt: function (e: ArrayBuffer): any {
        try {
            return JSON.parse(
                TextEncoderDecoder.decodeText(_0x1e2f79.d(new Uint8Array(e)))
            );
        } catch (err: any) {
            console.error(`解密时出现了异常: ${err}, data: ${e}`);
            return err;
        }
    },
};

let _0x1cd24c: any = null;

async function load_wasm() {
    const data = await fetch(`${wasm}`);
    const wasm_buffer = await data.arrayBuffer();

    const w = await WebAssembly.instantiate(wasm_buffer, {
        //@ts-ignore
        wbg: wbg,
    });
    // @ts-ignore
    _0x1cd24c = w.instance.exports;
}

export {load_wasm, ltzj};
