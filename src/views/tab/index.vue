<template>
  <div class="tab-container">
    <el-tag>安装时间: {{ createdTimes }}</el-tag>
    <el-alert
      :closable="false"
      style="
        width: 200px;
        display: inline-block;
        vertical-align: middle;
        margin-left: 30px;
      "
      title="Tab with keep-alive"
      type="success"
    />
    <el-tabs v-model="activeName" style="margin-top: 15px" type="border-card">
      <el-tab-pane
        v-for="item in tabMapOptions"
        :key="item.key"
        :label="item.label"
        :name="item.key"
      >
        <keep-alive>
          <tab-pane
            v-if="activeName === item.key"
            :type="item.key"
            @create="showCreatedTimes"
          />
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import TabPane from './components/TabPane'
export default {
  name: 'Tab',
  components: { TabPane },
  data() {
    return {
      tabMapOptions: [
        { label: '中国', key: 'CN' },
        { label: '美国', key: 'US' },
        { label: '日本', key: 'JP' },
        { label: '欧洲', key: 'EU' }
      ],
      activeName: 'CN',
      createdTimes: 0
    }
  },
  watch: {
    activeName(val) {
      this.$router.push(`${this.$route.path}?tab=${val}`)
    }
  },
  created() {
    // 初始化默认选中的选项卡
    const tab = this.$route.query.tab
    if (tab) {
      this.activeName = tab
    }
  },
  methods: {
    showCreatedTimes() {
      this.createdTimes = this.createdTimes + 1
    }
  }
}
</script>

<style scoped>
.tab-container {
  margin: 30px;
}
</style>
