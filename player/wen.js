var e = function(selector) {
    return document.querySelector(selector)
}

var songs = [
    '1.mp3',
    '2.mp3',
    '3.mp3',
    '4.mp3',
    '5.mp3',
]

var player = e('#player-1')

var currentSongIndex = songs.indexOf(player.src.slice(-5))

window.onload = function() {
    player.play()
}

var play = e('.player-play')
play.addEventListener('click', function(){
    if (play.classList.contains('pause')) {
        player.pause()
        play.classList.remove('pause')
        e('img:nth-child(3)').src = "img/暂停.png"
    }
    else {
        player.play()
        play.classList.add('pause')
        e('img:nth-child(3)').src = "img/播放.png"
    }

})

player.addEventListener('canplay', function(){
    // audio 载入音乐需要时间, 载入完成后会触发 'canplay' 事件
    // 所以在 canplay 里面设置时间
    var durationSpan = e('.player-time-duration')
    durationSpan.innerHTML = Math.ceil(player.duration)
})
// audio 在播放音乐的时候会触发 'timeupdate' 事件
// 也用 setInterval 来定时刷新当前时间
player.addEventListener('timeupdate', function(){
    // 所以在 canplay 里面设置时间
    var timeSpan = e('.player-time-current')
    timeSpan.innerHTML = Math.ceil(player.currentTime)
})

var playList = e('.play-list')
var path = function() {
    playList.addEventListener('click', function(event){
        var target = event.target
        if (target.classList.contains('play-list-song')) {
            var song = target.dataset.path
            player.src = song
            currentSongIndex = songs.indexOf(song)
            console.log(currentSongIndex)
        }
        player.play()
    })
}

var play_svg = function() {
    var target = e('.svg')
    var target1 = e('use:nth-child(1)')
    var target2 = e('use:nth-child(2)')
    var target3 = e('use:nth-child(3)')
    target.addEventListener('click', function() {
        if (!target1.classList.contains('view')) {
            target1.classList.add('view')
            target2.classList.remove('view')
            console.log('2')
        }
        else if (!target2.classList.contains('view')) {
            target2.classList.add('view')
            target3.classList.remove('view')
            console.log('3')
        }
        else if (!target3.classList.contains('view')) {
            target3.classList.add('view')
            target1.classList.remove('view')
            console.log('1')
        }
    })
}

var single = function() {
    var singleClass = e('.play_single')
    player.addEventListener('ended', function(){
        // 把时间设置为 0, 就是开头, 然后再播放即可
        if (!singleClass.classList.contains('view')) {
            player.currentTime = 0
            player.play()
        }
    })
}

var loop = function() {
    var currentSongIndex = songs.indexOf(player.src.slice(-5))
    var loopClass = e('.play_loop')
    player.addEventListener('ended', function(){
        if (!loopClass.classList.contains('view')) {
            currentSongIndex = (currentSongIndex + 1) % songs.length
            var song = songs[currentSongIndex]
            player.src = song
            console.log('loopSong')
            player.play()
        }
    })
}

var randmo = function() {
    var randomClass = e('.play_random')
    player.addEventListener('ended', function(){
        // 随机获取一个 index
        // parseInt 和 Math.floor 在这里都是一样的, 取整
        // Math.random() 返回一个 [0, 1) 之间的小数
        if (!randomClass.classList.contains('view')) {
            var index = parseInt(Math.random() * songs.length)
            var song = songs[index]
            player.src = song
            console.log('randomsong')
            player.play()
        }
    })

}

var play_up = function() {
    var up = e('.player-up')
    var randomClass = e('.play_random')
    up.addEventListener('click', function() {
        if (!randomClass.classList.contains('view')) {
            var index = parseInt(Math.random() * songs.length)
            var song = songs[index]
            player.src = song
            player.play()
        }
        else {
            currentSongIndex = (4 + currentSongIndex) % songs.length
            var song = songs[currentSongIndex]
            player.src = song
            console.log(currentSongIndex)
            player.play()
        }
    })
}

var play_down = function() {
    var down = e('.player-down')
    var randomClass = e('.play_random')
    down.addEventListener('click', function() {
        if (!randomClass.classList.contains('view')) {
            var index = parseInt(Math.random() * songs.length)
            var song = songs[index]
            player.src = song
            player.play()
            console.log('down')
        }
        else {
            currentSongIndex = (currentSongIndex + 1) % songs.length
            var song = songs[currentSongIndex]
            player.src = song
            console.log(currentSongIndex)
            player.play()
        }
    })
}

var toggleClass = function(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className)
    } else {
        element.classList.add(className)
    }
}

var menu = function() {
    var menu1 = e('#menu')
    menu1.addEventListener('click', function() {
        toggleClass(playList, 'view')
    })
}

play_svg()
path()
menu()
single()
loop()
randmo()
play_up()
play_down()
