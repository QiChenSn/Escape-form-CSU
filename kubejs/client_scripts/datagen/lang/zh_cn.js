ClientEvents.lang("zh_cn", (event) => {
	const MODID = "csu"

	let itemResourceLang = {
        "id_card": "校园卡",
		"zombie_brain":"僵尸之脑",
		"surgical_knife":"手术刀"
    };

    // 遍历JSON对象添加翻译
    Object.entries(itemResourceLang).forEach(([key, text]) => {
        event.add(`item.${MODID}.${key}`, text);
    });
})