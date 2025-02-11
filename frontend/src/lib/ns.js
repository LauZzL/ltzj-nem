import TextCoder from '@/lib/TextCoder.js'
import ns_url from '@/assets/wasm/ns.wasm'

let А0y, А0W, А0t

var А0i, А0g = WebAssembly, А0a = new Array(0x80)['fill'](void 0x0);
А0a = []
var А0P = А0a['length'];

function А0q(А0X) {
    return А0B['apply'](this, arguments);
}

function А0M(А0X, А0e) {
    return А0i = А0X['exports'],
        А0q['__wbindgen_wasm_module'] = А0e,
        А0W = null,
        А0y = null,
        А0i;
}

function А0A(А0X, А0e) {
    var А0E = А0e(0x1 * А0X['length'], 0x1) >>> 0x0;
    return А0k()['set'](А0X, А0E / 0x1),
        А0t = А0X['length'],
        А0E;
}

function А0k() {
    return null !== А0y && 0x0 !== А0y['byteLength'] || (А0y = new Uint8Array(А0i['memory']['buffer'])),
        А0y;
}

function А0R() {
    return (null === А0W || !0x0 === А0W['buffer']['detached'] || void 0x0 === А0W['buffer']['detached'] && А0W['buffer'] !== А0i['memory']['buffer']) && (А0W = new DataView(А0i['memory']['buffer'])),
        А0W;
}

function А0G(А0X, А0e) {
    try {
        return А0X['apply'](this, А0e);
    } catch (А0E) {
        А0i['__wbindgen_exn_store'](А0S(А0E));
    }
}

function А0S(А0X) {
    А0P === А0a['length'] && А0a['push'](А0a['length'] + 0x1);
    var А0e = А0P;
    return А0P = А0a[А0e],
        А0a[А0e] = А0X,
        А0e;
}

function А0v(А0X) {
    var А0e = А0N(А0X);
    return function (А0E) {
        А0E < 0x84 || (А0a[А0E] = А0P,
            А0P = А0E);
    }(А0X),
        А0e;
}

function А0V(А0X, А0e) {
    return А0X >>>= 0x0,
        А0k()['subarray'](А0X / 0x1, А0X / 0x1 + А0e);
}

function А0N(А0X) {
    return А0a[А0X];
}

function _typeof(А0h) {
    '@babel/helpers - typeof';
    return _typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol['iterator'] ? function (А0J) {
            return typeof А0J;
        }
        : function (А0J) {
            return А0J && 'function' == typeof Symbol && А0J['constructor'] === Symbol && А0J !== Symbol['prototype'] ? 'symbol' : typeof А0J;
        }
        ,
        _typeof(А0h);
}

