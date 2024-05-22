<script>
    export let opts
    export let selected
</script>

<select bind:value={selected}>
    {#each opts as opt}
        <option value={opt}>
            {opt}
        </option>
    {/each}
</select>
