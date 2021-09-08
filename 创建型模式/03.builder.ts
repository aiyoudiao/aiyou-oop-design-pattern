namespace creative_mode_03 {

    // 产品类
    class SuperMan {

        private name: string = ''
        private body: string = ''
        private woman: string = ''
        private arms: string = ''
        private power: string = ''
        private skillList: Array<string> = []

        constructor (name: string, body: string, woman: string, arms: string, power: string, skillList: string[]) {
            this.name = name
            this.body = body
            this.woman = woman
            this.arms = arms
            this.power = power
            this.skillList = skillList
        }

        toResultString () {
            console.log(`我是${this.name}，拥有${this.body}，我的女人叫${this.woman}，我持有${this.arms}，我擅长${this.power}。`)
            console.log(`开始放大招： \r\n====================\r\n${this.skillList.join('\r\n')}\r\n=====================`)
        }
    }

    // 建造者接口
    interface IBuilderabler {

        setName(name: string): IBuilderabler

        setBody(body: string): IBuilderabler

        setWoman(woman: string): IBuilderabler

        setArms(arms: string): IBuilderabler

        setPower(power: string): IBuilderabler

        setSkill (skill: string): IBuilderabler

        build (): SuperMan

    }

    // 建造者
    class Builer implements IBuilderabler {

        private name: string = ''
        private body: string = ''
        private woman: string = ''
        private arms: string = ''
        private power: string = ''
        private skillList: Array<string> = []

        build(): SuperMan {
            // 只有所有步骤全部执行完毕才能创建出对象来
            if (this.name && this.body && this.woman && this.arms && this.power && this.skillList) {
                return new SuperMan(this.name, this.body, this.woman, this.arms, this.power, this.skillList)
            }

            throw new Error("build fail. name、body、woman、arms、power、skillList is reqired.")
        }

        setName(name: string): IBuilderabler {
            if (!name) {
                throw new Error("name is reqired.")
            }
            this.name = name

            return this
        }
        setBody(body: string): IBuilderabler {
            if (!body) {
                throw new Error("body is reqired.")
            }
            this.body = body

            return this
        }
        setWoman(woman: string): IBuilderabler {
            if (!woman) {
                throw new Error("woman is reqired.")
            }
            this.woman = woman

            return this
        }
        setArms(arms: string): IBuilderabler {
            if (!arms) {
                throw new Error("arms is reqired.")
            }
            this.arms = arms

            return this
        }
        setPower(power: string): IBuilderabler {
            if (!power) {
                throw new Error("power is reqired.")
            }
            this.power = power

            return this
        }

        setSkill(skill: string): IBuilderabler {
            if (!skill) {
                throw new Error("skill is reqired.")
            }
            
            if (Array.isArray(skill)) {
                this.skillList = skill
            } else {
                this.skillList.push(skill)
            }

            return this
        }

    }

    // 使用 1
    const ultraManBuilder = new Builer()
    const ultraman = ultraManBuilder
    .setName('奥特曼之父')
    .setBody('奥特曼的皮套')
    .setWoman('奥特之母') 
    .setArms('奥特之剑')
    .setPower('召唤奥特国所有的奥特曼出来作战')
    .setSkill('泰罗奥特曼出列')
    .setSkill('雷欧奥特曼出列')
    .setSkill('雷欧奥特曼出列')
    .setSkill('迪迦奥特曼出列')
    .build()

    ultraman.toResultString()

    // 使用2
    const soulLandBuilder = new Builer()
    const tangsan = soulLandBuilder
    .setName('唐三')
    .setBody('八蛛魂骨')
    .setWoman('十万年魂兽小舞')
    .setArms('昊天锤')
    .setPower('九九八十一式乱劈风吹法')
    .setSkill('蓝银领域')
    .setSkill('杀神领域')
    .setSkill('蓝银霸王枪 去')
    .setSkill('无敌金身')
    .setSkill('虚无')
    .setSkill('九九归一乱劈风')
    .build()

    tangsan.toResultString()

}

