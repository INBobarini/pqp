<script>
	import ObjString from "./ObjString.svelte";

    export let Mdata
    
</script>

{#if Mdata}
    <ObjString objInput={Mdata}/>
{:else}
    No M 
{/if}
