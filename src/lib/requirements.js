import { generateRandomId } from "../utils.js";
class RequirementManager {
    constructor() {
        this.storage = []
    }
    create(name, source, desc) {
        let newReq = {}
        newReq.index = generateRandomId(8)
        newReq.name = name;
        newReq.source = source;
        newReq.description = desc;
        this.storage.push(newReq);
        return newReq
    }
    readAll() {
        return this.storage;
    }
    readOne(prop) {
        if(!prop) throw new Error("Read parameter is empty")
        let key = Object.keys(prop)[0]
        let value = Object.keys(prop)[0]
        let found = this.storage.find(r=>r[key] === value)
        if (!found) {
            console.error("Nothing found")
            return {error:"not found"}
        }
        return found
    }
    updateOneByIndex(index, updObj) {
        let i = this.getIndex({index})
        this.storage[i] = Object.assign(this.storage[i], updObj)
        return this.storage[i]
    }

    // Method to delete a requirement by its index in the store
    deleteOneByIndex(index) {
        let i = this.getIndex({index})
        let deleted =  this.storage[i]
        if(!deleted) {
            console.error("not found to delete")
            throw new Error("not found to delete")
        }
        this.storage.splice(i, 1)
        return deleted
    }
    getIndex(props){
        if(!props) throw new Error("props not given to getIndex")
        let k = Object.keys(props)[0]
        let i = this.storage.findIndex(r=>
            r[k]==props[k]
        )
        if(i===-1) {
            console.error("Nothing found")
            return {error:"not found"}
        }
        return i
    }
}
let reqManager = new RequirementManager("Requirement 1", "Source 1", "Description 1")

//---quick test---
reqManager.create("Requirement 1", "Source 1", "Description 1");

reqManager.create("Requirement 2", "Source 2", "Description 2");
let all = reqManager.readAll()//returns the requeriments saved in the instance
reqManager.updateOneByIndex(all[0].index,{name:"Requirement X"})
reqManager.deleteOneByIndex(all[0].index)
console.log(reqManager.readAll())

