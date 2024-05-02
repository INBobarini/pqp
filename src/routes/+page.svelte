<script>
    import Products from '../lib/Products.svelte'
    $:products = []
    $:requirements = []
</script>
<style>
textarea{
    width:25vw;
    height:25vh;
}
input{
    width:15vw;
}
</style>



<p>Enter the object, pairs "property-name": "input-type" </p>
<form>
    <input name="label" type="text" placeholder="product, plan, document or requirement">
    <button> <i class="bi bi-plus-circle-fill"></i> </button>
    <br>
    <textarea name="props" type="" placeholder='productId: "LT-1397", description:"A clear description", ...'></textarea>
    
</form>

<Products/>
<br>
