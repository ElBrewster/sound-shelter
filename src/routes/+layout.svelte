<script>
  /** @type {import('./$types').LayoutData} */
  import Footer from "$lib/svelte-components/Footer.svelte";
  import Header from "$lib/svelte-components/Header.svelte";
  import "$lib/scss/main.scss";
</script>

<div class="body-layout">
  <Header />
  <main class="flex-fill">
    <slot />
  </main>
  <Footer />
</div>
