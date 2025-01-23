const commonUtils = {
    getLocalDateTime() {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const monthStr = month < 10 ? `0${month}` : month;
        const day = date.getDate();
        const dayStr = day < 10 ? `0${day}` : day;
        const hour = date.getHours();
        const hourStr = hour < 10 ? `0${hour}` : hour;
        const minute = date.getMinutes();
        const minuteStr = minute < 10 ? `0${minute}` : minute;
        const second = date.getSeconds();
        const secondStr = second < 10 ? `0${second}` : second;
        return `${year}-${monthStr}-${dayStr} ${hourStr}:${minuteStr}:${secondStr}`;
    },
    UUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    },
    sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },
    generateLevel(level: number, levelsPerChapter: number = 8) {
        let chapterId = Math.floor((level - 1) / levelsPerChapter);
        let levelIndex = (level - 1) % levelsPerChapter;
        return [chapterId, levelIndex]
    },
    getBossCount(level: number) {
        const cyclePosition = level % 4;
        switch (cyclePosition) {
            case 1:
                return [0, 0, 0];
            case 2:
                return [1, 1, 0];
            case 3:
                return [0, 0, 0];
            case 0:
                return [1, 0, 1];
            default:
                throw new Error('无法匹配到对应的关卡数据');
        }
    },
    getScoreMap(score: number) {
        let remaining = score;

        function getRandomEven(max: number) {
            return 2 * Math.floor(Math.random() * (max / 2));
        }

        let obj: { 0: number, 1: number, 2: number, 3: number } = {
            '0': 0,
            '1': 0,
            '2': 0,
            '3': 0
        }
        obj['0'] = getRandomEven(remaining - 2);
        remaining -= obj['0'];
        obj['1'] = getRandomEven(remaining - 2);
        remaining -= obj['1'];
        obj['2'] = getRandomEven(remaining - 2);
        remaining -= obj['2'];
        obj['3'] = remaining;
        return obj;
    },
    parseScriptMetadata(code: string) {
        const metadata: any = {};
        const metadataRegex = new RegExp(
            `^\\s*//\\s*@([\\w-]+)\\s*(.*)\\s*($|//\\s*==/NemScript==)`,
            'gmi'
        );
        let match;
        while ((match = metadataRegex.exec(code)) !== null) {
            metadata[match[1]] = match[2].trim();
        }
        return metadata;
    }
}

export default commonUtils;