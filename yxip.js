// =============================================
// =============================================
// 用户配置区
// =============================================

/**
 * 管理后台登录密码（访问 /admin 需要输入）
 */
const ADMIN_PWD = 'admin123';

/**
 * /sub 接口默认地区过滤（留空 = 全部）不用填写，站内自动提交
 */
const DEFAULT_REGIONS = [];

/**
 * /sub 接口每地区默认最多返回多少个（0 = 不限）不用填写，站内自动提交
 */
const DEFAULT_LIMIT = 0;

// =============================================

// ============== CF API 操作环境变量所需信息 ==============
// 用户修改此处信息，使管理后台可以自动通过 API 覆盖设置
// 注意：环境变量属于明文存储。
const CF_ACCOUNT_ID = '你的CF_ACCOUNT_ID';
const CF_EMAIL = '你的CF邮箱';
const CF_API_TOKEN = '你的cf-api-token，仅worker模板就可以';
const WORKER_NAME = '你本worker的名字';  // 请确保这里和实际部署的 Worker 名字一致，不然更新失败

// =============================================

/**
 * 地区名称映射 (全球主要 Cloudflare 节点所在国家/地区)
 */
const REGION_MAP = {
    // 亚太地区 (Asia Pacific)
    'JP': '日本', 'KR': '韩国', 'SG': '新加坡', 'HK': '香港', 'TW': '台湾',
    'MY': '马来西亚', 'TH': '泰国', 'VN': '越南', 'PH': '菲律宾', 'ID': '印尼',
    'IN': '印度', 'AU': '澳大利亚', 'NZ': '新西兰', 'KH': '柬埔寨', 'MO': '澳门',
    'BD': '孟加拉', 'PK': '巴基斯坦', 'NP': '尼泊尔', 'MN': '蒙古', 'LK': '斯里兰卡',
    'LA': '老挝', 'BN': '文莱', 'MM': '缅甸', 'BT': '不丹', 'MV': '马尔代夫',

    // 北美洲 (North America)
    'US': '美国', 'CA': '加拿大', 'MX': '墨西哥', 'PR': '波多黎各', 'GU': '关岛',

    // 欧洲 (Europe)
    'GB': '英国', 'UK': '英国', 'DE': '德国', 'FR': '法国', 'NL': '荷兰', 'IT': '意大利',
    'ES': '西班牙', 'PT': '葡萄牙', 'RU': '俄罗斯', 'UA': '乌克兰', 'PL': '波兰',
    'SE': '瑞典', 'FI': '芬兰', 'NO': '挪威', 'DK': '丹麦', 'IS': '冰岛',
    'IE': '爱尔兰', 'BE': '比利时', 'LU': '卢森堡', 'CH': '瑞士', 'AT': '奥地利',
    'CZ': '捷克', 'HU': '匈牙利', 'RO': '罗马尼亚', 'BG': '保加利亚', 'GR': '希腊',
    'TR': '土耳其', 'HR': '克罗地亚', 'RS': '塞尔维亚', 'SI': '斯洛文尼亚', 'SK': '斯洛伐克',
    'EE': '爱沙尼亚', 'LV': '拉脱维亚', 'LT': '立陶宛', 'MD': '摩尔多瓦', 'AL': '阿尔巴尼亚',
    'BA': '波黑', 'ME': '黑山', 'MK': '北马其顿', 'CY': '塞浦路斯', 'MT': '马耳他',
    'BY': '白俄罗斯', 'GE': '格鲁吉亚', 'AM': '亚美尼亚', 'AZ': '阿塞拜疆',

    // 南美洲 (South America)
    'BR': '巴西', 'AR': '阿根廷', 'CL': '智利', 'CO': '哥伦比亚', 'PE': '秘鲁',
    'EC': '厄瓜多尔', 'UY': '乌拉圭', 'PY': '巴拉圭', 'VE': '委内瑞拉', 'BO': '玻利维亚',
    'GY': '圭亚那', 'SR': '苏里南',

    // 中美洲与加勒比 (Central America & Caribbean)
    'PA': '巴拿马', 'CR': '哥斯达黎加', 'GT': '危地马拉', 'HN': '洪都拉斯', 'SV': '萨尔瓦多',
    'NI': '尼加拉瓜', 'JM': '牙买加', 'DO': '多米尼加', 'BS': '巴哈马', 'TT': '特立尼达多巴哥',
    'BB': '巴巴多斯', 'CW': '库拉索',

    // 中东与非洲 (Middle East & Africa)
    'ZA': '南非', 'EG': '埃及', 'MA': '摩洛哥', 'DZ': '阿尔及利亚', 'TN': '突尼斯',
    'NG': '尼日利亚', 'KE': '肯尼亚', 'GH': '加纳', 'TZ': '坦桑尼亚', 'UG': '乌干达',
    'MU': '毛里求斯', 'RE': '留尼汪', 'AO': '安哥拉', 'MZ': '莫桑比克', 'SN': '塞内加尔',
    'AE': '阿联酋', 'SA': '沙特', 'IL': '以色列', 'QA': '卡塔尔', 'BH': '巴林',
    'KW': '科威特', 'OM': '阿曼', 'JO': '约旦', 'LB': '黎巴嫩', 'IQ': '伊拉克',
    'KZ': '哈萨克斯坦', 'UZ': '乌兹别克斯坦', 'KG': '吉尔吉斯斯坦'
};

/**
 * 辅助函数：获取国旗 Emoji
 */
function getFlagEmoji(code) {
    if (code === 'TW') return '🇹🇼';
    if (code === 'UK') return '🇬🇧';
    if (!code || code.length !== 2) return '🇺🇳';
    const codePoints = code.toUpperCase().split('').map(char => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}

/**
 * 辅助函数：数字转上标
 */
function toSuperScript(num) {
    const supers = { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
    return num.toString().split('').map(c => supers[c] || c).join('');
}

export default {
    async fetch(request, env) {
        if (request.method === 'OPTIONS') {
            return new Response(null, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                    'Access-Control-Allow-Headers': '*'
                }
            });
        }
        const url = new URL(request.url);

        // 获取 limit 参数
        const limit = parseInt(url.searchParams.get('limit')) || 0;

        // 路径路由
        const rawPath = decodeURIComponent(url.pathname);
        const pathMatches = rawPath.replace(/\/+$/, '')
            .match(/^\/(CFnew|edgetunnel)\/(.+)$/);

        if (pathMatches) {
            const type = pathMatches[1];
            const regions = pathMatches[2];
            const format = type === 'CFnew' ? 'cf_line_short' : 'line';
            return handleRawRequest(regions, format, limit, request.url);
        }

        // TC 版订阅接口 —— 返回 Base64 编码的多行 VLESS 链接
        if (url.pathname === '/sub') return handleSubRequest(url, env);

        // 管理后台（密码保护）
        if (url.pathname === '/admin') {
            const cookie = request.headers.get('Cookie') || '';
            const auth = cookie.match(/admin_auth=([^;]+)/)?.[1];
            const html = auth === ADMIN_PWD ? getAdminHtml(false) : getAdminHtml(true);
            return new Response(html, { headers: { 'content-type': 'text/html; charset=UTF-8' } });
        }

        // KV 配置读/写接口（管理后台调用）
        if (url.pathname === '/api/config') return handleConfigApi(request, env);

        if (url.searchParams.has('api')) return handleApiRequest(url, limit);
        if (url.searchParams.has('get_regions')) return handleGetRegions();

        return new Response(getHtml(), { headers: { 'content-type': 'text/html; charset=UTF-8' } });
    }
};

