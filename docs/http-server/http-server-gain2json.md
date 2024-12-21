## `gain2json` <Badge type="info" text="uri" />

对应JavaScriptApi中的`nem.packet.gain2json`方法，用于解析gain数据。

### 请求地址

`http://{BASE.URL}:{BASE.PORT}/open-api/gain2json`

### 请求参数

- gain <Badge type="info" text="String" /> gain文本

### 示例代码

#### 使用Node

```javascript
const axios = require('axios');

let data = 'M1x100#,'
let config = {
    method: 'post',
    url: 'http://localhost:2026/open-api/gain2json',
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

url = "http://localhost:2026/open-api/gain2json"

payload = 'M1x100#,'

response = requests.request("POST", url, data=payload)

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

  url := "http://localhost:2026/open-api/gain2json"
  method := "POST"

  payload := strings.NewReader("M1x100#,")

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
    return
  }

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