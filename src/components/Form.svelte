<script>
  import { getContext } from 'svelte';
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';

  setContext('formModelValues', writable({ a: 13 }));
  setContext('formModelErrors', writable({ a: 13 }));
  const schema = getContext('schema');
  const components = getContext('components');
</script>

<form class="s-form">
  {#each schema.elements as element}
    <svelte:component this={components[element.type]} {element} />
  {/each}

  <svelte:component
    this={components['Button']}
    on:click={() => console.log('dynamic button clicked')}
    type="submit"
  >
    submit
  </svelte:component>
</form>
