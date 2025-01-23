package main

import (
	"bytes"
	"context"
	"encoding/base64"
	"github.com/qtgolang/SunnyNet/SunnyNet"
	"github.com/qtgolang/SunnyNet/public"
	"github.com/wailsapp/wails/v2/pkg/runtime"
	_ "github.com/wailsapp/wails/v2/pkg/runtime"
	"io"
	_ "log"
	"os"
)

type App struct {
	ctx context.Context
}

type Result struct {
	Code int
	Msg  string
}

type AppInfo struct {
	Version string
}

var (
	AppInfoData = AppInfo{
		Version: "4.0.0",
	}
)

func NewApp() *App {
	return &App{}
}

func (a *App) startup(ctx context.Context) {
	// Perform your setup here
	a.ctx = ctx
}

var ctxContent context.Context = nil

func (a App) domReady(ctx context.Context) {
	ctxContent = ctx
	runtime.EventsEmit(ctx, "AppInfo", AppInfoData)
}

func (a *App) shutdown(ctx context.Context) {
	// Perform your teardown here
}

func (a *App) StartSunnyCore(port int) Result {
	s := SunnyNet.NewSunny()
	s.SetGoCallback(HttpCallback, nil, nil, nil)
	s = s.SetPort(port).Start()
	// 开启随机TLS指纹
	s.SetRandomTLS(true)
	// 安装证书
	s.InstallCert()
	s.SetIeProxy(false)
	err := s.Error
	if err != nil {
		return Result{
			Code: -1,
			Msg:  err.Error(),
		}
	}
	return Result{
		Code: 0,
		Msg:  "success",
	}
}

func (a *App) StopSunnyCore() Result {
	s := SunnyNet.NewSunny()
	err := s.Error
	if err != nil {
		return Result{
			Code: -1,
			Msg:  err.Error(),
		}
	}
	s.SetIeProxy(true)
	s.Close()
	return Result{
		Code: 0,
		Msg:  "success",
	}
}

func HttpCallback(Conn *SunnyNet.HttpConn) {

	URL := Conn.Request.URL.String()
	urlEquals := URL == "https://wxmini.jj5agame.com/p.f"
	if Conn.Type == public.HttpResponseOK && urlEquals {
		if Conn.Response.Body != nil {
			Body, _ := io.ReadAll(Conn.Response.Body)
			_ = Conn.Response.Body.Close()
			// 将body进行base64编码
			bs64Body := base64.StdEncoding.EncodeToString(Body)
			Conn.Response.Body = io.NopCloser(bytes.NewBuffer(Body))
			runtime.EventsEmit(ctxContent, "SunnyCallback", bs64Body)
		}
	}

}

// ReadFileToBase64 /**
func (a *App) ReadFileToBase64(filePath string) (string, error) {
	fileBytes, err := os.ReadFile(filePath)
	if err != nil {
		return "", err
	}
	encodedString := base64.StdEncoding.EncodeToString(fileBytes)

	return encodedString, nil
}
