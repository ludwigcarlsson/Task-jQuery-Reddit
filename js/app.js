$(document).ready(function() {

    const $posts = $('#posts');

    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/todos',
        method: 'GET',
        success: function(data) {
            console.log('successful request');
        },
        error: function(error) {
            console.log('error: ', error);
        }
    }).done(function (data) {
        $(data).each(function(index, item) {
            const post = `
                <div class="post-body">
                    <div class="post-title">${item.title}</div>
                </div>
            `
            console.log(index);
            $posts.append(post);
        });
    });

});