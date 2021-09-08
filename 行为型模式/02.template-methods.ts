namespace action_mode_02 {

    // 模板方法类：进餐
    abstract class Dining {

        private diningBefore() {
            console.log(' ================= 用餐前 ================= ')
        }

        protected abstract dining(): void

        private diningAfter() {
            console.log(' ================= 用餐后 ================= ')
        }

        startEat() {
            this.diningBefore()
            this.dining()
            this.diningAfter()
        }

    }

    // 产品类 1：肯德基
    class KFC extends Dining {
        protected dining(): void {
            console.log('肯德基：喝可乐，吃汉堡薯条')
        }
    }

    // 产品类2：自助餐
    class Buffet extends Dining {
        protected dining(): void {
            console.log('自助餐：喝饮料，吃烤肉火锅')
        }
    }


    const kfc = new KFC()
    const buffet = new Buffet()

    kfc.startEat()
    buffet.startEat()
    
}
