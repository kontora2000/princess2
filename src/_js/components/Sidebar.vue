<template>
  <nav class="site-menu" id="sidebarMenu" style="visibility: none">
    <div class="menu-icon">
      <div class="menu-icon-line first-line"></div>
      <div class="menu-icon-line second-line"></div>
    </div>
    <ul class="site-menu-wrapper">
      <li>
        <a class="nav-link active" href="#" @click.prevent="loadCategory('kitchens')">Кухни</a>
      </li>
      <li>
        <a class="nav-link" href="#" @click.prevent="loadCategory('wardrobes')">Шкафы</a>
      </li>
      <li>
        <a class="nav-link" href="#" @click.prevent="loadCategory('hallways')">Прихожие</a>
      </li>
      <li>
        <a class="nav-link" href="#" @click.prevent="loadCategory('bathrooms')">Ванные</a>
      </li>
      <li>
        <a class="nav-link" href="#" @click.prevent="loadCategory('livingrooms')">Гостиные</a>
      </li>
      <li>
        <a class="nav-link" href="#" @click.prevent="loadCategory('cabinets')">Кабинеты</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import loader from '../mixins/loaderMixin';

export default {
  mixins: [loader],
};
</script>
