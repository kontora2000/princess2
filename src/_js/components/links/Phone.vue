<template>
    <span class="phone-block fixed-block" v-hide>
          <a class="phone-number-link" href="tel:+78612153000"><slot></slot></a>
    </span>
</template>

<script>
export default {
  name: 'phone',
};
</script>
