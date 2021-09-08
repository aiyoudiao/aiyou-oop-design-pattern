namespace action_mode_11 {

    interface IMediator {

        buy(user1: Tenant, user2: HouseOwner): void
        sell(user1: HouseOwner, user2: Tenant): void
    }

    class Tenant {

        name: string
        typeName: string = '租客'
        mediator: IMediator

        constructor(name: string, mediator: IMediator) {
            this.name = name
            this.mediator = mediator
        }

        buy(user: HouseOwner) {
            this.mediator.buy(this, user)
        }

    }

    class HouseOwner {

        name: string
        typeName: string = '房东'
        mediator: IMediator

        constructor(name: string, mediator: IMediator) {
            this.name = name
            this.mediator = mediator
        }

        sell(user: Tenant) {
            this.mediator.sell(this, user)
        }
    }

    class Mediator implements IMediator {

        buy(user1: Tenant, user2: HouseOwner): void {
            console.log(`${user1.name}(${user1.typeName}):我要租房子`)
            console.log(`${user2.name}(${user2.typeName}):我要出租房子`)
        }
        sell(user1: HouseOwner, user2: Tenant): void {
            console.log(`${user1.name}(${user1.typeName}):我要出租房子`)
            console.log(`${user2.name}(${user2.typeName}):我要租房子`)
        }
    }

    const mediator = new Mediator()

    const tenant1 = new Tenant('小明', mediator)
    const houseOwner = new HouseOwner('老王', mediator)

    tenant1.buy(houseOwner)
    houseOwner.sell(tenant1)

}