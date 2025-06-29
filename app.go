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
	"io/ioutil"
	_ "log"
	"os"
	"path/filepath"
	"time"
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
		Version: "4.0.1",
	}
)

type FileInfo struct {
	Name   string
	Source string
}

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
	a.StopSunnyCore()
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

// GetJSFiles returns all .js files in the 'scripts' directory.
func (a *App) GetJSFiles() ([]FileInfo, error) {
	dir, err := os.Getwd()
	if err != nil {
		return nil, err
	}
	scriptsPath := filepath.Join(dir, "scripts")
	files, err := ioutil.ReadDir(scriptsPath)
	if err != nil {
		return nil, err
	}

	var jsFiles []FileInfo

	for _, file := range files {
		if !file.IsDir() && filepath.Ext(file.Name()) == ".js" {
			filePath := filepath.Join(scriptsPath, file.Name())
			content, err := ioutil.ReadFile(filePath)
			if err != nil {
				return nil, err
			}
			jsFiles = append(jsFiles, FileInfo{Name: file.Name(), Source: string(content)})
		}
	}
	return jsFiles, nil
}

// SaveSessionToFile 保存用户会话信息到文件
func (a *App) SaveSessionToFile(sessionData string) Result {
	dir, err := os.Getwd()
	if err != nil {
		return Result{
			Code: -1,
			Msg:  "获取当前目录失败: " + err.Error(),
		}
	}
	filePath := filepath.Join(dir, "session.json")
	err = os.WriteFile(filePath, []byte(sessionData), 0644)
	if err != nil {
		return Result{
			Code: -1,
			Msg:  "保存会话信息失败: " + err.Error(),
		}
	}
	return Result{
		Code: 0,
		Msg:  "会话信息保存成功",
	}
}

// LoadSessionFromFile 从文件加载用户会话信息
func (a *App) LoadSessionFromFile() Result {
	dir, err := os.Getwd()
	if err != nil {
		return Result{
			Code: -1,
			Msg:  "获取当前目录失败: " + err.Error(),
		}
	}
	filePath := filepath.Join(dir, "session.json")
	data, err := os.ReadFile(filePath)
	if err != nil {
		return Result{
			Code: -1,
			Msg:  "读取会话信息失败: " + err.Error(),
		}
	}
	return Result{
		Code: 0,
		Msg:  string(data),
	}
}


// RemoveSessionFile 移除会话文件
func (a *App) RemoveSessionFile() Result {
    dir, err := os.Getwd()
    if err != nil {
        return Result{
            Code: -1,
            Msg:  "获取当前目录失败: " + err.Error(),
        }
    }
    filePath := filepath.Join(dir, "session.json")

    // 检查文件是否存在
    if _, err := os.Stat(filePath); os.IsNotExist(err) {
        return Result{
            Code: -1,
            Msg:  "会话文件不存在",
        }
    }

    // 移除文件
    err = os.Remove(filePath)
    if err != nil {
        return Result{
            Code: -1,
            Msg:  "移除会话文件失败: " + err.Error(),
        }
    }

    return Result{
        Code: 0,
        Msg:  "会话文件已成功移除",
    }
}

// AppendToRequestLog 将请求和响应信息追加到日志文件
func (a *App) AppendToRequestLog(requestData string) Result {
	dir, err := os.Getwd()
	if err != nil {
		return Result{
			Code: -1,
			Msg:  "获取当前目录失败: " + err.Error(),
		}
	}
	filePath := filepath.Join(dir, "request.log")

	file, err := os.OpenFile(filePath, os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
	if err != nil {
		return Result{
			Code: -1,
			Msg:  "打开日志文件失败: " + err.Error(),
		}
	}
	defer file.Close()

	timestamp := time.Now().Format("2006-01-02 15:04:05")
	logEntry := timestamp + " " + requestData + "\n"

	_, err = file.WriteString(logEntry)
	if err != nil {
		return Result{
			Code: -1,
			Msg:  "写入日志失败: " + err.Error(),
		}
	}

	return Result{
		Code: 0,
		Msg:  "日志记录成功",
	}
}
// RemoveLogFile 移除日志文件
func (a *App) RemoveLogFile() Result {
    dir, err := os.Getwd()
    if err != nil {
        return Result{
            Code: -1,
            Msg:  "获取当前目录失败: " + err.Error(),
        }
    }
    filePath := filepath.Join(dir, "request.log")

    // 检查文件是否存在
    if _, err := os.Stat(filePath); os.IsNotExist(err) {
        return Result{
            Code: -1,
            Msg:  "日志文件不存在",
        }
    }

    // 移除文件
    err = os.Remove(filePath)
    if err != nil {
        return Result{
            Code: -1,
            Msg:  "移除日志文件失败: " + err.Error(),
        }
    }

    return Result{
        Code: 0,
        Msg:  "日志文件已成功移除",
    }
}
