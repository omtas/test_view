$(function () {
    $('.h1-title-1').textillate({
      loop: false,  
      minDisplayTime: 3000,  
      initialDelay: 500,  
      autoStart: true,  
  
      in: {
        effect: 'fadeIn',  
        delayScale: 3.0,  
        delay: 50,  
        sync: false,  
        shuffle: false
      },  
    });
   $('.h1-title-2').textillate({
      loop: false,  
      minDisplayTime: 3000,  
      initialDelay: 2000,  
      autoStart: true,  

      in: {
        effect: 'fadeIn',  
        delayScale: 4.0,  
        delay: 50,  
        sync: false,  
        shuffle: false
      },  
   });
  
   $('.text-in-1').textillate({
    loop: false,  
    minDisplayTime: 3000,  
    initialDelay: 3500,  
    autoStart: true,  

    in: {
      effect: 'fadeIn',  
      delayScale: 0.8,  
      delay: 50,  
      sync: false,  
      shuffle: false
    },  
   });
  
   $('.text-in-2').textillate({
    loop: false,  
    minDisplayTime: 3000,  
    initialDelay: 4300,  
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