namespace struct_mode_03 {

    // 接口
    interface IPhone {
        run(): void;

    }

    // 产品类
    class HongMiK30 implements IPhone {

        run(): void {
            console.log('运行红米K30手机')
        }
    }

    // 装饰器
    class PhoneDecorator implements IPhone {

        phoneDecorator: IPhone

        constructor(phoneDecorator: IPhone) {
            this.phoneDecorator = phoneDecorator
        }

        run(): void {
            this.phoneDecorator.run()
        }
    }

    // 实体的装饰类
    class FanPhoneDecorator extends PhoneDecorator {

        constructor(phone: IPhone) {
            super(phone)
        }

        run() {
            super.run()
            this.runFan()
        }

        runFan() {
            console.log('安装手机电风扇，运行手机电扇')
        }
    }

    // 实体的装饰类
    class MemoryPhoneDecorator extends PhoneDecorator {

        constructor(phone: IPhone) {
            super(phone)
        }

        run() {
            this.runMemory()
            super.run() // ! 这里是super 不是 this
        }

        runMemory() {
            console.log('硬件升级，加大内存')
        }

    }


    // 使用 一：尝试一下功能的追加
    {
        const hongMiK30 = new HongMiK30()

        const homeMiK30DecorateFan = new FanPhoneDecorator(hongMiK30)
        const homeMiK30DecorateMemory = new MemoryPhoneDecorator(hongMiK30)

        console.log('hongMiK30')
        hongMiK30.run()

        console.log('homeMiK30DecorateFan')
        homeMiK30DecorateFan.run()

        console.log('homeMiK30DecorateMemory')
        homeMiK30DecorateMemory.run()
    }

    // 使用 二：动态的追加功能 面向对象
    {
        const hongMiK30 = new HongMiK30()

        const homeMiK30DecorateFan = new FanPhoneDecorator(hongMiK30)
        const homeMiK30DecorateMemory = new MemoryPhoneDecorator(homeMiK30DecorateFan)

        console.log('homeMiK30DecorateMemory')
        homeMiK30DecorateMemory.run()
    }

    // 使用三：动态的追加功能 AOP

    {
        type fnProtoTypeExpression = {
            addBeforeFn(fn: Function): fnProtoTypeExpression,
            addAfterFn(fn: Function): fnProtoTypeExpression,
        }

        const fnProtoType: fnProtoTypeExpression = Function.prototype as unknown as fnProtoTypeExpression

        fnProtoType.addBeforeFn = function (boforeFn: Function) {
            const that = this as unknown as Function;

            return function (...args: any) {
                boforeFn(...args)
                return that(...args)
            } as unknown as fnProtoTypeExpression
        }

        fnProtoType.addAfterFn = function (afterFn: Function) {
            const that = this as unknown as Function;

            return function (...args: any) {
                const result = that(...args)
                afterFn(...args)
                return result
            } as unknown as fnProtoTypeExpression
        }

        const callMethods1 = function callMethods1() {
            console.log('调用 callMethods1')
        } as unknown as fnProtoTypeExpression

        const callMethods2 = function callMethods2() {
            console.log('调用 callMethods2')
        } as unknown as fnProtoTypeExpression

        const callMethods3 = function callMethods3() {
            console.log('调用 callMethods3')
        } as unknown as fnProtoTypeExpression

        (callMethods2
            .addBeforeFn(callMethods1 as unknown as Function)
            .addAfterFn(callMethods3 as unknown as Function) as unknown as Function)()
    }

}