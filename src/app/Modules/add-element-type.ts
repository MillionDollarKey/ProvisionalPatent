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

export class PatentType{
    constructor(
     public email : string,
     public inventorName: string,
     public inventorPlace : string,
     public inventionTitle : string,
     public reference : number,
     public dockerNumber : number,
     public inventionType : string,
     public problemDefinition : string,
     public about : string,
     public Elements ?: AddElementType[]
    ){}
}
