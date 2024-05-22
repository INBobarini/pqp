<script>
	import ObjString from "../ObjString.svelte";

    export let Mdata

    const Mtypes = {}
    Mtypes.Machine = {}
    Mtypes.Mothernature = {}
    Mtypes.Method = {}
    Mtypes.Manpower = {}
    Mtypes.Material = {}
    Mtypes.Measurement = {}
    
</script>

<div>
    {#if Mdata}
        {#each Mdata as data, i}
            {i}<ObjString objInput={data}/>
        {/each}
    {:else}
        No M 
    {/if}
</div>

<style>
    div{
        border:1px dotted orange;
        margin:10px;
    }
</style>