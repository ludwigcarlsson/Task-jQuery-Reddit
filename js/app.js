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
        $(data.data.children).each(function(index, item) { // loops through each entry recieved from request
        
            const postBody = $('<div class="post-body"></div>').click(function() {
                window.location.href = "https://www.reddit.com"+item.data.permalink;
            }); // create a post-body that redirects on click

            const info = $('<div class="post-info"></div>')
            
            const title = $('<p></p>').text(item.data.title); 
            const author = $('<p></p>').text("Author: "+item.data.author); 
            const upvotes = $('<p></p>').text("Upvotes: "+item.data.ups); 

            info.append(title, author, upvotes);

            const img = $('<img alt="image">');
            img.attr('src', item.data.url);

            postBody.append(img, info);

            $posts.append(postBody); // add each post to container
        });

        $('div div').mouseover(function() { // animation (hover-effect on cards)
            $(this).stop().animate({
                opacity: '0.6'
            }, 500);
        });
        $('div div').mouseout(function() {
            $(this).stop().animate({
                opacity: '1'
            }, 500);
        });
    });
});