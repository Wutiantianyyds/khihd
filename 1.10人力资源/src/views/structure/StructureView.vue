<template>
  <div class="StrucTure">
    <div class="box">
      <div class="top">
        <span class="text">组织结构</span>
        <div class="br"></div>
      </div>
      <div class="list">
        <div class="list-top">
          <div>
            <el-icon><Histogram /></el-icon>
            <span class="title">江苏传智播客教育科技股份有限公司</span>
          </div>
          <div class="div">
            <span>负责人</span>
            <el-dropdown>
              <span>
                操作
                <el-icon>
                  <arrow-down />
                </el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click="dialogVisible = true"
                    >添加子部门</el-dropdown-item
                  >
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
        <ul v-for="item in list.depts" :key="item.id">
          <li class="list-bottom" v-if="item.pid == ''">
            <div>
              <el-icon><Avatar /></el-icon>
              <span class="span1">{{ item.name }}</span>
            </div>
            <div class="div">
              <span class="span">{{ item.manager }}</span>
              <el-dropdown>
                <span>
                  操作
                  <el-icon>
                    <arrow-down />
                  </el-icon>
                </span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item @click="dialogVisible = true"
                      >添加子部门</el-dropdown-item
                    >
                    <el-dropdown-item @click="dialogVisible1 = true"
                      >查看部门</el-dropdown-item
                    >
                    <el-dropdown-item>删除部门</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 添加弹框 -->
    <el-dialog v-model="dialogVisible" title="添加部门" width="35%">
      <el-form :model="form">
        <el-form-item label="部门名称">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="部门编码">
          <el-input v-model="form.code" />
        </el-form-item>
        <el-form-item label="部门负责人">
          <el-select
            v-model="value"
            class="m-2"
            placeholder="Select"
            size="large"
          >
            <el-option
              v-for="item in StrucTure"
              :key="item.id"
              :label="item.manager"
              :value="item.manager"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="部门介绍">
          <el-input v-model="form.name" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
    <!-- 查看 -->
    <el-dialog v-model="dialogVisible1" title="编辑部门" width="35%">
      <el-form :model="form">
        <el-form-item label="部门名称">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="部门编码">
          <el-input v-model="form.code" />
        </el-form-item>
        <el-form-item label="部门负责人">
          <el-select
            v-model="value"
            class="m-2"
            placeholder="Select"
            size="large"
          >
            <el-option
              v-for="item in StrucTure"
              :key="item.id"
              :label="item.manager"
              :value="item.manager"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="部门介绍">
          <el-input v-model="form.name" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible1 = false">取消</el-button>
          <el-button type="primary"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { Histogram, ArrowDown, Avatar } from '@element-plus/icons-vue'
import { ref, reactive } from 'vue'

