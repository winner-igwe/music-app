//Array of music
const list = [
  {
    id: 1,
    name: 'someone like you',
    artiste: 'adele',
    img: '../../music-img/adele-someone.jpg'
  },{
    id: 2,
    name: 'faded',
    artiste: 'alan walker',
    img: '../music-img/faded-alan.jpg'
  },{
    id: 3,
    name: 'why so serious',
    artiste: 'alice merton',
    img: '../music-img/serious-alice.jpg'
  },{
    id: 4,
    name: 'ye',
    artiste: 'burna boy',
    img: '../music-img/burna-ye.jpg'
  },
  {
    id: 5,
    name: 'found',
    artiste: 'zach web',
    img: '../music-img/zach-found.jpg'
  },
  {
    id: 6,
    name: 'mirror',
    artiste: 'lil-wayne ft bruno mars',
    img: '../music-img/lil-mirror.jpg'
  },
  {
    id: 7,
    name: 'runaway',
    artiste: 'aurora',
    img: '../music-img/aurora-run.jpg'
  },
  {
    id: 8,
    name: 'bam bam',
    artiste: 'camilla ft ed sheeran',
    img: '../music-img/camilla-bambam.jpg'
  },
  {
    id: 9,
    name: 'memories',
    artiste: 'maroon 5',
    img: '../music-img/maroon-memo.jpg'
  },
  {
    id: 10,
    name: 'speechless',
    artiste: 'michael jackson',
    img: '../music-img/mich-speechless.jpg'
  },
  {
    id: 11,
    name: 'not afraid',
    artiste: 'eminem',
    img: '../music-img/eminem-not.jpg'
  },
  {
    id: 12,
    name: 'deathbed',
    artiste: 'powfu',
    img: '../music-img/powfu-de.jpg'
  },
  {
    id: 13,
    name: 'i dont care',
    artiste: 'ed sheeran ft justin',
    img: '../music-img/edsheeran.jpg'
  },
  {
    id: 14,
    name: 'happier',
    artiste: 'billie eilish',
    img: '../music-img/billie-happy.jpg'
  },
  {
    id: 15,
    name: 'on the low',
    artiste: 'burna boy',
    img: '../music-img/burna-low.jpg'
  },
]




//collect the dom objects

const burger =  document.querySelector('.burger')
const aside_con = document.querySelector('.aside-con')
const header =  document.querySelector('.header')
const aside =  document.querySelector('.aside')
const hides = document.querySelectorAll('.hide')
const new_con = document.querySelector('.new-con')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const repeat = document.querySelector(".repeat")
const curr = document.querySelector('.begin')

const main = document.querySelector(".main")
const play_btn = document.querySelector(".lg")
const current = document.getElementById('current')
const duration = document.getElementById('duration')
const main_bar = document.getElementById('main-bar')
const bar_control = document.getElementById('bar-control')
const dot = document.getElementById('dot')
const main_vol = document.getElementById('main-vol')
const vol_control = document.getElementById('vol-control')
const vol_dot = document.getElementById('vol-dot')
const search = document.querySelector(".search")
const magnify = document.querySelector(".magnify")

magnify.addEventListener('click', () => {
  search.style.display = 'block'
})

//add event listener for navbar
burger.addEventListener('click', () => {
  aside_con.classList.toggle('show-con')
  aside.classList.toggle('show-aside')
  header.classList.toggle('hide-header')
  hides.forEach((hide) => {
    hide.classList.toggle('hide-new')
  })
})


//loop through the list using .map and add the songs/items to the container
  const items = list.map((item) => {
    return ` <div class="new" id="${item.id}" data-id = ${item.artiste}>
    <img src="${item.img}" alt="" >
    <p>${item.name}</p>
  </div>`
  }).join('')
  new_con.innerHTML = items

  //add event listener for search
  let objects
  search.addEventListener('keypress', (e) => {
    //create an empty array
    let names = []
    songs.forEach((song) => {
      if(song.dataset.id == search.value) {
        names.push(`${song.outerHTML}`)
      }
      })
      objects = names.map((name) => {
        return name
    })
    //if the key action is enter, the following code will run
    // check out the "mul()" function belowwwwwww
    if (e.key == 'Enter') {
      new_con.innerHTML = objects
      //get the songs as we will only have access after setting the html of ''new_con
      const songs = document.querySelectorAll('.new')
      //PS: the prev,next, and shuffle functions will behave during search will behave as
      //if in the full array
      mul(songs)
    }
  })
  

