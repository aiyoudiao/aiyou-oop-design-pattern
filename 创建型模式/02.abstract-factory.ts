namespace creative_mode_02 {

    // 工厂的枚举
    enum FactoryName {
        MySubFactoryOne,
        MySubFactoryTwo
    }

    // 产品的枚举
    enum ClassName {
        LogOne,
        LogTwo,
    }

    interface IConsoleLog {
        printLog(): void
    }

    type MySubFactory = typeof MySubFactoryOne | typeof MySubFactoryTwo

    // 子工厂 负责创建产品
    class MySubFactoryOne { 
        static map = new Map<ClassName, IConsoleLog>()

        static addConsoleLog (key: ClassName, value: IConsoleLog) {
            this.map.set(key, value)
            return this
        }

        static getConsoleLog (key: ClassName) {
            return this.map.get(key)
        }
    }

    class MySubFactoryTwo { 
        static map = new Map<ClassName, IConsoleLog>()

        static addConsoleLog (key: ClassName, value: IConsoleLog) {
            this.map.set(key, value)
            return this
        }

        static getConsoleLog (key: ClassName) {
            return this.map.get(key)
        }
    }

    // 抽象工厂 负责创建工厂
    class MyFactory {
        static factoryMap = new Map<FactoryName, MySubFactory>()

        static addFactory (key: FactoryName, value: MySubFactory) {
            this.factoryMap.set(key, value)
            return this
        }

        static getFactory(key: FactoryName) {
            return this.factoryMap.get(key) as MySubFactory
        }
    }

    // SubOne系列 产品
    class SubOneLogOne implements IConsoleLog {
        printLog(): void {
            console.log('subone log one ...')
        }
    }

    class SubOneLogTwo implements IConsoleLog {
        printLog(): void {
            console.log('subone log two ...')
        }
    }

    // SubTwo系列 产品
    class SubTwoLogOne implements IConsoleLog {
        printLog(): void {
            console.log('subtwo log one ...')
        }
    }

    class SubTwoLogTwo implements IConsoleLog {
        printLog(): void {
            console.log('subtwo log two ...')
        }
    }

    // 给抽象工厂添加 子工厂
    MyFactory.addFactory(FactoryName.MySubFactoryOne, MySubFactoryOne).addFactory(FactoryName.MySubFactoryTwo, MySubFactoryTwo)

    // 给子工厂添加要生产的产品
    MySubFactoryOne.addConsoleLog(ClassName.LogOne, new SubOneLogOne()).addConsoleLog(ClassName.LogTwo, new SubOneLogTwo())
    MySubFactoryTwo.addConsoleLog(ClassName.LogOne, new SubTwoLogOne()).addConsoleLog(ClassName.LogTwo, new SubTwoLogTwo())

    // 使用
    MyFactory.getFactory(FactoryName.MySubFactoryOne).getConsoleLog(ClassName.LogOne)?.printLog()
    MyFactory.getFactory(FactoryName.MySubFactoryOne).getConsoleLog(ClassName.LogTwo)?.printLog()
    MyFactory.getFactory(FactoryName.MySubFactoryTwo).getConsoleLog(ClassName.LogOne)?.printLog()
    MyFactory.getFactory(FactoryName.MySubFactoryTwo).getConsoleLog(ClassName.LogTwo)?.printLog()
}