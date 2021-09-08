"use strict";
var struct_mode_06;
(function (struct_mode_06) {
    class File {
        list;
        fileName;
        fileSize;
        fileType;
        isDir;
        parent;
        constructor(fileName, fileSize, fileType, parent) {
            this.fileName = fileName;
            this.fileSize = fileSize;
            this.fileType = fileType;
            this.isDir = false;
            this.list = new Array();
            if (parent) {
                this.parent = parent;
            }
        }
        setParent(parent) {
            if (!parent.list.includes(this)) {
                parent.list.push(this);
                this.parent = parent;
            }
            else {
                throw new Error("已经有父亲了");
            }
            return this;
        }
        addChild(children) {
            throw new Error("无法追加");
        }
        getPath() {
            let parent = this.parent;
            let pathStack = [this.fileName];
            while (parent) {
                pathStack.unshift(parent.fileName);
                parent = parent.parent;
            }
            return pathStack.join('/');
        }
        getCount() {
            return 1;
        }
    }
    class Dir {
        list;
        fileName;
        fileSize;
        fileType;
        isDir;
        parent;
        constructor(fileName, fileSize, fileType, parent) {
            this.fileName = fileName;
            this.fileSize = fileSize;
            this.fileType = fileType;
            this.isDir = true;
            this.list = new Array();
            if (parent) {
                this.parent = parent;
            }
        }
        setParent(parent) {
            if (!parent.list.includes(this)) {
                parent.list.push(this);
                this.parent = parent;
            }
            else {
                throw new Error("已经有父亲了");
            }
            return this;
        }
        addChild(children) {
            if (!this.list.includes(children)) {
                this.list.push(children);
                children.parent = this;
            }
            else {
                throw new Error("已经有儿子了");
            }
            return this;
        }
        getPath() {
            let parent = this.parent;
            let pathStack = [this.fileName];
            while (parent) {
                pathStack.unshift(parent.fileName);
                parent = parent.parent;
            }
            return pathStack.join('/');
        }
        getCount() {
            let list = this.list;
            const result = getSubCount(list, list.length);
            function getSubCount(ls, count) {
                ls.filter(item => item.isDir).forEach(item => {
                    count += getSubCount(item.list, item.list.length);
                });
                return count;
            }
            return result;
        }
    }
    const dir = new Dir('DIR', '0KB', '');
    const dir2 = new Dir('DIR--2', '0KB', '');
    const dir3 = new Dir('DIR---3', '0KB', '');
    const file = new File('test.rar', '9KB', 'rar');
    const file2 = new File('test2.rar', '29KB', 'rar');
    const file3 = new File('test3.rar', '19KB', 'rar');
    dir.addChild(file);
    dir.addChild(dir2);
    dir2.addChild(file2);
    dir2.addChild(dir3);
    dir3.addChild(file3);
    console.log(file3.getPath(), dir.getCount());
})(struct_mode_06 || (struct_mode_06 = {}));
