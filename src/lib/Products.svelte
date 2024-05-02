<script>
	import {products, productModel} from  './CRUD.js'
    import { onMount } from 'svelte'
    let pStorage = []
    let inputsNamesAndTypes = Object.entries(productModel)
    onMount(() => {
        pStorage = products.storage
    })
    $: pStorage = products.storage
    
    function createProduct(event){
        event.preventDefault(); // Prevent the form from submitting normally
        
        // Get input values from the form
        const name = event.target.elements.name.value;
        const color = event.target.elements.color.value;
        
        // Create a new product with the input values
        const newProduct = {
            name: name,
            color: color
        };

        // Add the new product to the products storage
        let savedProduct = products.createOne(newProduct);
        
        event.target.reset();
        pStorage = products.storage
    }
</script>


Enter a new product
<br>
<form on:submit={createProduct}>
    {#each inputsNamesAndTypes as NT}
       <input name={NT[0]} type={NT[1]} placeholder={NT[0]}> 
       <br>
    {/each}
    <button type="submit" >Submit</button>
</form>
{#if pStorage.length}
    {#each pStorage as product}
    <ul>
    <li>{product.name}</li>
    <li>{product.color}</li> 
    </ul>
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