const songs = document.querySelectorAll('.new')
const shuffle = document.querySelector('.shuffle')





// let index = 0

// set FLAGS
let start = true
let pause = true
let two_flag = true;


window.addEventListener('DOMContentLoaded', () => {
	curr.style.visibility = 'hidden'
  mul(songs)
  vol_control.style.width = `${main_vol.value}%`
  vol_dot.style.left = `${main_vol.value}%`
  music.volume = main_vol.value/100

})


//add listener for repeat
repeat.addEventListener('click', () => {
	setInterval(() => {
    //if the current time equals the music duration,i.e the music has finished playing,
		if(music.currentTime == music.duration) {
			music.pause()
      //set the music id to the initial music_id,i.e replay and call our add func
			music_id = music_id
			add(music_id)
		}
	}, 0000)
})



//add listener for 'main' (pause/play btn)
main.addEventListener('click', (e) => {
  //if start and pause is true (which is default),i.e if we immediately
  //click the main btn on load,this will run 
	if (start && pause) {

		music_id = 1
		music = new Audio(`../music/audio${music_id}.mp3`)
			curr.innerHTML = `
			<img src="${list[music_id-1].img}" alt="">
			<div class="p-text">
				<h3>${list[music_id-1].name}</h3>
				<p>${list[music_id-1].artiste}</p>
			</div>`
			curr.style.visibility = 'visible'
			play_btn.classList.remove('lg')
			play_btn.classList.add('pause')
			music.play()
			interval()
      //we set start to false after play
      start = false
      //if not pause or not start,this will run
	}else if (!pause || !start) {
    if (music.paused || music.currentTime <= 0) {
      music.play()
      play_btn.classList.remove('lg')
      play_btn.classList.add('pause')
      play = false
    }else {
      music.pause()
      play_btn.classList.add('lg')
      play_btn.classList.remove('pause')
    }
  }
  
})


//add event listener for scroll
next.addEventListener('click', () => {
  music.pause()
  music_id ++
  if (music_id == list.length + 1) {
    //set the music id to i idf we reach the end of the list
    music_id = 1
    //scroll to start
    new_con.scrollTo ({
      left: 0,
      top: 0
    })
  }
	if (music_id > 1) {
		prev.style.display = 'block'
    new_con.scrollTo ({
      left: 177 * (music_id - 1),
      top: 0
    })
	}
  //check the add() beloww 
  add(music_id)

  
})


prev.addEventListener('click', () => {
  music.pause()
  music_id --
  if (music_id == 0) {
    music_id = list.length
    new_con.scrollTo ({
      left: 177 * (music_id - 1),
      top: 0
    })
  }
  if (music_id < 8) {
    new_con.scrollTo ({
      left: 0,
      top: 0
    })
  } 
  add(music_id)

})


shuffle.addEventListener('click', () => {
  music.pause()
  //the shuffle event will chose a random num, and set it to the music_id
  music_id = Math.floor(Math.random() * (list.length + 1))
  if (music_id == 0) {
    music_id = list.length
    new_con.scrollTo ({
      left: 177 * (music_id - 1),
      top: 0
    })
  }
  if (music_id < 6) {
    new_con.scrollTo ({
      left: 0,
      top: 0
    })
  } else {
    new_con.scrollTo ({
      left: 177 * (music_id - 1),
      top: 0
    })
  }
  add(music_id)
})


