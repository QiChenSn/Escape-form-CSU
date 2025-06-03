// 实现飞行能力
PlayerEvents.tick(event => {
    const player = event.player;
    let hasResonator=hasCurios(player, 'csu:quantum_consciousness_resonator');
    const abilities = player.abilities; // 获取玩家的能力 NBT 对象
    //确保真实玩家
    if (!player || player.fake || !player.server) return;
    if (hasResonator) {
        // 如果佩戴了饰品但当前不允许飞行
        if (!abilities.mayfly) {
            abilities.mayfly = true; // 允许飞行
            player.onUpdateAbilities(); // 将能力变更同步到客户端 (非常重要!)
            // player.sendUpdatedAbilities(); // KubeJS 6+ 的写法，效果类似
        }
    } else {
        // 如果未佩戴饰品
        // 并且玩家当前允许飞行 (mayfly is true)
        // 并且玩家不是创造模式或观察者模式 (这些模式本身就允许飞行)
        if (abilities.mayfly && !player.isCreative() && !player.isSpectator()) {
            abilities.mayfly = false; // 禁止飞行
            if (abilities.flying) { // 如果玩家当前正在飞行
                abilities.flying = false; // 停止飞行状态
            }
            player.onUpdateAbilities(); // 同步能力变更
            // player.sendUpdatedAbilities();
        }
    }
});

//实现空手最高挖掘等级