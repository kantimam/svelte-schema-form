<script>
  import { setContext } from 'svelte';

  export let schema;

  setContext('schema', schema);
</script>

<slot />
