namespace action_mode_05 {

    // 接口
    interface IShowLight {
        lightPole: LightPole
        nextShowLight: IShowLight
        showLight(): void
        setNextShowLight(nextShowLight: IShowLight): IShowLight
    }

    // 绿灯
    class GreenLight implements IShowLight {
        lightPole: LightPole;
        nextShowLight!: IShowLight

        constructor(lightPole: LightPole) {
            this.lightPole = lightPole
        }

        setNextShowLight(nextShowLight: IShowLight) {
            this.nextShowLight = nextShowLight

            return nextShowLight
        }

        showLight(): void {
            if (this.nextShowLight) {
                console.log('绿灯亮，前方通行')
                this.lightPole.setState(this.nextShowLight)
            } else {
                console.log('状态异常，完犊子了')
            }
        }
    }

    // 黄灯
    class YellowLight implements IShowLight {
        lightPole: LightPole;
        nextShowLight!: IShowLight

        constructor(lightPole: LightPole) {
            this.lightPole = lightPole
        }

        setNextShowLight(nextShowLight: IShowLight) {
            this.nextShowLight = nextShowLight

            return nextShowLight
        }

        showLight(): void {
            if (this.nextShowLight) {
                console.log('黄灯亮，注意车俩')
                this.lightPole.setState(this.nextShowLight)
            } else {
                console.log('状态异常，完犊子了')
            }
        }
    }

    // 红灯
    class RedLight implements IShowLight {
        lightPole: LightPole;
        nextShowLight!: IShowLight

        constructor(lightPole: LightPole) {
            this.lightPole = lightPole
        }

        setNextShowLight(nextShowLight: IShowLight) {
            this.nextShowLight = nextShowLight
            return nextShowLight
        }

        showLight(): void {
            if (this.nextShowLight) {
                console.log('红灯亮，禁止通行')
                this.lightPole.setState(this.nextShowLight)
            } else {
                console.log('状态异常，完犊子了')
            }
        }
    }



    // 操作类：控制内部状态的切换
    class LightPole {

        greenLight: GreenLight;
        yellowLight: YellowLight;
        redLight: RedLight;

        currentState: IShowLight;


        constructor() {
            this.greenLight = new GreenLight(this)
            this.yellowLight = new YellowLight(this)
            this.redLight = new RedLight(this)

            this.currentState = this.greenLight

            // 设置状态切换的链条，在操作类内部设置
            this.currentState
                .setNextShowLight(this.yellowLight)
                .setNextShowLight(this.redLight)
                .setNextShowLight(this.greenLight)
        }

        change() {
            this.currentState.showLight()
        }

        setState(state: IShowLight) {
            this.currentState = state
        }
    }

    // 使用
    const lightPole = new LightPole()
    lightPole.change()
    lightPole.change()
    lightPole.change()
    lightPole.change()
    lightPole.change()
    lightPole.change()
    lightPole.change()
}