const dialogVisible = ref(false) // 弹框
const dialogVisible1 = ref(false) // 弹框
const value = ref('')
/*表单数据*/
const form = reactive({
  name: '',
  code: '',
  manager: '',
  introduce: ''
})
const list = {
    depts: [
      {
        id: '1175310929766055936',
        pid: '',
        companyId: '1',
        name: '总裁办',
        code: 'ZCB',
        managerId: null,
        manager: '孙财',
        introduce: '总裁办公室',
        createTime: null
      },
      {
        id: '1175311213774962688',
        pid: '',
        companyId: '1',
        name: '2',
        code: '22222222',
        managerId: null,
        manager: '我儿生生有大帝之姿',
        introduce: '22',
        createTime: null
      },
      {
        id: '1175311267684352000',
        pid: '',
        companyId: '1',
        name: '人事部1',
        code: 'RSBBw',
        managerId: '1071632760222810112',
        manager: '文吉星',
        introduce: 'dcec',
        createTime: null
      },
      {
        id: '1175311325720936448',
        pid: '',
        companyId: '1',
        name: '财务部1',
        code: 'lllll',
        managerId: null,
        manager: '文吉星',
        introduce: 'p;;',
        createTime: null
      },
      {
        id: '1175311373083017216',
        pid: '',
        companyId: '1',
        name: '技术部',
        code: 'wert',
        managerId: null,
        manager: '乔海',
        introduce: '',
        createTime: null
      },
      {
        id: '1175311418004013056',
        pid: '',
        companyId: '1',
        name: '运营部',
        code: 'YYB11',
        managerId: null,
        manager: '罗晓晓',
        introduce: '撒',
        createTime: null
      },
      {
        id: '1175311466846683136',
        pid: '',
        companyId: '1',
        name: '市场部',
        code: 'SCB1111111111111',
        managerId: '1063705989926227968',
        manager: '武高丽',
        introduce: '11111',
        createTime: null
      },
      {
        id: '1235395178363559936',
        pid: '1175311325720936448',
        companyId: '1',
        name: '财务核算部',
        code: null,
        managerId: null,
        manager: null,
        introduce: null,
        createTime: null
      },
      {
        id: '1235398264104624128',
        pid: '1175311325720936448',
        companyId: '1',
        name: '税务管理部s',
        code: 'sssss',
        managerId: null,
        manager: '罗晓晓',
        introduce: 'sssss',
        createTime: null
      },
      {
        id: '1235398536969265152',
        pid: '1175311325720936448',
        companyId: '1',
        name: '薪资管理部',
        code: null,
        managerId: null,
        manager: null,
        introduce: null,
        createTime: null
      },
      {
        id: '1235398608847052800',
        pid: '1175311373083017216',
        companyId: '1',
        name: 'Java研发部',
        code: null,
        managerId: null,
        manager: null,
        introduce: null,
        createTime: null
      },
      {
        id: '1235398661355544576',
        pid: '1175311373083017216',
        companyId: '1',
        name: 'Python研发部',
        code: null,
        managerId: null,
        manager: null,
        introduce: null,
        createTime: null
      },
      {
        id: '1235398708763762688',
        pid: '1175311373083017216',
        companyId: '1',
        name: 'Php研发部',
        code: null,
        managerId: null,
        manager: null,
        introduce: null,
        createTime: null
      },
      {
        id: '1235398917619130368',
        pid: '1175311466846683136',
        companyId: '1',
        name: '北京事业部',
        code: null,
        managerId: null,
        manager: null,
        introduce: null,
        createTime: null
      },
      {
        id: '1235399011458293760',
        pid: '1175311466846683136',
        companyId: '1',
        name: '上海事业部',
        code: null,
        managerId: null,
        manager: null,
        introduce: null,
        createTime: null
      },
      {
        id: '1612797910221234176',
        pid: '1175310929766055936',
        companyId: '1',
        name: '秘书部111',
        code: '1234222',
        managerId: null,
        manager: 'p站刘玥',
        introduce: 'ywuiywq',
        createTime: null
      },
      {
        id: '1612799375694274560',
        pid: null,
        companyId: '1',
        name: '22222',
        code: '222222222',
        managerId: null,
        manager: '罗晓晓',
        introduce: '222222',
        createTime: null
      },
      {
        id: '1612801624923348992',
        pid: '1612799507370254336',
        companyId: '1',
        name: 'sadasd',
        code: '2222',
        managerId: null,
        manager: '我儿生生有大帝之姿',
        introduce: '22222222',
        createTime: null
      },
      {
        id: '1612803533436526592',
        pid: '1175310929766055936',
        companyId: '1',
        name: '有病',
        code: 'yb身上',
        managerId: null,
        manager: '文吉星',
        introduce: '12334',
        createTime: null
      },
      {
        id: '1612805090320228352',
        pid: '1175311325720936448',
        companyId: '1',
        name: '财务部',
        code: '阿松大',
        managerId: null,
        manager: '乔海',
        introduce: '大苏打',
        createTime: null
      },
      {
        id: '1612808848844431360',
        pid: null,
        companyId: '1',
        name: '',
        code: '',
        managerId: null,
        manager: '',
        introduce: '',
        createTime: null
      },
      {
        id: '1612809067933900800',
        pid: null,
        companyId: '1',
        name: '',
        code: '',
        managerId: null,
        manager: '',
        introduce: '',
        createTime: null
      },
      {
        id: '1612813216528375808',
        pid: '1235395178363559936',
        companyId: '1',
        name: 'aaa',
        code: 'aaaa',
        managerId: null,
        manager: '叫你女朋友去看看是不是短了五厘米',
        introduce: 'aaa',
        createTime: null
      },
      {
        id: '1612813265840807936',
        pid: '1175311325720936448',
        companyId: '1',
        name: 'aaaa',
        code: 'aaaaa',
        managerId: null,
        manager: '叫你女朋友去看看是不是短了五厘米',
        introduce: 'aaa',
        createTime: null
      },
      {
        id: '1612814801069318144',
        pid: '1175311418004013056',
        companyId: '1',
        name: '嘎嘎',
        code: 's',
        managerId: null,
        manager: '高大山',
        introduce: 'dsad',
        createTime: null
      },
      {
        id: '1612816518309650432',
        pid: '1175311418004013056',
        companyId: '1',
        name: '邓明威实名注册',
        code: '2',
        managerId: null,
        manager: '艾欧尼亚、昂扬不灭',
        introduce: 'sss',
        createTime: null
      },
      {
        id: '1612816757997346816',
        pid: '1235398917619130368',
        companyId: '1',
        name: 'fasdsa',
        code: 'dsad',
        managerId: null,
        manager: '我儿生生有大帝之姿',
        introduce: 'sadasd',
        createTime: null
      },
      {
        id: '1612816848170688512',
        pid: '1175311267684352000',
        companyId: '1',
        name: 'asdsadsa',
        code: 'dsada',
        managerId: null,
        manager: '文吉星',
        introduce: 'dsadsad',
        createTime: null
      },
      {
        id: '1612816898540085248',
        pid: '1175311466846683136',
        companyId: '1',
        name: 'dsadsad',
        code: 'sadsad',
        managerId: null,
        manager: '我儿生生有大帝之姿',
        introduce: 'adasda',
        createTime: null
      },
      {
        id: '1612822529665835008',
        pid: '1175311267684352000',
        companyId: '1',
        name: '12',
        code: '1',
        managerId: null,
        manager: '乔海',
        introduce: '123',
        createTime: null
      },
      {
        id: '1612823914276888576',
        pid: '1175311267684352000',
        companyId: '1',
        name: '1213',
        code: '12',
        managerId: null,
        manager: '管理员',
        introduce: '1234',
        createTime: null
      },
      {
        id: '1612824232616173568',
        pid: '1612810053964439552',
        companyId: '1',
        name: '111111111',
        code: '122222',
        managerId: null,
        manager: '罗晓晓',
        introduce: '11111111111',
        createTime: null
      },
      {
        id: '1612828733054033920',
        pid: '1175311213774962688',
        companyId: '1',
        name: '1',
        code: '111',
        managerId: null,
        manager: '董昊空',
        introduce: '1111',
        createTime: null
      },
      {
        id: '1612828854797901824',
        pid: '1175311466846683136',
        companyId: '1',
        name: '111',
        code: '111111',
        managerId: null,
        manager: '乔海',
        introduce: '11111',
        createTime: null
      },
      {
        id: '1612829992964235264',
        pid: '1175310929766055936',
        companyId: '1',
        name: '33',
        code: '22',
        managerId: null,
        manager: '董昊空',
        introduce: '11',
        createTime: null
      }
    ]

}

</script>

<style lang="scss" scoped>
.StrucTure {
  margin: 15px;
  height: 100%;
  background-color: #fff;
  padding: 20px;
  .box {
    margin: 30px 0 0 50px;
    .top {
      .text {
        color: #4a7afb;
        border-bottom: 3px solid #4a7afb;
        padding-bottom: 10px;
      }
      .br {
        width: 100%;
        height: 3px;
        background-color: #eee;
        margin-top: 10px;
      }
    }
    .list {
      margin: 50px 120px;
      .div {
        width: 160px;
        display: flex;
        justify-content: space-between;
      }
      .list-top {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 6px;
        border-bottom: 1px solid #ccc;
        .title {
          font-weight: 900;
        }
      }
      ul {
        margin-top: 15px;
        .list-bottom {
          width: 100%;
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          .span1 {
            margin-left: 6px;
          }
        }
      }
    }
  }
}
</style>
