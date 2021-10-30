<script>
  import { setContext } from 'svelte';

  export let components = {};
  export let schema = {};
  export let callbacks = {};

  setContext('components', components);
  setContext('schema', schema);
  setContext('callbacks', callbacks);
</script>

<slot />
