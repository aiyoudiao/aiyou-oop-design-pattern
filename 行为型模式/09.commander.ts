namespace action_mode_09 {
    
    // 炒菜命令的接口
    interface IStirFryCommand {

        stirFry (): string
    }

    // 执行类：五星厨师
    class FiveStarChef {

        // 做一份麻辣小龙虾
        stirFrySpicyCrayfish () {
            const reuslt = '一盘麻辣小龙虾！！！！！'
            console.log('五星厨师在线做菜，来喽一盘' + reuslt)
            return reuslt
        }

        // 做一份红烧东坡肉
        stirFryBraisedDongpoMeat () {
            const reuslt = '一盘红烧东坡肉！！！！！'
            console.log('五星厨师在线做菜，来喽一盘' + reuslt)
            return reuslt
        }
    }

    // 命令类：做一份麻辣小龙虾
    class SpicyCrayfish implements IStirFryCommand {

        fiveStarChef: FiveStarChef

        constructor (fiveStarChef: FiveStarChef) {
            this.fiveStarChef = fiveStarChef
            console.log('命令：做一份麻辣小龙虾')
        }

        stirFry(): string {
            console.log('执行命令：做一份麻辣小龙虾')
            return this.fiveStarChef.stirFrySpicyCrayfish()
        }
    }

    // 命令类：做一份红烧东坡肉
    class BraisedDongpoMeat implements IStirFryCommand {
        
        fiveStarChef: FiveStarChef

        constructor (fiveStarChef: FiveStarChef) {
            this.fiveStarChef = fiveStarChef
            console.log('命令：做一份红烧东坡肉')
        }

        stirFry(): string {
            console.log('执行命令：做一份红烧东坡肉')
            return this.fiveStarChef.stirFryBraisedDongpoMeat()
        }
    }

    // 调用类：VIP客户
    class VIPCustomes {

        private mealList: Array<IStirFryCommand> = new Array()

        // 点菜
        addOrder(orderCmd: IStirFryCommand) {
            this.mealList.push(orderCmd)
        }

        // 吃菜
        eat () {
            
            if (!this.mealList.length) {
                return
            }

            while(this.mealList.length) {
                const meal = this.mealList.splice(0, 1)[0]
                const result = meal.stirFry()
                console.log('吃：' + result)
            }

            console.log('都吃完了！！！！！')
        }
    }
    

    const fiveStarChef = new FiveStarChef()
    const spicyCrayfish = new SpicyCrayfish(fiveStarChef)
    const braisedDongpoMeat = new BraisedDongpoMeat(fiveStarChef)

    const vipCustomes = new VIPCustomes()
    // 没点菜，直接吃
    vipCustomes.eat()

    // 点两单
    vipCustomes.addOrder(spicyCrayfish)
    vipCustomes.addOrder(braisedDongpoMeat)
    // 吃
    vipCustomes.eat()

    // 点两单
    vipCustomes.addOrder(braisedDongpoMeat)
    vipCustomes.addOrder(spicyCrayfish)
    // 吃
    vipCustomes.eat()

}