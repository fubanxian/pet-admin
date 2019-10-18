<template>
  <div class="layout">
    <Layout style="height: 100vh">
      <span class="logo">后台管理系统</span>
      <Sider breakpoint="md" collapsible :collapsed-width="78" style="padding-top: 5vh" v-model="isCollapsed">
        <!--        <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">-->
        <!--          <MenuItem name="1-1">-->
        <!--            <Icon type="ios-navigate"></Icon>-->
        <!--            <span>Option 1</span>-->
        <!--          </MenuItem>-->
        <!--          <MenuItem name="1-2">-->
        <!--            <Icon type="ios-search"></Icon>-->
        <!--            <span>Option 2</span>-->
        <!--          </MenuItem>-->
        <!--          <MenuItem name="1-3">-->
        <!--            <Icon type="ios-settings"></Icon>-->
        <!--            <span>Option 3</span>-->
        <!--          </MenuItem>-->
        <!--        </Menu>-->
        <!--        this.menulist[0].children[2].displayName-->
        <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
                <template v-for="(item,index) in menuList">
                  <Submenu :name="index">
                    <template slot="title">
                      <Icon :type="item.icon"></Icon>
                      {{item.displayName}}
                    </template>
                    <template v-for="(children,i) in item.children">
                      <MenuItem :name="index+'-'+i++ ">{{children.displayName}}</MenuItem>
                    </template>

      <!--              <MenuItem name="1-2">Option 2</MenuItem>-->
      <!--              <MenuItem name="1-3">Option 3</MenuItem>-->
                  </Submenu>
                </template>

          <!--       <Submenu name="1">
                   <template slot="title">
                     <Icon type="md-construct"></Icon>
                     权限管理
                   </template>
                   <MenuItem name="1-1" to="/hh"><Icon type="" />Option 1</MenuItem>
                   <MenuItem name="1-2">Option 2</MenuItem>
                   <MenuItem name="1-3">Option 3</MenuItem>
                 </Submenu>-->
          <!--   <Submenu name="2">
               <template slot="title">
                 <Icon type="ios-keypad"></Icon>
                 用户管理
               </template>
               <MenuItem name="2-1">Option 1</MenuItem>
               <MenuItem name="2-2">Option 2</MenuItem>
             </Submenu>
             <Submenu name="3">
               <template slot="title">
                 <Icon type="ios-analytics"></Icon>
                 内容管理
               </template>
               <MenuItem name="3-1">Option 1</MenuItem>
               <MenuItem name="3-2">Option 2</MenuItem>
             </Submenu>

             <Submenu name="4">
               <template slot="title">
                 <Icon type="ios-analytics"></Icon>
                 评论管理
               </template>
               <MenuItem name="4-1">Option 1</MenuItem>
               <MenuItem name="4-2">Option 2</MenuItem>
             </Submenu>-->
        </Menu>

        <div slot="trigger"></div>
      </Sider>

      <Layout>
        <Header class="layout-header-bar">
          <template>
            显示头部内容
          </template>
        </Header>
        <Content :style="{margin: '20px', background: '#fff', minHeight: '220px'}">
          内容
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
    import menulistjson from './menulist'

    export default {
        name: 'home',
        data() {
            return {
                isCollapsed: false,
                logo: true,
                menuList: menulistjson
            };
        },
        computed: {
            menuitemClasses: function () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
        methods: {
            setList() {
                // if (!user.modulesMap) {
                //     return;
                // }
                //深度克隆
                let list = JSON.parse(JSON.stringify(this.menuList));
                // let newMenuList = [];
                // console.log(menuList[0]);
                this.menuList = list;
            }
        }
        ,
        mounted() {
            this.setList();
            // console.log(this.menuList);
        }
    }
</script>
<style scoped>
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .layout-header-bar {
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
  }

  .menu-item span {
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }

  .menu-item i {
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }

  .collapsed-menu span {
    width: 0px;
    transition: width .2s ease;
  }

  .collapsed-menu i {
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }

  .logo {
    position: absolute;
    left: 40px;
    color: red;
    line-height: 5vh;
    font-size: 18px;
    z-index: 2;
  }

  @media all and (max-width: 770px) {
    .logo {
      color: aqua;
      display: none;
    }
  }
</style>
