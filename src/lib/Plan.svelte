<script>
    import ObjString from "./ObjString.svelte";
    export let plan

    //import Operation from '../lib/Operation.svelte';
    console.log(plan.operations)
</script>

<div>
    {#each plan.operations as operation, i}
        <div>
            <ObjString objInput={operation}/>
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
