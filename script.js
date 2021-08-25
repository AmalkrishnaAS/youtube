$(document).ready(function(){
    let API_KEY="AIzaSyBN98yeJut90WIFgL_3MBAzl29H4dE1tM4" //enter the API key here
    $("#form").submit(function(event) {
        event.preventDefault();
        let search=$("#search").val();
        let video=''
        videoSearch(API_KEY,search,5)
    })
    function videoSearch(key,search,count){
        $("#videos").empty()
        if(search.trim().length!=0){
        $.get("https://www.googleapis.com/youtube/v3/search?part=snippet&key="+key+"&type=video&part=snippet&maxResults="+count+"&q="+search,function(data){console.log(data)
    data.items.forEach(function(item){
        video=`<iframe width="560" height="315" src="https://www.youtube.com/embed/${item.id.videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="card"></iframe>`
        $("#videos").append(video);
    }
    )})
    }
else
alert("please input a valid keyword")}

})