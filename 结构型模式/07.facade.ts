namespace struct_mode_07 {

    // 做饭接口
    interface ICook {
        // 洗碗、洗菜、做菜
        washVegetable(): string
        washDishes(): string
        cookAdish(): string
    }

    class Mom implements ICook {

        washVegetable(): string {
            return '妈妈洗碗'
        }
        washDishes(): string {
            return '妈妈洗菜'
        }
        cookAdish(): string {
            return '妈妈做菜'
        }
    }

    class Dad implements ICook {
        washVegetable(): string {
            return '爸爸洗碗'
        }
        washDishes(): string {
            return '爸爸洗菜'
        }
        cookAdish(): string {
            return '爸爸做菜'
        }
    }

    // 晚餐接口
    interface IDinner {
        cook(who: string): IDinner
    }

    // 外观类
    class DinnerFacade implements IDinner {

        private mom = new Mom()
        private dad = new Dad()

        cook(who: string): IDinner {
            console.log('制作晚餐中...')

            if (who === 'mom') {
                this.cookMom()
            } else if (who === 'dad') {
                this.cookDad()
            } else if (who === 'dad mom') {
                this.cookDadMom()
            } else {
                console.log('无人制作晚餐，请到外面饭店就餐')
                return this
            }
            
            console.log('制作晚餐完毕...')

            return this
        }

        private cookMom(): void {

            console.log(this.mom.washVegetable())
            console.log(this.mom.washDishes())
            console.log(this.mom.cookAdish())

        }

        private cookDad(): void {

            console.log(this.dad.washVegetable())
            console.log(this.dad.washDishes())
            console.log(this.dad.cookAdish())

        }

        private cookDadMom(): void {

            console.log(this.dad.washVegetable())
            console.log(this.dad.washDishes())
            console.log(this.mom.cookAdish())

        }



    }

    // 使用
    new DinnerFacade().cook('mom').cook('dad').cook('dad mom').cook('')
}