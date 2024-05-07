<script>
	import {products} from  './CRUD.js'
    
    let pStorage = []
    let inputsNamesAndTypes = Object.entries(products.props)
    let productKeys = Object.keys(products.props)
    
    $: pStorage = products.storage
    
    function createHandler(event){
        event.preventDefault(); // Prevent the form from submitting normally
        let newProduct = {} 
        productKeys.forEach((k)=>newProduct[k]=event.target.elements[k].value)
        let savedProduct = products.createOne(newProduct);
        console.log(savedProduct)
        event.target.reset();
        pStorage = products.storage
    }
</script>

<div class="container">
    Enter a new {products.label}
    <br>
    <form on:submit={createHandler}>
        {#each inputsNamesAndTypes as NT}
        <input name={NT[0]} type={NT[1]} placeholder={NT[0]}> 
        <br>
        {/each}
        <button type="submit" >Submit</button>
    </form>
    {#if pStorage.length}
        {#each pStorage as product}
            {#each productKeys as pK} 
            <p>
                {pK}:{product[pK]}
            </p>
            {/each}
        {/each}
    {/if}
    <i class="bi bi-plus-circle-fill"></i>
    <i class="bi bi-x-circle-fill"></i>


    <br>
    <i class="bi bi-file-earmark-plus-fill"></i>
    <i class="bi bi-pencil-square"></i>
    <i class="bi bi-eye"></i>
    <i class="bi bi-trash-fill"></i>

    <br>
    <i class="bi bi-clipboard2-plus-fill"></i>
</div>

<style>
    .container{
        border: 1px solid blue;
    }
</style>
