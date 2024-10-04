import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import cangkurenyuan from '@/views/modules/cangkurenyuan/list'
    import dictionary from '@/views/modules/dictionary/list'
    import gonggao from '@/views/modules/gonggao/list'
    import gongyingshang from '@/views/modules/gongyingshang/list'
    import kehu from '@/views/modules/kehu/list'
    import shangpin from '@/views/modules/shangpin/list'
    import shangpincuruku from '@/views/modules/shangpincuruku/list'
    import shangpinxiaoshou from '@/views/modules/shangpinxiaoshou/list'
    import xiaoshourenyuan from '@/views/modules/xiaoshourenyuan/list'
    import xiaoshoutuihuo from '@/views/modules/xiaoshoutuihuo/list'
    import dictionaryCangku from '@/views/modules/dictionaryCangku/list'
    import dictionaryGonggao from '@/views/modules/dictionaryGonggao/list'
    import dictionaryGongyingshang from '@/views/modules/dictionaryGongyingshang/list'
    import dictionaryGongyingshangXinyongdengji from '@/views/modules/dictionaryGongyingshangXinyongdengji/list'
    import dictionaryJieqing from '@/views/modules/dictionaryJieqing/list'
    import dictionaryLaiyuan from '@/views/modules/dictionaryLaiyuan/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryShangpin from '@/views/modules/dictionaryShangpin/list'
    import dictionaryShangpincuruku from '@/views/modules/dictionaryShangpincuruku/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryCangku',
        name: '仓库',
        component: dictionaryCangku
    }
    ,{
        path: '/dictionaryGonggao',
        name: '公告类型',
        component: dictionaryGonggao
    }
    ,{
        path: '/dictionaryGongyingshang',
        name: '供应商类型',
        component: dictionaryGongyingshang
    }
    ,{
        path: '/dictionaryGongyingshangXinyongdengji',
        name: '供应商信用等级类型',
        component: dictionaryGongyingshangXinyongdengji
    }
    ,{
        path: '/dictionaryJieqing',
        name: '钱款结清',
        component: dictionaryJieqing
    }
    ,{
        path: '/dictionaryLaiyuan',
        name: '客户来源',
        component: dictionaryLaiyuan
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShangpin',
        name: '商品类型',
        component: dictionaryShangpin
    }
    ,{
        path: '/dictionaryShangpincuruku',
        name: '类型',
        component: dictionaryShangpincuruku
    }


    ,{
        path: '/cangkurenyuan',
        name: '仓库人员',
        component: cangkurenyuan
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/gonggao',
        name: '公告',
        component: gonggao
      }
    ,{
        path: '/gongyingshang',
        name: '供应商信息',
        component: gongyingshang
      }
    ,{
        path: '/kehu',
        name: '客户',
        component: kehu
      }
    ,{
        path: '/shangpin',
        name: '商品',
        component: shangpin
      }
    ,{
        path: '/shangpincuruku',
        name: '商品出入库',
        component: shangpincuruku
      }
    ,{
        path: '/shangpinxiaoshou',
        name: '商品销售',
        component: shangpinxiaoshou
      }
    ,{
        path: '/xiaoshourenyuan',
        name: '销售人员',
        component: xiaoshourenyuan
      }
    ,{
        path: '/xiaoshoutuihuo',
        name: '商品退货',
        component: xiaoshoutuihuo
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
