
<script>
	import Characteristic from '../L1/Characteristic.svelte';
	import M from '../L1/M.svelte';
    import ObjString from '../ObjString.svelte';
    export let operation
    
</script>


<div>
    <div>{operation.name}</div>
    <div>
        <div>
            <M Mdata={operation.machines}/>
            <M Mdata={operation.methods}/>
            <M Mdata={operation.measurements}/>
            <M Mdata={operation.motherNatures}/>
            <M Mdata={operation.manPowers}/>
            <M Mdata={operation.materials}/>
        </div>
        <div>
            {#if operation.requirements}
            <h4>requirements</h4>
                {#each operation.requirements as op}
                    <div>
                        <Characteristic cData={op}/>
                    </div>
                {/each}
            {/if}
        </div>
    </div>
</div>

<style>
    
    div>div{
        border:2px solid blue;
        padding: 20px;
        display:flex;
    }
    div>div>div{
        border:2px solid orange;
        display:flex;
        flex-wrap:wrap;
        align-content:flex-start;
        gap:10px;
        width: 600px;
    }
    
</style>