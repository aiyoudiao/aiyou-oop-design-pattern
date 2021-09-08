namespace action_mode_03 {

    // 接口
    interface IPlay {
        buy(price: number): number
        run(): string

    }


    class Computer implements IPlay {
        price: number = 6000

        buy(price: number): number {
            // 打六折
            const finalPrice = this.price * 0.6
            return price  - finalPrice
        }

        run(): string {
            return '计算机开机 =======> 欢迎使用 windows10'
        }

    }

    class Pad implements IPlay {
        price: number = 10000

        run(): string {
            return '平板开机 =======> 欢迎使用 华为平板'
        }

        buy(price: number): number {
            // 打七五折
            const finalPrice = this.price * 0.75
            return price - finalPrice
        }
    }


    class TV implements IPlay {
        price: number = 3000

        run(): string {
            return '电视开机 =======> 欢迎使用 小米电视'
        }

        buy(price: number): number {
            // 打8折
            const finalPrice = this.price * 0.8
            return price - finalPrice
        }
    }

    // 操作类
    class Student {

        money: number

        constructor(money: number) {
            this.money = money
        }

        get(strategyType: StrategyType) {
            const strategy = new strategyList[strategyType]
            const result = strategy.buy(this.money)
            if (result < 0) {
                return '钱不够，购买失败'
            }
            return strategy.run()
        }
    }

    // 策略的枚举
    enum StrategyType {
        Computer,
        Pad,
        TV,
    }

    // 策略的定义
    const strategyList = {
        [StrategyType.Computer]: Computer,
        [StrategyType.Pad]: Pad,
        [StrategyType.TV]: TV,
    }

    const xiaoming = new Student(5000)

    console.log("小明买计算机", xiaoming.get(StrategyType.Computer))
    console.log("小明买平板电脑", xiaoming.get(StrategyType.Pad))
    console.log("小明买液晶电视机", xiaoming.get(StrategyType.TV))
}

