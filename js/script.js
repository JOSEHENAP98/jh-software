AOS.init({
  duration:1200,
  once:true
});

tsParticles.load("particles-js", {

  background:{
    color:"transparent"
  },

  particles:{

    number:{
      value:60
    },

    color:{
      value:"#00A3FF"
    },

    links:{
      enable:true,
      color:"#0066FF",
      distance:150,
      opacity:0.3
    },

    move:{
      enable:true,
      speed:1
    },

    opacity:{
      value:0.5
    },

    size:{
      value:2
    }

  }

});