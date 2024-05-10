<script>
	import Operation from "./Operation.svelte";
    
    export let plan
</script>

<div>
    {#each plan.operations as operation, i}
        <div>
            <Operation operation={operation}/>

        </div>
        
    {/each}
</div>

<style>
    div{
        background-color: gray;
    }
    div>div{
        border: 3px solid green;
    }
</style>
