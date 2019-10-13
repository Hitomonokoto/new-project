<template>
  <div class="mobile_navi">
    <div class="box_1">
      <div class="nav_logo_area">
        <nuxt-link to="/">
          <img class="nav_logo_img" src="~/assets/mainlogo2.png" alt />
        </nuxt-link>
      </div>
      <div class="list">
        <div class="nav_single" @click="emitClick">
          <nuxt-link to="/">
            <p>ホーム</p>
          </nuxt-link>
        </div>
        <div class="nav_single" @click="emitClick">
          <nuxt-link to="/products">
            <p>体験</p>
          </nuxt-link>
        </div>
        <div class="nav_single" @click="emitClick">
          <nuxt-link to="/farmers">
            <p>創り手</p>
          </nuxt-link>
        </div>
        <div
          class="nav_single"
          v-if="!$store.state.login.token"
          @click="emitClick"
        >
          <nuxt-link to="/login">
            <p>ログイン</p>
          </nuxt-link>
        </div>
        <div
          class="nav_single"
          v-if="$store.state.login.token"
          @click="emitClick"
        >
          <nuxt-link to="/user">
            <p>マイページ</p>
          </nuxt-link>
        </div>
        <div class="nav_single" @click="toggleSubMenu">
          <p>その他</p>
        </div>
        <div class="sub_menu" v-show="isSubMenu">
          <div class="sub_single" @click="emitClick">
            <nuxt-link to="/aboutMyFarm">
              <p>マイファームとは</p>
            </nuxt-link>
          </div>
          <div class="sub_single" @click="emitClick">
            <nuxt-link to="/aboutUs">
              <p>私たちについて</p>
            </nuxt-link>
          </div>
          <div class="sub_single" @click="emitClick">
            <nuxt-link to="/info">
              <p>コンタクト</p>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="box_2">
      <div class="close" @click="emitClick">閉じる</div>
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
    emitClick() {
      this.$emit("closeNavi");
    },
    toggleSubMenu() {
      if (this.isSubMenu) {
        this.isSubMenu = false;
      } else {
        this.isSubMenu = true;
      }
    }
  }
};
</script>


<style scoped>
.mobile_navi {
  background-color: rgba(245, 245, 245, 0.9);
  box-shadow: 0px 0px 3px #797979;
  width: 190px;
  height: 100%;
  position: fixed;
  top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.box_1 {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.nav_logo_img {
  width: 80px;
  margin: 20px 0 40px 0;
}
.list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
p {
  color: black;
  margin-bottom: 20px;
}
.nav_single {
  cursor: pointer;
}
.sub_menu {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.box_2 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}
</style>