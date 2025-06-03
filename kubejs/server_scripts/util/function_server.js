/**
 * 玩家是否有某个饰品
 * @param {Internal.ServerPlayer} player
 * @param {Internal.ItemStack_} itemStack
 */
function hasCurios(player, itemStack) {
    let curiosInventory = $CuriosApi.getCuriosInventory(player).resolve().get();

    return curiosInventory.equippedCurios.allItems.some((item) => item == itemStack);
}