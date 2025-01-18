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

## 进度

- [x] 基础架构
- [x] SunnyNet集成
- [x] 获取uid、sid
- [x] 数据包加解密算法
- [ ] actionTag算法
- [x] 奖励格式化
- [x] 奖励图标
- [ ] 日常功能迁移
- [ ] 闯关功能迁移

## 免责声明

本项目仅供学习交流，请勿用于任何非法用途。


## 开发

你需要安装 Go 语言环境和Node 环境。

### 安装wails

```shell
go install github.com/wailsapp/wails/v2/cmd/wails@latest
```

### macOS

你需要安装 `xcode-command-line-tools`

```bash
xcode-select --install
```

### windows

你需要安装 [`TDM-GCC`](https://jmeubank.github.io/tdm-gcc/) .



### 安装依赖

```bash
# 下载依赖包
go mod tidy

# 安装前端依赖
cd frontend && yarn install
```

### 启动

```bash
# 启动前端服务
yarn dev:frontend

# 推荐:启动wails(需要手动启动前端服务)
wails dev-f

# 启动wails(集成前端服务,在前端页面变动后可能无法实时更新,推荐使用上方命令)
wails dev
```

## 构建

```bash
wails build
```

## 参考

- [SunnyNet](https://github.com/qtgolang/SunnyNet)


## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=LauZzL/leitingzhanji-ui&type=Date)](https://star-history.com/#LauZzL/leitingzhanji-ui&Date)