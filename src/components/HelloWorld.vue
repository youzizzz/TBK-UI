<template>

  <div class="container-fluid" id="main">
    <header class="container">
      <div class="row">
        <div class="col-md-2">
          <img src="../../static/images/logo.jpg" class="text-left"/>
        </div>
        <img src="../../static/images/menu.saveimg.savepath20181221135259.jpg" class="img-fluid col-md-6"/>
        <div class="col-md-4">
          <div class="input-group" style="padding-top: 7.5%;">
            <input type="text" class="form-control" v-model="searchText" @keydown="keydown" style="border-right: none;border-radius: 1rem 0px 0px 1rem;">
            <span class="input-group-btn">
                      <button class="btn btn-success" type="button" style="border-radius: 0px 1rem 1rem 0px;">
                       搜索好物
                      </button>
            </span>
          </div><!-- /input-group -->
        </div>
      </div>
    </header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse row" id="navbarSupportedContent"
           style="background-color: #CD00CD;color: black;">
        <div class="container">
          <ul class="navbar-nav col-md-12">
            <li class="nav-item navMouseOver col-md-2">
              <a class="nav-link" href="#">
                <!--<font-awesome-icon icon="list" size="md"/>-->
                <i class="fa fa-list-ul"></i>
                好券清单</a>
            </li>
            <li class="nav-item col-md-2">
              <a class="nav-link" href="#">低价抢购</a>
            </li>
            <li class="nav-item col-md-2">
              <a class="nav-link disabled" href="#">天猫精选</a>
            </li>
            <li class="nav-item col-md-2">
              <a class="nav-link disabled" href="#">九块九包邮</a>
            </li>
            <li class="nav-item col-md-2">
              <a class="nav-link disabled" href="#">站长力荐</a>
            </li>
            <li class="nav-item col-md-2">
              <a class="nav-link disabled" href="#">潮流风向榜</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Morbi leo risus</li>
            <li class="list-group-item">Porta ac consectetur ac</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
        <div id="carouselExampleIndicators" class="carousel slide col-md-6" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="img-fluid" src="http://www.25xt.com/wp-content/uploads/2014/12/xeon.jpg" alt="First slide">
              <!--可以给轮播添加文字描述 -->
              <!--<div class="carousel-caption d-none d-md-block">-->
              <!--<h5 style="color: red;">Second slide label</h5>-->
              <!--<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>-->
              <!--</div>-->
            </div>
            <div class="carousel-item">
              <img class="img-fluid" src="http://www.25xt.com/wp-content/uploads/2014/12/xeon.jpg" alt="Second slide">
            </div>
            <div class="carousel-item">
              <img class="img-fluid" src="http://www.25xt.com/wp-content/uploads/2014/12/xeon.jpg" alt="Third slide">
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <div class="col-md-3">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Morbi leo risus</li>
            <li class="list-group-item">Porta ac consectetur ac</li>
            <li class="list-group-item">Vestibulum at eros</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
      </div>

      <div class="alert alert-info text-left" role="alert" style="margin-top: 0.1rem;">
        无脑提示嘤嘤嘤
      </div>

      <!-- 推广一 -->
      <div class="row" id="rmjx">
        <div class="card col-md-3">
          <img class="img-fluid card-img-top" src="http://www.25xt.com/wp-content/uploads/2014/12/xeon.jpg"
               alt="Third slide" style="z-index: 999;">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
          <img src="../../static/images/rm.jpg" width="15%" height="15%" class="rm"/>
        </div>
        <div class="card col-md-3">
          <img class="img-fluid card-img-top" src="http://www.25xt.com/wp-content/uploads/2014/12/xeon.jpg"
               alt="Third slide" style="z-index: 999;">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
          <img src="../../static/images/rm.jpg" width="15%" height="15%" class="rm"/>
        </div>
        <div class="card col-md-3" style="width: 18rem;">
          <img class="img-fluid card-img-top" src="http://www.25xt.com/wp-content/uploads/2014/12/xeon.jpg"
               alt="Third slide">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div class="card col-md-3" style="width: 18rem;">
          <img class="img-fluid card-img-top" src="http://www.25xt.com/wp-content/uploads/2014/12/xeon.jpg"
               alt="Third slide">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div class="card col-md-3" style="width: 18rem;">
          <img class="img-fluid card-img-top" src="http://www.25xt.com/wp-content/uploads/2014/12/xeon.jpg"
               alt="Third slide">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div class="card col-md-3" style="width: 18rem;">
          <img class="img-fluid card-img-top" src="http://www.25xt.com/wp-content/uploads/2014/12/xeon.jpg"
               alt="Third slide">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div class="card col-md-3" style="width: 18rem;">
          <img class="img-fluid card-img-top" src="http://www.25xt.com/wp-content/uploads/2014/12/xeon.jpg"
               alt="Third slide">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div class="card col-md-3" style="width: 18rem;">
          <img class="img-fluid card-img-top" src="http://www.25xt.com/wp-content/uploads/2014/12/xeon.jpg"
               alt="Third slide">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div class="card col-md-3" style="width: 18rem;">
          <img class="img-fluid card-img-top" src="http://www.25xt.com/wp-content/uploads/2014/12/xeon.jpg"
               alt="Third slide">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>

    <!-- 滚动到指定位置显示顶部 -->
    <footer class="container-fluid foot-wrap">
      <div class="container">
        <div class="row" id="help">
          <div class="row-content col-lg-4 col-sm-4 col-xs-6">
            <ul>
              <li><h5>我们承诺</h5></li>
              <li>商品来源有保证</li>
              <li>商品质量有保障</li>
              <li>商品价格最实惠</li>
            </ul>
          </div>
          <div class="row-content col-lg-4 col-sm-4 col-xs-6">
            <ul>
              <li><h5>商品来源</h5></li>
              <li><a href="https://www.taobao.com">淘宝</a></li>
              <li><a href="https://www.tmall.com">天猫</a></li>
              <li><a href="javascript:void(0)">精选好物</a></li>
            </ul>
          </div>
          <div class="row-content col-lg-4 col-sm-4 col-xs-6">
            <ul>
              <li><h5>关于我们</h5></li>
              <li><a href="#">了解我们</a></li>
              <li><a href="#">加入我们</a></li>
              <li><a href="#">投诉建议</a></li>
            </ul>
          </div>
        </div><!--/.row -->
        <div class="row">
          <div class="col-md-12" style="text-align: center;">Copyright 2017 - 2018 PPY. All Rights Reserved</div>
        </div>
      </div><!--/.container-->
    </footer>
    <div id="topMenu" class="container-fluid" style="display: none;">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse row" style="background-color: #fff;color: black;">
          <div class="container-fluid">
            <ul class="navbar-nav col-md-12">
              <ul class="fn-left" style="padding-left: 0px;margin: 0 auto">
                <li class="">
                  <a href="/index.php?r=l&amp;cid=4"> 居家日用</a>
                </li>
                <li class="">
                  <a href="/index.php?r=l&amp;cid=6"> 美食</a>
                </li>
                <li class="">
                  <a href="/index.php?r=l&amp;cid=2"> 母婴</a>
                </li>
                <li class="">
                  <a href="/index.php?r=l&amp;cid=3"> 美妆</a>
                </li>
                <li class="">
                  <a href="/index.php?r=l&amp;cid=1"> 女装</a>
                </li>
                <li class="">
                  <a href="/index.php?r=l&amp;cid=8"> 数码家电</a>
                </li>
                <li class="">
                  <a href="/index.php?r=l&amp;cid=7"> 文娱车品</a>
                </li>
                <li class="">
                  <a href="/index.php?r=l&amp;cid=10"> 内衣</a>
                </li>
                <li class="">
                  <a href="/index.php?r=l&amp;cid=14"> 家装家纺</a>
                </li>
                <li class="">
                  <a href="/index.php?r=l&amp;cid=5"> 鞋品</a>
                </li>
                <li class="">
                  <a href="/index.php?r=l&amp;cid=9"> 男装</a>
                </li>
                <li class="">
                  <a href="/index.php?r=l&amp;cid=12"> 配饰</a>
                </li>
                <li class="">
                  <a href="/index.php?r=l&amp;cid=13"> 户外运动</a>
                </li>
                <li class="">
                  <a href="/index.php?r=l&amp;cid=11"> 箱包</a>
                </li>
                <li class="" style="padding: 0px !important;margin-left: 1rem;">
                    <div class="input-group">
                      <input type="text" class="form-control" v-model="searchText" @keydown="keydown" style="border-right: none;border-radius: 1rem 0px 0px 1rem;">
                      <span class="input-group-btn">
                      <button class="btn btn-success" type="button" style="border-radius: 0px 1rem 1rem 0px;">
                       搜索好物
                      </button>
                    </span>
                    </div><!-- /input-group -->
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </nav>
    </div>

  </div>

