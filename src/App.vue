<template>
  <div id="app">
    <my-baner imgSrc="https://zadari.com.ua/content/images/18/95899895444665.jpg"
    title = "Elite Gifts"
    clicksNumber = "1"
    />
    <baner-peach caption="recreativ"
    advertising="Advertising network"
    imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxkswCC-Rgt-1_eCp4Tycq-qpMIY0b-p_e4Q&usqp=CAU"
    title="Juicy peach" />

    <weather-baner 
    town="Uzhgorod"
    date = "Today 09.00"
    imgSrc="https://png.clipart.me/istock/previews/5014/50148626-thermometer-icon.jpg"
    temperature="+18"
    humidity="Humidity:97"
    pleasure="Pleasure:748mm"
    wind="Wind:0m/c"
    />

      
  <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import MyBaner from "./components/MyBaner"
import BanerPeach from "./components/BanerPeach"
import WeatherBaner from "./components/WeatherBaner"


export default {
  name: 'App',
  components: {
   MyBaner,
   BanerPeach,
   WeatherBaner

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
