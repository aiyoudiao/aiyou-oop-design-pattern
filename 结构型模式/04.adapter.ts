namespace struct_mode_04 {

    // 接口
    interface IAlternator {
        sendElectricity(): void
    }

    class FiveThousandVTower {

        sendElectricity() {
            console.log('放电：放射~~~~5000V')
        }
    }

    class TowerAdapter implements IAlternator {

        private fiveThousandVTower = new FiveThousandVTower()

        sendElectricity(): void {
            this.fiveThousandVTower.sendElectricity()

            console.log('将5000v电转换。。。')

            console.log('转换成为了 220V 的家用电')
        }

    }

    class TowerAdapter2 extends FiveThousandVTower {

        sendElectricity() {
            super.sendElectricity()

            console.log('将5000v电转换。。。')

            console.log('转换成为了 36V 的小功率电')
        }
    }

    // 使用一：对象适配器
    const towerAdapter = new TowerAdapter()
    towerAdapter.sendElectricity()

    // 使用二：类适配器
    const towerAdapter2 = new TowerAdapter2()
    towerAdapter2.sendElectricity()

}