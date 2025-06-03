//注册
StartupEvents.registry("item",event=>{
    event.create('csu:quantum_consciousness_resonator')
        .displayName('量子意识谐振器') // 物品显示名称: 量子意识谐振器
        .tooltip('§b赋予持有者驾驭虚空之力与物质重构之能。§r') // 物品提示信息
        .tooltip('§7- 创造飞行§r') // 功能描述：创造飞行
        .tooltip('§7- 空手速掘§r') // 功能描述：空手速掘
        .rarity('epic') // 物品稀有度: 史诗
        .maxStackSize(1) // 最大堆叠数量: 1
        .tag('curios:head'); // 将物品标记为 head 饰品，可装备在 'head' 槽位
})

//无视挖掘限制
ForgeEvents.onEvent('net.minecraftforge.event.entity.player.PlayerEvent$HarvestCheck', (event) => {
    const { entity } = event;

    if (hasCurios(entity, 'csu:quantum_consciousness_resonator')) {
        event.setCanHarvest(true);
    }
});

//提高挖掘速度
ForgeEvents.onEvent('net.minecraftforge.event.entity.player.PlayerEvent$BreakSpeed', (event) => {
    const { entity, originalSpeed } = event;

    const hasQuantum = hasCurios(entity, 'csu:quantum_consciousness_resonator');

    if (!hasQuantum) return;

    const isInWater = entity.isEyeInFluidType(Fluid.of('water').getFluid().getFluidType());
    const isInAir = !entity.onGround();

    let baseSpeed = originalSpeed * (hasQuantum ? 10 : 1);
    let multiplier = 1;

    if (isInWater || isInAir) multiplier *= 5;
    if (isInWater && isInAir) multiplier *= 5;

    event.setNewSpeed(baseSpeed * multiplier);
});
