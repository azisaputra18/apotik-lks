<template>
    <div>
        <section>
            <div class="container">
                <div class="user singinBx">
                    <div class="imgBx"><img src="@/assets/img/undraw_settings_tab_mgiw.svg" width="70px" height="70px" alt=""></div>
                    <div class="formBx">
                        <form action="" method="post">
                            <h2>Sign In</h2>
                            <input type="Email" name="Email" placeholder="Email">
                            <input type="text" name="username" placeholder="Username">
                            <input type="password" name="password" placeholder="Password">
                            <NuxtLink to="index.vue"><input type="Submit" name="register" value="register"></NuxtLink>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>

</script>

<style scoped>
body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}
 
section
{
    position: relative;
    min-height: 100vh;
    background: #dee2e6b8;
    justify-content: center;
    align-items: center;
    padding: 20px;
}
 
section .container 
{
    position: relative;
    width: 100%;
    height:544px;
    background: #fff;
    box-shadow: 0 15px 50px rgb(0 0 0 / 10%);
    overflow: hidden;
    left: -11px;
    top: 80px;
}
 
 
section .container .user
{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
}
 
section .container .user .imgBx
{
    position: relative;
    width: 50%;
    height: 100%;
    background: #fff;
    transition: 0.5s ;
}
 
section .container .user .imgBx img 
{
    position: absolute;
    top: 104px;
    left: 56px;
    width: 100%;
    height: 62%;
    object-fit: cover;
}
 
section .container .user .formBx
{
    position: relative;
    width: 50%;
    height: 100%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    transform: 0.5s;
}
 
section .container .user .formBx form h2 
{
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-align: center;
    width: 100%;
    margin-bottom: 10px;
    color: #555;
}
 
section .container .user .formBx form input
{
    position: relative;
    width: 100%;
    padding: 10px;
    background: #f5f5f5;
    color: #333;
    border: none;
    outline: none;
    box-shadow: none;
    margin: 8px 0;
    font-size: 14px;
    letter-spacing: 1px;
    font-weight: 300;
}
 
section .container .user .formBx form input[type="submit"]
{
    max-width: 100px;
    background: #677eff;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1px;
    transition: 0.5s;
}
 
section .container .user .formBx form .signup
{
    position: relative;
    margin-top: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    color: #555;
    text-transform: uppercase;
    font-weight: 300;
}
 
section .container .user .formBx form .signup a 
{
    font-weight: 600;
    text-decoration: none;
    color: #677eff;
}
</style>