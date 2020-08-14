
import { Weapon } from './weapons';

export class MenuItem {
    constructor(cf) {
        this.cf = cf;
        this.boxSize = 40;
        this.x = 28 + (64 * this.cf.item);
        this.y = 298;
        this.c1 = 0xFFFFFF;
        this.c2 = 0x000000;
        this.selBox = cf.scene.add.graphics();
        this.selBox.lineStyle(1, this.c2);
        this.selBox.fillStyle(this.c2, 2);
        this.selBox.strokeRect(this.x, this.y, this.boxSize, this.boxSize);
        this.selBox.name = this.cf.name;

        // Add Button weapon Icon
        this.button = new Weapon(this.cf.scene,
            this.x + 20,
            this.y + 20,
            this.cf.weapon,
            this.cf.name,
            (weapon) => {
                console.log(`From the UI, I got clicked :${this.cf.name}`);
                this.select();
            });
        this.deselect();
        // Phaser.Display.Align.In.Center(this.selBox, this.button);
    }

    select() {
        this.selBox.lineStyle(1, this.c1);
        this.selBox.fillStyle(this.c1, 2);
        this.selBox.strokeRect(this.x, this.y, this.boxSize, this.boxSize);
    }

    deselect() {
        this.selBox.lineStyle(1, this.c2);
        this.selBox.fillStyle(this.c2, 2);
        this.selBox.strokeRect(this.x, this.y, this.boxSize, this.boxSize);
    }
}

export default MenuItem;