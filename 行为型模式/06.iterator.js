"use strict";
var action_mode_06;
(function (action_mode_06) {
    // 用于遍历学生列表的迭代器
    class StudentIterator {
        studentList;
        cur = 0;
        constructor(studentList) {
            this.studentList = studentList;
        }
        hasNext() {
            const result = this.studentList.list.length > this.cur && this.cur > -1;
            if (this.cur === this.studentList.list.length) {
                this.cur = 0;
            }
            return result;
        }
        next() {
            if (this.cur === this.studentList.list.length) {
                this.cur = 0;
            }
            const result = this.studentList.list[this.cur];
            this.cur++;
            return result;
        }
    }
    // 学生模型
    class Student {
        name;
        classLevel;
        sex;
        constructor(name, classLevel, sex) {
            this.name = name;
            this.classLevel = classLevel;
            this.sex = sex;
        }
        getIterator() {
        }
    }
    // 学生列表
    class StudentList {
        list = new Array();
        push(student) {
            this.list.push(student);
            return this.list.length;
        }
        getIterator() {
            return new StudentIterator(this);
        }
    }
    // 使用
    const studentList = new StudentList();
    for (let i = 0; i < 30; i++) {
        const student = new Student(`zs${i}`, i, i % 2 === 0 ? '男' : '女');
        studentList.push(student);
    }
    const iterator = studentList.getIterator();
    // 遍历第一次 
    while (iterator.hasNext()) {
        const student = iterator.next();
        console.log(`${student.name}：我来自${student.classLevel}班，性别：${student.sex}`);
    }
    // 遍历第二次
    while (iterator.hasNext()) {
        const student = iterator.next();
        console.log(`${student.name}：我来自${student.classLevel}班，性别：${student.sex}`);
    }
})(action_mode_06 || (action_mode_06 = {}));
