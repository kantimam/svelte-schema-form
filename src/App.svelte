<script lang="ts">
  import 'smelte/src/tailwind.css';
  import { setContext } from 'svelte';
  import Form from './components/Form.svelte';

  export let schema;
  export let components;
  export let callbacks;
  setContext('components', components);
  setContext('schema', schema);
  setContext('callbacks', callbacks);
</script>

<Form />
