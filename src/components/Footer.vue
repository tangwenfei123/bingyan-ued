<template lang="html">
  <div class="footer">
      <ul class="links">
          <!-- <li class="links_item"><a href="http://www.2shoujie.com" target="_blank">校园二手街</a></li> -->
          <!-- <li class="links_item"><a href="http://tuhao.hustonline.net" target="_blank">华科土豪网</a></li> -->
          <li class="links_item"><a href="https://hr.bingyan.net" target="_blank">冰岩招新</a></li>
          <li class="links_item"><a href="https://weibo.com/3897687414/profile" target="_blank">关于作者</a></li>
          <li class="links_item"><p class="copyright"><a href="https://www.bingyan.net" target="_blank">冰岩作坊</a> &copy;{{m_year}}. 保留所有权利.</p></li>
      </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      m_year: (new Date().getYear() + 1900 - 2015 > 0) ? '2015-' + (new Date().getYear() + 1900) : 2015
    }
  },
  mounted () {

  }
}
</script>
<style lang="scss" scoped>
.footer{
  background-color: #fff;
  color: #999;
  height:60px;
  line-height: 60px;
  position: relative;
  z-index: 2;
  .links{
    display: inline-block;
    width:100%;
    min-width: 950px;
    font-size: 12px;
    text-align: center;
    list-style: none;
    .links_item{
      display: inline-block;
      padding: 0 1em;
      line-height: 1em;
      border-left: 1px solid #d9dadc;
      &:first-child{
        border-left: none;
      }
    }
    a{
      &:hover{
        text-decoration: underline;
      }
    }
  }
}
</style>
