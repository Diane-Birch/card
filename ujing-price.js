let body = $response.body;

console.log("脚本运行了！原始body长度：" + body.length);  // 在 QX 日志查看

try {
    let obj = JSON.parse(body);
    if (obj.data && Array.isArray(obj.data)) {
        obj.data.forEach(item => {
            if (item.basePrice) item.basePrice = 1;  // 改成 ¥0.01 测试
            if (item.promotionPrice) item.promotionPrice = 1;
        });
    }
    body = JSON.stringify(obj);
} catch (e) {
    console.log("JSON 解析出错: " + e);
}

$done({ body });