function wbg() {
    var А0X, А0e = {};
    return А0e['wbg'] = {},
        А0e['wbg']['__wbg_random_dcc13e3a22966e32'] = 'function' == typeof Math['random'] ? Math['random'] : (А0X = Math.random,
                function () {
                    throw new Error(А0X + ' is not defined');
                }
        ),
        А0e['wbg']['__wbindgen_number_new'] = function (А0E) {
            return А0S(А0E);
        }
        ,
        А0e['wbg']['__wbg_crypto_1d1f22824a6a080c'] = function (А0E) {
            return А0S(А0N(А0E)['crypto']);
        }
        ,
        А0e['wbg']['__wbindgen_is_object'] = function (А0E) {
            var А0c = А0N(А0E);
            return 'object' == _typeof(А0c) && null !== А0c;
        }
        ,
        А0e['wbg']['__wbg_process_4a72847cc503995b'] = function (А0E) {
            return А0S(А0N(А0E)['process']);
        }
        ,
        А0e['wbg']['__wbg_versions_f686565e586dd935'] = function (А0E) {
            return А0S(А0N(А0E)['versions']);
        }
        ,
        А0e['wbg']['__wbg_node_104a2ff8d6ea03a2'] = function (А0E) {
            return А0S(А0N(А0E)['node']);
        }
        ,
        А0e['wbg']['__wbindgen_is_string'] = function (А0E) {
            return 'string' == typeof А0N(А0E);
        }
        ,
        А0e['wbg']['__wbindgen_object_drop_ref'] = function (А0E) {
            А0v(А0E);
        }
        ,
        А0e['wbg']['__wbg_require_cca90b1a94a0255b'] = function () {
            return А0G(function () {
                return А0S(А0J['require']);
            }, arguments);
        }
        ,
        А0e['wbg']['__wbindgen_is_function'] = function (А0E) {
            return 'function' == typeof А0N(А0E);
        }
        ,
        А0e['wbg']['__wbindgen_string_new'] = function (А0E, А0c) {
            return А0S(А0n(А0E, А0c));
        }
        ,
        А0e['wbg']['__wbg_msCrypto_eb05e62b530a1508'] = function (А0E) {
            return А0S(А0N(А0E)['msCrypto']);
        }
        ,
        А0e['wbg']['__wbg_randomFillSync_5c9c955aa56b6049'] = function () {
            return А0G(function (А0E, А0c) {
                А0N(А0E)['randomFillSync'](А0v(А0c));
            }, arguments);
        }
        ,
        А0e['wbg']['__wbg_getRandomValues_3aa56aa6edec874c'] = function () {
            return А0G(function (А0E, А0c) {
                А0N(А0E)['getRandomValues'](А0N(А0c));
            }, arguments);
        }
        ,
        А0e['wbg']['__wbg_newnoargs_76313bd6ff35d0f2'] = function (А0E, А0c) {
            return А0S(new Function(А0n(А0E, А0c)));
        }
        ,
        А0e['wbg']['__wbg_call_1084a111329e68ce'] = function () {
            return А0G(function (А0E, А0c) {
                return А0S(А0N(А0E)['call'](А0N(А0c)));
            }, arguments);
        }
        ,
        А0e['wbg']['__wbindgen_object_clone_ref'] = function (А0E) {
            return А0S(А0N(А0E));
        }
        ,
        А0e['wbg']['__wbg_self_3093d5d1f7bcb682'] = function () {
            return А0G(function () {
                return А0S(self['self']);
            }, arguments);
        }
        ,
        А0e['wbg']['__wbg_window_3bcfc4d31bc012f8'] = function () {
            return А0G(function () {
                return А0S(window['window']);
            }, arguments);
        }
        ,
        А0e['wbg']['__wbg_globalThis_86b222e13bdf32ed'] = function () {
            return А0G(function () {
                return А0S(globalThis['globalThis']);
            }, arguments);
        }
        ,
        А0e['wbg']['__wbg_global_e5a3fe56f8be9485'] = function () {
            return А0G(function () {
                return А0S(global['global']);
            }, arguments);
        }
        ,
        А0e['wbg']['__wbindgen_is_undefined'] = function (А0E) {
            return void 0x0 === А0N(А0E);
        }
        ,
        А0e['wbg']['__wbg_call_89af060b4e1523f2'] = function () {
            return А0G(function (А0E, А0c, А0U) {
                return А0S(А0N(А0E)['call'](А0N(А0c), А0N(А0U)));
            }, arguments);
        }
        ,
        А0e['wbg']['__wbg_buffer_b7b08af79b0b0974'] = function (А0E) {
            return А0S(А0N(А0E)['buffer']);
        }
        ,
        А0e['wbg']['__wbg_newwithbyteoffsetandlength_8a2cb9ca96b27ec9'] = function (А0E, А0c, А0U) {
            return А0S(new Uint8Array(А0N(А0E), А0c >>> 0x0, А0U >>> 0x0));
        }
        ,
        А0e['wbg']['__wbg_new_ea1883e1e5e86686'] = function (А0E) {
            return А0S(new Uint8Array(А0N(А0E)));
        }
        ,
        А0e['wbg']['__wbg_set_d1e79e2388520f18'] = function (А0E, А0c, А0U) {
            А0N(А0E)['set'](А0N(А0c), А0U >>> 0x0);
        }
        ,
        А0e['wbg']['__wbg_newwithlength_ec548f448387c968'] = function (А0E) {
            return А0S(new Uint8Array(А0E >>> 0x0));
        }
        ,
        А0e['wbg']['__wbg_subarray_7c2e3576afe181d1'] = function (А0E, А0c, А0U) {
            return А0S(А0N(А0E)['subarray'](А0c >>> 0x0, А0U >>> 0x0));
        }
        ,
        А0e['wbg']['__wbindgen_throw'] = function (А0E, А0c) {
            throw new Error(А0n(А0E, А0c));
        }
        ,
        А0e['wbg']['__wbindgen_memory'] = function () {
            return А0S(А0i['memory']);
        }
        ,
        А0e;
}

