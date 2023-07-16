import * as alt from 'alt-server';

alt.on('crc-appearance-updated', (player: alt.Player, data) => {
    const isFeminine = data.sex === 0;

    if (isFeminine) {
        player.setClothes(3, 3, 0, 0);
        player.setClothes(4, 1, 0, 0);
        player.setClothes(6, 1, 0, 0);
        player.setClothes(8, 14, 0, 0);
        player.setClothes(11, 407, 0, 0);
    } else {
        player.setClothes(3, 4, 0, 0);
        player.setClothes(4, 8, 0, 0);
        player.setClothes(6, 1, 0, 0);
        player.setClothes(8, 15, 0, 0);
        player.setClothes(11, 384, 0, 0);
    }
});
