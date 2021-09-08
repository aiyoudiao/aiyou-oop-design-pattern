namespace action_mode_06 {

    // 接口
    interface Iterator {

        hasNext(): boolean

        next(): Object

    }

    // 用于遍历学生列表的迭代器
    class StudentIterator implements Iterator {

        private studentList: StudentList
        private cur: number = 0;

        constructor(studentList: StudentList) {
            this.studentList = studentList
        }

        hasNext(): boolean {
            const result = this.studentList.list.length > this.cur && this.cur > -1;

            if (this.cur === this.studentList.list.length) {
                this.cur = 0;
            }

            return result
        }
        next(): Student {

            if (this.cur === this.studentList.list.length) {
                this.cur = 0
            }

            const result = this.studentList.list[this.cur]
            this.cur++

            return result
        }
    }

    // 学生模型
    class Student {

        name: string;
        classLevel: number;
        sex: string;

        constructor(name: string, classLevel: number, sex: string) {
            this.name = name;
            this.classLevel = classLevel;
            this.sex = sex;
        }

        getIterator() {

        }
    }

    // 学生列表
    class StudentList {

        list: Array<Student> = new Array()

        push(student: Student) {
            this.list.push(student)
            return this.list.length
        }

        getIterator(): StudentIterator {
            return new StudentIterator(this)
        }
    }

    // 使用
    const studentList = new StudentList()
    for (let i = 0; i < 30; i++) {
        const student = new Student(`zs${i}`, i, i % 2 === 0 ? '男' : '女')
        studentList.push(student)
    }

    const iterator = studentList.getIterator()
    
    // 遍历第一次 
    while(iterator.hasNext()) {
        const student = iterator.next()
        console.log(`${student.name}：我来自${student.classLevel}班，性别：${student.sex}`)
    }

    // 遍历第二次
    while(iterator.hasNext()) {
        const student = iterator.next()
        console.log(`${student.name}：我来自${student.classLevel}班，性别：${student.sex}`)
    }

}
