<script>
  import { TextField } from 'smelte';
  export let element;
  export let injectedProps;
  export let value;
  export let errors;
  export let setValue;
  export let setErrors;
</script>

<TextField
  name={element.name}
  id={element.identifier}
  {value}
  label="Test label"
  outlined
  hint="Test hint"
  error={errors}
  {...injectedProps}
  on:input={(e) => {
    setValue(e.target.name, e.target.value);
  }}
  on:blur={(e) => {
    setErrors(e.target.name, e.target.value);
  }}
/>
