"use strict";
var action_mode_05;
(function (action_mode_05) {
    // 绿灯
    class GreenLight {
        lightPole;
        nextShowLight;
        constructor(lightPole) {
            this.lightPole = lightPole;
        }
        setNextShowLight(nextShowLight) {
            this.nextShowLight = nextShowLight;
            return nextShowLight;
        }
        showLight() {
            if (this.nextShowLight) {
                console.log('绿灯亮，前方通行');
                this.lightPole.setState(this.nextShowLight);
            }
            else {
                console.log('状态异常，完犊子了');
            }
        }
    }
    // 黄灯
    class YellowLight {
        lightPole;
        nextShowLight;
        constructor(lightPole) {
            this.lightPole = lightPole;
        }
        setNextShowLight(nextShowLight) {
            this.nextShowLight = nextShowLight;
            return nextShowLight;
        }
        showLight() {
            if (this.nextShowLight) {
                console.log('黄灯亮，注意车俩');
                this.lightPole.setState(this.nextShowLight);
            }
            else {
                console.log('状态异常，完犊子了');
            }
        }
    }
    // 红灯
    class RedLight {
        lightPole;
        nextShowLight;
        constructor(lightPole) {
            this.lightPole = lightPole;
        }
        setNextShowLight(nextShowLight) {
            this.nextShowLight = nextShowLight;
            return nextShowLight;
        }
        showLight() {
            if (this.nextShowLight) {
                console.log('红灯亮，禁止通行');
                this.lightPole.setState(this.nextShowLight);
            }
            else {
                console.log('状态异常，完犊子了');
            }
        }
    }
    // 操作类：控制内部状态的切换
    class LightPole {
        greenLight;
        yellowLight;
        redLight;
        currentState;
        constructor() {
            this.greenLight = new GreenLight(this);
            this.yellowLight = new YellowLight(this);
            this.redLight = new RedLight(this);
            this.currentState = this.greenLight;
            // 设置状态切换的链条，在操作类内部设置
            this.currentState
                .setNextShowLight(this.yellowLight)
                .setNextShowLight(this.redLight)
                .setNextShowLight(this.greenLight);
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
})(action_mode_05 || (action_mode_05 = {}));
