<template lang="html">
  <transition appear>
    <div class="pop-panel-mask">
      <div class="pop-panel-wrap">
        <div class="pop-panel-header">
        个人简介修改
          <div class="line"></div>
          <img src="../../../assets/close.png" v-on:click='f_close' class="close" />
        </div>
        <div class="main-panel clearfix">
          <textarea name="name" class="intro" autofocus v-model="content"></textarea>
          <span class="num-tip">{{content.length}}/360</span>
        </div>
        <div class="button-wrap">
          <span class='button solid' v-on:click='f_alter_intro(content)'>确认修改</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      m_intro: ''
    }
  },
  props: ['content', 'refresh'],
  mounted () {
  },
  methods: {
    f_close: function () {
      this.$emit('close')
    },
    f_alter_intro: function (intro) {
      if (intro.trim().length === 0) {
        return this.$warn('个人简介长度不能为空')
      }
      if (intro.trim().length > 360) {
        return this.$warn('个人简介过长')
      }
      this.$confirm().then(function () {
        this.$http.post('/api/user/intro', {
          intro: intro
        }).then((response) => {
          let body = response.body
          if (body.status === 1) {
            this.$warn('修改成功', function () {
              this.f_close()
              this.refresh()
            }.bind(this))
          } else {
            this.$warn('修改失败，请重试')
          }
        })
      }.bind(this))
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../../scss/components/_pop_panel.scss';
.main-panel{
  margin-top:10px;
  position: relative;
  textarea{
    height:120px;
    width:100%;
    padding:5px;
    outline:none;
    border:1px solid #ddd;
    border-radius: 2px;
    resize: none;
    &:focus{
      border-color: $bingyan-color;
    }
  }
  .num-tip{
    position: absolute;
    bottom: 8px;
    right: -6px;
    font-size: 12px;
    color: #666;
    margin-top: 10px;
  }
}
</style>
