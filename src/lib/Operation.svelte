
<script>
    import ObjString from './ObjString.svelte';
    export let operation
    import M from './M.svelte';
</script>

<M/>
{#if operation.machines}
    <M Mdata={operation.machines}/> 
{:else}
    <p>No machines to show</p>
{/if}

{#if operation.methods}
    <M Mdata={operation.methods}/> 
{:else}
    <p>No methods to show</p>
{/if}

{#if operation.motherNature}
    <M Mdata={operation.motherNature}/> 
{:else}
    <p>No motherNature to show</p>
{/if}

{#if operation.manPower}
    <M Mdata={operation.manPower}/> 
{:else}
    <p>No Manpower to show</p>
{/if}

{#if operation.measurements}
    <M Mdata={operation.measurements}/> 
{:else}
    <p>No measurgiements to show</p>
{/if}
