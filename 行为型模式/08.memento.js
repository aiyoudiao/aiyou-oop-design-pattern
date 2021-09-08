"use strict";
var action_mode_08;
(function (action_mode_08) {
    class GameStorage {
        file = new Map();
        store(key, game) {
            if (this.file.has(key)) {
                console.log('已存在该记录，覆盖式存档');
            }
            const newGame = new Game(game.name);
            newGame.hp = game.hp;
            newGame.mp = game.mp;
            newGame.level = game.level;
            newGame.killBoos = game.killBoos;
            newGame.grade = game.grade;
            this.file.set(key, newGame);
            return key;
        }
        restore(key) {
            if (!this.file.has(key)) {
                console.log('查无此存档');
            }
            return this.file.get(key);
        }
    }
    class Game {
        name;
        hp;
        mp;
        level;
        killBoos;
        grade;
        gameStorage;
        constructor(name) {
            this.name = name;
            this.hp = 100;
            this.mp = 100;
            this.level = 1;
            this.killBoos = 0;
            this.grade = 1;
            this.gameStorage = new GameStorage();
        }
        praintInfo() {
            console.log('===========游戏数据 展示开始 ==========');
            console.log(`用户名:${this.name}`);
            console.log(`所在关卡:${this.grade}`);
            console.log(`等级:${this.level}`);
            console.log(`血量:${this.hp}`);
            console.log(`魔法:${this.mp}`);
            console.log(`杀boos数:${this.killBoos}`);
            console.log('===========游戏数据 展示结束 ==========');
        }
        play() {
            console.log('-----------------打游戏----------------');
            console.log(`用户名:${this.name}`);
            console.log(`所在关卡:${this.grade}`);
            console.log(`等级:${this.level}`);
            console.log(`血量:${this.hp}`);
            console.log(`魔法:${this.mp}`);
            console.log(`杀boos数:${this.killBoos}`);
            this.hp -= ~~(Math.random() * 10);
            this.mp -= ~~(Math.random() * 10);
            this.level++;
            this.killBoos++;
            this.grade++;
            if (this.hp < 1) {
                this.praintInfo();
                console.log('血量低于 0，结束游戏。');
                return false;
            }
            return true;
        }
        store() {
            console.log('存档中');
            return this.gameStorage.store(Date.now().toString(), this);
        }
        restore(key) {
            console.log('存档回滚');
            return this.gameStorage.restore(key);
        }
    }
    let game = new Game('江湖百晓生');
    game.praintInfo();
    const flag = game.store();
    game.play();
    game.play();
    game.play();
    game.play();
    game.play();
    game.play();
    game = game.restore(flag);
    game.praintInfo();
})(action_mode_08 || (action_mode_08 = {}));
