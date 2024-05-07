<script>
    export let objInput
    let testObj = {
    l1a:{
        l2a: {
            l3a:"l3a"
        },
        l2b: {
            l3b:"l3b",
            l3c:"l3c"
        },
        l2c:"l2c" 
    },
    l1b:"l1b"
};

console.log(testObj);

function stringifyObject(obj, depth = 0) {
    let str = '';
    const keys = Object.keys(obj);

    keys.forEach(key => {
        const value = obj[key];
        if (typeof value === 'object') {
            str += `${' '.repeat(depth * 4)}${key}: {\n${stringifyObject(value, depth + 1)}${' '.repeat(depth * 4)}}\n`;
        } else {
            str += `${' '.repeat(depth * 4)}${key}: "${value}"\n`;
        }
    });

    return str;
}
let str = stringifyObject(objInput||testObj);
console.log(str);
</script>
<pre>{str}</pre>

