const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const context = canvas.getContext('2d');

function main(){
    formClickListner()
    printButton()
}

function printButton(){
    const canvasContainer = document.getElementById('canvas-container')
    canvasContainer.addEventListener('click', function(event){

        if (event.target.className === "delete btn btn-success"){
            let image = new Image()
            image.crossOrigin = "anonymous";
            image.src = 'http://127.0.0.1:5501/wrapping_paper/img';

            ctx.drawImage(image, canvas.width/2 - 40, 25, 80, 120);

            canvas.toDataURL();
            //let image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"); //Convert image to 'octet-stream' (Just a download, really)
            window.location.href = image;
        }
    })
}


function formClickListner(){
    const form = document.getElementById('forms')
    const formTwo = document.getElementById('second-form')

    form.addEventListener('click', function(event){
        event.preventDefault()
        if(event.target.tagName === "BUTTON"){
            const layoutNumber = event.target.previousSibling.previousSibling.value
            const wrappingPaperName =  event.target.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.value
            
            if(layoutNumber === "1"){
                
                formTwo.innerHTML = (`
                <form class="form-inline">
                <div class="form-group">
                <label for="img-url-one"></label>
                <input id="img-url-one" type="text" placeholder="Image Url"class="form-control"></input>
                <label for="inner_text"></label>
                <input id="inner_text" type="text" placeholder="Wrapping Paper Text" class="form-control"></input>
                <button id="submit" type="submit" class="second-submit btn btn-success">submit</button>
                <button id="clear" class="second-clear btn btn-success">clear</button>
                </div>
                </form>
                </br>
                `)

                formTwo.addEventListener('click',function(event){
                    event.preventDefault()
                    if(event.target.className === "second-submit btn btn-success"){
                        
                        const imgUrl = event.target.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.value
                        const innerText = event.target.previousSibling.previousSibling.value
                        
                        //canvas.style.background = "red"
                        
                        ctx.font = "20px Georgia";
                        ctx.fillText(`${innerText}`, 230, 100)
                        ctx.fillText(`${innerText}`, 240, 500)
                        ctx.fillText(`${innerText}`, 30, 300)
                        ctx.fillText(`${innerText}`, 430, 300)
                        ctx.fillText(`${innerText}`, 30, 700)
                        ctx.fillText(`${innerText}`, 430, 700)
                        
                        function loadImages(sources, callback) {
                            let images = {}
                            let loadedImages = 0
                            let numImages = 0
                            for(var src in sources) {
                              numImages++
                            }
                            for(var src in sources) {
                                images[src] = new Image()
                                images[src].onload = function() {
                                    if(++loadedImages >= numImages) {
                                      callback(images);
                                    }
                                  };
                                images[src].src = sources[src]
                                }
                              }
                        
                            var sources = {
                                image1: `${imgUrl}`,
                            };
                            
                            loadImages(sources, function(images) {
                                context.drawImage(images.image1, 0, 0, 200, 200);
                                context.drawImage(images.image1, 0, 400, 200, 200);
                                context.drawImage(images.image1, 400, 400, 200, 200);
                                context.drawImage(images.image1, 400, 0, 200, 200);
                                context.drawImage(images.image1, 200, 200, 200, 200)
                                context.drawImage(images.image1, 200, 600, 200, 200)
                              })
                    }else if(event.target.className === "second-clear btn btn-success"){
                        ctx.clearRect(0,0, canvas.width, canvas.height)
                        context.clearRect(0, 0, canvas.width, canvas.height)
                    }
                })

            }else if(layoutNumber === "2"){
               
                formTwo.innerHTML = (`
                <form class="form-inline">
                <div class="form-group">
                <label for="img-url-two"></label>
                <input id="img-url-two" type="text" placeholder="Image Url" class="form-control"></input>
                <label for="img-url-three"></label>
                <input id="img-url-three" type="text" placeholder="Image Url" class="form-control"></input>
                <button id="layout-two-submit" type="submit" class="third-submit btn btn-success">submit</button>
                <button id="layout-two-clear" class="third-clear btn btn-success">clear</button>
                </div>
                </form>
                </br>
                `)

                formTwo.addEventListener('click',function(event){
                    event.preventDefault()
                    if(event.target.className === "third-submit btn btn-success"){
                        
                                const imgUrl = event.target.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.value
                                const imgUrlTwo = event.target.previousSibling.previousSibling.value

                                function loadImages(sources, callback) {
                                let images = {}
                                let loadedImages = 0
                                let numImages = 0
                                for(var src in sources) {
                                numImages++
                                }
                                    for(var src in sources) {
                                    images[src] = new Image()
                                    images[src].onload = function() {
                                        if(++loadedImages >= numImages) {
                                        callback(images);
                                        }
                                    };
                                    images[src].src = sources[src]
                                    }
                                }
                            
                                var sources = {
                                    image1: `${imgUrl}`,
                                    image2: `${imgUrlTwo}`
                                };
                                
                                loadImages(sources, function(images) {
                                    context.drawImage(images.image1, 0, 0, 200, 200);
                                    context.drawImage(images.image2, 0, 200, 200, 200);
                                    context.drawImage(images.image1, 0, 400, 200, 200);
                                    context.drawImage(images.image2, 0, 600, 200, 200);
                                    context.drawImage(images.image2, 200, 0, 200, 200);
                                    context.drawImage(images.image1, 200, 200, 200, 200)
                                    context.drawImage(images.image2, 200, 400, 200, 200)
                                    context.drawImage(images.image1, 200, 600, 200, 200)
                                    context.drawImage(images.image1, 400, 0, 200, 200);
                                    context.drawImage(images.image2, 400, 200, 200, 200);
                                    context.drawImage(images.image1, 400, 400, 200, 200);
                                    context.drawImage(images.image2, 400, 600, 200, 200);
                                })
                    }else if(event.target.className === "third-clear btn btn-success"){
                        ctx.clearRect(0,0, canvas.width, canvas.height)
                        context.clearRect(0, 0, canvas.width, canvas.height)

                    }
                })              
            }
        }
    })
}

main()