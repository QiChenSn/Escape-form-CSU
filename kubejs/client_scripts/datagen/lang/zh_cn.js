ClientEvents.lang("zh_cn", (event) => {
	const MODID = "csu"

	let itemResourceLang = {//物品翻译
        "id_card": "校园卡",
		"zombie_brain":"僵尸之脑",
		"surgical_knife":"手术刀",
		"fluid_of_consciousness_bucket":"意识流浆液桶"
    };

	let fluidResourceLang = {//流体翻译
		"fluid_of_consciousness":"意识流浆液",
    };

	let blockResourceLang = {//方块翻译
		"fluid_of_consciousness":"意识流浆液",
    };

    // 遍历JSON对象添加翻译
    Object.entries(itemResourceLang).forEach(([key, text]) => {
        event.add(`item.${MODID}.${key}`, text);
    });
	Object.entries(fluidResourceLang).forEach(([key, text]) => {
        event.add(`fluid.${MODID}.${key}`, text);
    });
		Object.entries(blockResourceLang).forEach(([key, text]) => {
        event.add(`block.${MODID}.${key}`, text);
    });
})