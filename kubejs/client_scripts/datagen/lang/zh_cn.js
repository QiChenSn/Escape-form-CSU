ClientEvents.lang("zh_cn", (event) => {
	const MODID = "csu"

	// 物品翻译
	let itemResourceLang = [
		["id_card", "校园卡"]
	]
	itemResourceLang.forEach(([key, text]) => {
		event.add(`item.${MODID}.${key}`, text)
	})
})