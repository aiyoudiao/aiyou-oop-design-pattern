"use strict";
var action_mode_05_2;
(function (action_mode_05_2) {
    // 绿灯
    class GreenLight {
        lightPole;
        constructor(lightPole) {
            this.lightPole = lightPole;
        }
        showLight() {
            console.log('绿灯亮，前方通行');
            // 这里面其实可以加一些判断，比如出现异常时，直接切换到红灯等等
            this.lightPole.setState(this.lightPole.yellowLight);
        }
    }
    // 黄灯
    class YellowLight {
        lightPole;
        constructor(lightPole) {
            this.lightPole = lightPole;
        }
        showLight() {
            console.log('黄灯亮，注意车俩');
            this.lightPole.setState(this.lightPole.redLight);
        }
    }
    // 红灯
    class RedLight {
        lightPole;
        constructor(lightPole) {
            this.lightPole = lightPole;
        }
        showLight() {
            console.log('红灯亮，禁止通行');
            this.lightPole.setState(this.lightPole.greenLight);
        }
    }
    // 操作类：控制内部状态的切换
    class LightPole {
        greenLight;
        yellowLight;
        redLight;
        currentState;
        stateChangeNum = 0;
        constructor() {
            this.greenLight = new GreenLight(this);
            this.yellowLight = new YellowLight(this);
            this.redLight = new RedLight(this);
            this.currentState = this.greenLight;
        }
        change() {
            this.currentState.showLight();
        }
        setState(state) {
            this.currentState = state;
        }
    }
    // 使用
    const lightPole = new LightPole();
    lightPole.change();
    lightPole.change();
    lightPole.change();
    lightPole.change();
    lightPole.change();
    lightPole.change();
    lightPole.change();
})(action_mode_05_2 || (action_mode_05_2 = {}));
