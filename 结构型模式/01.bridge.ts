namespace struct_mode_01 {

    // 约会
    interface IDating {
        say(): string
    }

    // 功能类

    class GoodLove implements IDating {
        say(): string {
            return '【甜的爱情】留在你身边,陪你。人间相伴,共赴天涯海角。'
        }
    }

    class BadLove implements IDating {
        say(): string {
            return "【变质的爱情】太差了，有机会换一个吧。分手前得搞点实惠的，那房子不错。"
        }
    }

    // 性别
    interface IGender {
        setFeel(feel: IDating): IGender
        love(): IGender
    }

    // 产品类

    class Man implements IGender {
        
        private feel: IDating

        constructor(feel: IDating) {
            this.feel = feel
        }

        setFeel(feel: IDating): IGender {
            this.feel = feel

            return this
        }

        love(): IGender {
            console.log(`男人觉得：${this.feel.say()}`)

            return this
        }
    }

    class Woman implements IGender {

        private feel: IDating

        constructor(feel: IDating) {
            this.feel = feel
        }

        setFeel(feel: IDating): IGender {
            this.feel = feel

            return this
        }

        love(): IGender {
            console.log(`女人觉得：${this.feel.say()}`)

            return this
        }
    }

    new Man(new GoodLove()).love().setFeel(new BadLove()).love()
    new Woman(new GoodLove()).love().setFeel(new BadLove()).love()

}