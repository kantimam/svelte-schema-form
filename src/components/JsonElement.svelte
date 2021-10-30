<script>
  export let json;
  export let props;
</script>

<svelte:component this={json.component} injectedProps={json.props} {...props} />
