import Phaser from 'phaser';

export class HeroEnergyBar extends Phaser.GameObjects.Container {
  constructor(scene, x, y, total, text) {
    super(scene, x, y);
    this.energy = total;
    // display progress bar
    const pBox = this.scene.add.graphics();
    this.add(pBox);
    const pBar = this.scene.add.graphics();
    this.add(pBar);
    this.text = new Phaser.GameObjects.Text(scene, 0, -15, text,
      {
        color: '#ffffff',
        align: 'left',
        fontSize: 13,
        wordWrap:
        {
          width: 120,
          useAdvancedWrap: true,
        },
      });
    this.add(this.text);
    pBar.fillStyle(0xFCF787, 0.8);
    pBar.fillRect(2, 2, 75, 12);
    pBox.fillStyle(0x031f4c, 0.8);
    pBox.fillRect(0, 0, 80, 17);
    this.pbox = pBox;
    this.pbar = pBar;
  }


  updateEnergyLevel(level) {
    if (level < 0) { level = 0; }
    const max = 80;
    const lvl = (level * max) / 100;
    this.pbar.clear();
    if (level >= 80) {
      this.pbar.fillStyle(0x4cd964, 0.8);
    } else if (level < 80 && level > 40) {
      this.pbar.fillStyle(0xffcc00, 0.8);
    } else {
      this.pbar.fillStyle(0xff3b30, 0.8);
    }
    this.pbar.fillRect(0, 0, lvl, 17);
  }

  turnOff() {
    this.active = false;
    this.visible = false;
  }
}

export default HeroEnergyBar;