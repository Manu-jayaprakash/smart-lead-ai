<template>
  <div class="navigation-bar-trail-validity flex align-center">
    <img src="/src/assets/images/star.svg" alt="star" class="mr-sm" />

    Trail expires in 12 days
    <div class="overlay"></div>
  </div>
</template>
<style lang="scss" scoped>
.navigation-bar-trail-validity {
  color: #fff;
  position: relative;
  padding: 0.375rem 0.75rem;
  font-size: 0.75rem;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  opacity: 0.2;
  border-radius: 1.875rem;
}
</style>
