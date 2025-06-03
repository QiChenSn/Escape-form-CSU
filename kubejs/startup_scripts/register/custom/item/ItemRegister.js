const CSU="csu:";

StartupEvents.registry("item",event=>{
    //校园卡
    event.create(CSU+"id_card","basic")
        .unstackable()
        .rarity("uncommon")
        .glow(true);

    //僵尸之脑
    event.create(CSU+"zombie_brain")
        .food(foodBuilder=>{
            foodBuilder.hunger(5)
            foodBuilder.saturation(0.5)
            foodBuilder.meat()
            foodBuilder.effect("minecraft:hunger",20*15,1,0.7)//15秒的饥饿2，0.7概率生效
            foodBuilder.effect("minecraft:nausea",20*5,0,0.2)//10秒的反胃1，0.2概率生效
        });

    //手术刀
    //未实现：减小攻击范围，攻击僵尸死亡时概率掉落僵尸之脑
    event.create(CSU+"surgical_knife","sword")
        .unstackable()
        .rarity("rare")
        .maxDamage(256)
        .attackDamageBaseline(4)//伤害基础4
        .attackDamageBonus(2)//伤害加成2
        .speedBaseline(-0.6);//攻速铁到钻石之间【-1,0】
        
})
