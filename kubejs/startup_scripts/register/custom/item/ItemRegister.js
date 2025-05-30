StartupEvents.registry("item",event=>{
    //校园卡
    event.create("csu:id_card","basic")
    .unstackable()
    .rarity("uncommon")
    .glow(true)

    //僵尸之脑
    event.create("csu:zombie_brain")
    .food(foodBuilder=>{
        foodBuilder.hunger(5)
        foodBuilder.saturation(0.5)
        foodBuilder.meat()
        foodBuilder.effect("minecraft:hunger",20*15,1,0.7)//15秒的饥饿1，0.7概率生效
        foodBuilder.effect("minecraft:nausea",20*3,1,0.2)//15秒的反胃1，0.2概率生效
    })

})
