let body = $response.body;

// 假设原响应是 JSON
let obj = JSON.parse(body);

// 修改最低充值
if (obj.leastCharge) {
  obj.leastCharge = "0.1";
}

// 修改可选金额列表，只留0.1（或加0.1）
if (obj.rechargeConfig) {
  obj.rechargeConfig = "0.1";  // 或 "0.1,10,30" 如果想保留其他
}

// 如果有多个同名字段
if (obj["rechargeConFig"]) {  // 注意大小写
  obj["rechargeConFig"] = "0.1";
}

body = JSON.stringify(obj);

$done({ body });
