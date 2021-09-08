namespace action_mode_07 {


    interface ITeacherVisitor {
        visit(student: IStudent): void;
    }

    interface IStudent {
        type: string
        accep(techer: ITeacherVisitor): void;
    }

    // 访问者：老师A
    class TecherA implements ITeacherVisitor {

        name: string

        constructor (name: string) {
            this.name = name
        }

        visit(student: IStudent): void {
            if (student.type === '好学生') {
                console.log(this.name + '很开心，和好学生的父母谈笑风生。')
            } else if (student.type === '坏学生') {
                console.log(this.name + '很尴尬，安慰坏学生的父母要多陪陪孩子。')
            } else {
                console.log(this.name + '正常的和学生父母进行交流。')
            }
        }
    }

    // 好学生
    class GoodStudent implements IStudent {

        name: string
        type: string
        
        constructor (name: string) {
            this.name = name
            this.type = '好学生'
        }

        accep(techer: ITeacherVisitor): void {
            techer.visit(this)
        }
    }

    // 坏学生
    class BadStudent implements IStudent {

        name: string
        type: string

        constructor (name: string) {

            this.name = name
            this.type = '坏学生'
        }

        accep(techer: ITeacherVisitor) {
            techer.visit(this)
        }
    }

    // 普通学生
    class NormalStudent implements IStudent {

        name: string
        type: string

        constructor (name: string) {

            this.name = name
            this.type = '普通学生'
        }

        accep(techer: ITeacherVisitor) {
            techer.visit(this)
        }
    }

    // 访问者A
    const techerA = new TecherA('女老师')

    const goodStudent = new GoodStudent('好学生-夏雪')
    const badStudent = new BadStudent('坏学生-刘星')
    const normalStudent = new NormalStudent('普通学生-夏雨')

    // 未改变数据结构，直接通过访问者扩展了行为
    goodStudent.accep(techerA)
    badStudent.accep(techerA)
    normalStudent.accep(techerA)

    // 再来一个
    class TecherB implements ITeacherVisitor {
        name: string

        constructor (name: string) {
            this.name = name
        }

        visit(student: IStudent): void {
            if (student.type === '好学生') {
                console.log(this.name + '很开心，和好学生的父母谈笑风生。')
            } else if (student.type === '坏学生') {
                console.log(this.name + '很开心，说坏学生很有天分，在数学方面很有前途。')
            } else {
                console.log(this.name + '很开心的和学生父母进行交流。')
            }
        }
    }

    // 访问者B
    const techerB = new TecherB('金牌老师')
    goodStudent.accep(techerB)
    badStudent.accep(techerB)
    normalStudent.accep(techerB)

}