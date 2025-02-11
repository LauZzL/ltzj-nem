function TextCoder() {
    function TextCoder() {
    }

    return TextCoder.decodeText = function (uint8Array) {
        let char;
        let offset
            , len;
        for (char = '', offset = 0x0, len = uint8Array.length; offset < len;) {
            let c = uint8Array[offset++];
            if (c < 0x80)
                char += String.fromCharCode(c);
            else {
                if (c > 0xbf && c < 0xe0) {
                    let c_S = uint8Array[offset++];
                    char += String.fromCharCode((0x1f & c) << 0x6 | 0x3f & c_S);
                } else {
                    if (c > 0xdf && c < 0xf0) {
                        let c_N = uint8Array[offset++]
                            , c_v = uint8Array[offset++];
                        char += String.fromCharCode((0xf & c) << 0xc | (0x3f & c_N) << 0x6 | 0x3f & c_v);
                    } else {
                        if (c > 0xef && c < 0xf8) {
                            let c_y = (0x7 & c) << 0x12 | (0x3f & uint8Array[offset++]) << 0xc | (0x3f & uint8Array[offset++]) << 0x6 | 0x3f & uint8Array[offset++];
                            c_y -= 0x10000, char += String.fromCharCode(0xd800 + (c_y >> 0xa), 0xdc00 + (0x3ff & c_y));
                        }
                    }
                }
            }
        }
        return char;
    }
        ,
        TextCoder.encodeText = function (str) {
            let array
            let i;
            for (array = [], i = 0x0; i < str.length; i++) {
                let index = str.charCodeAt(i);
                index < 0x80 ? array.push(index) : index < 0x800 ? array.push(0xc0 | index >> 0x6, 0x80 | 0x3f & index) : index < 0x10000 ? array.push(0xe0 | index >> 0xc, 0x80 | index >> 0x6 & 0x3f, 0x80 | 0x3f & index) : (i++,
                    index = 0x10000 + ((0x3ff & index) << 0xa | 0x3ff & str.charCodeAt(i)),
                    array.push(0xf0 | index >> 0x12, 0x80 | index >> 0xc & 0x3f, 0x80 | index >> 0x6 & 0x3f, 0x80 | 0x3f & index));
            }
            return new Uint8Array(array);
        }
        ,
        TextCoder;
}


export default TextCoder();