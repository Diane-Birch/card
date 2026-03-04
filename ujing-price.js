// u净洗衣机模式价格改成 0.10 元（仅改显示）
let body = $response.body;

try {
    let obj = JSON.parse(body);
    
    if (obj.code === 0 && obj.data && Array.isArray(obj.data)) {
        obj.data.forEach(program => {
            if (program.basePrice !== undefined) {
                program.basePrice = 10;  // 改成 0.10 元（单位：分）
            }
            if (program.promotionPrice !== undefined) {
                program.promotionPrice = 10;  // 如果有促销价也改
            }
        });
    }
    
    body = JSON.stringify(obj);
} catch (e) {
    console.log("JSON parse error in ujing price script:", e);
    // 出错就返回原body，避免 App 崩溃
}

$done({ body });
