export class AddElementType {
    constructor(
        public title: string,
        public briefDescription: string,
        public features: string,
        public about: string,
        public figure: number,
        public id?: number,
        public parentId?: number,
        public subElement?: AddElementType[]
    ) { }
}

export class PatentType {
    constructor(
        public email: string,
        public inventorName1: string,
        public inventorAddress1: string,
        public inventorCity1: string,
        public inventorState1: string,
        public inventorCountry1: string,
        public inventorPostalCode1: number,
        public inventorPhone1: number,
        public inventorEmail1: number,
        public inventorName2: string,
        public inventorAddress2: string,
        public inventorCity2: string,
        public inventorState2: string,
        public inventorCountry2: string,
        public inventorPostalCode2: number,
        public inventorPhone2: number,
        public inventorEmail2: number,
        public inventorName3: string,
        public inventorAddress3: string,
        public inventorCity3: string,
        public inventorState3: string,
        public inventorCountry3: string,
        public inventorPostalCode3: number,
        public inventorPhone3: number,
        public inventorEmail3: number,
        public inventorName4: string,
        public inventorAddress4: string,
        public inventorCity4: string,
        public inventorState4: string,
        public inventorCountry4: string,
        public inventorPostalCode4: number,
        public inventorPhone4: number,
        public inventorEmail4: number,
        public inventionTitle: string,
        public reference: number,
        public dockerNumber: number,
        public inventionType: string,
        public problemDefinition: string,
        public publication: string,
        public about: string,
        public Elements?: AddElementType[]
    ) { }
}
