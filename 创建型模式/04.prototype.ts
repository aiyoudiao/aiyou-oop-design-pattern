namespace creative_mode_04 {

    // 产品类
    class Student {

        name: string = ''
        age: string = ''
        height: string = ''
        // classNum: string = ''
        // levelNum: string = ''
        // teacher: string = ''
        // father: string = ''
        // mother: string = ''
        dog?: Dog 
        cat?: Cat
    }

    class Dog {
        dogName: string = ''
        dogIQ?: number
    }

    class Cat {
        catName: string = ''
        catIQ?: number
    }

    // 浅克隆、深克隆的接口
    interface ICloneStudentable {
        clone (student: Student): Student
        deepClone (student: Student): Student
    }

    // 克隆机器
    class CloneMachine implements ICloneStudentable {
        // 浅克隆
        clone(student: Student): Student {
            if (!student || !(student instanceof Student)) {
                throw new Error("param is null or not Student instance.")
            }

            const newStudent = new Student()
            newStudent.name = student.name
            newStudent.age = student.age
            newStudent.height = student.height
            newStudent.dog = student.dog
            newStudent.cat = student.cat

            return newStudent
        }
        // 深克隆
        deepClone(student: Student): Student {
            if (!student || !(student instanceof Student)) {
                throw new Error("param is null or not Student instance.")
            }

            const newStudent = new Student()
            newStudent.name = student.name
            newStudent.age = student.age
            newStudent.height = student.height
            newStudent.dog = new Dog()
            newStudent.dog.dogName = student.dog?.dogName || ''
            newStudent.dog.dogIQ = student.dog?.dogIQ
            newStudent.cat = new Cat()
            newStudent.cat.catName = student.cat?.catName || ''
            newStudent.cat.catIQ = student.cat?.catIQ

            // const newStudent = JSON.parse(JSON.stringify(student))
            return newStudent
        }
    }

    // 复杂对象初始化
    const student1 = new Student()
    student1.name = '马文'
    student1.age = '8岁'
    student1.height = '120cm'
    student1.dog = new Dog()
    student1.dog.dogName = '黄元帅'
    student1.dog.dogIQ = 20
    student1.cat = new Cat()
    student1.cat.catName = '毛牙'
    student1.cat.catIQ = 12

    // 使用
    const cloneMachine = new CloneMachine()

    // 浅克隆
    const newStudent1 = cloneMachine.clone(student1)
    newStudent1.name = '马子明' // 部分修改
    console.log('newStudent1 === student1 ===>>> ', newStudent1 === student1) // false
    console.log('newStudent1.dog === student1.dog ===>>> ', newStudent1.dog === student1.dog) // true
    console.log('newStudent1.cat === student1.cat ===>>> ', newStudent1.cat === student1.cat) // true

    // 深克隆
    const newStudent2 = cloneMachine.deepClone(student1)
    newStudent2.name = '江钰' // 部分修改
    console.log('newStudent2 === student1 ===>>> ', newStudent2 === student1) // false
    console.log('newStudent2.dog === student1.dog ===>>> ', newStudent2.dog === student1.dog) // false
    console.log('newStudent2.cat === student1.cat ===>>> ', newStudent2.cat === student1.cat) // false
}