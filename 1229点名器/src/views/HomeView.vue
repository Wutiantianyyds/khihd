<template>
  <div class="box">
    <h1 style="text-align: center; color: pink">班级点名器</h1>
    <div class="list">
      <div class="name" v-for="(item, index) in list" :key="index">
        {{ item.name }}
      </div>
    </div>
    <ul>
      <li @click="onecall">单人点名</li>
      <li @click="twocall">双人点名</li>
      <li @click="boycall">男生点名</li>
      <li @click="girlcall">女生点名</li>
    </ul>
    <div class="feiw">天选大冤种:{{ currentList }}</div>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
export default {
  setup(props, ctx) {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const data = reactive({
      list: [
        {
          name: "吴倩",
          id: 0,
        },
        {
          name: "瑣儿",
          id: 0,
        },
        {
          name: "张立",
          id: 1,
        },
        {
          name: "肖战",
          id: 1,
        },
        {
          name: "王一博",
          id: 1,
        },
        {
          name: "王源",
          id: 1,
        },
        {
          name: "张云龙",
          id: 1,
        },
        {
          name: "全智贤",
          id: 0,
        },
        {
          name: "杨蓉",
          id: 0,
        },
        {
          name: "曾黎",
          id: 0,
        },
        {
          name: "秦岚",
          id: 0,
        },
        {
          name: "张天爱",
          id: 0,
        },
        {
          name: "胡一天",
          id: 1,
        },
        {
          name: "舒淇",
          id: 0,
        },
        {
          name: "刘亦菲",
          id: 0,
        },
      ],
      flag: false,
      // 被点中的同学
      currentList: "",
      //拷贝一个新数组
      coplaylist: [],
      // 被点中的学生索引
      current: "",
      // 控制按钮被点击多次导致开启多个定时器
      time: null,
      num: 0,
    });
    /***
     *单人点名
     ***/
    const onecall = () => {
      if (data.time == null) {
        data.time = setInterval(() => {
          // 解构赋值新数组
          data.coplaylist = [...data.list];
          // 生成随机数，生成的数字根据name的长度决定
          var sum = Math.floor(Math.random() * data.coplaylist.length);
          data.num++;
          data.currentList = data.coplaylist[sum].name;
          if (data.num == 20) {
            clearInterval(data.time);
            data.time = null;
            data.num = 0;
            // 把选中的同学添加到新数组
            data.currentList = data.coplaylist[sum].name;
            data.coplaylist.splice(sum, 1);
          }
        }, 100);
      }
    };
    /***
     *双人点名
     ***/
    const twocall = () => {
      if (data.time == null) {
        data.time = setInterval(() => {
          // 解构赋值新数组
          data.coplaylist = [...data.list];
          var num1 = Math.floor(Math.random() * data.coplaylist.length);
          var num2 = Math.floor(Math.random() * data.coplaylist.length);
          data.num++;
          data.currentList =
            data.coplaylist[num1].name + "," + data.coplaylist[num2].name;
          if (data.num == 20) {
            clearInterval(data.time);
            data.time = null;
            data.num = 0;
            data.currentList =
              data.coplaylist[num1].name + "," + data.coplaylist[num2].name;
            data.coplaylist.splice(num1, 1);
            data.coplaylist.splice(num2, 1);
          }
        }, 100);
      }
    };
    /***
     *男生点名
     ***/
    const boycall = () => {
      if (data.time == null) {
        data.time = setInterval(() => {
          // 解构赋值新数组
          data.coplaylist = [...data.list];
          //把性别是男的循环到一个新数组
          var boy=[]
          if(boy.length==0){
            data.coplaylist.forEach(i=>{
              if(i.id==1){
                boy.push(i)
              }
            })
          }
          // 生成随机数，生成的数字根据name的长度决定
          var sum = Math.floor(Math.random() * boy.length);
          data.num++;
          data.currentList = boy.name;
          if (data.num == 20) {
            clearInterval(data.time);
            data.time = null;
            data.num = 0;
            // 把选中的同学添加到新数组
            data.currentList = boy[sum].name;
            boy.splice(sum, 1);
          }
        }, 100);
      }
    };
    /***
     *女生点名
     ***/
    const girlcall = () => {
      if (data.time == null) {
        data.time = setInterval(() => {
          // 解构赋值新数组
          data.coplaylist = [...data.list];
          //把性别是男的循环到一个新数组
          var girl=[]
          if(girl.length==0){
            data.coplaylist.forEach(i=>{
              if(i.id==0){
                girl.push(i)
              }
            })
          }
          // 生成随机数，生成的数字根据name的长度决定
          var sum = Math.floor(Math.random() * girl.length);
          data.num++;
          data.currentList = girl.name;
          if (data.num == 20) {
            clearInterval(data.time);
            data.time = null;
            data.num = 0;
            // 把选中的同学添加到新数组
            data.currentList = girl[sum].name;
            girl.splice(sum, 1);
          }
        }, 100);
      }
    };
    return { ...toRefs(data), onecall, twocall, boycall, girlcall };
  },
};
</script>

<style lang="scss">
.box {
  width: 100vw;
  height: 100vh;
  background: url(../../public/3.jpg) no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
}
.list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 300px;
  width: 400px;
  height: 300px;
  background-color: pink;
  color: #fff;
  flex-wrap: wrap;
}
.name {
  width: 100px;
  height: 30px;
  background-color: palevioletred;
  text-align: center;
  margin: 10px;
  line-height: 30px;
}
li {
  width: 100px;
  height: 50px;
  background-color: plum;
  text-align: center;
  line-height: 50px;
  margin: 10px 20px;
  color: palevioletred;
}
.feiw {
  position: fixed;
  right: 400px;
  top: 100px;
  color: purple;
  font-size: 40px;
  font-weight: 700;
}
</style>
