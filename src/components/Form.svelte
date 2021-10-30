<script>
  import { getContext } from 'svelte';
  import JsonElement from './JsonElement.svelte';

  const inputErrors = {};
  const inputValues = {};
  const schema = getContext('schema');
  const components = getContext('components');

  function setErrors(inputName, value) {
    inputErrors[inputName] = value;
  }
  function setValue(inputName, value) {
    console.log(value); //  debounce this
    inputValues[inputName] = value;
  }
</script>

<form class="s-form">
  {#each schema.elements as element}
    <svelte:component
      this={components[element.type]?.component}
      {element}
      {setValue}
      {setErrors}
      value={inputValues[element.name]}
      errors={inputErrors[element.name]}
      injectedProps={components[element.type]?.props}
    />
  {/each}

  <svelte:component
    this={components['Button']}
    on:click={() => console.log('dynamic button clicked')}
    type="submit"
  >
    submit
  </svelte:component>
</form>
