const canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var context = canvas.getContext('2d');



function main(){
    clicklistner()
}

function clicklistner(){
const submitButton = document.querySelector('form')
submitButton.addEventListener('click', function(event){
    event.preventDefault()
    if (event.target.id === "layout-one"){
     
    const imgUrl = event.target.previousSibling.previousSibling.previousSibling.previousSibling.value
    const innerText = event.target.previousSibling.previousSibling.value

    ctx.font = "20px Georgia";
    ctx.fillText(`${innerText}`, 230, 100, 300);
    ctx.fillText(`${innerText}`, 230, 500, 300);
    ctx.fillText(`${innerText}`, 30, 300, 200);
    ctx.fillText(`${innerText}`, 430, 300, 500);
    ctx.fillText(`${innerText}`, 30, 700, 300);
    ctx.fillText(`${innerText}`, 430, 700, 500);
    
    function loadImages(sources, callback) {
        var images = {};
        var loadedImages = 0;
        var numImages = 0;
        for(var src in sources) {
          numImages++;
        }
        for(var src in sources) {
          images[src] = new Image();
          images[src].onload = function() {
            if(++loadedImages >= numImages) {
              callback(images);
            }
          };
          images[src].src = sources[src];
        }
      }
    
      let sources = {
        image1: `${imgUrl}`,
      };
    
      loadImages(sources, function(images) {
        context.drawImage(images.image1, 0, 0, 200, 200);
        context.drawImage(images.image1, 0, 400, 200, 200);
        context.drawImage(images.image1, 400, 400, 200, 200);
        context.drawImage(images.image1, 400, 0, 200, 200);
        context.drawImage(images.image1, 200, 200, 200, 200)
        context.drawImage(images.image1, 200, 600, 200, 200)
      });}else if(event.target.id === "layout-one-clear"){
        //console.log("clear")
        ctx.clearRect(0,0, canvas.width, canvas.height)
        context.clearRect(0, 0, canvas.width, canvas.height)
    }else if(event.target.id === "layout-two-clear"){
      console.log("clear")
      ctx.clearRect(0,0, canvas.width, canvas.height)
      context.clearRect(0, 0, canvas.width, canvas.height)
    }else if(event.target.id === "layout-two"){
      
      
      const imgUrl = event.target.previousSibling.previousSibling.previousSibling.previousSibling.value
    const imgUrlTwo = event.target.previousSibling.previousSibling.value
   
    
    function loadImages(sources, callback) {
        var images = {};
        var loadedImages = 0;
        var numImages = 0;
        for(var src in sources) {
          numImages++;
        }
        for(var src in sources) {
          images[src] = new Image();
          images[src].onload = function() {
            if(++loadedImages >= numImages) {
              callback(images);
            }
          };
          images[src].src = sources[src];
        }
      }
    
      let sources = {
        image1: `${imgUrl}`,
        image2: `${imgUrlTwo}`,
      };
    
      loadImages(sources, function(images) {
        // ct.drawImage(images.image2, 230, 100, 300);
        // ct.drawImage(images.image2, 230, 500, 300);
        // ct.drawImage(images.image2, 30, 300, 200);
        // ct.drawImage(images.image2, 430, 300, 500);
        // ct.drawImage(images.image2, 30, 700, 300);
        // ct.drawImage(images.image2, 430, 700, 500);
        
        ct.drawImage(images.image1, 0, 0, 200, 200);
        ct.drawImage(images.image1, 0, 400, 200, 200);
        ct.drawImage(images.image1, 400, 400, 200, 200);
        ct.drawImage(images.image1, 400, 0, 200, 200);
        ct.drawImage(images.image1, 200, 200, 200, 200)
        ct.drawImage(images.image1, 200, 600, 200, 200)
      
      }); 
      
      loadImages(sources, function(images) {
        ctx.drawImage(images.image2, 230, 100, 300);
        ctx.drawImage(images.image2, 230, 500, 300);
        ctx.drawImage(images.image2, 30, 300, 200);
        ctx.drawImage(images.image2, 430, 300, 500);
        ctx.drawImage(images.image2, 30, 700, 300);
        ctx.drawImage(images.image2, 430, 700, 500);
      })
    }
    
})
}

main()