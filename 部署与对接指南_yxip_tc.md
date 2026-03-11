# yxip.js 与 TC 版订阅节点（snippetstc）完整部署与对接指南

本文档将手把手教你如何从零部署带有管理后台的 `yxip.js` 优选节点生成器，并将其作为订阅源完美对接给你的 TC 版 Worker (`snippetstc.js`)。

---

## 第一部分：部署 yxip.js (包含密码管理后台)

`yxip.js` 是一个能够自动拉取 Cloudflare 优选 IP 并将其包装为 VLESS 节点的 Worker。它带有一个可视化的管理后台，允许你随时修改筛选的国家地区和节点数量。

### 1. 准备 Cloudflare API 信息（用于后台自动保存配置）
由于管理后台需要自动修改 Worker 的环境变量来保存你的设置，你需要先获取以下三个信息：
1. **Account ID (帐户 ID)**：登录 Cloudflare，在右侧边栏下方可以找到对应域名的“帐户 ID”。
2. **注册邮箱**：你登录 Cloudflare 使用的邮箱账号。
3. **Global API Key**：
   - 点击右上角头像 -> 我的个人资料 -> API 令牌。
   - 找到 **Global API Key**，点击“查看”，输入密码验证后复制该文本。

### 2. 修改 yxip.js 顶部配置
打开 `yxip.js`，在代码的**最顶端**找到以下配置区域，填入你刚刚获取的信息，并设置你的后台密码和 Worker 名称：

```javascript
// =============================================
// ============== CF API 操作环境变量所需信息 ==============
const CF_ACCOUNT_ID = '你的 Account ID';
const CF_EMAIL      = '你的 Cloudflare 注册邮箱'; 
const CF_API_TOKEN  = '你的 Global API Key';
const WORKER_NAME   = 'yxip';  // 【重要】填你准备在 CF 上创建的 Worker 名字

// =============================================
// 用户配置区
// =============================================
/**
 * 管理后台登录密码（访问 /admin 需要输入）
 */
const ADMIN_PWD = '你的复杂密码'; // 比如 990299
```

### 3. 在 Cloudflare 部署 Worker
1. 在 Cloudflare 面板左侧菜单点击 **Workers 和 Pages** -> **创建应用程序** -> **创建 Worker**。
2. 将 Worker 名称命名为你刚才在代码中填写的 `WORKER_NAME`（例如 `yxip`），点击**部署**。
3. 点击**编辑代码**，将修改好的 `yxip.js` 的所有代码复制并覆盖粘贴到网页的代码框中。
4. 点击右上角的 **部署 / 保存并部署**。

### 4. 登录管理后台进行配置
部署完成后，你的 Worker 会获得一个类似 `https://yxip.yourname.workers.dev` 的域名。
1. 在浏览器中访问 `https://yxip.yourname.workers.dev/admin`。
2. 输入你刚才设置的密码进行登录。
3. 在可视化的面板中，勾选你想要的国家/地区（如香港、美国、日本），以及设置每个地区最多返回多少个节点（如 10 个）。
4. 点击 **保存设置**。（页面提示成功后，Cloudflare 会在后台将这些配置写入环境变量中，约需 5-10 秒生效）。

---

## 第二部分：对接 TC 版本 (snippetstc.js)

TC 版本的作用是将客户端的请求参数转化为实际的 VLESS 订阅内容。现在，我们要让 TC 版去向刚刚建好的 `yxip.js` 拉取真正的优质 IP 节点。

### 1. 记录 yxip 的域名
记下你刚才部署的 `yxip.js` 的访问域名，不需要加 `http://`，例如：`yxip.yourname.workers.dev` 或者是你自行绑定的自定义域名 `sub.yourdomain.com`。

### 2. 修改 snippetstc.js 中的变量
打开你要部署（或者已经部署）的 `snippetstc.js` 代码文件。

利用搜索功能寻找变量 `SUB`（通常位于文件顶部的变量定义区）。原本它可能指向的是别人提供的公共订阅池（比如 `sub.cmliussss.net` 等）。

**把它修改为你自己的 yxip 域名：**

```javascript
// 假设这是 snippetstc.js 第 16 行左右
let SUB = 'yxip.yourname.workers.dev'; 
```
*(注意：千万不要带 `https://`，也不要带路径 `/sub`，严格只填域名)*

### 3. 上传部署 TC 版
将修改好的 `snippetstc.js` 作为另一个新的 Worker 同样部署到 Cloudflare 上。

### 4. 测试与使用
当你或者用户使用 V2rayN/Clash 请求这个 **TC Worker** 的订阅链接时，内部流程全自动发生：
1. TC Worker 接收到订阅请求。
2. 自动背地里向 `https://yxip.yourname.workers.dev/sub` 发起请求拉取节点。
3. `yxip.js` 读取你之前在管理后台中选择的地区和数量限制，过滤出优选 IP 节点，转换为 VLESS 编码返回。
4. TC 将这些节点伪装转换为最终订阅下发到客户端。

至此，完美的节点订阅全自动生产与过滤链路搭建完毕，所有的过滤与 IP 管理权限完全掌握在你的私有管理后台中。
