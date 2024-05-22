<script>
    import { managers } from "./CRUD.ts";

    export let entity

    let inputKeys = Object.keys( managers[entity].props )
    let inputTypes = Object.values( managers[entity].props )
    $: options = managers[entity].storage
    
    
    function createHandler(event){
        event.preventDefault()
        let newThing = {}
        inputKeys.forEach((k)=>{
            console.log(event.target.elements[k])
            if(event.target.elements[k].value===undefined){
                newThing[k]=[]   
            }
            else{ 
                newThing[k]=event.target.elements[k].value
            }
        })
        let savedThing = managers[entity].createOne(newThing);
        console.log(savedThing)
        event.target.reset();
    } 
</script>


<div id="input-form">
    <form on:submit={createHandler}> 
        {#each inputKeys as ikey, i}
            {#if inputTypes[i].length>0}
                <input name={ikey} type={inputTypes[i]} placeholder={ikey}>
                <br>
            {:else}
                {#if options.length}
                    <select name="" id="">
                        {#each options as option}
                            <option value={option}>
                                {option}
                            </option>
                        {/each}  
                    </select>
                {:else}
                    <input placeholder={ikey+' not found'} disabled=true>
                {/if}
                <br>
            {/if}
        {/each}
        <button type="submit">submit</button>
    </form>
</div>