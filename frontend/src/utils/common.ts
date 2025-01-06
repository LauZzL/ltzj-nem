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
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            let r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    },
    sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

export default commonUtils;