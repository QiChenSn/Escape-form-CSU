const conscious_color="#de8de0";//意识流浆液的颜色


StartupEvents.registry("fluid",event=>{
    //意识流浆液/思想质
    event.create(CSU+"fluid_of_consciousness","basic")
        .rarity("epic")
        // .glow(true)//附魔材质？？？//没有这个方法，西八
        .thinTexture(conscious_color)//水样贴图
        .density(2)//粘稠度
        .translucent()//透明
        .luminosity(3)//发光
})
