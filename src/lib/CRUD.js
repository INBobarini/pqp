import { generateRandomId } from "../utils.js";

class ModelManager {
    constructor(props, label) {
        this.storage = []
        this.props = props
        this.generateRandomId = generateRandomId
        this.label = label
    }
    createOne(obj) { //returns the created object
        let newObj = {};
        newObj.index = this.generateRandomId(8);
        
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key) && Object.prototype.hasOwnProperty.call(this.props, key)) {
                newObj[key] = obj[key];
            } else {
                console.log(`Key "${key}" is not allowed.`);
                return { error: `Key "${key}" is not allowed.` };
            }
        }
        
        this.storage.push(newObj)
        return newObj;
    }
    readAll() { //returns the array of objects
        return this.storage;
    }
    readOne(prop) { //returns an object
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
    updateOneByIndex(index, updObj) { //returns the updated object
        let i = this.getIndex({index})
        if(i===-1) return {error:"id not found"}
        this.storage[i] = Object.assign(this.storage[i], updObj)
        return this.storage[i]
    }

    // Method to delete a requirement by its index in the store
    deleteOneByIndex(index) { //returns the deleted object
        let i = this.getIndex({index})
        if(i===-1) return {error:"id not found"}
        let deleted =  this.storage[i]
        if(!deleted) {
            console.error("not found to delete")
            throw new Error("not found to delete")
        }
        this.storage.splice(i, 1)
        return deleted
    }
    getIndex(props){//util. returns a number, the position of the array or -1 
        if(!props) throw new Error("props not given to getIndex")
        let k = Object.keys(props)[0]
        let i = this.storage.findIndex(r=>
            r[k]==props[k]
        )
        if(i===-1) {
            console.error("Nothing found")
        }
        return i
    }
    keys(){//util returns the array of keys of the model used
        return Object.keys(this.props)
    }
}

export const models = {}
models.product = {
    iu:'text',
    name:'text',
    price:'number'
}


export const products = new ModelManager(models.product,"Product")


//---quick test---
/*
let productModel = {
    name:'default',
    color:'default'
}
let products = new ModelManager(productModel)
products.createOne({name:"product 1",color:"blue"});
products.createOne({name:"product 2",color:"red"});
let all = products.readAll()
products.updateOneByIndex(all[0].index,{name:"product 0"})
//products.deleteOneByIndex(all[0].index)
console.log(products.readAll())
*/