</template>

<script>

  import {} from '../../static/js/custom'

  export default {
    name: 'HelloWorld',
    data() {
      return {
        searchText:"水杯",
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        $("#navbarSupportedContent li").mouseover(function () {
          $(this).addClass("navMouseOver").siblings().removeClass("navMouseOver");
        });
      })
    },
    methods:{
      keydown:function (event) {
        let that=this;
        if(event.keyCode==13){
          if(that.searchText.trim()==""){
            alert("什么都不选,你敲恁吗呢!");
          }
        }
      }
    }
  }
</script>


<!--<style src="../../static/plugins/font-awesome/css/font-awesome.css"></style>-->

<style scoped>
  /*h1, h2 {*/
  /*font-weight: normal;*/
  /*}*/

  /*ul {*/
  /*list-style-type: none;*/
  /*padding: 0;*/
  /*}*/

  /*li {*/
  /*display: inline-block;*/
  /*margin: 0 10px;*/
  /*}*/

  /*a {*/
  /*color: #42b983;*/
  /*}*/
  .foot-wrap {
    background-color: #f5f6f5 !important;
    margin-top: 80px;
  }

  .foot-wrap ul {
    list-style: none;
  }

  .foot-wrap ul li, .foot-wrap ul li a {
    color: #333;
  }

  .foot-wrap ul li a {
    text-decoration: none;
  }

  .navMouseOver {
    background-color: #CD1076;
  }

  .topMenuShow {
    display: block;
    position: fixed;
    top: 0;
    z-index: 99999;
  }

  #topMenu ul {
    list-style: none;
  }

  #topMenu ul li {
    float: left;
    line-height: 20px;
    padding: 10px 5px;
  }

  #topMenu ul li a {
    color: #666;
    text-decoration: none;
  }
  #topMenu ul li a:hover {
    color: black;
  }

  #help .col-lg-4 {
    margin-top: 1rem;
  }

  #help h5 {
    font-weight: bold;
  }
  #rmjx .card{
    margin: 1rem 1rem;
  }
  .rmjxCardMouseOver{
    box-shadow: 10px 10px 5px #888888;
  }
  .imgTuChu{
    position: relative;
    top:2px ;left:2px;
  }
</style>
