<script>
	import Operation from "../L2/Operation.svelte";
    
    export let plan
</script>

<div>
    <h3>{plan.name}</h3>
    {#each plan.operations as operation, i}
        
            <Operation operation={operation}/>
        
        
    {/each}
</div>

<style>
    
    div{
        border: 3px dotted red;
        padding: 3px;
        display:flex;
        flex-direction:column;
    }
</style>
