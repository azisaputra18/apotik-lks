<template>
    <div>
        <div class="container">
    <nav>
      <div class="top">
        <img class="img-t" src="img/azi.jpg" alt="">
        <h2>azi saputra</h2>
        <span class = "line"></span>
      </div>
      <div class="bot">     
        <div class="nav-links">
          <div class="nav-link-wrapper">
            <a href=""><img src="https://img.icons8.com/android/25/black/home.png"><span>Home</span></a>
          </div>
          <div class="nav-link-wrapper">
            <a href="http://localhost/azisaputra/projek_pkk/admin/data_admin.php"><img src="https://img.icons8.com/ios-glyphs/25/null/user--v1.png"/><span>admin</span></a>
          </div>
          <div class="nav-link-wrapper">
            <a href="http://localhost/azisaputra/projek_pkk/admin/data_produk.php"><img src="https://img.icons8.com/ios-glyphs/25/null/product.png"/><span>obat</span></a>
          </div>
          <div class="nav-link-wrapper">
          <a href=""><img src="https://img.icons8.com/metro/25/black/settings.png"/><span>Settings</span></a>
          </div>
          <div class="nav-link-wrapper">
          <a href=""><img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/25/null/external-online-support-management-kiranshastry-solid-kiranshastry.png"/><span>contact</span></a>
          </div>
          <div class="nav-link-wrapper">
          <a href=""><img src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/25/null/external-log-out-user-interface-kmg-design-glyph-kmg-design.png"/><span>Sign Out</span></a>
          </div>
        </div>
      </div>
    </nav>
    <div class="navbar"> 
      <div class="left">
        <div class="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="right">
        <h1>Healthy pharmacy</h1>
      </div>
    </div>
    </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
*{
  margin: 0px;
  padding: 0px;
}

body{
  max-width: 1600px;
  margin: auto;
  height: 700px;
  background: white;
}
nav{
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 214px;
  background: #d2d2d2;
  overflow-y: scroll;
  top: 0;
  bottom: 0;
  display: block;
}

nav .top{
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #d2d2d2;
}

nav .top img{
  width: 90px;
  border-radius: 50%;
  border: 2px solid rgb(0, 0, 0);
  margin: 10px;
}

nav .top h1{
  color: rgb(0, 0, 0);
  text-align: center;
  margin-bottom: 10px;
  font-size: 28px;
  font-family:'Courier New', Courier, monospace;
}

nav .top span.line{
  display: block;
  width: 205px;
  height: 1px;
  background: white;
}

nav .bot .nav-links a{
  display: block;
  padding: 20px;
  text-decoration: none;
  color: rgb(0, 0, 0);
  font-size: 15px;
}

nav a span{
  margin-left: 25px;
}

::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #DCDCDC;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #999;
}

input{
  position: absolute;
  margin-left: 22.5px;
  margin-top: 22px;
  transform: scale(2.1);
  opacity: 0;
  cursor: pointer;
  color: b;
}

.navbar{
  max-width: 10000px;
  min-height: 60px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  background:#d2d2d2;
  margin-left: 214px;
}

.navbar .left .hamburger{
  padding: 10px;
}

.navbar .left .hamburger span{
  display: block;
  width: 25px;
  height: 3px;
  background: rgb(0, 0, 0);
  margin: 6.5px;
}

.navbar .right h1{
  color: rgb(0, 0, 0);
  padding: 10px;
  font-family: 'Courier New', Courier, monospace;
}

input{
  margin-left: 237px;
}

input:checked ~ nav{
  display: none;
}

input:checked ~ .navbar{
  margin-left: 0px;
}

input:checked{
  margin-left: 22.5px;
}

@media(max-width: 1088px){
  body{
    overflow-y: scroll;
  }

  nav{
    display: none;
    width: 200px;
  }

  nav .top span.line{
    width: 191px;
  }

  .navbar{
    margin-left: 0px;
    width: 100%;
  }

  input{
    opacity: 0;
    margin-left: 22.5px;
  }

  input:checked{
    margin-left: 222px;
  }

  input:checked ~ nav{
    display: block;
  }

  input:checked ~ .navbar{
    margin-left: 200px;
  }
}

.img-t{
height: 100px;
}

h1{
  font-family: sans-serif;
  margin-left: 290px;
}

</style>