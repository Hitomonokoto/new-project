<template>
  <div class="humberger" @click="$emit('close')">
    <ul>
      <nuxt-link to="/">
        <li>
          <i class="fas fa-home fa-lg"></i>
          <p class>Home</p>
        </li>
      </nuxt-link>

      <div>
        <li>
          <i class="fas fa-search fa-lg"></i>
          <p class="mobile-nav_p">Search</p>
        </li>
      </div>

      <!-- <div class="mobile-nav-list">
        <li>
          <i class="fas fa-sign-in-alt fa-lg"></i>
          <myData v-if="$store.state.login.token" @pageInit="pageInit" />
          <banners v-if="!$store.state.login.token" />
        </li>
      </div>-->

      <div class="main-toggle">
        <i class="fas fa-caret-square-down fa-lg" @click="openMenu = !openMenu"></i>
        <transition>
          <ul v-if="openMenu">
            <li>
              <nuxt-link to="/aboutUs">about</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/Q&A">Q & A</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/info">Contact</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#">
                <i class="fab fa-line fa-2x"></i>
              </nuxt-link>
              <div class="space"></div>
              <nuxt-link to="#">
                <i class="fab fa-facebook-square fa-2x"></i>
              </nuxt-link>
            </li>
          </ul>
        </transition>
      </div>
    </ul>
  </div>
</template>

<script>
import banners from "~/components/Banners";
export default {
  components: {
    banners
  },
  data() {
    return {
      openMenu: false
    };
  }
};
</script>

<style scoped>
.humberger {
  background-color: rgb(255, 255, 255);
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  color: black;
  z-index: 999;
  padding: 50px;
}

.humberger ul {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.humberger li {
  font-size: 18px;
  margin-bottom: 30px;
  color: #07242c;
}

.humberger li a {
  color: black;
  color: #07242c;
}
</style>