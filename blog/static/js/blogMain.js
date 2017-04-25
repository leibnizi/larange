var log = console.log.bind(console, '*** ')

var fresh = function () {
    var txt = document.querySelector('textarea')
    txt.addEventListener('click', function (event) {
        document.querySelector('#fresh').classList.add('fresh')
    })
}

var ajax = function(request) {
    var r = new XMLHttpRequest()
    r.open(request.method, request.url, true)
    if (request.contentType !== undefined) {
        r.setRequestHeader('Content-Type', request.contentType)
    }
    r.onreadystatechange = function(event) {
        if(r.readyState === 4) {
            request.callback(r.response)
        }
    }
    if (request.method === 'GET') {
        r.send()
    } else {
        r.send(request.data)
    }
}

var blogTemplate = function(blog) {
    var id = blog.id
    var content = blog.content
    var d = new Date(blog.created_time * 1000)
    var time = d.getMonth()+1 + '-' + d.getDate() + ' ' + d.toTimeString().slice(0, 8) + ' ' + '来自iPhone 6s'
    var t = `
    <div class="lei-blog-cell">
        <img src="img/hang.jpg" alt="face">
        <span class="fork" onclick="this.parentElement.innerHTML=''">删除</span>
        <p>leibniz</p>     
        <div class="">
            <a class="blog-title" href="#" data-id="${id}"></a>
        </div>
        <div class="">       
            <time>${time}</time>
        </div>
        <div class="blog-comments">
            <div class='new-comment'>
                <input class='comment-blog-id' type=hidden value="${id}">
                <p class='comment-content'>${content}</p>
            </div>
            <section>
                <span class="like">转发</span>
                <span class="commentAdd">
                    <span class='comment-add'
                        data-method="POST"
                        data-path="/api/comment/add"
                    >评论
                    </span>
                </span>
                <span class="like">点赞</span>                
            </section>
        </div>
        <div class="else_comment view">
            <div class="else_face">
                <img src="img/song.jpg" alt="face">
                <input type="text">
            </div>  
            <div class="else_commit">
                <span>评论</span>
            </div>
        </div>
    </div>
    `
    return t
}

var bindEvent = function(element, eventName, callback) {
    element.addEventListener(eventName, callback)
}

var bindAll = function(selector, eventName, callback) {
    var elements = document.querySelectorAll(selector)
    for(var i = 0; i < elements.length; i++) {
        var e = elements[i]
        bindEvent(e, eventName, callback)
    }
}

var insertBlogAll = function(blogs) {
    var html = ''
    for (var i = 0; i < blogs.length; i++) {
        var b = blogs[i]
        var t = blogTemplate(b)
        html += t
    }
    // 把数据写入 .lei-blogs 中, 直接用覆盖式写入
    var div = document.querySelector('.lei-blogs')
    div.innerHTML = html
    log('bind 评论 add')
    var container = document.querySelectorAll('.comment-add')
    for(var j = 0; j < container.length; j++) {
        container[j].addEventListener('click', function (event) {
            var self = event.target
            log(self)
            if(self.classList.contains('comment-add')) {
                e('.else_comment').classList.remove('view')
            }
        })

    }
}

var blogAll = function() {
    var request = {
        method: 'GET',
        url: '/api/blog/all',
        contentType: 'application/json',
        callback: function(response) {
            console.log('响应', response)
            var blogs = JSON.parse(response)
            window.blogs = blogs.reverse()
            insertBlogAll(blogs)
            // log('insert')
            // var elements = document.querySelectorAll('.fork')
            // for(var i = 0; i < elements.length; i++) {
            //     var el = elements[i]
            //     bindEvent(el, 'click', function () {
            //         el.parentElement.classList.add('delete')
            //         log('delete click', el)
            //     })
            // }
        }
    }
    ajax(request)
}

var blogNew = function(form) {
    // var form = {
    //     content: "测试内容",
    // }
    var data = JSON.stringify(form)
    var request = {
        method: 'POST',
        url: '/api/blog/add',
        data: data,
        contentType: 'application/json',
        callback: function(response) {
            console.log('响应', response)
            var res = JSON.parse(response)
        }
    }
    ajax(request)
}

var commentNew = function(form, callback) {
    // var form = {
    //     content: "测试内容",
    // }
    var data = JSON.stringify(form)
    var request = {
        method: 'POST',
        url: '/api/comment/add',
        data: data,
        contentType: 'application/json',
        callback: function(response) {
            console.log('响应', response)
            var res = JSON.parse(response)
            callback(res)
        }
    }
    ajax(request)
}

var e = function(selector) {
    return document.querySelector(selector)
}

var bindEventBlogAdd = function () {
    var button = e('#id-button-submit')
    button.addEventListener('click', function(event){
        console.log('click new')
        // 得到用户填写的数据
        var form = {
            content: e('#id-input-content').value,
        }
        // 用这个数据调用 blogNew 来创建一篇新博客
        blogNew(form)
        blogAll()
        swal(
            '恭喜',
            '博客发表成功',
            'success'
        )
    })

}

var bindEventCommentAdd = function () {

}

var bindEvents = function() {
    bindEventBlogAdd()
    bindEventCommentAdd()
}

var removeFa = function () {
    var el = e('.fork')
    el.parentElement.classList.add('delete')
    log('delete click', el)
}

var __main = function() {
    blogAll()
    bindEvents()
    fresh()
}

__main()
