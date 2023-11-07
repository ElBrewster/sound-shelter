<script>
  /** @type {import('./$types').LayoutData} */
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import "$lib/scss/main.scss";
</script>

<div class="body-layout">
  <Header />
  <main class="flex-fill">
    <slot />
  </main>
  <Footer />
</div>