const wasm = {
    'd': function А0r(А0O) {
        try {
            var А0x = А0i['__wbindgen_add_to_stack_pointer'](-0x10)
                , А0I = А0A(А0O, А0i['__wbindgen_malloc'])
                , А0D = А0t;
            А0i['d'](А0x, А0I, А0D);
            var А0K = А0R()['getInt32'](А0x + 0x0, !0x0)
                , А0z = А0R()['getInt32'](А0x + 0x4, !0x0)
                , А0m = А0R()['getInt32'](А0x + 0x8, !0x0);
            if (А0R()['getInt32'](А0x + 0xc, !0x0))
                throw А0v(А0m);
            var А0X = А0V(А0K, А0z)['slice']();
            return А0i['__wbindgen_free'](А0K, 0x1 * А0z, 0x1),
                А0X;
        } finally {
            А0i['__wbindgen_add_to_stack_pointer'](0x10);
        }
    },
    'default': А0q,
    'e': function А0O(А0x) {
        try {
            var А0I = А0i['__wbindgen_add_to_stack_pointer'](-0x10)
                , А0D = А0A(А0x, А0i['__wbindgen_malloc'])
                , А0K = А0t;
            А0i['e'](А0I, А0D, А0K);
            var А0z = А0R()['getInt32'](А0I + 0x0, !0x0)
                , А0m = А0R()['getInt32'](А0I + 0x4, !0x0)
                , А0X = А0V(А0z, А0m)['slice']();
            return А0i['__wbindgen_free'](А0z, 0x1 * А0m, 0x1),
                А0X;
        } finally {
            А0i['__wbindgen_add_to_stack_pointer'](0x10);
        }
    },
    'fp': function А0x(А0I, А0D) {
        А0i['fp'](А0I, А0D);
    },
    'ga': function А0I(А0D, А0K) {
        А0i['ga'](А0D, А0K);
    },
    'ge': function А0D(А0K) {
        try {
            var А0z = А0i['__wbindgen_add_to_stack_pointer'](-0x10)
                , А0m = А0A(А0K, А0i['__wbindgen_malloc'])
                , А0X = А0t;
            А0i['ge'](А0z, А0m, А0X);
            var А0e = А0R()['getInt32'](А0z + 0x0, !0x0)
                , А0E = А0R()['getInt32'](А0z + 0x4, !0x0)
                , А0c = А0V(А0e, А0E)['slice']();
            return А0i['__wbindgen_free'](А0e, 0x1 * А0E, 0x1),
                А0c;
        } finally {
            А0i['__wbindgen_add_to_stack_pointer'](0x10);
        }
    },
    'gs': function А0K(А0z, А0m) {
        try {
            var А0X = А0i['__wbindgen_add_to_stack_pointer'](-0x10)
                , А0e = А0A(А0z, А0i['__wbindgen_malloc'])
                , А0E = А0t;
            А0i['gs'](А0X, А0e, А0E, А0m);
            var А0c = А0R()['getInt32'](А0X + 0x0, !0x0);
            if (А0R()['getInt32'](А0X + 0x4, !0x0))
                throw А0v(А0c);
        } finally {
            А0i['__wbindgen_add_to_stack_pointer'](0x10);
        }
    },
    'initSync': function А0z(А0m) {
        if (void 0x0 !== А0i)
            return А0i;
        if (void 0x0 !== А0m && Object['getPrototypeOf'](А0m) === Object['prototype'])
            А0m = А0m['module'];
        else
            console['warn']('using deprecated parameters for `initSync()`; pass a single object instead');
        var А0X = wbg();
        return false || (А0m = new А0g['Module'](А0m)),
            А0M(new А0g['Instance'](А0m, А0X), А0m);
    },
    'n': function А0m() {
        return А0i['n']();
    }
}


const enc = {
    decrypt(buffer) {
        try {
            const data = TextCoder.decodeText(wasm['d'](new Uint8Array(buffer)))
            return JSON.parse(data)
        } catch (e) {
            return `解密数据时遇到了错误，可能是数据格式错误。错误信息: ${e}，被解密的数据: ` + buffer
        }
    },
    encrypt(payload) {
        const payloadStr = JSON.stringify(payload)
        let buffer = TextCoder.encodeText(payloadStr).buffer
        if (payloadStr.includes('actionTag')) {
            return wasm['ge'](new Uint8Array(buffer))
        } else {
            return wasm['e'](new Uint8Array(buffer))
        }
    },
    /**
     * (104)(1) / (104)(2)
     * @param data
     * @param mode
     * @returns {string}
     */
    anti_104_1_2(data, mode) {
        try {
            //@source-ignore
        } catch (e) {
            return "数据解析错误: " + e
        }
    },
    /**
     * (104)(64) / (104)(256) 每次小程序版本更新后都需要重新生成
     * @param target
     */
    anti_104_64_256(target = false) {
        //@source-ignore
    },
    //@source-ignore
    //@source-ignore
    //@source-ignore
    //@source-ignore
}


export const ns = {
    async init() {
        const response = await fetch(`${ns_url}`)
        const wasmBufferSource = await response.arrayBuffer()
        return wasm.initSync(wasmBufferSource)
    },
    enc: enc,
    wasm: wasm
}