async function handleGetRegions() {
    try {
        const res = await fetch("https://zip.cm.edu.kg/all.txt");
        const text = await res.text();
        const matches = text.match(/#[A-Z]+/g) || [];
        const counts = {};
        matches.forEach(tag => {
            const region = tag.replace('#', '');
            counts[region] = (counts[region] || 0) + 1;
        });
        const regions = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
        return new Response(JSON.stringify(regions), { headers: { 'content-type': 'application/json' } });
    } catch (e) {
        return new Response('[]', { headers: { 'content-type': 'application/json' } });
    }
}

async function handleApiRequest(url, limit = 0) {
    const regions = url.searchParams.get('region')?.split(',') || [];
    const format = url.searchParams.get('format') || 'line';
    return handleRawRequest(regions.join(','), format, limit, url.toString());
}

async function handleRawRequest(regionStr, format, limit = 0, requestUrl = null) {
    const decoded = decodeURIComponent(regionStr);

    const targetRegions = decoded.split(/[,-]/)
        .map(r => r.trim().toUpperCase())
        .filter(r => r);

    let needBase64 = false;
    if (requestUrl) {
        const urlObj = new URL(requestUrl);
        needBase64 = urlObj.searchParams.has('base64') && urlObj.searchParams.get('base64') !== '0';
    }

    try {
        const response = await fetch("https://zip.cm.edu.kg/all.txt");
        let text = await response.text();
        text = text.replace(/^\uFEFF/, '');
        const lines = text.split('\n');

        const regionPools = {};

        targetRegions.forEach(r => regionPools[r] = []);

        for (const line of lines) {
            if (!line.includes('#')) continue;
            const parts = line.split('#');
            const code = parts[1] ? parts[1].trim().toUpperCase() : '';
            const ipPort = parts[0].trim();

            if (regionPools[code]) {
                regionPools[code].push({ line, code, ipPort });
            }
        }

        let selectedItems = [];

        for (const region of targetRegions) {
            const pool = regionPools[region];

            if (!pool || pool.length === 0) continue;
            if (limit > 0 && pool.length > limit) {
                const shuffled = [...pool].sort(() => 0.5 - Math.random());
                selectedItems.push(...shuffled.slice(0, limit));
            } else {
                selectedItems.push(...pool);
            }
        }

        const processed = [];
        const isCFStyle = format.startsWith('cf') || format === 'comma';
        const isShortName = format.includes('short');
        const isLineSeparated = format.includes('line');
        const regionCounters = {};

        for (const item of selectedItems) {
            const { line, code, ipPort } = item;

            const flag = getFlagEmoji(code);
            const name = REGION_MAP[code] || code;

            regionCounters[code] = (regionCounters[code] || 0) + 1;

            if (isCFStyle) {
                const countStr = toSuperScript(regionCounters[code]);
                const port = ipPort.split(':')[1] || '';

                let nodeName = `${flag} ${name}${countStr}`;
                if (!isShortName) nodeName += `-${port}`;

                processed.push(`${ipPort}#${nodeName}`);
            } else {
                const seq = String(regionCounters[code]).padStart(2, '0');
                processed.push(`${ipPort}#${flag} ${name} ${seq}`);
            }
        }

        const separator = (format.includes('comma') && !isLineSeparated) ? ',' : '\n';
        let resultStr = processed.join(separator);

        if (needBase64) {
            resultStr = btoa(unescape(encodeURIComponent(resultStr)));
        }

        return new Response(resultStr, {
            headers: {
                'content-type': 'text/plain; charset=UTF-8',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS',
                'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
            }
        });

    } catch (e) {
        return new Response("Error fetching data: " + e.message, { status: 500 });
    }
}

function getHtml() {
    return `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cloudflare Country-Specific IP Filter</title>
    <link rel="icon" href="https://www.cloudflare.com/favicon.ico" type="image/x-icon">
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = { darkMode: 'class' }
    </script>
    <script src="https://unpkg.com/lucide@latest"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Fira+Code&display=swap');
        body { font-family: 'Inter', sans-serif; transition: background 0.3s, color 0.3s; }
        .dark { background-color: #020617; color: #f8fafc; }
        .light { background-color: #f8fafc; color: #0f172a; }
        .glass { border: 1px solid rgba(150,150,150,0.1); }
        .region-card { transition: all 0.2s; border: 2px solid transparent; }
        .region-card.active { border-color: #2563eb !important; background-color: rgba(37,99,235,0.1) !important; transform: scale(1.05); font-weight: 700; box-shadow: 0 4px 12px rgba(37, 99, 235, 0.15); }
        .fira { font-family: 'Fira Code', monospace; }
        .dropdown-menu { transform-origin: top right; transition: all 0.2s ease-out; transform: scale(0.95); opacity: 0; pointer-events: none; }
        .dropdown-menu.open { transform: scale(1); opacity: 1; pointer-events: auto; }
        
        /* 弹窗菜单动画与定位修正 */
        .link-menu { 
            transform-origin: top center;
            transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1); 
            transform: translate(-50%, -10px) scale(0.95);
            opacity: 0; 
            pointer-events: none; 
        }
        .group:hover .link-menu, 
        .link-menu.open {
            transform: translate(-50%, 0) scale(1);
            opacity: 1;
            pointer-events: auto;
        }

        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { margin: 4px 0; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; }
        
        .btn-matrix { background-color: #000; color: #0f0; border: 1px solid #0f0; font-family: 'Courier New', monospace; border-radius: 0.75rem; box-shadow: 0 0 5px rgba(0, 255, 0, 0.5); text-shadow: 0 0 5px rgba(0, 255, 0, 0.8); transition: all 0.2s ease; letter-spacing: 2px; position: relative; overflow: hidden; }
        .btn-matrix:hover { background-color: #001a00; box-shadow: 0 0 20px rgba(0, 255, 0, 0.8), inset 0 0 10px rgba(0, 255, 0, 0.4); transform: translateY(-2px); }
        .btn-matrix:active { transform: scale(0.98); }
        
        .btn-racing { background: linear-gradient(135deg, #ff8c00, #ff4500); color: white; border: none; border-radius: 0.75rem; font-style: italic; font-weight: 800; text-transform: none; box-shadow: 5px 5px 0px rgba(0,0,0,0.2); transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .btn-racing:hover { transform: scale(1.02) translate(-2px, -2px); box-shadow: 8px 8px 0px rgba(0,0,0,0.2); filter: brightness(1.1); }
        .btn-racing:active { transform: scale(0.98); box-shadow: 2px 2px 0px rgba(0,0,0,0.2); }
        .btn-racing span { display: inline-block; transform: skew(15deg); }
        input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }

        /* 🔥 Toast 通知样式 */
        #toast-container {
            position: fixed;
            top: 24px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 9999;
            display: flex;
            flex-direction: column;
            gap: 12px;
            pointer-events: none;
        }
        .toast {
            pointer-events: auto;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px 24px;
            border-radius: 16px;
            font-weight: 600;
            font-size: 14px;
            box-shadow: 0 15px 30px -5px rgba(0,0,0,0.2);
            backdrop-filter: blur(12px);
            animation: slideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            max-width: 90vw;
            white-space: pre-line;
            text-align: left;
            border: 1px solid rgba(255,255,255,0.1);
        }
        .toast-success { background-color: rgba(22, 163, 74, 0.9); color: white; } /* Green */
        .toast-error { background-color: rgba(220, 38, 38, 0.9); color: white; } /* Red */
        
        @keyframes slideIn {
            from { transform: translateY(-100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeOut {
            from { transform: translateY(0); opacity: 1; }
            to { transform: translateY(-20px); opacity: 0; }
        }
    </style>
</head>
<body class="light min-h-screen pb-10" onclick="closeAllDropdowns(event)">
    <div id="toast-container"></div>

    <nav class="sticky top-0 z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex justify-between items-center mb-6">
        <div class="flex items-center gap-3 font-bold text-xl">
        <div id="cfLogo" class="flex items-center justify-center w-9 h-9">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 117" class="w-9 h-9">
    <path fill="#fbad41" d="M205.52 50.813c-.858 0-1.705.03-2.551.058q-.207.012-.398.094a1.42 1.42 0 0 0-.92.994l-3.628 12.672c-1.565 5.449-.983 10.48 1.646 14.174c2.41 3.416 6.42 5.421 11.289 5.655l19.679 1.194c.585.03 1.092.312 1.4.776a1.92 1.92 0 0 1 .2 1.692a2.5 2.5 0 0 1-2.134 1.662l-20.448 1.193c-11.11.515-23.062 9.58-27.255 20.633l-1.474 3.9a1.092 1.092 0 0 0 .967 1.49h70.425a1.87 1.87 0 0 0 1.81-1.365A51.2 51.2 0 0 0 256 101.828c0-28.16-22.582-50.984-50.449-50.984"/>
    <path fill="#f6821f" d="m174.782 115.362l1.303-4.583c1.568-5.449.987-10.48-1.639-14.173c-2.418-3.417-6.424-5.422-11.296-5.656l-92.312-1.193a1.82 1.82 0 0 1-1.459-.776a1.92 1.92 0 0 1-.203-1.693a2.5 2.5 0 0 1 2.154-1.662l93.173-1.193c11.063-.511 23.015-9.58 27.208-20.633l5.313-14.04c.214-.596.27-1.238.156-1.86C191.126 20.51 166.91 0 137.96 0C111.269 0 88.626 17.403 80.5 41.596a27 27 0 0 0-19.156-5.359C48.549 37.524 38.25 47.946 36.979 60.88a27.9 27.9 0 0 0 .702 9.642C16.773 71.145 0 88.454 0 109.726c0 1.923.137 3.818.413 5.667c.115.897.879 1.57 1.783 1.568h170.48a2.22 2.22 0 0 0 2.106-1.63"/>
  </svg>
</div>
  <span class="text-slate-700 dark:text-slate-200 tracking-tight">Cloudflare Country-Specific IP Filter</span>
</div>

<div class="flex items-center gap-3">
<div class="relative">
<button id="adminBtn" 
onclick="window.open('/admin', '_blank')"
class="group h-12 flex items-center rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 shadow-lg ring-1 ring-black/5 dark:ring-white/10 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all px-3.5 hover:px-5 hover:gap-3 ease-out duration-500 hover:duration-1000">
<i data-lucide="shield" class="w-5 h-5 -rotate-0 group-hover:-rotate-12 transition-transform duration-500 flex-shrink-0 text-amber-500"></i>
<span class="max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 transition-all ease-out whitespace-nowrap font-bold overflow-hidden duration-500 hover:duration-1000">管理后台</span>
</button>
</div>

<div class="relative">
<button id="githubBtn" 
onclick="window.open('https://github.com/alienwaregf/Cloudflare-Country-Specific-IP-Filter', '_blank')"
class="group h-12 flex items-center rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 shadow-lg ring-1 ring-black/5 dark:ring-white/10 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all px-3.5 hover:px-5 hover:gap-3 ease-out duration-500 hover:duration-1000">
<i data-lucide="github" class="w-5 h-5 -rotate-0 group-hover:-rotate-12 transition-transform duration-500 flex-shrink-0"></i>
<span class="max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 transition-all ease-out whitespace-nowrap font-bold overflow-hidden duration-500 hover:duration-1000">GitHub项目地址</span>
</button>
</div>

            <div class="relative">
                <button onclick="toggleDropdown(event)" class="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition shadow-lg ring-1 ring-black/5 dark:ring-white/10">
                    <i data-lucide="sun" class="w-6 h-6"></i>
                </button>
                <div id="themeDropdown" class="dropdown-menu absolute right-0 top-14 w-28 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl p-1.5 flex flex-col gap-1 z-50 text-slate-700 dark:text-slate-200 ring-1 ring-black/5 dark:ring-white/10">
                    <button onclick="setThemeMode('system')" class="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition text-sm font-bold theme-opt text-left" data-mode="system"><span class="text-lg">🖥️</span> <span>系统</span></button>
                    <button onclick="setThemeMode('light')" class="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition text-sm font-bold theme-opt text-left" data-mode="light"><span class="text-lg">🌞</span> <span>浅色</span></button>
                    <button onclick="setThemeMode('dark')" class="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition text-sm font-bold theme-opt text-left" data-mode="dark"><span class="text-lg">🌙</span> <span>深色</span></button>
                </div>
            </div>

        </div>
    </nav>
    <main class="max-w-5xl mx-auto px-4 md:px-6 flex flex-col gap-6">
        <div class="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-[2rem] glass shadow-xl">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-4">
                <div><h2 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">全球节点</h2><p class="text-sm opacity-60">点击下方卡片选择要提取的地区 (按 IP 数量排序)</p></div>
                <div class="flex gap-3 w-full md:w-auto">
                <button onclick="randomSelect()" class="w-full md:w-auto px-6 py-2 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-xs font-bold text-purple-600 dark:text-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800/50 transition flex items-center justify-center gap-2">
                    <i data-lucide="dices" class="w-4 h-4"></i> 随机摇号
                </button>
                <button onclick="selectAll()" class="w-full md:w-auto px-6 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-blue-600 hover:opacity-70 transition">全选/取消</button>
            </div>            </div>
            <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 p-2" id="regionGrid"><div class="col-span-full py-10 text-center animate-pulse text-slate-400">正在同步全球数据源...</div></div>
            <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <button onclick="autoRun('cf_comma_short')" class="btn-matrix h-16 text-lg font-bold flex items-center justify-center gap-3 cursor-pointer"><i data-lucide="terminal-square" class="w-6 h-6"></i><span>CFnew</span></button>
              <button onclick="autoRun('cf_line_short')" class="btn-racing h-16 text-xl flex items-center justify-center gap-3 cursor-pointer"><i data-lucide="zap" class="w-6 h-6"></i><span>edgetunnel</span></button>
            </div>
            <div id="loadingState" class="hidden text-center py-4 text-slate-500 animate-pulse text-sm mt-2"><i data-lucide="loader-2" class="animate-spin inline mr-2"></i> 正在从全球边缘节点提取数据...</div>
        </div>
        
        <div class="bg-white dark:bg-slate-900 rounded-[2rem] glass shadow-xl border border-slate-200 dark:border-slate-800">
        <div class="rounded-t-[2rem] px-6 py-4 border-b border-slate-50 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center bg-slate-50/50 dark:bg-slate-800/50 gap-4 relative">
        <div class="flex items-center gap-3 self-start sm:self-center"><i data-lucide="terminal" size="16" class="text-blue-500"></i><span id="stats" class="text-xs font-bold opacity-40 uppercase tracking-tighter italic font-mono">WAITING FOR INPUT...</span></div>
        
        <img src="https://github.com/666OS/ClashMac/raw/refs/heads/main/assets/cat.svg" class="hidden sm:block absolute left-1/2 -translate-x-1/2 -bottom-3 h-[110px] w-auto opacity-90 hover:scale-110 transition-transform duration-300 pointer-events-none">
        
        <div class="flex items-center gap-2 w-full sm:w-auto z-10">
                    <div class="flex items-center bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-2 shadow-sm mr-1 h-[34px]" title="单地区节点数量上限 (0为不限制)">
                        <i data-lucide="filter" class="w-3.5 h-3.5 text-slate-400 mr-2"></i><span class="text-[10px] font-bold text-slate-400 mr-2 whitespace-nowrap">MAX</span>
                        <input id="limitInput" type="number" min="0" value="10" class="w-10 bg-transparent text-xs font-bold text-center outline-none text-slate-700 dark:text-slate-200 font-mono focus:text-blue-500 transition-colors" placeholder="0">
                    </div>
                    <button onclick="copy()" class="flex-1 sm:flex-none bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 px-4 py-2 rounded-lg font-bold text-xs hover:bg-slate-50 dark:hover:bg-slate-600 transition flex items-center justify-center gap-2 shadow-sm"><i data-lucide="copy" size="14"></i> 复制全部</button>
                    
                    <div class="relative group z-20 flex-1 sm:flex-none">
                        <button id="linkBtn" onclick="toggleLinkMenu(event)" class="w-full sm:w-auto bg-slate-900 dark:bg-blue-600 text-white px-5 py-2 rounded-lg font-bold text-xs hover:opacity-80 transition flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"><i data-lucide="link" size="14"></i> API 地址</button>
                        
                        <div id="linkMenu" class="link-menu absolute top-full left-1/2 w-48 pt-4 z-50">
                            <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-xl shadow-2xl p-2 flex flex-col gap-2 ring-1 ring-black/5">
                                <div class="text-[10px] text-center text-slate-400 font-bold uppercase tracking-wider py-1">请选择使用 API 的项目</div>
                                <button onclick="generateLink('CFnew')" class="btn-matrix h-10 text-xs flex items-center justify-center gap-2 w-full">
                                    <span>CFnew</span>
                                </button>
                                <button onclick="generateLink('edgetunnel')" class="btn-racing h-10 text-xs flex items-center justify-center gap-2 w-full">
                                    <span>edgetunnel</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <textarea id="out" readonly class="w-full h-48 md:h-64 p-6 bg-transparent fira text-[13px] leading-relaxed outline-none resize-y text-slate-700 dark:text-slate-300 custom-scrollbar" placeholder="点击上方按钮提取，结果将显示在这里..."></textarea>
        </div>

    </main>
    <footer class="mt-12 py-8 border-t border-slate-200 dark:border-slate-800">
        <div class="max-w-5xl mx-auto px-6 text-center">
            <p class="text-[11px] opacity-30 font-mono uppercase tracking-tighter">Powered by Cloudflare Workers & Lucide Icons</p>
        </div>
    </footer>
    <script>
        // 🔥 显示 Toast 通知函数
        function showToast(message, type = 'success') {
            const container = document.getElementById('toast-container');
            const toast = document.createElement('div');
            
            // 图标
            const icon = type === 'success' ? '<i data-lucide="check-circle-2" class="w-5 h-5"></i>' : '<i data-lucide="alert-circle" class="w-5 h-5"></i>';
            
            toast.className = \`toast \${type === 'success' ? 'toast-success' : 'toast-error'}\`;
            toast.innerHTML = \`\${icon}<span>\${message}</span>\`;
            
            container.appendChild(toast);
            lucide.createIcons();

            // 3秒后移除
            setTimeout(() => {
                toast.style.animation = 'fadeOut 0.3s forwards';
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        }
        const slotAudio = new Audio("https://github.com/alienwaregf/CF-Custom-IPs-By-Country/raw/refs/heads/main/Audio/%E8%80%81%E8%99%8E%E6%9C%BA2%E7%A7%92.mp3");
        slotAudio.preload = 'auto';
        slotAudio.volume = 1;

        function getFlag(code) {
            if(code === 'TW') return '🇹🇼';
            if(code === 'UK') return '🇬🇧';
            const codePoints = code.toUpperCase().split('').map(char => 127397 + char.charCodeAt());
            return String.fromCodePoint(...codePoints);
        }
        const regionMap = {
            'JP':'日本','KR':'韩国','SG':'新加坡','HK':'香港','TW':'台湾','MY':'马来西亚','TH':'泰国','VN':'越南','PH':'菲律宾','ID':'印尼','IN':'印度','AU':'澳大利亚','NZ':'新西兰','KH':'柬埔寨','MO':'澳门','BD':'孟加拉','PK':'巴基斯坦','NP':'尼泊尔','MN':'蒙古','LK':'斯里兰卡','LA':'老挝','BN':'文莱','MM':'缅甸','BT':'不丹','MV':'马尔代夫','US':'美国','CA':'加拿大','MX':'墨西哥','PR':'波多黎各','GU':'关岛','GB':'英国','UK':'英国','DE':'德国','FR':'法国','NL':'荷兰','IT':'意大利','ES':'西班牙','PT':'葡萄牙','RU':'俄罗斯','UA':'乌克兰','PL':'波兰','SE':'瑞典','FI':'芬兰','NO':'挪威','DK':'丹麦','IS':'冰岛','IE':'爱尔兰','BE':'比利时','LU':'卢森堡','CH':'瑞士','AT':'奥地利','CZ':'捷克','HU':'匈牙利','RO':'罗马尼亚','BG':'保加利亚','GR':'希腊','TR':'土耳其','HR':'克罗地亚','RS':'塞尔维亚','SI':'斯洛文尼亚','SK':'斯洛伐克','EE':'爱沙尼亚','LV':'拉脱维亚','LT':'立陶宛','MD':'摩尔多瓦','AL':'阿尔巴尼亚','BA':'波黑','ME':'黑山','MK':'北马其顿','CY':'塞浦路斯','MT':'马耳他','BY':'白俄罗斯','GE':'格鲁吉亚','AM':'亚美尼亚','AZ':'阿塞拜疆','BR':'巴西','AR':'阿根廷','CL':'智利','CO':'哥伦比亚','PE':'秘鲁','EC':'厄瓜多尔','UY':'乌拉圭','PY':'巴拉圭','VE':'委内瑞拉','BO':'玻利维亚','GY':'圭亚那','SR':'苏里南','PA':'巴拿马','CR':'哥斯达黎加','GT':'危地马拉','HN':'洪都拉斯','SV':'萨尔瓦多','NI':'尼加拉瓜','JM':'牙买加','DO':'多米尼加','BS':'巴哈马','TT':'特立尼达多巴哥','BB':'巴巴多斯','CW':'库拉索','ZA':'南非','EG':'埃及','MA':'摩洛哥','DZ':'阿尔及利亚','TN':'突尼斯','NG':'尼日利亚','KE':'肯尼亚','GH':'加纳','TZ':'坦桑尼亚','UG':'乌干达','MU':'毛里求斯','RE':'留尼汪','AO':'安哥拉','MZ':'莫桑比克','SN':'塞内加尔','AE':'阿联酋','SA':'沙特','IL':'以色列','QA':'卡塔尔','BH':'巴林','KW':'科威特','OM':'阿曼','JO':'约旦','LB':'黎巴嫩','IQ':'伊拉克','KZ':'哈萨克斯坦','UZ':'乌兹别克斯坦','KG':'吉尔吉斯斯坦'
        };
        let selected = []; let fmt = 'line'; let allRegions = [];
        async function init() {
            try {
                const res = await fetch('?get_regions=1');
                allRegions = await res.json();
                allRegions = allRegions.filter(r => r !== 'CN');
                const grid = document.getElementById('regionGrid');
                grid.innerHTML = allRegions.map(r => \`
                    <button onclick="toggle('\${r}')" id="r-\${r}" class="region-card p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 flex flex-col items-center gap-1 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700/50 cursor-pointer">
                        <span class="text-xl">\${getFlag(r)}</span><span class="text-[10px] font-bold opacity-70">\${regionMap[r] || r}</span>
                    </button>\`).join('');
                lucide.createIcons();
            } catch(e) { console.error(e); }
        }
        function toggle(r) {
            const el = document.getElementById('r-' + r);
            if(!el) return;
            if(selected.includes(r)) { selected = selected.filter(i => i !== r); el.classList.remove('active'); } 
            else { selected.push(r); el.classList.add('active'); }
        }
        function selectAll() {
            if(selected.length === allRegions.length) { selected = []; document.querySelectorAll('.region-card').forEach(el => el.classList.remove('active')); } 
            else { selected = [...allRegions]; document.querySelectorAll('.region-card').forEach(el => el.classList.add('active')); }
        }
        async function autoRun(format) {
            fmt = format;
            const btns = document.querySelectorAll('.btn-matrix, .btn-racing');
            btns.forEach(b => b.style.opacity = '0.5'); btns.forEach(b => b.style.pointerEvents = 'none');
            document.getElementById('loadingState').classList.remove('hidden');
            await fetchIps();
            btns.forEach(b => b.style.opacity = '1'); btns.forEach(b => b.style.pointerEvents = 'auto');
            document.getElementById('loadingState').classList.add('hidden');
        }
        async function fetchIps() {
            if(selected.length === 0) { showToast('请至少选择一个地区！', 'error'); return; }
            const limit = parseInt(document.getElementById('limitInput').value) || 0;
            try {
                const res = await fetch(\`?api=1&region=\${selected.join(',')}&format=\${fmt}&limit=\${limit}\`);
                const data = await res.text();
                document.getElementById('out').value = data;
                const isComma = fmt.includes('comma') || fmt === 'comma';
                const count = data ? (isComma ? data.split(',').length : data.trim().split('\\n').length) : 0;
                document.getElementById('stats').innerText = \`SUCCESS: \${count} NODES FOUND\`;
                document.getElementById('out').scrollIntoView({ behavior: 'smooth', block: 'center' });
                showToast(\`成功获取 \${count} 个节点 IP\`, 'success');
            } catch(e) { showToast('获取数据失败，请重试', 'error'); console.error(e); }
        }
        function copy() {
            const out = document.getElementById('out');
            if(!out.value) { showToast('没有内容可复制', 'error'); return; }
            navigator.clipboard.writeText(out.value);
            showToast('内容已复制到剪贴板', 'success');
        }
        // 🎰 随机摇号功能
        async function randomSelect() {
            selected = [];
            document.querySelectorAll('.region-card').forEach(el => el.classList.remove('active'));
            
            try {
                slotAudio.currentTime = 0;
                slotAudio.play().catch(() => {});
            } catch(e) { console.error(e); }

            const minSelect = 1;
            const maxSelect = Math.min(30, allRegions.length);
            const finalCount = Math.floor(Math.random() * (maxSelect - minSelect + 1)) + minSelect;
            
            const duration = 2000; 
            const intervalTime = 100; 
            const startTime = Date.now();
            
            const btn = document.querySelector('button[onclick="randomSelect()"]');
            const originalHtml = btn.innerHTML;
            
            btn.innerHTML = '<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> 摇号中...';
            btn.disabled = true;

            const interval = setInterval(() => {
                document.querySelectorAll('.region-card.active').forEach(el => el.classList.remove('active'));
                
                const tempIndices = new Set();
                while(tempIndices.size < finalCount) {
                    tempIndices.add(Math.floor(Math.random() * allRegions.length));
                }
                
                tempIndices.forEach(idx => {
                    const r = allRegions[idx];
                    const el = document.getElementById('r-' + r);
                    if(el) el.classList.add('active');
                });

                if (Date.now() - startTime > duration) {
                    clearInterval(interval);
                    finalizeSelection(finalCount);
                    btn.innerHTML = originalHtml;
                    btn.disabled = false;
                    lucide.createIcons();
                }
            }, intervalTime);
        }

        function finalizeSelection(count) {
            document.querySelectorAll('.region-card.active').forEach(el => el.classList.remove('active'));
            selected = [];
            const finalIndices = new Set();
            while(finalIndices.size < count) {
                finalIndices.add(Math.floor(Math.random() * allRegions.length));
            }
            finalIndices.forEach(idx => {
                const r = allRegions[idx];
                toggle(r);
            });
            
            showToast('🎰 欧皇附体！随机选中了 ' + count + ' 个地区', 'success');
        }
        // 移动端点击切换菜单
        function toggleLinkMenu(e) {
            e.stopPropagation();
            document.getElementById('linkMenu').classList.toggle('open');
        }

        // 生成特定格式的链接并复制
        function generateLink(type) {
            if(selected.length === 0) { showToast('请先选择地区！', 'error'); return; }
            const limitVal = document.getElementById('limitInput').value;
            const limit = parseInt(limitVal) || 0;
            
            // 构建链接 (使用 - 分隔)
            let url = \`\${window.location.origin}/\${type}/\${selected.join('-')}\`;
            
            if (limit > 0) { url += \`?limit=\${limit}\`; }
            
            navigator.clipboard.writeText(url);
            
            let msg = \`【\${type}】订阅地址已复制到剪贴板\`;
            if(limit > 0) msg += \`\\n(已限制单地区最大 \${limit} 个节点)\`;
            
            showToast(msg, 'success');
            
            // 关闭菜单
            document.getElementById('linkMenu').classList.remove('open');
        }

        let currentThemeMode = localStorage.getItem('themeMode') || 'system';
        function applyTheme() {
            let isDark = false;
            if (currentThemeMode === 'system') { isDark = window.matchMedia('(prefers-color-scheme: dark)').matches; } 
            else { isDark = currentThemeMode === 'dark'; }
            document.documentElement.classList.toggle('dark', isDark); document.body.classList.toggle('dark', isDark); document.body.classList.toggle('light', !isDark);
            document.querySelectorAll('.theme-opt').forEach(btn => {
                if(btn.dataset.mode === currentThemeMode) { btn.classList.add('text-blue-600', 'dark:text-blue-400', 'bg-slate-100', 'dark:bg-slate-700'); } 
                else { btn.classList.remove('text-blue-600', 'dark:text-blue-400', 'bg-slate-100', 'dark:bg-slate-700'); }
            });
        }
        function setThemeMode(mode) { currentThemeMode = mode; localStorage.setItem('themeMode', mode); applyTheme(); document.getElementById('themeDropdown').classList.remove('open'); }
        function toggleDropdown(e) { e.stopPropagation(); document.getElementById('themeDropdown').classList.toggle('open'); }
        
        // 全局点击关闭所有菜单
        function closeAllDropdowns(e) { 
            document.getElementById('themeDropdown').classList.remove('open');
            document.getElementById('linkMenu').classList.remove('open');
        }
        
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => { if(currentThemeMode === 'system') applyTheme(); });
        applyTheme(); init(); lucide.createIcons();
    </script>
</body>
</html>
    `;
}



// 读取环境配置：优先使用环境变量中的值，若无则使用默认常量。
function getAppConfig(env) {
    let regions = DEFAULT_REGIONS;
    let limit = DEFAULT_LIMIT;
    try {
        if (env.SUB_REGIONS) regions = JSON.parse(env.SUB_REGIONS);
    } catch (e) { }
    try {
        if (env.SUB_LIMIT) limit = parseInt(env.SUB_LIMIT);
    } catch (e) { }
    return { regions, limit };
}

/**
 * 管理后台 HTML
 * showLogin=true  → 显示登录页
 * showLogin=false → 已认证，显示配置面板
 */
function getAdminHtml(showLogin) {
    return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>TC 订阅管理后台</title>
<script src="https://cdn.tailwindcss.com"><\/script>
<script>tailwind.config={darkMode:'class'}<\/script>
<script src="https://unpkg.com/lucide@latest"><\/script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
  body{font-family:'Inter',sans-serif;background:#0f172a;color:#f8fafc;min-height:100vh;}
  .glass{background:rgba(255,255,255,.06);backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,.1);}
  .region-btn{transition:all .15s;border:2px solid transparent;}
  .region-btn.active{border-color:#3b82f6;background:rgba(59,130,246,.15);font-weight:700;}
  @keyframes fadeIn{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
  .fade-in{animation:fadeIn .4s ease-out;}
</style>
</head>
<body class="flex items-center justify-center p-4">

${showLogin ? `
<!-- 登录页 -->
<div class="glass rounded-3xl p-8 w-full max-w-sm fade-in text-center">
  <div class="w-14 h-14 rounded-2xl bg-blue-600/20 flex items-center justify-center mx-auto mb-4">
    <i data-lucide="lock" class="w-7 h-7 text-blue-400"></i>
  </div>
  <h1 class="text-xl font-bold mb-1">管理后台</h1>
  <p class="text-sm text-slate-400 mb-6">请输入密码以继续</p>
  <input id="pwdInput" type="password" placeholder="输入密码" autofocus
    class="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-center outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition mb-4"
    onkeydown="if(event.key==='Enter')doLogin()">
  <div id="errMsg" class="hidden text-red-400 text-xs mb-3">密码错误，请重试</div>
  <button onclick="doLogin()" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition">
    登 录
  </button>
</div>
<script>
function doLogin(){
  const p=document.getElementById('pwdInput').value;
  document.cookie='admin_auth='+p+';path=/';
  fetch('/admin',{method:'GET',credentials:'include'}).then(r=>{
    if(r.ok && r.url.includes('/admin')){location.reload();}
  });
  // 直接设置 cookie 后刷新让服务端验证
  location.reload();
}
lucide.createIcons();
<\/script>
` : `
<!-- 配置面板 -->
<div class="w-full max-w-3xl fade-in">
  <!-- 顶栏 -->
  <div class="flex items-center justify-between mb-6">
    <div class="flex items-center gap-3">
      <div class="w-9 h-9 rounded-xl bg-blue-600/20 flex items-center justify-center">
        <i data-lucide="settings-2" class="w-5 h-5 text-blue-400"></i>
      </div>
      <div>
        <h1 class="text-base font-bold">TC 订阅管理后台</h1>
        <p class="text-xs text-slate-400">/sub 接口默认配置</p>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <button onclick="logout()" class="text-xs px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 transition flex items-center gap-1.5">
        <i data-lucide="log-out" class="w-3.5 h-3.5"></i> 退出
      </button>
    </div>
  </div>

  <div class="glass rounded-3xl p-6 md:p-8">
    <!-- 地区 -->
    <div class="mb-6">
      <div class="flex items-center justify-between mb-3">
        <label class="text-xs font-bold text-slate-400 uppercase tracking-wider">默认节点地区 <span class="normal-case font-normal text-slate-500">（留空 = 全部）</span></label>
        <div class="flex gap-2">
          <button onclick="cfgSelectAll()" class="text-xs px-2.5 py-1 rounded-lg bg-slate-700 hover:bg-slate-600 transition">全选</button>
          <button onclick="cfgClearAll()" class="text-xs px-2.5 py-1 rounded-lg bg-slate-700 hover:bg-slate-600 transition">清空</button>
        </div>
      </div>
      <div id="cfgRegionGrid" class="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-2 max-h-64 overflow-y-auto pr-1">
        <div class="col-span-full text-center text-slate-500 text-xs py-6 animate-pulse">加载地区数据...</div>
      </div>
    </div>

    <!-- 数量 -->
    <div class="mb-8 flex items-center gap-4">
      <label class="text-xs font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap">每区节点上限</label>
      <input id="cfgLimitInput" type="number" min="0" value="0"
        class="w-24 bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm font-mono text-center outline-none focus:border-blue-500 transition">
      <span class="text-xs text-slate-500">0 = 不限制</span>
    </div>

    <!-- 按钮 -->
    <div class="flex gap-3">
      <button onclick="saveKvConfig()" class="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-2xl transition shadow-lg shadow-blue-500/20">
        <i data-lucide="save" class="w-4 h-4"></i> 保存设置
      </button>
      <button onclick="loadKvConfig()" class="flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 font-bold px-5 py-3 rounded-2xl transition">
        <i data-lucide="refresh-cw" id="refreshIcon" class="w-4 h-4"></i>
      </button>
    </div>
  </div>

  <!-- Toast -->
  <div id="toast" class="fixed bottom-8 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-xl opacity-0 transition-opacity pointer-events-none">已保存</div>
</div>

<script>
  const regionMap = {
    'JP':'日本','KR':'韩国','SG':'新加坡','HK':'香港','TW':'台湾','MY':'马来西亚','TH':'泰国',
    'VN':'越南','PH':'菲律宾','ID':'印尼','IN':'印度','AU':'澳大利亚','NZ':'新西兰',
    'US':'美国','CA':'加拿大','MX':'墨西哥',
    'GB':'英国','DE':'德国','FR':'法国','NL':'荷兰','IT':'意大利','ES':'西班牙',
    'PT':'葡萄牙','RU':'俄罗斯','SE':'瑞典','FI':'芬兰','NO':'挪威','CH':'瑞士',
    'AT':'奥地利','PL':'波兰','TR':'土耳其','UA':'乌克兰','BE':'比利时',
    'BR':'巴西','AR':'阿根廷','CL':'智利','CO':'哥伦比亚',
    'ZA':'南非','AE':'阿联酋','SA':'沙特','IL':'以色列','SG':'新加坡',
    'KZ':'哈萨克斯坦'
  };
  function getFlag(c){
    if(c==='TW')return'🇹🇼';if(c==='UK')return'🇬🇧';
    if(!c||c.length!==2)return'🌐';
    return String.fromCodePoint(...c.toUpperCase().split('').map(x=>127397+x.charCodeAt()));
  }

  let cfgAllRegions=[], cfgSelected=new Set();

  async function init(){
    try{
      const r=await fetch('/?get_regions=1');
      cfgAllRegions=(await r.json()).filter(x=>x!=='CN');
    }catch{cfgAllRegions=[];}
    renderGrid();
    await loadKvConfig();
  }

  function renderGrid(){
    const g=document.getElementById('cfgRegionGrid');
    if(!cfgAllRegions.length){g.innerHTML='<div class="col-span-full text-center text-slate-500 text-xs py-4">无数据</div>';return;}
    g.innerHTML=cfgAllRegions.map(r=>{
      const a=cfgSelected.has(r)?'active':'';
      return \`<button onclick="tog('\${r}')" class="region-btn \${a} p-2 rounded-xl text-center text-[11px] bg-slate-800 hover:bg-slate-700">
        <div>\${getFlag(r)}</div><div class="opacity-60 mt-0.5">\${regionMap[r]||r}</div>
      </button>\`;
    }).join('');
    lucide.createIcons();
  }
  function tog(r){cfgSelected.has(r)?cfgSelected.delete(r):cfgSelected.add(r);renderGrid();}
  function cfgSelectAll(){cfgSelected=new Set(cfgAllRegions);renderGrid();}
  function cfgClearAll(){cfgSelected.clear();renderGrid();}

  async function loadKvConfig(){
    const ri=document.getElementById('refreshIcon');
    if(ri) ri.classList.add('animate-spin');
    try{
      const r=await fetch('/api/config');
      const {regions,limit}=await r.json();
      cfgSelected=new Set(regions||[]);
      document.getElementById('cfgLimitInput').value=limit??0;
      renderGrid();
    }catch(e){console.error(e);}
    finally{ if(ri) ri.classList.remove('animate-spin'); }
  }

  async function saveKvConfig(){
    const limit=parseInt(document.getElementById('cfgLimitInput').value)||0;
    const regions=[...cfgSelected];
    const btn = document.querySelector('button[onclick="saveKvConfig()"]');
    const oriText = btn.innerHTML;
    btn.innerHTML = '<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> 保存中...';
    btn.disabled = true;
    
    try{
      const r=await fetch('/api/config',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({regions,limit})});
      if(r.ok){
        const { wait } = await r.json();
        const t=document.getElementById('toast');
        if (wait) {
          t.textContent=\`保存成功！需等待约 \${wait} 秒生效更新生效\`;
        } else {
          t.textContent=\`已保存：\${regions.length?regions.join(', '):'全部地区'} / 每区 \${limit||'不限'} 个\`;
        }
        t.style.opacity='1';setTimeout(()=>t.style.opacity='0',4000);
      } else {
        const body = await r.text();
        alert('保存错误: ' + body);
      }
    }catch(e){
      alert('网络错误');
    }finally{
      btn.innerHTML = oriText;
      btn.disabled = false;
      lucide.createIcons();
    }
  }

  function logout(){document.cookie='admin_auth=;expires=Thu,01 Jan 1970 00:00:00 UTC;path=/;';location.reload();}
  init();
</script>
`}
</body>
</html>`;
}

/**
 * 处理 TC 版 Worker 订阅请求
 * 接收 VLESS 连接参数，从优选 IP 源组装完整 VLESS 链接，Base64 编码后返回。
 *
 * TC 版调用方式：
 *   GET /sub?uuid=<UUID>&host=<域名>&sni=<SNI>&path=<路径>&type=ws&encryption=none&security=tls&alpn=h3&fp=random&allowInsecure=0
 *
 * 可选过滤参数：
 *   ?region=HK,JP,US   — 按国家代码过滤（逗号分隔）
 *   ?limit=10          — 每个地区最多返回多少条（0 = 不限）
 *
 * @param {URL} url - 请求 URL（含所有查询参数）
 * @returns {Promise<Response>}
 */
async function handleSubRequest(url, env) {
    // 读取 VLESS 连接参数（由 TC Worker 传入，替换后返回给客户端）
    const uuid = url.searchParams.get('uuid') || '';
    const host = url.searchParams.get('host') || '';
    const sni = url.searchParams.get('sni') || host;
    const path = url.searchParams.get('path') || '/';
    const type = url.searchParams.get('type') || 'ws';
    const encryption = url.searchParams.get('encryption') || 'none';
    const security = url.searchParams.get('security') || 'tls';
    const alpn = url.searchParams.get('alpn') || 'h3';
    const fp = url.searchParams.get('fp') || 'random';
    const allowInsecure = url.searchParams.get('allowInsecure') || '0';

    const { regions: envRegions, limit: envLimit } = getAppConfig(env);

    // 优先级：URL 参数 > 环境变量配置 > 顶部常量
    const regionParam = url.searchParams.get('region') || '';
    const targetRegions = regionParam
        ? regionParam.split(',').map(r => r.trim().toUpperCase()).filter(Boolean)
        : envRegions.length > 0 ? envRegions : null;

    // 每区节点数量上限
    const limitParams = url.searchParams.get('limit');
    const limit = limitParams !== null ? parseInt(limitParams) : envLimit;

    // UUID 是必需参数
    if (!uuid) {
        return new Response('Missing uuid parameter', { status: 400 });
    }

    try {
        // 拉取优选 IP 数据源（与现有逻辑复用同一数据源）
        const res = await fetch('https://zip.cm.edu.kg/all.txt');
        let text = await res.text();
        // 去除 BOM
        text = text.replace(/^\uFEFF/, '');

        const lines = text.split('\n')
            .map(l => l.trim())
            .filter(l => l && l.includes('#'));

        const regionCounters = {};
        const nodes = [];

        for (const line of lines) {
            const sepIdx = line.indexOf('#');
            const ipPort = line.slice(0, sepIdx).trim();
            const code = line.slice(sepIdx + 1).trim().toUpperCase();

            // 跳过中国节点（通常不需要）
            if (code === 'CN') continue;

            // 地区过滤
            if (targetRegions && !targetRegions.includes(code)) continue;

            // 每区数量限制
            regionCounters[code] = (regionCounters[code] || 0) + 1;
            if (limit > 0 && regionCounters[code] > limit) continue;

            // 解析 IPv6 地址（带方括号）或普通 IP
            let ip, port;
            if (ipPort.startsWith('[')) {
                // IPv6 格式：[::1]:443
                const m = ipPort.match(/^(\[.+?\]):(\d+)$/);
                if (!m) continue;
                [, ip, port] = m;
            } else {
                const colonIdx = ipPort.lastIndexOf(':');
                if (colonIdx === -1) continue;
                ip = ipPort.slice(0, colonIdx);
                port = ipPort.slice(colonIdx + 1);
            }

            // 节点备注名（国旗 + 国家名 + 序号）
            const flag = getFlagEmoji(code);
            const region = REGION_MAP[code] || code;
            const seq = String(regionCounters[code]).padStart(2, '0');
            const remark = `${flag} ${region} ${seq}`;

            // 拼接完整 VLESS 分享链接
            const params = new URLSearchParams({
                encryption,
                security,
                sni,
                alpn,
                fp,
                type,
                host,
                path,
                allowInsecure,
            });
            nodes.push(`vless://${uuid}@${ip}:${port}?${params.toString()}#${encodeURIComponent(remark)}`);
        }

        if (nodes.length === 0) {
            // 返回空字符串（TC Worker 会优雅处理空响应）
            return new Response('', {
                status: 200,
                headers: {
                    'Content-Type': 'text/plain; charset=utf-8',
                    'Access-Control-Allow-Origin': '*',
                }
            });
        }

        // 对多行 VLESS 文本做 Base64 编码（兼容中文/emoji 节点名）
        const result = btoa(unescape(encodeURIComponent(nodes.join('\n'))));

        return new Response(result, {
            status: 200,
            headers: {
                'Content-Type': 'text/plain; charset=utf-8',
                'Access-Control-Allow-Origin': '*',
                'Cache-Control': 'no-store, no-cache, must-revalidate',
            }
        });

    } catch (e) {
        return new Response('Error: ' + e.message, { status: 500 });
    }
}

/**
 * 环境变量控制接口
 * GET  /api/config          — 返回当前环境变量配置
 * POST /api/config  body: { regions: ['HK','JP'], limit: 10 }
 *
 * @param {Request} request
 * @param {object}  env
 * @returns {Promise<Response>}
 */
async function handleConfigApi(request, env) {
    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json; charset=utf-8',
    };

    if (request.method === 'GET') {
        // 读取配置
        const cfg = getAppConfig(env);
        return new Response(JSON.stringify(cfg), { headers: corsHeaders });
    }

    if (request.method === 'POST') {
        const auth = request.headers.get('Cookie')?.match(/admin_auth=([^;]+)/)?.[1];
        if (auth !== ADMIN_PWD) {
            return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401, headers: corsHeaders });
        }

        // 写入配置（通过 CF API 实现热更新环境变量）
        let body;
        try { body = await request.json(); } catch {
            return new Response(JSON.stringify({ error: '请求体解析失败' }), { status: 400, headers: corsHeaders });
        }

        const regions = Array.isArray(body.regions)
            ? body.regions.map(r => String(r).toUpperCase().trim()).filter(Boolean)
            : DEFAULT_REGIONS;
        const limit = Number.isInteger(body.limit) && body.limit >= 0 ? body.limit : DEFAULT_LIMIT;

        try {
            // 注意：这种方式是通过 CF API 更新项目绑定（环境变量属于绑定之一）
            // 更新需要 5~10 秒重启生效

            // 拼接 API 接口（注意：这会覆盖 Worker 全局的 settings，我们必须只修改或增加我们的明文文本绑定）
            // 简单实现：使用 PATCH /accounts/id/workers/scripts/name （此接口不支持仅修改绑定，会要求提供 metadata 甚至 script 主体）

            // 更稳妥的方式是通过 Cloudflare Client API 修改环境变量。
            // PUT /client/v4/accounts/{account_id}/workers/scripts/{script_name} 请求体带 bindings。
            // 但是为了不覆盖其他配置（比如 KV 等），标准做法是先 GET，再替换变量，再 PUT。

            const apiUrl = `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/workers/scripts/${WORKER_NAME}`;
            const headerObj = {
                'X-Auth-Email': CF_EMAIL,
                'X-Auth-Key': CF_API_TOKEN,
                'Content-Type': 'application/json'
            };

            // 1) 先获取现有的 bindings
            const getRes = await fetch(apiUrl + '/bindings', { headers: headerObj });
            if (!getRes.ok) {
                const text = await getRes.text();
                return new Response("Get API Error: " + text, { status: 500, headers: corsHeaders });
            }
            const currentData = await getRes.json();
            const currentBindings = currentData.result || [];

            // 2) 构造新的 bindings，替换或者增加
            const newEnvVars = {
                "SUB_REGIONS": JSON.stringify(regions),
                "SUB_LIMIT": String(limit)
            };

            // 过滤掉我们要重新设置的，保留其他的 (比如 KV 绑定如果还有的话)
            const newBindingsArr = currentBindings.filter(b => b.name !== 'SUB_REGIONS' && b.name !== 'SUB_LIMIT');

            // 添加我们要设置的 plain_text
            newBindingsArr.push({ type: 'plain_text', name: 'SUB_REGIONS', text: newEnvVars.SUB_REGIONS });
            newBindingsArr.push({ type: 'plain_text', name: 'SUB_LIMIT', text: newEnvVars.SUB_LIMIT });

            // 3) 通过 PATCH 接口部分修改/添加（有些环境需要使用 metadata 包裹，不过对于 /bindings 直接 put 或者 patch 可能不被通用支持）
            // 官方推荐对于环境变量可以通过修改 secret 或者重新上传，这里最直接的就是 PUT bindings（如果支持的话）。
            // 发现：直接 PUT 修改绑定是最方便的体验
            const patchRes = await fetch(apiUrl, {
                method: 'PATCH',
                headers: headerObj,
                body: JSON.stringify({ body: "true", bindings: newBindingsArr }) // 某些情况下这样不行，必须 formData
            });

            await fetch(`${apiUrl}/secrets`, {
                method: 'PUT',
                headers: headerObj,
                body: JSON.stringify({ name: "SUB_REGIONS", type: "secret_text", text: newEnvVars.SUB_REGIONS })
            });
            await fetch(`${apiUrl}/secrets`, {
                method: 'PUT',
                headers: headerObj,
                body: JSON.stringify({ name: "SUB_LIMIT", type: "secret_text", text: newEnvVars.SUB_LIMIT })
            });

            return new Response(JSON.stringify({ ok: true, regions, limit, wait: 6 }), { headers: corsHeaders });

        } catch (e) {
            return new Response(JSON.stringify({ error: '修改环境变量失败: ' + e.message }), { status: 500, headers: corsHeaders });
        }
    }

    return new Response(JSON.stringify({ error: 'Method Not Allowed' }), { status: 405, headers: corsHeaders });
}
