namespace action_mode_11_2 {

    interface IMediator {
        tenantList: Array<Tenant>
        houseOwnerList: Array<HouseOwner>

        buy(user1: Tenant): void
        sell(user1: HouseOwner): void
    }

    class Tenant {

        name: string
        typeName: string = '租客'
        mediator: IMediator

        constructor(name: string, mediator: IMediator) {
            this.name = name
            this.mediator = mediator
            this.mediator.tenantList.push(this)
        }

        buy() {
            this.mediator.buy(this)
        }

    }

    class HouseOwner {

        name: string
        typeName: string = '房东'
        mediator: IMediator

        constructor(name: string, mediator: IMediator) {
            this.name = name
            this.mediator = mediator
            this.mediator.houseOwnerList.push(this)
        }

        sell() {
            this.mediator.sell(this)
        }
    }

    class Mediator implements IMediator {

        tenantList: Array<Tenant> = new Array()
        houseOwnerList: Array<HouseOwner> = new Array()

        buy(user1: Tenant): void {

            console.log(`${user1.name}(${user1.typeName}):我要租房子`)
            this.houseOwnerList.forEach(houseOwner => {
                console.log(`${houseOwner.name}(${houseOwner.typeName}):我要出租房子`)
            })

        }
        sell(user1: HouseOwner): void {

            console.log(`${user1.name}(${user1.typeName}):我要出租房子`)
            this.tenantList.forEach(tenant => {
                console.log(`${tenant.name}(${tenant.typeName}):我要租房子`)
            })
        }
    }

    const mediator = new Mediator()

    const tenant1 = new Tenant('小明', mediator)
    const tenant2 = new Tenant('小黄', mediator)
    const tenant3 = new Tenant('大正', mediator)
    const houseOwner1 = new HouseOwner('老王头', mediator)
    const houseOwner2 = new HouseOwner('老李头', mediator)
    const houseOwner3 = new HouseOwner('老张头', mediator)

    tenant1.buy()
    houseOwner1.sell()

}