/* eslint-disable import/no-unresolved, import/extensions */
import './style.css';
import Phaser from 'phaser';
import { CONST } from './components/const';
import { config } from './config/config';
import { InitScene } from './scenes/InitScene';
import { PreloaderScene } from './scenes/PreloaderScene';
import { TitleScene } from './scenes/TitleScene';
import { OptionsScene } from './scenes/OptionsScene';
import { CreditsScene } from './scenes/CreditsScene';
import { WorldMapScene } from './scenes/MapScene';
import { GlobalSettings } from './components/globalsettings';
import { ChallengeScene } from './scenes/ChallengeScene';
import { UIChallScene } from './scenes/UiChallScene';
import { PlayerDataScene } from './scenes/PlayerDataScene';
import { LeaderBoardScene } from './scenes/LeaderBoardScene';

// const devGame = new Phaser.Game(config);

class DevGame extends Phaser.Game {
  constructor() {
    super(config);
    const settings = new GlobalSettings();
    this.globals = { settings, bgMusic: null };
    this.scene.add(CONST.SCENES.INIT, InitScene);
    this.scene.add(CONST.SCENES.PRELOAD, PreloaderScene);
    this.scene.add(CONST.SCENES.TITLE, TitleScene);
    this.scene.add(CONST.SCENES.OPTIONS, OptionsScene);
    this.scene.add(CONST.SCENES.CREDITS, CreditsScene);
    this.scene.add(CONST.SCENES.INPUT, PlayerDataScene);
    this.scene.add(CONST.SCENES.LEADER, LeaderBoardScene);
    this.scene.add(CONST.SCENES.WORLDMAP, WorldMapScene);
    this.scene.add(CONST.SCENES.CHALLENGE, ChallengeScene);
    this.scene.add(CONST.SCENES.UICHALL, UIChallScene);
    this.scene.start(CONST.SCENES.INIT);
  }
}

window.game = new DevGame();
