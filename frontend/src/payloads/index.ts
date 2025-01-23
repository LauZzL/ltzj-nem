export const PAYLOADS: Record<string, any> = {
    /**
     * 寻宝转盘
     */
    dailyWheelReward: {
        "head": {
            "cmdDataSplitLength": 0,
            "cmdId": 64,
            "cmdLength": 0,
            "cmdSequence": 0,
            "cmdVersion": 20,
            "headVersion": 0,
            "timestamp": 0,
            "crcVerify": 0,
            "platform": 0,
            "reconnect": false,
            "sid": "",
            "uid": ""
        }
    },
    /**
     * 寻宝装备宝箱
     */
    dailyEquipBoxReward: {
        "head": {
            "cmdDataSplitLength": 0,
            "cmdId": 11,
            "cmdLength": 0,
            "cmdSequence": 0,
            "cmdVersion": 20,
            "headVersion": 0,
            "timestamp": 0,
            "crcVerify": 0,
            "platform": 0,
            "reconnect": false,
            "sid": "",
            "uid": ""
        },
        "shopIndex": 4,
        "sdTargetData": {"type": 12, "sd_id": 0, "quality": 4, "level": 0, "num": 0},
        "adBuy": "0"
    },
    /**
     * 刷新用户信息
     */
    refreshUserInfo: {
        "head": {
            "cmdDataSplitLength": 0,
            "cmdId": 1,
            "cmdLength": 0,
            "cmdSequence": 1,
            "cmdVersion": 20,
            "headVersion": 0,
            "timestamp": 0,
            "crcVerify": 0,
            "platform": 0,
            "reconnect": false,
            "sid": "",
            "uid": ""
        }
    },
    /**
     * 购买每日免费礼包
     */
    dailyShopFree: [
        {
            name: "商城广告钻石",
            num: 1,
            data: {"head":{"cmdDataSplitLength":0,"cmdId":96,"cmdLength":0,"cmdSequence":0,"cmdVersion":4,"headVersion":0,"timestamp":0,"crcVerify":0,"platform":0,"reconnect":false,"sid":"","uid":""},"id":1}
        },
        {
            name: "商城广告金币",
            num: 2,
            data: {"head":{"cmdDataSplitLength":0,"cmdId":96,"cmdLength":0,"cmdSequence":0,"cmdVersion":4,"headVersion":0,"timestamp":0,"crcVerify":0,"platform":0,"reconnect":false,"sid":"","uid":""},"id":2}
        },
        {
            name: "商城广告核弹",
            num: 2,
            data: {"head":{"cmdDataSplitLength":0,"cmdId":96,"cmdLength":0,"cmdSequence":0,"cmdVersion":4,"headVersion":0,"timestamp":0,"crcVerify":0,"platform":0,"reconnect":false,"sid":"","uid":""},"id":3}
        },
        {
            name: "商城广告扫荡卡",
            num: 5,
            data: {"head":{"cmdDataSplitLength":0,"cmdId":96,"cmdLength":0,"cmdSequence":0,"cmdVersion":4,"headVersion":0,"timestamp":0,"crcVerify":0,"platform":0,"reconnect":false,"sid":"","uid":""},"id":4}
        },
        {
            name: "商城广告限购礼包",
            num: 1,
            data: {"head":{"cmdDataSplitLength":0,"cmdId":101,"cmdLength":0,"cmdSequence":0,"cmdVersion":4,"headVersion":0,"timestamp":0,"crcVerify":0,"platform":0,"reconnect":false,"sid":"","uid":""},"id":1,"orderId":""}
        }
    ],
    /**
     * 广告体力
     */
    dailyEnergyReward: {"head":{"cmdDataSplitLength":0,"cmdId":11,"cmdLength":0,"cmdSequence":0,"cmdVersion":4,"headVersion":0,"timestamp":0,"crcVerify":0,"platform":0,"reconnect":false,"sid":"","uid":""},"shopIndex":3,"sdTargetData":{"type":8,"sd_id":1,"quality":3,"level":0,"num":1},"adBuy":"0"},
    /**
     * 寻宝装备宝箱
     */
    dailyEquipReward: [
        {
            name: "普通装备宝箱",
            num: 1,
            data: {"head":{"cmdDataSplitLength":0,"cmdId":11,"cmdLength":0,"cmdSequence":0,"cmdVersion":4,"headVersion":0,"timestamp":0,"crcVerify":0,"platform":0,"reconnect":false,"sid":"","uid":""},"shopIndex":4,"sdTargetData":{"type":12,"sd_id":21,"quality":4,"level":0,"num":1},"adBuy":"1"}
        },
        {
            name: "高级装备宝箱",
            num: 1,
            data: {"head":{"cmdDataSplitLength":0,"cmdId":11,"cmdLength":0,"cmdSequence":0,"cmdVersion":4,"headVersion":0,"timestamp":0,"crcVerify":0,"platform":0,"reconnect":false,"sid":"","uid":""},"shopIndex":4,"sdTargetData":{"type":12,"sd_id":22,"quality":4,"level":0,"num":1},"adBuy":"1"}
        }
    ],
    /**
     * 星际探索
     */
    dailyExploreReward: [
        {
            name: '快速探索',
            num: 1,
            data: {"head":{"cmdDataSplitLength":0,"cmdId":88,"cmdLength":0,"cmdSequence":0,"cmdVersion":4,"headVersion":0,"timestamp":0,"crcVerify":0,"platform":0,"reconnect":false,"sid":"","uid":""},"type":0}
        },
        {
            name: '免费探索',
            num: 1,
            data: {"head":{"cmdDataSplitLength":0,"cmdId":87,"cmdLength":0,"cmdSequence":0,"cmdVersion":4,"headVersion":0,"timestamp":0,"crcVerify":0,"platform":0,"reconnect":false,"sid":"","uid":""},"type":0}
        },
        {
            name: '广告快速探索',
            num: 3,
            data: {"head":{"cmdDataSplitLength":0,"cmdId":88,"cmdLength":0,"cmdSequence":0,"cmdVersion":4,"headVersion":0,"timestamp":0,"crcVerify":0,"platform":0,"reconnect":false,"sid":"","uid":""},"type":1}
        }
    ],
    /**
     * 发送弹幕
     */
    sendDanMu: {"head":{"cmdDataSplitLength":0,"cmdId":125,"cmdLength":0,"cmdSequence":0,"cmdVersion":4,"headVersion":0,"timestamp":0,"crcVerify":0,"platform":0,"reconnect":false,"sid":"","uid":""},"message":"","presetMessage":"1"},
    /**
     * 桌面启动
     */
    desktopStart: {"head":{"cmdDataSplitLength":0,"cmdId":135,"cmdLength":0,"cmdSequence":0,"cmdVersion":4,"headVersion":0,"timestamp":0,"crcVerify":0,"platform":0,"reconnect":false,"sid":"","uid":""},"actionId":1},
    /**
     * 助战金币
     */
    dailyHelpGold: {"head":{"cmdDataSplitLength":0,"cmdId":60,"cmdLength":0,"cmdSequence":0,"cmdVersion":4,"headVersion":0,"timestamp":0,"crcVerify":0,"platform":0,"reconnect":false,"sid":"","uid":""}},
    /**
     * 奖励-无尽宝箱x3
     */
    activeEndlessReward: {"head":{"cmdDataSplitLength":0,"cmdId":21,"cmdLength":0,"cmdSequence":0,"cmdVersion":4,"headVersion":0,"timestamp":0,"crcVerify":0,"platform":0,"reconnect":false,"sid":"","uid":""},"type":1,"id":0,"rewardIndex":0},
    /**
     * 奖励-体力x100
     */
    activeEnergyReward: {"head":{"cmdDataSplitLength":0,"cmdId":21,"cmdLength":0,"cmdSequence":0,"cmdVersion":4,"headVersion":0,"timestamp":0,"crcVerify":0,"platform":0,"reconnect":false,"sid":"","uid":""},"type":1,"id":80,"rewardIndex":0},
    /**
     * 活跃度5档
     */
    activeReward: {"head":{"cmdDataSplitLength":0,"cmdId":14,"cmdLength":0,"cmdSequence":0,"cmdVersion":4,"headVersion":0,"timestamp":0,"crcVerify":0,"platform":0,"reconnect":false,"sid":"","uid":""},"index":0},
    /**
     * VIP每日奖励
     */
    dailyVipReward: {"head":{"cmdDataSplitLength":0,"cmdId":21,"cmdLength":0,"cmdSequence":0,"cmdVersion":4,"headVersion":0,"timestamp":0,"crcVerify":0,"platform":0,"reconnect":false,"sid":"","uid":""},"type":1,"id":100,"rewardIndex":0},
    /**
     * CDK兑换
     */
    cdkDo: {"head":{"cmdDataSplitLength":0,"cmdId":109,"cmdLength":0,"cmdSequence":0,"cmdVersion":4,"headVersion":0,"timestamp":0,"crcVerify":0,"platform":0,"reconnect":false,"sid":"","uid":""},"cdkeyCode":""},
    /**
     * 进入对局
     */
    joinGame: {"head":{"cmdDataSplitLength":0,"cmdId":48,"cmdLength":0,"cmdSequence":0,"cmdVersion":4,"headVersion":0,"timestamp":0,"crcVerify":0,"platform":0,"reconnect":false,"sid":"","uid":""},"type":0,"id":0,"subId":0,"targets":[],"md5s":[],"fuid":"0","pvpAreaId":-1},
    /**
     * 闯关
     */
    level: {
        two: {"head":{"cmdDataSplitLength":0,"cmdId":118,"cmdLength":0,"cmdSequence":0,"cmdVersion":4,"headVersion":0,"timestamp":0,"crcVerify":0,"platform":0,"reconnect":false,"sid":"","uid":""}},
        load: { "head": { "cmdDataSplitLength": 0, "cmdId": 163, "cmdLength": 0, "cmdSequence": 0, "cmdVersion": 11, "headVersion": 0, "timestamp": 0, "crcVerify": 0, "platform": 0, "reconnect": false, "sid": "", "uid": "" }, "aidTime": 0, "ashTime": 0, "totalDashTime": 0, "boomATK": 32, "bombMinCD": 600, "bossCount": 1, "bossLarge": 0, "bossLargeScore": 0, "bossReward": 0, "bossSmall": 1, "bossSmallScore": 500, "comboTotalNum": 1, "comboNum": [1, 0, 0, 0, 0, 0, 0], "comboScore": 3, "comboSign": [0, 0, 0, 0, 0, 0], "comboSignScore": 0, "comboDisMax": 66.09983321543378, "comboDisMin": 66.09983321543378, "comboIntervalMax": -1, "comboIntervalMin": -1, "dsArr": [], "endlessLoopCount": 0, "enemiesLarge": 4, "enemiesLargeScore": 1440, "enemiesLargeStorm": 0, "enemiesMid": 5, "enemiesMidScore": 450, "enemiesMidStorm": 0, "enemiesPasserby": 0, "enemiesPasserbyScore": 0, "enemiesPasserbyStorm": 0, "enemiesSmall": 4, "enemiesSmallScore": 8, "enemiesSmallStorm": 0, "enemyRanScoreTotal": 8, "engineDmgMax": 6092.379, "enterWormholeNum": 0, "flameTime": 0, "hp": 121709, "hpMax": 121709, "improperDs": false, "isRandomBossKill": 0, "m1": 0, "m2": 0, "m1Large": 1, "m1LargeScore": 50, "m1Mid": 13, "m1MidScore": 130, "m1Small": 105, "m1SmallScore": 525, "props": [{ "type": 4, "sd_id": 0, "quality": 3, "level": 0, "num": 0 }, { "type": 4, "sd_id": 1, "quality": 3, "level": 0, "num": 0 }, { "type": 4, "sd_id": 2, "quality": 3, "level": 0, "num": 0 }], "score": 3106, "scoreMap": { "0": 1898, "2": 500, "3": 705, "4": 3 }, "scoreShieldSecond": 0, "secondCnt": 21.6, "fps": 55.50119846662733, "gameDuration": 23.40490000015196, "battleDuration": 14.669300000054037, "shieldSecond": 4.9, "stormSecond": 3.4, "stormTime": 1, "success": false, "targets": [{ "type": 10, "sd_id": 0, "quality": 0, "level": 0, "num": 2 }, { "type": 10, "sd_id": 2, "quality": 0, "level": 0, "num": 1 }, { "type": 10, "sd_id": 5, "quality": 0, "level": 0, "num": 1 }, { "type": 10, "sd_id": 1, "quality": 0, "level": 0, "num": 1 }], "totalWave": 6, "randomWave": 2, "weaponDmgMax": 5830.419, "wingmanDmgMax": 6086.7, "planeHpBase": 0, "planeHurtMax": 0, "planeHurtMin": 0, "planeHurtNum": 0, "planeHurtTotal": 0, "planeHurtUnreduceWeaponNum": 0, "planeHurtUpgradeWeaponNum": 0, "planeEnergyTransNum": 0, "eatBulletCount": 0, "eatBulletTotalScore": 0, "lastDashIndexes": [], "actionIndex": 6, "totalAction": 6, "actionTag": 0 },
        end: { "head": { "cmdDataSplitLength": 0, "cmdId": 13, "cmdLength": 0, "cmdSequence": 0, "cmdVersion": 11, "headVersion": 0, "timestamp": 0, "crcVerify": 0, "platform": 0, "reconnect": false, "sid": "", "uid": "" }, "aidTime": 0, "ashTime": 0, "totalDashTime": 0, "boomATK": 32, "bombMinCD": 600, "bossCount": 0, "bossLarge": 0, "bossLargeScore": 0, "bossReward": 0, "bossSmall": 0, "bossSmallScore": 0, "comboTotalNum": 8, "comboNum": [8, 0, 0, 0, 0, 0, 0], "comboScore": 24, "comboSign": [0, 0, 0, 0, 0, 0], "comboSignScore": 0, "comboDisMax": 72.32840160401241, "comboDisMin": 62.38616538602134, "comboIntervalMax": 1000, "comboIntervalMin": 66.66666666666667, "dsArr": [], "endlessLoopCount": 0, "enemiesLarge": 11, "enemiesLargeScore": 37080, "enemiesLargeStorm": 46, "enemiesMid": 9, "enemiesMidScore": 1170, "enemiesMidStorm": 2, "enemiesPasserby": 0, "enemiesPasserbyScore": 0, "enemiesPasserbyStorm": 0, "enemiesSmall": 14, "enemiesSmallScore": 80, "enemiesSmallStorm": 13, "enemyRanScoreTotal": 80, "engineDmgMax": 6092.379, "enterWormholeNum": 0, "flameTime": 0, "hp": 121709, "hpMax": 121709, "improperDs": false, "isRandomBossKill": 0, "m1": 0, "m2": 0, "m1Large": 3, "m1LargeScore": 150, "m1Mid": 44, "m1MidScore": 440, "m1Small": 307, "m1SmallScore": 1535, "props": [{ "type": 4, "sd_id": 0, "quality": 3, "level": 0, "num": 0 }, { "type": 4, "sd_id": 1, "quality": 3, "level": 0, "num": 0 }, { "type": 4, "sd_id": 2, "quality": 3, "level": 0, "num": 0 }], "score": 40479, "scoreMap": {}, "scoreShieldSecond": 0, "secondCnt": 55, "fps": 56.074829781570045, "gameDuration": 58.93910000037566, "battleDuration": 34.27560000013278, "shieldSecond": 9.9, "stormSecond": 14.8, "stormTime": 5, "success": true, "targets": [{ "type": 10, "sd_id": 0, "quality": 0, "level": 0, "num": 6 }, { "type": 10, "sd_id": 2, "quality": 0, "level": 0, "num": 2 }, { "type": 10, "sd_id": 5, "quality": 0, "level": 0, "num": 1 }, { "type": 10, "sd_id": 1, "quality": 0, "level": 0, "num": 1 }], "totalWave": 0, "randomWave": 7, "weaponDmgMax": 5830.419, "wingmanDmgMax": 6086.7, "planeHpBase": 0, "planeHurtMax": 0, "planeHurtMin": 0, "planeHurtNum": 0, "planeHurtTotal": 0, "planeHurtUnreduceWeaponNum": 0, "planeHurtUpgradeWeaponNum": 0, "planeEnergyTransNum": 0, "eatBulletCount": 75, "eatBulletTotalScore": 0, "lastDashIndexes": [], "actionIndex": 0, "totalAction": 0, "actionTag": 0 }
    },
    /**
     * 无尽
     */
    endless: {
        load: {"head":{"cmdDataSplitLength":0,"cmdId":163,"cmdLength":0,"cmdSequence":0,"cmdVersion":4,"headVersion":0,"timestamp":0,"crcVerify":0,"platform":0,"reconnect":false,"sid":"","uid":""},"aidTime":0,"ashTime":0,"totalDashTime":30,"boomATK":16,"bombMinCD":600,"bossCount":12,"bossLarge":6,"bossLargeScore":5000,"bossReward":0,"bossSmall":6,"bossSmallScore":2500,"comboTotalNum":0,"comboNum":[0,0,0,0,0,0,0],"comboScore":0,"comboSign":[0,0,0,0,0,0],"comboSignScore":0,"comboDisMax":0,"comboDisMin":0,"comboIntervalMax":-1,"comboIntervalMin":-1,"dsArr":[],"endlessLoopCount":0,"enemiesLarge":21,"enemiesLargeScore":78840,"enemiesLargeStorm":99,"enemiesMid":57,"enemiesMidScore":30870,"enemiesMidStorm":143,"enemiesPasserby":264,"enemiesPasserbyScore":872,"enemiesPasserbyStorm":304,"enemiesSmall":24,"enemiesSmallScore":240,"enemiesSmallStorm":48,"engineDmgMax":2945,"enterWormholeNum":0,"flameTime":0,"hp":-2182997.7,"hpMax":58979.88,"improperDs":false,"isRandomBossKill":1,"m1":0,"m2":0,"m1Large":105,"m1LargeScore":5250,"m1Mid":1334,"m1MidScore":13340,"m1Small":3610,"m1SmallScore":18050,"props":[{"type":4,"sd_id":0,"quality":3,"level":0,"num":0},{"type":4,"sd_id":1,"quality":3,"level":0,"num":0},{"type":4,"sd_id":2,"quality":3,"level":0,"num":0}],"score":0,"scoreShieldSecond":0,"secondCnt":305,"fps":59.99999999998992,"gameDuration":0.0066666667179,"shieldSecond":96,"stormSecond":92.2,"stormTime":46,"success":false,"targets":[{"type":10,"sd_id":0,"quality":0,"level":0,"num":37},{"type":10,"sd_id":1,"quality":0,"level":0,"num":12},{"type":10,"sd_id":2,"quality":0,"level":0,"num":43},{"type":10,"sd_id":5,"quality":0,"level":0,"num":7},{"type":10,"sd_id":14,"quality":0,"level":0,"num":1}],"totalWave":108,"randomWave":40,"weaponDmgMax":2917,"wingmanDmgMax":2596,"planeHpBase":58979.88,"planeHurtMax":58979.88,"planeHurtMin":5004,"planeHurtNum":6,"planeHurtTotal":120623.08,"planeHurtUnreduceWeaponNum":0,"planeHurtUpgradeWeaponNum":0,"planeEnergyTransNum":25,"lastDashIndexes":[0,1,2,3,4,5,6,7,8],"actionIndex":9,"totalAction":9,"actionTag":0},
        end: {"head":{"cmdDataSplitLength":0,"cmdId":13,"cmdLength":0,"cmdSequence":0,"cmdVersion":4,"headVersion":0,"timestamp":0,"crcVerify":0,"platform":0,"reconnect":false,"sid":"","uid":""},"aidTime":0,"ashTime":0,"totalDashTime":30,"boomATK":16,"bombMinCD":600,"bossCount":12,"bossLarge":6,"bossLargeScore":5000,"bossReward":0,"bossSmall":6,"bossSmallScore":2500,"comboTotalNum":0,"comboNum":[0,0,0,0,0,0,0],"comboScore":0,"comboSign":[0,0,0,0,0,0],"comboSignScore":0,"comboDisMax":0,"comboDisMin":0,"comboIntervalMax":-1,"comboIntervalMin":-1,"dsArr":[],"endlessLoopCount":0,"enemiesLarge":21,"enemiesLargeScore":78840,"enemiesLargeStorm":99,"enemiesMid":57,"enemiesMidScore":30870,"enemiesMidStorm":143,"enemiesPasserby":264,"enemiesPasserbyScore":872,"enemiesPasserbyStorm":304,"enemiesSmall":24,"enemiesSmallScore":240,"enemiesSmallStorm":48,"engineDmgMax":2945,"enterWormholeNum":0,"flameTime":0,"hp":-2182997.7,"hpMax":58979.88,"improperDs":false,"isRandomBossKill":1,"m1":0,"m2":0,"m1Large":105,"m1LargeScore":5250,"m1Mid":1334,"m1MidScore":13340,"m1Small":3610,"m1SmallScore":18050,"props":[{"type":4,"sd_id":0,"quality":3,"level":0,"num":0},{"type":4,"sd_id":1,"quality":3,"level":0,"num":0},{"type":4,"sd_id":2,"quality":3,"level":0,"num":0}],"score":154962,"scoreShieldSecond":0,"secondCnt":305,"fps":59.99999999998992,"gameDuration":0.0066666667179,"shieldSecond":96,"stormSecond":92.2,"stormTime":46,"success":true,"targets":[{"type":10,"sd_id":0,"quality":0,"level":0,"num":37},{"type":10,"sd_id":1,"quality":0,"level":0,"num":12},{"type":10,"sd_id":2,"quality":0,"level":0,"num":43},{"type":10,"sd_id":5,"quality":0,"level":0,"num":7},{"type":10,"sd_id":14,"quality":0,"level":0,"num":1}],"totalWave":108,"randomWave":40,"weaponDmgMax":2917,"wingmanDmgMax":2596,"planeHpBase":58979.88,"planeHurtMax":58979.88,"planeHurtMin":5004,"planeHurtNum":6,"planeHurtTotal":120623.08,"planeHurtUnreduceWeaponNum":0,"planeHurtUpgradeWeaponNum":0,"planeEnergyTransNum":25,"lastDashIndexes":[0,1,2,3,4,5,6,7,8],"actionIndex":9,"totalAction":9,"actionTag":0},
        buy: {"head":{"cmdDataSplitLength":0,"cmdId":11,"cmdLength":0,"cmdSequence":0,"cmdVersion":4,"headVersion":0,"timestamp":0,"crcVerify":0,"platform":0,"reconnect":false,"sid":"","uid":""},"shopIndex":0,"sdTargetData":{"type":11,"sd_id":1,"quality":2,"level":0,"num":0},"adBuy":"0"}
    },
    /**
     * PVP
     */
    pvp: {
        // 开始匹配
        match: {"head":{"cmdDataSplitLength":0,"cmdId":80,"cmdLength":0,"cmdSequence":0,"cmdVersion":4,"headVersion":0,"timestamp":0,"crcVerify":0,"platform":0,"reconnect":false,"sid":"","uid":""},"pvpAreaId":0},
        // 检查是否匹配到对手
        check: {"head":{"cmdDataSplitLength":0,"cmdId":81,"cmdLength":0,"cmdSequence":0,"cmdVersion":4,"headVersion":0,"timestamp":0,"crcVerify":0,"platform":0,"reconnect":false,"sid":"","uid":""}},
        // 战斗结束
        end: {"head":{"cmdDataSplitLength":0,"cmdId":13,"cmdLength":0,"cmdSequence":0,"cmdVersion":10,"headVersion":0,"timestamp":0,"crcVerify":0,"platform":0,"reconnect":false,"sid":"","uid":""},"aidTime":0,"ashTime":0,"totalDashTime":0,"boomATK":32,"bombMinCD":600,"bossCount":0,"bossLarge":0,"bossLargeScore":0,"bossReward":0,"bossSmall":0,"bossSmallScore":0,"comboTotalNum":0,"comboNum":[0,0,0,0,0,0,0],"comboScore":0,"comboSign":[0,0,0,0,0,0],"comboSignScore":0,"comboDisMax":0,"comboDisMin":0,"comboIntervalMax":-1,"comboIntervalMin":-1,"dsArr":[],"endlessLoopCount":0,"enemiesLarge":0,"enemiesLargeScore":0,"enemiesLargeStorm":0,"enemiesMid":0,"enemiesMidScore":0,"enemiesMidStorm":0,"enemiesPasserby":0,"enemiesPasserbyScore":0,"enemiesPasserbyStorm":0,"enemiesSmall":0,"enemiesSmallScore":0,"enemiesSmallStorm":0,"engineDmgMax":5345,"enterWormholeNum":0,"flameTime":0,"hp":-122883.49000000002,"hpMax":97114.31,"improperDs":false,"isRandomBossKill":0,"m1":0,"m2":0,"m1Large":0,"m1LargeScore":0,"m1Mid":0,"m1MidScore":0,"m1Small":0,"m1SmallScore":0,"props":[{"type":4,"sd_id":0,"quality":3,"level":0,"num":0},{"type":4,"sd_id":1,"quality":3,"level":0,"num":0},{"type":4,"sd_id":2,"quality":3,"level":0,"num":0}],"score":0,"scoreShieldSecond":0,"secondCnt":20.5,"fps":59.999999999999666,"gameDuration":0.550000000000114,"shieldSecond":4.9,"stormSecond":4.2,"stormTime":0,"success":true,"targets":[],"totalWave":0,"randomWave":2,"weaponDmgMax":4859,"wingmanDmgMax":4967,"planeHpBase":97114.31,"planeHurtMax":97114.31,"planeHurtMin":97114.31,"planeHurtNum":1,"planeHurtTotal":97114.31,"planeHurtUnreduceWeaponNum":0,"planeHurtUpgradeWeaponNum":0,"planeEnergyTransNum":1,"lastDashIndexes":[],"actionIndex":0,"totalAction":0,"actionTag":0}
    },
    /**
     * 活动关卡
     */
    period: {"head":{"cmdDataSplitLength":0,"cmdId":13,"cmdLength":0,"cmdSequence":0,"cmdVersion":20,"headVersion":0,"timestamp":0,"crcVerify":0,"platform":0,"reconnect":false,"sid":"","uid":""},"aidTime":0,"ashTime":0,"totalDashTime":0,"boomATK":32,"bombMinCD":600,"bossCount":1,"bossLarge":0,"bossLargeScore":0,"bossReward":0,"bossSmall":1,"bossSmallScore":500,"comboTotalNum":0,"comboNum":[0,0,0,0,0,0,0],"comboScore":0,"comboSign":[0,0,0,0,0,0],"comboSignScore":0,"comboDisMax":0,"comboDisMin":0,"comboIntervalMax":-1,"comboIntervalMin":-1,"dsArr":[],"endlessLoopCount":0,"enemiesLarge":0,"enemiesLargeScore":0,"enemiesLargeStorm":0,"enemiesMid":0,"enemiesMidScore":0,"enemiesMidStorm":0,"enemiesPasserby":0,"enemiesPasserbyScore":0,"enemiesPasserbyStorm":0,"enemiesSmall":0,"enemiesSmallScore":0,"enemiesSmallStorm":0,"enemyRanScoreTotal":0,"engineDmgMax":7799.839679218852,"enterWormholeNum":0,"flameTime":0,"hp":94844.77382397887,"hpMax":117857,"improperDs":false,"isRandomBossKill":0,"m1":0,"m2":0,"m1Large":21,"m1LargeScore":1050,"m1Mid":217,"m1MidScore":2170,"m1Small":264,"m1SmallScore":1320,"props":[{"type":4,"sd_id":0,"quality":3,"level":0,"num":0},{"type":4,"sd_id":1,"quality":3,"level":0,"num":0},{"type":4,"sd_id":2,"quality":3,"level":0,"num":0}],"useFreeBomb":0,"score":5040,"scoreMap":{"2":500,"3":4540},"scoreShieldSecond":0,"secondCnt":64.3,"fps":56.19898192968482,"gameDuration":68.73790000027613,"battleDuration":56.89220000028749,"shieldSecond":0,"stormSecond":0,"stormTime":0,"extraEnergyTimeMin":0,"extraEnergyTimeMax":0,"extraEnergyTimeTotal":0,"success":true,"targets":[],"totalWave":0,"randomWave":24,"weaponDmgMax":6609.646951000181,"wingmanDmgMax":6168.444032079397,"planeHpBase":117857,"planeHurtMax":94080,"planeHurtMin":94080,"planeHurtNum":1,"planeHurtTotal":94080,"planeHurtUnreduceWeaponNum":0,"planeHurtUpgradeWeaponNum":0,"upgradeWeaponNums":[0,0,0,0,0,0,0,0,0],"planeEnergyTransNum":0,"eatBulletCount":0,"eatBulletTotalScore":0,"lastDashIndexes":[],"actionIndex":0,"totalAction":0,"actionTag":0,"clientVersion":"1.4.1"},
    boss: {"head":{"cmdDataSplitLength":0,"cmdId":13,"cmdLength":0,"cmdSequence":0,"cmdVersion":20,"headVersion":0,"timestamp":0,"crcVerify":0,"platform":0,"reconnect":false,"sid":"","uid":""},"aidTime":0,"ashTime":0,"totalDashTime":0,"boomATK":32,"bombMinCD":600,"bossCount":1,"bossLarge":1,"bossLargeScore":1000,"bossReward":0,"bossSmall":0,"bossSmallScore":0,"comboTotalNum":0,"comboNum":[0,0,0,0,0,0,0],"comboScore":0,"comboSign":[0,0,0,0,0,0],"comboSignScore":0,"comboDisMax":0,"comboDisMin":0,"comboIntervalMax":-1,"comboIntervalMin":-1,"dsArr":[],"endlessLoopCount":0,"enemiesLarge":0,"enemiesLargeScore":0,"enemiesLargeStorm":0,"enemiesMid":0,"enemiesMidScore":0,"enemiesMidStorm":0,"enemiesPasserby":0,"enemiesPasserbyScore":0,"enemiesPasserbyStorm":0,"enemiesSmall":0,"enemiesSmallScore":0,"enemiesSmallStorm":0,"enemyRanScoreTotal":0,"engineDmgMax":7884.215104,"enterWormholeNum":0,"flameTime":0,"hp":117859,"hpMax":117859,"improperDs":false,"isRandomBossKill":0,"m1":0,"m2":0,"m1Large":2,"m1LargeScore":100,"m1Mid":10,"m1MidScore":100,"m1Small":160,"m1SmallScore":800,"props":[{"type":4,"sd_id":0,"quality":3,"level":0,"num":0},{"type":4,"sd_id":1,"quality":3,"level":0,"num":0},{"type":4,"sd_id":2,"quality":3,"level":0,"num":0}],"useFreeBomb":0,"score":2000,"scoreMap":{"0":0,"2":1000,"3":1000},"scoreShieldSecond":0,"secondCnt":36.1,"fps":57.29418318804238,"gameDuration":37.87470000013703,"battleDuration":25.456900000095047,"shieldSecond":5,"stormSecond":0.8,"stormTime":1,"extraEnergyTimeMin":0,"extraEnergyTimeMax":0,"extraEnergyTimeTotal":0,"success":true,"targets":[{"type":10,"sd_id":2,"quality":0,"level":0,"num":1},{"type":10,"sd_id":0,"quality":0,"level":0,"num":4},{"type":10,"sd_id":5,"quality":0,"level":0,"num":1}],"totalWave":1,"randomWave":5,"weaponDmgMax":6692.851566985645,"wingmanDmgMax":6244.991679904307,"planeHpBase":117859,"planeHurtMax":28224.000000000004,"planeHurtMin":28224.000000000004,"planeHurtNum":1,"planeHurtTotal":28224.000000000004,"planeHurtUnreduceWeaponNum":0,"planeHurtUpgradeWeaponNum":0,"upgradeWeaponNums":[4,0,0,0,0,0,0,0,0],"planeEnergyTransNum":0,"eatBulletCount":0,"eatBulletTotalScore":0,"lastDashIndexes":[],"actionIndex":1,"totalAction":1,"actionTag":0,"clientVersion":"1.4.1"}
}