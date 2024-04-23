<header>
    <h2>OT: 1965-FE</h2>
    <h2>PQP: 1965-01</h2>
    <h2>Product design: 1965-A1</h2>
</header>

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
        
</script>
<style>
    header{
        display:flex;
    }
</style>