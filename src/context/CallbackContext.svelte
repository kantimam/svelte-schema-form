<script>
  import { setContext } from 'svelte';

  export let components;

  setContext('components', components);
</script>

<slot />
