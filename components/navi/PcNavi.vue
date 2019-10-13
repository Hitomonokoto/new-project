<template>
  <div class="nav_sticky">
    <div class="nav_logo_area">
      <nuxt-link to="/">
        <img class="nav_logo_img" src="~/assets/mainlogo2.png" alt />
      </nuxt-link>
    </div>
    <div class="nav_list">
      <div class="nav_single" @click="closeSubMenu">
        <nuxt-link to="/">
          <p>ホーム</p>
        </nuxt-link>
      </div>
      <div class="nav_single" @click="closeSubMenu">
        <nuxt-link to="/products">
          <p>体験</p>
        </nuxt-link>
      </div>
      <div class="nav_single" @click="closeSubMenu">
        <nuxt-link to="/farmers">
          <p>創り手</p>
        </nuxt-link>
      </div>
      <div
        class="nav_single"
        v-if="!$store.state.login.token"
        @click="closeSubMenu"
      >
        <nuxt-link to="/login">
          <p>ログイン</p>
        </nuxt-link>
      </div>
      <div
        class="nav_single"
        v-if="$store.state.login.token"
        @click="closeSubMenu"
      >
        <nuxt-link to="/user">
          <p>マイページ</p>
        </nuxt-link>
      </div>
      <div class="nav_single" @click="toggleSubMenu">
        <p>その他</p>
      </div>
    </div>
    <div class="sub_menu" v-show="isSubMenu">
      <div class="sub_single" @click="closeSubMenu">
        <nuxt-link to="/aboutMyFarm">
          <p>マイファームとは</p>
        </nuxt-link>
      </div>
      <div class="sub_single" @click="closeSubMenu">
        <nuxt-link to="/aboutUs">
          <p>私たちについて</p>
        </nuxt-link>
      </div>
      <div class="sub_single" @click="closeSubMenu">
        <nuxt-link to="/info">
          <p>コンタクト</p>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSubMenu: false
    };
  },
  methods: {
    toggleSubMenu() {
      if (this.isSubMenu) {
        this.isSubMenu = false;
      } else {
        this.isSubMenu = true;
      }
    },
    closeSubMenu() {
      this.isSubMenu = false;
    }
  }
};
</script>

<style scoped>
.nav_sticky {
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav_logo_img {
  height: 80px;
  display: block;
  margin: 30px 0 60px 0;
}
.nav_list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
p {
  color: black;
  margin-bottom: 40px;
}
.nav_single {
  cursor: pointer;
}
.sub_menu {
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media screen and (max-width: 960px) {
  .nav_sticky {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f8f8f8;
  }
  .nav_list {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-shadow: 0px 0px 3px #797979;
  }
  .nav_logo_area {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
  }
  .nav_logo_img {
    height: 60px;
    margin: 20px 0;
  }
  .nav_single {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 50px;
    cursor: pointer;
  }

  .sub_menu {
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .sub_single {
    width: 30%;
  }
  p {
    color: black;
    margin: 0px;
    text-align: center;
  }
}
</style>