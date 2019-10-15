<script>
import Slide from '@js/slide.svelte';

export let skus1 = '';
export let skus2 = '';
export let skus3 = '';

$: _skus1 = skus1.split(',');
$: _skus2 = skus2.split(',');
$: _skus3 = skus3.split(',');
</script>

<div class="lp-quiz-banner">
  <p>{ skus1 }</p>
  <Slide sku1={_skus1[0]} sku2={_skus1[1]}/>
  <Slide sku1={_skus2[0]} sku2={_skus2[1]}/>
  <Slide sku1={_skus3[0]} sku2={_skus3[1]}/>
</div>