const add = (music_id) => {
  //the add func sets the image,artiste name, and title
  //at the bottom right corner, creates a new music, play the music,and make
  //some changes to the play_btn
  curr.innerHTML = `
  <img src="${list[music_id-1].img}" alt="">
  <div class="p-text">
    <h3>${list[music_id-1].name}</h3>
    <p>${list[music_id-1].artiste}</p>
  </div>`
	curr.style.visibility = 'visible'
  music = new Audio(`../music/audio${music_id}.mp3`)

  music.play()
  play_btn.classList.remove('lg')
  play_btn.classList.add('pause')
}


//function for change in input range,
//i added an omchange to the html
function sleekto () {

}

main_bar.addEventListener('change', () => {
  music.currentTime = main_bar.value/100 * music.duration
  let curr_min = Math.floor(music.currentTime / 60)
  let curr_sec = Math.floor(music.currentTime % 60)

  let position = parseInt((music.currentTime/music.duration) * 100) 
  main_bar.value = position
  bar_control.style.width = `${position}%`
  dot.style.left = `${position}%`
  if (curr_sec < 10) {
    current.innerText = `${curr_min}:0${curr_sec}`
  }else {
    current.innerText = `${curr_min}:${curr_sec}`
  }
})

//vol
main_vol.addEventListener('change', () => {
  vol_control.style.width = `${main_vol.value}%`
  vol_dot.style.left = `${main_vol.value}%`
  music.volume = main_vol.value/100

})

//an interval func for the sleek

const interval = () => {
	setInterval( () => {
		let curr_min = Math.floor(music.currentTime / 60)
		let curr_sec = Math.floor(music.currentTime % 60)
		let full_min = Math.floor(music.duration / 60)
		let full_sec = Math.floor(music.duration % 60)

		let position = parseInt((music.currentTime/music.duration) * 100) 
		main_bar.value = position
		bar_control.style.width = `${position}%`
		dot.style.left = `${position}%`

		if (curr_sec < 10) {
			current.innerText = `${curr_min}:0${curr_sec}`
		}else {
			current.innerText = `${curr_min}:${curr_sec}`
		}
		if (full_sec < 10) {
			duration.innerText = `${full_min}:0${full_sec}`
		}else {
			duration.innerText = `${full_min}:${full_sec}`
		}
		if (music.currentTime == music.duration) {
			music.pause()
			music_id ++
			console.log(music_id)
			if (music_id == list.length + 1) {
				music_id = 1
				new_con.scrollTo ({
					left: 0,
					top: 0
				})
			} 
		
			if (music_id > 7) {
				new_con.scrollTo ({
					left: 177 * (music_id - 1),
					top: 0
				})
			}
			add(music_id)
		
		}
	},0000)
}


const mul = (songs) => {
  //we loop through the song and listen for a click event
  songs.forEach((song)=> {
    song.addEventListener('click', (e) => {
      music_id = e.currentTarget.id
      //we set pause to false, so we can pause and play
      pause = false
      //remember we set start to false immed we click on main,
      //so the song from main is still active and we click in a song from the array,
      //we pause the initial song
      if (!start) {
        music.pause()
        music = new Audio(`../music/audio${music_id}.mp3`)
        curr.innerHTML = `
        <img src="${list[music_id-1].img}" alt="">
        <div class="p-text">
          <h3>${list[music_id-1].name}</h3>
          <p>${list[music_id-1].artiste}</p>
        </div>`
        curr.style.visibility = 'visible'
        play_btn.classList.remove('lg')
        play_btn.classList.add('pause')
        music.play()
        interval()
      }else {
        //else of we click directly
        //the "two_flag" flag is to ensure two songs dosen't
        //play concurrently
        if (two_flag) {
          music = new Audio(`../music/audio${music_id}.mp3`)
          curr.innerHTML = `
          <img src="${list[music_id-1].img}" alt="">
          <div class="p-text">
            <h3>${list[music_id-1].name}</h3>
            <p>${list[music_id-1].artiste}</p>
          </div>`
          curr.style.visibility = 'visible'
          play_btn.classList.remove('lg')
          play_btn.classList.add('pause')
          music.play()
          two_flag = false
          interval()
        } else {
          return
        }

      }
      
    })
  })
}








