<script>
	import Viewer from '../lib/L0/StoreViewer.svelte';
	import SelectableList from './../lib/L0/SelectableList.svelte';
    import {onMount} from 'svelte'
    import { managers, models } from '../lib/CRUD.ts';
	import ObjString from './../lib/ObjString.svelte';
    import Products from '../lib/L2/ProductLoader.svelte'
    import Plan from '../lib/L3/Plan.svelte';
	import InputForm from '../lib/InputForm.svelte';
    $:products = {p1:"product1"}
    let plan = {}
    plan.name = "Plan pepito"
    plan.product = {id:"3erfegh443"}
    plan.operations = [
        {
            id:"afe4533",
            name:"op1",
            description:"operation1"
        },{
            id:"afettee3",
            name:"op2",
            description:"operation2",
            requirements:[
                {
                    type:"diameter",
                    nominalValue:50,
                    limitPlus: 0.03,
                    limitNeg: 0.05,
                    unit:"mm"
                }
            ],
            machines: [
                {
                    name:'er3r3',
                    model:'g3mgi23',
                }
            ],
            methods:[
                {
                procedureName:"efefefefe",
                version:"fefere3"
                }
            ],
            measurements:[
                {
                    description:"i saw it",
                    type:"inspection",
                    personnel:"jack black"
                },
                {
                    description:"review point",
                    type:"monitoring",
                    personnel:"jack black"
                }
            ],
            motherNatures:[{
                residues:[],
                conditions:[],
            }],
            materials:[{
                consumables:[]
            }],
            manPowers:[
                {
                name:"jack"
                }
            ],


        }
    ]
    
    let options = Object.keys(managers)
    let selected = {}
    selected.form = options[1]
    selected.assignFather = options[0]
    selected.assignChild = options[1]
    let storage = {}
    $: storage.father = managers[selected.assignFather].storage 
    $: storage.child = managers[selected.assignChild].storage 
    
    
    
    
</script>
<div class="container">
    <!-- <div>
        <p>Enter the object, pairs "property-name": "input-type" </p>
        <form>
            <input name="label" type="text" placeholder="product, plan, document or requirement">
            <input name="level" type="number" placeholder="3, 2 or 1">
            <button> <i class="bi bi-plus-circle-fill"></i> </button>
            <br>
            <textarea name="props" type="" placeholder='productId: "LT-1397", description:"A clear description", ...'></textarea>
        </form>
    </div> -->
    <div>
        <div>
            <SelectableList bind:selected={selected.form} opts={options}/>
            {#key selected.form}
                <InputForm bind:entity={selected.form}/>
            {/key}
        </div>
        <div>
            Assign
            <SelectableList bind:selected={selected.assignFather} opts={options}/>
            to
            <SelectableList bind:selected={selected.assignChild} opts={options}/>
            <br>
            <SelectableList bind:selected={selected.assignFather} opts={storage.father}/>
            to
            <SelectableList bind:selected={selected.assignChild} opts={storage.child}/>
            
            
        </div>
        
        <div>
            
        </div>
    </div>    
    <Plan plan = {plan}/>
</div>
<ObjString objInput={plan}/>


<style>


    .container{
        border: 4px solid black;
        display:flex;
        flex-direction: column;
    }
    .container>div{
        border: 2px solid green;
        display:flex; 
    }
    
</style>




