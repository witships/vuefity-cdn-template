// ヘッダー
Vue.component("navbar", {
  data() {
    return {
      items: [
        { title: "アカウント編集", href: "#" },
        { title: "ログアウト", href: "#" },
      ],
    };
  },

  template: `
  <v-app-bar app color="primary ">
    <v-app-bar-nav-icon ></v-app-bar-nav-icon>

    <a href="index.html">
      <v-toolbar-title class="text-h4 white--text">ロゴ</v-toolbar-title>
    </a>

    <v-spacer></v-spacer>

    <div class="text-center">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            class="darken-2"
            dark
            v-bind="attrs"
            v-on="on"
          >
            なまえ
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title
              ><a :href="item.href"
                >{{ item.title }}</a
              ></v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-app-bar>
  `,
});

// サイドバー
Vue.component("sidebar", {
  data() {
    return {
      drawer: null,
      links: [
        { name: "トップ", href: "index.html", icon: "mdi-home" },
        { name: "page2", href: "00.html", icon: "mdi-send" },
        { name: "page2", href: "00.html", icon: "mdi-delete" },
      ],
    };
  },

  template: `
<v-navigation-drawer permanent class="side-bar primary">
  <div class="white--text">リンク</div>
  <ul class="pa-0">
    <li v-for="item in links" class="d-flex mb-1">
      <v-icon class="mr-2 white--text">{{item.icon}}</v-icon> 
      <a :href="item.href" class="white--text d-block">
        {{item.name}}
      </a>
    </li>
  </ul>
</v-navigation-drawer>
  `,
});
