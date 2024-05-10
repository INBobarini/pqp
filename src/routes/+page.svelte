<script>
    import ObjString from '../lib/ObjString.svelte';
    import Products from '../lib/ProductLoader.svelte'
    import Plan from '../lib/Plan.svelte';
    $:products = {p1:"product1"}
    let plan = {}
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
                }
            ],
            motherNature:[{
                residues:[],
                conditions:[],
            }],
            materials:[{
                consumables:[]
            }],
            manPower:[
                {
                name:"jack"
                }
            ],


        }
    ]
    
    $:requirements = []
</script>
<div class="container">
    <div>
        <p>Enter the object, pairs "property-name": "input-type" </p>
        <form>
            <input name="label" type="text" placeholder="product, plan, document or requirement">
            <input name="level" type="number" placeholder="3, 2 or 1">
            <button> <i class="bi bi-plus-circle-fill"></i> </button>
            <br>
            <textarea name="props" type="" placeholder='productId: "LT-1397", description:"A clear description", ...'></textarea>
        </form>
    </div>
    <div>
        <Products/>
        
        <Plan plan = {plan}/>
    </div>
</div>

<style>
    textarea{
        width:25vw;
        height:25vh;
    }
    input{
        width:15vw;
    }
    .container{
        border: 3px solid red;
        display:flex;
    }

    
</style>




