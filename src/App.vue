<template>
  <div id="app">
    <el-page-header title="返回" content="测试"></el-page-header>

    <el-form>
      <el-form-item>
        <el-input type="textarea" v-model="value"></el-input>
      </el-form-item>

      <el-form-item>
        <el-radio-group v-model="fileType">
          <el-radio label="txt">txt - 文本文件</el-radio>
          <el-radio label="js">js - 脚本文件</el-radio>
          <el-radio label="as">as - 脚本文件</el-radio>
          <el-radio label="gif">gif - 图片文件</el-radio>
          <el-radio label="jpg">jpg - 图片文件</el-radio>
          <el-radio label="jpeg">jpeg - 图片文件</el-radio>
          <el-radio label="docx">docx - word文件</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item>
        <p>文件类型：{{fileType}}</p>
        <p>文件内容：</p>
        <pre>{{finalValue}}</pre>
      </el-form-item>

      <el-form-item>
        <el-button @click="clickHandler">点击将输入内容做为文件下载</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
import { BlobFile } from '@mudas/file';

export default {
  name: 'app',
  mixins: [],
  components: {},
  data() {
    return {
      value: '',
      fileType: ''
    };
  },
  computed: {
    finalValue() {
      const src = this.value;

      switch (this.fileType) {
        case 'docx':
        case 'js':
        case 'as':
        default: {
          return src;
        }
      }
    }
  },

  methods: {
    clickHandler() {
      const blob = new BlobFile([this.finalValue], 'any', this.fileType);
      blob.download();
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 50px;
}

.el-form {
  width: 50%;
  min-width: 200px;
  max-width: 500px;
}
</style>
