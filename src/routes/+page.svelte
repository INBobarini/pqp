<header>
    <h2>OT: 1965-FE</h2>
    <h2>PQP: 1965-01</h2>
    <h2>Product design: 1965-A1</h2>
</header>

Plan: <select bind:value={selectedPlan}>
    {#each plans as plan, i}
    <option>{plan}</option>
    {/each}
</select>

Product: <select bind:value={selectedProduct}>
    {#each products as product, i}
    <option>{product}</option>
    {/each}
</select>


<i class="bi bi-unlock-fill"></i>
<i class="bi bi-lock-fill"></i>
<button>Add current req to product</button>
<button>Add current op to plan</button>
<div>
    {#each Object.keys(requirements) as reqKey, i}
        <label for="{reqKey}">{reqKey}:</label>
        <input type="text" id ={reqKey} value={requirements[reqKey]} name="{reqKey}">
        <button  on:click={() => updateValue(reqKey, document.getElementById(reqKey).value)}>Upd</button>
        <br>
    {/each}
</div>
<div>
    {#each reqValues as reqValue, i}
        <p>{reqValue}</p>
    {/each}
</div>


<script>
    function updateValue(reqKey, reqValue){
        console.log(reqValue)
        requirements[reqKey] = reqValue
        console.log(requirements)
    }
    let requirements = {
        "Name": "",
        "Requirement_Source": "",
        "Status":"",
        "ExpectedValue": "",
        "ToleranceUp": "",
        "ToleranceDown": ""
    }
    $:reqValues = Object.values(requirements)

    let operations = {

    }
    let plans = ["1","2"]
    let selectedPlan = null
    let products = ["1345","2223"]
    let selectedProduct = null
     
</script>
<style>
    header{
        display:flex;
    }
</style>