namespace struct_mode_06 {

    interface IFile {

        list: Array<IFile>
        parent?: IFile

        fileName: string
        fileSize: string
        fileType: string
        isDir: boolean

        getPath(): string
        getCount(): number

        // 从下往上
        setParent(parent: IFile): IFile
        
        // 从下往上
        addChild(children: IFile): IFile

    }

    class File implements IFile {
        list: IFile[];
        fileName: string;
        fileSize: string;
        fileType: string;
        isDir: boolean;
        parent?: IFile;

        constructor(fileName: string, fileSize: string, fileType: string, parent?: IFile) {
            this.fileName = fileName
            this.fileSize = fileSize
            this.fileType = fileType
            this.isDir = false

            this.list = new Array()
            if (parent) {
                this.parent = parent
            }
        }

        setParent(parent: IFile): IFile {

            if (!parent.list.includes(this)) {
                parent.list.push(this)
                this.parent = parent
            } else {
                throw new Error("已经有父亲了");
            }

            return this
        }

        addChild(children: IFile): IFile {
            throw new Error("无法追加");
        }

        getPath(): string {
            let parent = this.parent
            let pathStack = [this.fileName]
            while (parent) {
                pathStack.unshift(parent.fileName)
                parent = parent.parent
            }

            return pathStack.join('/');
        }

        getCount(): number {
            return 1
        }
    }

    class Dir implements IFile {
        list: IFile[];
        fileName: string;
        fileSize: string;
        fileType: string;
        isDir: boolean;
        parent?: IFile;

        constructor(fileName: string, fileSize: string, fileType: string, parent?: IFile) {
            this.fileName = fileName
            this.fileSize = fileSize
            this.fileType = fileType
            this.isDir = true

            this.list = new Array()

            if (parent) {
                this.parent = parent
            }
        }
        setParent(parent: IFile): IFile {

            if (!parent.list.includes(this)) {
                parent.list.push(this)
                this.parent = parent
            } else {
                throw new Error("已经有父亲了");
            }

            return this
        }
        addChild(children: IFile): IFile {
            if (!this.list.includes(children)) {
                this.list.push(children)
                children.parent = this
            } else {
                throw new Error("已经有儿子了");
            }

            return this
        }

        getPath(): string {
            let parent = this.parent
            let pathStack = [this.fileName]
            while (parent) {
                pathStack.unshift(parent.fileName)
                parent = parent.parent
            }

            return pathStack.join('/');
        }

        getCount(): number {
            let list = this.list

            const result = getSubCount(list, list.length)

            function getSubCount(ls: Array<IFile>, count: number) {
                ls.filter(item => item.isDir).forEach(item => {
                    count += getSubCount(item.list, item.list.length)
                })

                return count
            }

            return result
        }
    }

    const dir = new Dir('DIR', '0KB', '')
    const dir2 = new Dir('DIR--2', '0KB', '')
    const dir3 = new Dir('DIR---3', '0KB', '')
    const file = new File('test.rar', '9KB', 'rar')
    const file2 = new File('test2.rar', '29KB', 'rar')
    const file3 = new File('test3.rar', '19KB', 'rar')

    dir.addChild(file)
    dir.addChild(dir2)
    dir2.addChild(file2)
    dir2.addChild(dir3)
    dir3.addChild(file3)

    console.log(file3.getPath(), dir.getCount())
}