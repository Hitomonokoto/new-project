<template>
  <main>
    <div class="login_form">
      <div class="logo">
        <img src="~/assets/mainlogo1.png" alt />
      </div>

      <form>
        <input
          id="name"
          name="name"
          type="text"
          size="30"
          placeholder="メールアドレスまたは電話番号"
        />
        <input id="name" name="name" type="text" size="30" placeholder="パスワード" />
        <button class="login_btn">ログイン</button>
      </form>
      <div class="foget_pass">
        <hr />
        <nuxt-link to="/">
          <p class="foget_pass_p">パスワードをお忘れの方</p>
        </nuxt-link>
      </div>
    </div>

    <div class="nomenber_form">
      <p>
        アカウントをお持ちではありませんか？
        <br />
        <br />こちらからマイファームのご案内をさせていただきます。
        <br />ご共感頂き登録していただけると幸いです。
      </p>
      <linkButton cls="type3" linkTo="/myFarm" text="マイファームについて" />
    </div>
  </main>
</template>

<script>
import linkButton from "~/components/LinkButton";

export default {
  components: { linkButton }
};
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.login_form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 50px 0;
  border-radius: 10px;
  box-shadow: 0px 0px 6px 3px #d1d1d1;
}
.logo {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logo > img {
  width: 150px;
  margin-top: 50px;
}

form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
}

input {
  width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #efefef;
  margin: 10px 0;
}
.login_btn {
  border-radius: 5px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #afc0f1;
  color: #ffffff;
  margin: 10px 0;
  padding: 10px 0;
  width: 300px;
}

.foget_pass {
  width: 90%;
}
.foget_pass_p {
  color: #707070;
  padding: 20px 0;
  text-align: center;
}

.nomenber_form {
  width: 80%;
  box-shadow: 0px 0px 6px 3px #d1d1d1;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
}

.nomenber_form > p {
  text-align: center;
  color: #707070;
  padding: 50px 0;
}

.login-nonmember-link {
  display: inline-block;
  color: #6574ff;
}
</style>