<div class="quiz__slide">
  <div class="quiz__slide-title">Aaaaaa</div>
  <div class="quiz__slide-body">
    <div class="quiz__product" data-sku={sku1}>
      {#if products && products[sku1] }
        <img
          src="//a.lmcdn.ru/pi/img389x562{products[sku1].images[0]}"
          class="quiz__product-img"
          alt="{sku1}"/>
      {/if}
    </div>
    <div class="quiz__product" data-sku={sku2}>
      {#if products && products[sku2] }
        <img
          src="//a.lmcdn.ru/pi/img389x562{products[sku2].images[0]}"
          class="quiz__product-img"
          alt="{sku2}"/>
      {/if}
    </div>
  </div>
</div>

<script>
import { onMount } from 'svelte';
import axios from 'axios';

export let sku1 = '';
export let sku2 = '';

let products = null;

onMount(() => {
  axios.post('/blackfriday/preparequestions/', { sku1, sku2 })
    .then((res) => {
      products = res.data.products;
    });
  console.log('Component mounted');
});
</script>