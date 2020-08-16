import Phaser from 'phaser';

export class MessageChallenge extends Phaser.GameObjects.Container {

    constructor(scene, events) {
        super(scene, 340, 320);
        let graphics = this.scene.add.graphics();
        this.add(graphics);
        this.text = new Phaser.GameObjects.Text(scene, 0, 0, "", { color: '#ffffff', align: 'center', fontSize: 15, wordWrap: { width: 240, useAdvancedWrap: true } });
        this.add(this.text);
        this.text.setOrigin(0.5);
        events.on("Message", this.showMessage, this);
        events.on("Instruc", this.showInstruc, this);
        this.visible = false;
    };

    showMessage(text) {
        this.text.setText(text);
        this.visible = true;
        if (this.hideEvent)
            this.hideEvent.remove(false);
        this.hideEvent = this.scene.time.addEvent({ delay: 4000, callback: this.hideMessage, callbackScope: this });
    };

    showInstruc(text) {
        console.log('## Small Message Box: someone send instruc :' + text)
        this.text.setText(text);
        this.visible = true;
        if (this.hideEvent)
            this.hideEvent.remove(false);
        this.hideEvent = this.scene.time.addEvent({ delay: 6000, callback: this.hideMessage, callbackScope: this });
        console.log('## Small message box: Finishing displaying message:' + text)
    };
    hideMessage() {
        this.hideEvent = null;
        this.visible = false;
    };
};

export default MessageChallenge;