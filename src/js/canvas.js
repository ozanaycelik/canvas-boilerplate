
//import platform from './img/platform.png'
import platform from "./img/platform.png";
import hills from "./img/hills.png";
import background from "./img/background.png";
import platformSmallTall from "./img/platformSmallTall.png";

console.log(platform);
// ilgili canvas tagımızı seçtik
//canvas çerçevemiz oluyor.
const canvas = document.querySelector('canvas');

//
const  c = canvas.getContext('2d');

canvas.width = 1024//innerWidth
canvas.height = 578//innerHeight

const gravity = 1.5;
class Player {
    constructor(){
       this.speed = 10
       this.position = {
           x:100,
           y:100
       }
       this.velocity = {
           x: 0,
           y: 1
       }
       this.width = 30
       this.height = 30
    }

    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x,this.position.y,
            this.width,this.height)
    }

    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if(this.position.y + this.height + this.velocity.y 
            <= canvas.height)
            this.velocity.y += gravity
            //düşmesini sağzlıyoruz burada
            //else this.velocity.y = 0

        //this.velocity.y += gravity;
    }
}

class Platform {
    constructor({x,y,image}) {
        this.position = {
            x,
            y
        }
        this.width = image.width
        this.height = image.height

        this.image = image
    }

    draw() {
       c.drawImage(this.image,this.position.x,this.position.y) 
    }
}

class GenericObject {
  constructor({x,y,image}) {
      this.position = {
          x,
          y
      }
      this.width = image.width
      this.height = image.height

      this.image = image
  }

  draw() {
     c.drawImage(this.image,this.position.x,this.position.y) 
  }
}

function createImage(imageSrc){
  const image = new Image()
  image.src = imageSrc
  return image
}

let player = new Player();
let platforms = 
[new Platform({
    x:-1,
    y:470,
    image : createImage(platform)
}),
new Platform({
  x:createImage(platform).width - 5,
  y:470,
  image:createImage(platform)
}),
new Platform({
    x:createImage(platform).width * 2 + 100,
    y:470,
    image:createImage(platform)
  }),
  new Platform({
      x:createImage(platform).width * 3 + 200,
      y:470,
      image:createImage(platform)
    }),
    new Platform({
        x:createImage(platform).width * 4 + 300 -2,
        y:470,
        image:createImage(platform)
      }),
    new Platform({
        x:createImage(platformSmallTall).width * 4 + 300 - 2 + createImage(platform).width, 
        y:245,
        image:createImage(platformSmallTall)
    })
]
let genericObject = [
  new GenericObject({
    x:-1,
    y:-1,
    image:createImage(background)
  }),
  new GenericObject({
    x:-1,
    y:-1,
    image:createImage(hills)
  })
]


let keys = {
    right: {
        pressed: false
    },
    left : {
        pressed:false
    }
}
let ScrollOffset = 0

function init() {
     player = new Player();
 platforms = 
[new Platform({
    x:-1,
    y:470,
    image : createImage(platform)
}),
new Platform({
  x:createImage(platform).width - 5,
  y:470,
  image:createImage(platform)
}),
new Platform({
    x:createImage(platform).width * 2 + 100,
    y:470,
    image:createImage(platform)
}),
new Platform({
    x:createImage(platform).width * 3 + 200,
    y:470,
    image:createImage(platform)
}),
new Platform({
    x:createImage(platform).width * 4 + 300 - 2, 
    y:470,
    image:createImage(platform)
}),
new Platform({
    x:createImage(platformSmallTall).width * 4 + 300 - 2 + createImage(platform).width,
    y:245,
    image:createImage(platformSmallTall)
})
]
 genericObject = [
  new GenericObject({
    x:-1,
    y:-1,
    image:createImage(background)
  }),
  new GenericObject({
    x:-1,
    y:-1,
    image:createImage(hills)
  })
]
let ScrollOffset = 0
}

//player.update()



function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = 'white'
    c.fillRect(0,0,canvas.width,canvas.height)

    genericObject.forEach(genericObject=>{
      genericObject.draw()
    })

    platforms.forEach((platform) =>{
        platform.draw()
    })
    player.update()

    if (keys.right.pressed && player.position.x < 400){
        player.velocity.x = player.speed
    } else if (keys.left.pressed &&
        player.position.x>100
        ){
        player.velocity.x = -player.speed
    } else {
        player.velocity.x = 0
        if (keys.right.pressed){
            ScrollOffset += player.speed
            platforms.forEach((platform) =>{
                platform.position.x -= player.speed
            })
            genericObject.forEach(genericObject =>{
                genericObject -= player.speed * 0.66
            })
        } else if (keys.left.pressed){
            ScrollOffset -= player.speed
            platforms.forEach((platform) =>{
                platform.position.x += player.speed
            })
            genericObject.forEach(genericObject =>{
                genericObject += player.speed * 0.66
            })
        }
    }


    //console.log(ScrollOffset)

    // platform collision detection
    platforms.forEach((platform) =>{
    if (player.position.y + player.height<=
        platform.position.y && player.position.y + player.height
        + player.velocity.y >= platform.position.y 
        && player.position.x + player.width >= platform.position.x
        && player.position.x <= platform.position.x + platform.width
        ){
            player.velocity.y = 0
        }
    })

    // win condition
    if (ScrollOffset > 2000){
       console.log('You Win !') 
    }
    // lose condition
    if( player.position.y > canvas.height){
        init()
        console.log('you lose')
    }
}


animate()

window.addEventListener('keydown',({keyCode})=>{
    //console.log(keyCode)
    switch (keyCode) {
        case 65 :
            console.log('left')
            keys.left.pressed=true
            break  
        case 83 :
            console.log('down')
            break
        case 68 :
            console.log('right')
            keys.right.pressed=true
            break
        case 87 :
            console.log('up')
            player.velocity.y -= 10
            break
    }
})

window.addEventListener('keyup',({keyCode})=>{
    //console.log(keyCode)
    switch (keyCode) {
        case 65 :
            console.log('left')
            keys.left.pressed=false
            break
        case 83 :
            console.log('down')
            break
        case 68 :
            console.log('right')
            keys.right.pressed=false
            break
        case 87 :
            console.log('up')
            player.velocity.y -= 1
            break
    }
})