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
    desktopStar: {"head":{"cmdDataSplitLength":0,"cmdId":135,"cmdLength":0,"cmdSequence":0,"cmdVersion":4,"headVersion":0,"timestamp":0,"crcVerify":0,"platform":0,"reconnect":false,"sid":"","uid":""},"actionId":1},
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
}