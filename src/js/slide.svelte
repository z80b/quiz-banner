<div class="quiz__slide">
  <div class="quiz__slide-title">Aaaaaa</div>
  <div class="quiz__slide-body">
    <div class="quiz__product"></div>
    <div class="quiz__product"></div>
  </div>
</div>

<script>
import { onMount } from 'svelte';
import axios from 'axios';

export let sku1 = '';
export let sku2 = '';

onMount(() => {
  axios.post('/blackfriday/preparequestions/', { sku1, sku2 })
    .then((res) => {
      console.log(res);
    });
  console.log('Component mounted');
});
</script>