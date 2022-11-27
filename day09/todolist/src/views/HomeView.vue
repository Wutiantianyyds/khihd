<template>
  <div class="body">

     <div class="head">


        <div class="topbox">
            <img src="1.png" alt="" class="bookimg">
            <div class="title">To-Do List</div>
        </div>
        <h1 class="center">~ Today I need to ~</h1>
        <div class="inpbox">
            <input type="text" placeholder="Add ner todo..." class="target" v-model="value">
            <span class="btnsub">
                <span class="subbtn" @click="add">Submit</span>
            </span>
        </div>

        <!-- 添加列表 -->

       <ul>
        <li v-for="(item, index) in list" :key="index" v-show="falg==1 || falg==2||falg==4">
          <div class="cck">
            <input
              type="checkbox"
              v-model="item.status"
              @change="change(index)"
            />
            <p>{{ item.value }}</p>
          </div>
          <p class="del" @click="del(index)">x</p>
        </li>
      </ul>
        <!-- 全部选中未选择的 -->
        <!-- <footer class="options" v-if="flag == true">
            <div class="left">
                <span class="items-left 
                    "><span id="sum">{{sum}}</span> items left</span>
            </div>
            <div class="right">
                <div class="all">All</div>
                <div class="active">Active</div>
                <div class="completed">Completed</div>
            </div>
            <div class="clear">Clear Completed</div>
        </footer> -->
         <div class="options" v-if="flag == true">
        <p>{{ sum }}item left</p>
        <p @click="change(1)" :class="{ active: falg == 1 }">All</p>
        <p @click="change(2)" :class="{ active: falg == 2 }">Active</p>
        <p @click="change(3)" :class="{ active: falg == 3 }">Completed</p>
        <p @click="delAll(4)" :class="{ active: falg == 4 }">Clear Completed</p>
      </div>
        <div id="bottombox" v-if="flag == false">
            <span id="right">Congrat, you have no more tasks to do</span>
        </div>
    </div>
 </div>
</template>

<script>
export default {
  data() {
    return {
      list:[],
      checked: false,
      value: "",
      flag: false,
      falg: 1,
      current:0
    };
  },
  methods: {
     add() {
      this.list.push({ status: false, value: this.value, num: 1 });
      this.flag = true;
      this.value=''
    },
    change(index) {
      this.list[index].status = !this.list[index].status;
      this.list.push(this.list[index])
      this.list.splice(index,1)
    },
    del(index){
      this.list.splice(index,1)
    },
  },
  created() {},
  mounted() {},
  components: {},
  computed: {
    sum() {
      return this.list.filter((i) => i.status == false).length;
    },
  },
  watch: {},
};
</script>

<style lang='scss' scoped>
 .body {
        padding: 250px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: linear-gradient(90deg, #ffafbd, #ffc3a0);
        /* 渐变 */
    }

    .head {
        width: 440px;
        height: 306px;
        background-color: #F2F2F2;
        padding: 30px 40px 20px;
        border-radius: 20px;
    }

    .topbox {
        display: flex;
        height: 80px;
    }

    .bookimg {
        width: 80px;
        height: 80px;
        margin-left: 100px;
        margin-right: 10px;
    }

    .title {
        width: 98px;
        height: 40px;
        background-color: #fe7345;
        color: #fff;
        transform: rotate(3deg);
        line-height: 35px;
        font-size: 21px;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        padding: .25em .8em .15em;
        border-radius: 20% 5% 20% 5%/5% 20% 25% 20%;
        margin-top: 20px;
    }

    .center {
        font-size: 20px;
        margin-left: 100px;
        margin-top: 40px;
        margin-bottom: 40px;
    }

    .inpbox {
        display: flex;
        height: 31px;
        width: 360px;
    }

    .target {
        border: none;
        border-bottom: 3px dashed #fe7345;
        width: 237px;
        background-color: #F2F2F2;
        margin-right: 20px;
        margin-left: 30px;
    }

    /* 父 */
    .btnsub {
        width: 75px;
        height: 35px;
        position: relative;
        transform: rotate(4deg);
        border-radius: 6px;
        transition: transform .25s cubic-bezier(.175, .885, .32, 1.275);
        background-image: url(data:image/png;base64,R0lGODlhBAAEAIABAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjEgNjQuMTQwOTQ5LCAyMDEwLzEyLzA3LTEwOjU3OjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1LjEgV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NUY1OENCRDdDMDYxMUUyOTEzMEE1MEM5QzM0NDVBMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NUY1OENCRTdDMDYxMUUyOTEzMEE1MEM5QzM0NDVBMyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk1RjU4Q0JCN0MwNjExRTI5MTMwQTUwQzlDMzQ0NUEzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk1RjU4Q0JDN0MwNjExRTI5MTMwQTUwQzlDMzQ0NUEzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAQAAAQAsAAAAAAQABAAAAgYEEpdoeQUAOw==);
        background-color: #fe7345;
    }

    /* 子 */
    .subbtn {
        position: absolute;
        left: 0;
        top: 0;
        content: "";
        width: 70px;
        height: 25px;
        transform: scaleY(1.1);
        border: 2px solid #494a4b;
        text-align: center;
        border-radius: inherit;
        transform-origin: top;
        transition: transform .25s cubic-bezier(.175, .885, .32, 1.275);
        background-color: #fff;
    }

    #bottombox {
        width: 360px;
        height: 30px;
        display: flex;
        justify-content: center;
        margin-top: 40px;
        line-height: 30px;
    }

    #right {
        color: #b7b8b8;
        font-size: 14px;
        font-family: Arial, Helvetica, sans-serif;
    }

    * {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    li {
        display: flex;
        justify-content: space-between;
    }

    .options {
        align-items: center;
        justify-content: space-between;
        font-size: 12px;
        display: flex;
        display: none;
    }

    .right {
        display: flex;
    }

    .all,
    .active,
    .completed {
        margin: 0 10px;
        cursor: pointer;
    }
</style>

