<script>
    import ObjString from '../lib/ObjString.svelte';
import Products from '../lib/ProductLoader.svelte'
    $:products = {p1:"product1"}
    $:requirements = []
</script>
<div class="container">
    <p>Enter the object, pairs "property-name": "input-type" </p>
    <form>
        <input name="label" type="text" placeholder="product, plan, document or requirement">
        <input name="level" type="number" placeholder="3, 2 or 1">
        <button> <i class="bi bi-plus-circle-fill"></i> </button>
        <br>
        <textarea name="props" type="" placeholder='productId: "LT-1397", description:"A clear description", ...'></textarea>
    </form>
    <Products/>
    <ObjString objInput={products}/>
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
    }
</style>




