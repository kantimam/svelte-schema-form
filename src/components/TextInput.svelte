<script>
  import { TextField } from 'smelte';
  import { getContext } from 'svelte';
  export let element;

  let formContextStore = getContext('formModelValues');
  function setValue(value) {
    console.log('was called');
    formContextStore.update((s) => ({
      ...s,
      [element.name]: value,
    }));
  }
  console.log(formContextStore);
</script>

<p>
  {$formContextStore[element.name]}
</p>
<TextField
  name={element.name}
  id={element.identifier}
  label="Test label"
  outlined
  hint="Test hint"
  on:input={(e) => {
    setValue(e.target.value);
  }}
/>
