## `getActionTag` <Badge type="info" text="uri" />

对应JavaScriptApi中的`nem.packet.getActionTag`方法，用于计算actionTag。

### 请求地址

`http://{BASE.URL}:{BASE.PORT}/open-api/getActionTag`

### 请求参数


- start <Badge type="info" text="Number" /> 从0开始
- actionInfos <Badge type="info" text="JSON" /> 进入对局返回的actionInfos数组
- level <Badge type="info" text="Number" /> 
- type <Badge type="info" text="String" /> 

::: details `type` `level` 参数规范

| 类型     | type                  | level | 说明                                   |
|--------|-----------------------|-------|--------------------------------------|
| 普通关卡   | normal                | 关卡数   | 闯关模式普通关卡                             |
| 英雄关卡   | hero                  | 关卡数   | 闯关模式英雄关卡                             |
| 陨石陷阱   | meteorite             | 难度+1  | 活动关卡陨石陷阱                             |
| 激光迷宫   | laser                 | 难度+1  | 活动关卡激光迷宫                             |
| 导弹猎场   | missile               | 难度+1  | 活动关卡导弹猎场                             |
| 白鸟座    | bird                  | 难度+1  | BOSS关卡白鸟座                            |
| 天龙座    | loong                 | 难度+1  | BOSS关卡天龙座                            |
| 仙女座    | female                | 难度+1  | BOSS关卡仙女座                            |
| 天马座    | horse                 | 难度+1  | BOSS关卡天马座                            |
| 无尽     | endless               | 固定1   | 无尽模式                                 |
| PVP金币场 | pvp_gold              | 固定1   | PVP金币场                               |
| 超限模式   | hyper_$\{boos_type\}  | 难度+1  | 超限模式，boos_type为BOSS类型，例如：hyper_loong |
| 远征模式   | expedition_$\{stage\} | 1-8   | 远征模式，stage为上方三个环节(1-3)               |


:::

### 示例代码

提交数据格式

```json
{
  "start": 0,
  "actionInfos": [],
  "level": 1,
  "type": "normal"
}
```

#### 使用Node

```javascript
const axios = require('axios');

let data = {...}
let config = {
    method: 'post',
    url: 'http://localhost:2026/open-api/getActionTag',
    headers: {
        'Content-Type': 'application/json'
    },
    data : data
};
axios.request(config)
    .then((response) => {
        console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
        console.log(error);
    });
```
#### 使用Python

```python
import requests
import json

url = "http://localhost:2026/open-api/getActionTag"

payload = json.dumps({...})
headers = {
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)

```
### 使用Go

```go
package main

import (
  "fmt"
  "strings"
  "net/http"
  "io"
)

func main() {

  url := "http://localhost:2026/open-api/getActionTag"
  method := "POST"

  payload := strings.NewReader(`{}`)

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("Content-Type", "application/json")

  res, err := client.Do(req)
  if err != nil {
    fmt.Println(err)
    return
  }
  defer res.Body.Close()

  body, err := io.ReadAll(res.Body)
  if err != nil {
    fmt.Println(err)
    return
  }
  fmt.Println(string(body))
}
```