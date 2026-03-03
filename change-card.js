// ==UserScript==
// @name         西南林业大学一卡通信息篡改
// @match        https://klcxkj.net:3002/tStudent/studentGetCardInfo*
// ==/UserScript==

let body = $response.body;



// 方式2：解析成对象修改（更稳，推荐）
try {
    let obj = JSON.parse(body);

    // 在这里改你想改的字段（按需修改或注释掉不想改的）
    obj.AccountMoney     = 888.88;     // 账户余额
    obj.Deposit          = 999;        // 押金
    obj.nCardValue       = 500;        // 卡内值？
    obj.GivenMoney       = 200;        // 赠送金额
    obj.PrefillMoney     = 300;        // 预充值？
    obj.success          = "true";     // 保持成功
    // obj.msg           = "修改成功啦～";  // 可以改提示语
    // obj.nCardStatusID = 1;           // 状态码按需改

    body = JSON.stringify(obj);
} catch (e) {
    console.log("JSON 解析失败，使用原始body", e);
    // 解析失败就返回原body，防止崩溃
}

$done({ body });
