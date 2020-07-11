$(function () {
    $('.h1-title-1').textillate({
      loop: false,  
      minDisplayTime: 3000,  
      initialDelay: 800,  
      autoStart: true,  
  
      in: {
        effect: 'fadeIn',  
        delayScale: 4.0,  
        delay: 50,  
        sync: false,  
        shuffle: false
      },  
    });
   $('.h1-title-2').textillate({
      loop: false,  
      minDisplayTime: 3000,  
      initialDelay: 2500,  
      autoStart: true,  

      in: {
        effect: 'fadeIn',  
        delayScale: 4.0,  
        delay: 50,  
        sync: false,  
        shuffle: false
      },  
   });
  
   $('.tetx-in-1').textillate({
    loop: false,  
    minDisplayTime: 3000,  
    initialDelay: 3500,  
    autoStart: true,  

    in: {
      effect: 'fadeIn',  
      delayScale: 1.0,  
      delay: 50,  
      sync: false,  
      shuffle: false
    },  
   });
  
   $('.tetx-in-2').textillate({
    loop: false,  
    minDisplayTime: 3000,  
    initialDelay: 4800,  
    autoStart: true,  

    in: {
      effect: 'fadeIn',  
      delayScale: 3.0,  
      delay: 50,  
      sync: false,  
      shuffle: false
    },  
  });
})