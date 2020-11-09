$(document).ready(function() {

    const $posts = $('#posts');

    $.ajax({
        url: 'https://www.reddit.com/r/memes/top.json?limit=15',
        method: 'GET',
        success: function() {
            console.log('successful request');
        },
        error: function(error) {
            console.log('error: ', error);
        }
    }).done(function (data) {
        $(data.data.children).each(function(index, item) {
            const post = `
                <div class="post-body">
                    <div class="post-title"><a href="https://www.reddit.com${item.data.permalink}">${item.data.title}</a></div>
                </div>
            `
            $posts.append(post); // add each post to container
        });
    });

});