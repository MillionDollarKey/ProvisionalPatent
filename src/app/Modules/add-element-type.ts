export class AddElementType {
    constructor(
        public title : string,
        public briefDescription : string,
        public features : string,
        public about : string,
        public figure : number ,
        public id ?: number,
        public parentId ?: number,
        public subElement ?: AddElementType[]
    ){}
}
