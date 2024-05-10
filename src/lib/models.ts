//---------------- level 0 interfaces
interface timespan{
    startDate:number,
    durationHours:number,
    endDate:number
}
interface Person{
    name: string,
    surname: string,
}

//---------------- level 1 interfaces

//Enterprise side
interface Machine{
    id:string,
    brand: string,
    model: string,
    description: string,
}

interface Material{ //supplies and consumables
    name:string;
    ANSIcode:number;
}

interface ManPower { //personnel
    name:Person;
}
interface Method{ //procedures and references used 
    procedure:string,
    records:[string]
}

interface Measurement{ //also includes supervision and verifications

}
interface MotherNature{ //env conditions and operation residues

}

//Client Side

interface Characteristic{
    name:string,
    description:any,

}



//---------------- level 2 interfaces

interface Product {
    cid: string,
    quantity: number,
    characteristics: Characteristic[] | [], //global input
    materials: Material[] | [], //global input
    components: Product[] | [],
    contract: string,
}

interface Operation {
    cid: string;
    machines: Machine[] | [];
    materials: Material[] | [];
    manpower: ManPower[] | [];
    method: Method[] | [];
    measurement: Measurement[] | [];
    mothernature: MotherNature[] | []; 
    product: Product[]|[]
}

//---------------- level 3 interfaces

interface Plan {
    operations: Operation[] | [],
    products: Product[],
    plannedDueDate: number,
    plannedManHours: number,
}