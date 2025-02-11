<h1 align="center">雷霆战机 NEM Build 4</h1>

<p align="center">基于 <a href="https://go.dev/" target="_blank">Golang</a> + <a href="https://vitejs.dev/" target="_blank">Vite</a> + <a href="https://vuejs.org/" target="_blank">Vue3</a> 构建。</p>

<div align="center">
<img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/LauZzL/leitingzhanji-ui?style=for-the-badge">
<img alt="GitHub forks" src="https://img.shields.io/github/forks/LauZzL/leitingzhanji-ui?style=for-the-badge">
<img alt="GitHub Release" src="https://img.shields.io/github/v/release/LauZzL/leitingzhanji-ui?style=for-the-badge">
<br>
<img alt="Page Views" src="https://badges.toozhao.com/badges/01J7D1CAVCZQSZNWQZV9RHS37H/green.svg">
</div>

## 前言

LTZJ-NEM Build 4 完全开源版本，支持 Windows、macOS。

## 免责声明

本项目仅供学习交流，请勿用于任何非法用途。


## 开发

我们建议您使用我们推荐的环境来进行开发，这将减少您开发过程中出现的各种问题。

### 环境

> 在 windows 上开发你需要安装 [`TDM-GCC`](https://jmeubank.github.io/tdm-gcc/) .

> 在 MAC 上开发你需要安装 `xcode-command-line-tools` : `xcode-select --install` .

> 注意：在使用 `wails dev` 或 `wails build` 构建应用时，可能会出现TS类型检查不通过的错误，你可以到 `frontend/package.json` 中将 `"build": "vue-tsc -b && vite build"` 修改为 `"build": "vite build"`。

- windows:11 22H2(>7)
- macOS:15(>11)
- go:1.20.4(1.18-1.21)
- node:20.8.1(>16)
- wails:2.9.1

### 安装wails

> go 国内源 `go env -w GOPROXY=https://goproxy.cn,direct`


```shell
go install github.com/wailsapp/wails/v2/cmd/wails@latest
```

### 安装依赖

```bash
# 安装go依赖
go mod tidy

# 安装前端依赖
cd frontend && yarn install
```

### 启动

```bash
# 启动前端服务
yarn frontend:dev

# 推荐:启动wails(需要先启动前端服务)
yarn dev-f
```

or

```bash
# 启动wails(集成前端服务,在前端页面变动后可能无法实时更新,推荐使用上方两个命令)
wails dev
```

## 构建

构建完成后会在 `./build` 目录下生成可执行文件。

```bash
wails build
```

## 项目文件介绍

> 所有程序功能都是在前端中实现，Go只用于集成SunnyNet和调用Webview。

| 文件                | 说明          |
|-------------------|-------------|
| payloads/index.ts | 封包数据        |
| utils/api.ts      | 所有可执行功能     |
| utils/requests.ts | 请求封装        |
| utils/common.ts   | 通用工具        |
| utils/action.ts   | actionTag算法 |
| lib/ns.ts         | wasm算法      |

### 如何调用


#### action.ts

  - getActionTag(start: number = 0, actions: any[], binData: any, type: string): number
    - start: 部分关卡可能需要多次计算actionTag，所以需要传入start参数，第一次计算actionTag时传入0即可，本局继续计算则传入已经计算过的actions.length总和
    - actions: 发送封包返回的actions数组
    - binData: 见下方说明
    - type: 关卡类型，如："hero" | "normal" | "endless" | "boss" | "period" | "hyperboss" | "expedition"

binData会在首次运行程序时加载，存储到localStorage.bin中，存储格式为 `{stage_boss_0_stage-0_data:{},stage_boss_0_stage-1_data:{},...}`

`stage_boss_0_stage-0_data` 由 `stage_${type}_${id}_stage-${subId}_data` 组成。

- type: 关卡类型
  - normal | 普通关卡
  - hero | 英雄关卡
  - endless | 无尽关卡
  - boss |  boss关卡
  - period |  活动关卡
  - hyperboss |  超级boss关卡
  - expedition |  远征关卡
- id: 发送进入对局封包时的id参数
- subId: 发送进入对局封包时的sub参数

例如闯关普通关卡第一关的binData为：stage_normal_0_stage-0_data


```typescript
import {action} from "@/utils/action.ts";

// 当发送进入对局包时会返回一个actions数组
const actionInfos = result.actions
// 计算actionTag
const actionTags = action.getActionTag(0, actionInfos, _getBinStore().binData[`stage_${type}_${levelArray[0]}_stage-${levelArray[1]}_data`], type)
```

#### requests.ts

  - pf(payload: any): Promise<any> 用于发送封包数据，会自动在发送前替换封包中的一些数据并加密，完成后会解密返回数据。

```typescript
import {requests} from './requests.ts'

const result = await requests.pf(payload)
```

#### common.ts

  - sleep(ms: number): Promise<void> 用于等待一段时间，单位为毫秒。

```typescript
import common from "@/utils/common.ts";

// 等待1秒
await common.sleep(1000)
```

## 添加一个发送弹幕领取钻石功能

> 所有涉及到异步的行为(requests,common.sleep)都需要使用await来等待完成。

首先你需要到 `utils/api.ts` 中添加一个方法。

```typescript
/**
 * 发送弹幕20钻石
 */
sendDanMu: async () => {
    // 从payloads中获取封包数据
    const payload = PAYLOADS['sendDanMu']
    // 输出日志信息
    log('processing', `开始发送弹幕`)
    // 发送封包数据(需要使用await等待完成)
    let result = await requests.pf(payload)
    if (result.head.state == 0) {
        log('success', `发送弹幕成功`)
        // 输出获得的奖励信息，可以在任何需要输出奖励信息的地方调用此方法，传入gain文本
        _logGain(result.head.gain)
    } else {
        log('error', `发送弹幕失败:${result.head.msg}`)
    }
}
```

然后在你需要的地方调用这个方法。

.vue example:

> ApiFactory 是一个封装了所有可执行功能的类，你可以通过ApiFactory.execute(funcName:string, args: object = null)来调用api.ts中的方法，同时你可以在args中传入参数。

```vue
<template>
  <a-button :loading="statusStore.getBtnLoading()" @click="ApiFactory.execute('sendDanMu')">弹幕钻石</a-button>
</template>

<script setup lang="ts">
  // 引入ApiFactory
  import {ApiFactory} from "@/utils/featureFactory.ts";
  // 按钮状态管理
  import {useStatusStore} from "@/store/status.ts";
  
  const statusStore = useStatusStore()
</script>
```

这样就完成了一个新的功能的添加。

## 参考

- [SunnyNet](https://github.com/qtgolang/SunnyNet)


## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=LauZzL/leitingzhanji-ui&type=Date)](https://star-history.com/#LauZzL/leitingzhanji-ui&Date)