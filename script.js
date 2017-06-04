$(document).ready(function(){

	$("img").click(function(){
		var houseId = $(this).attr("id");
		console.log(houseId);
		var apiCall =  "https://www.anapioficeandfire.com/api/houses/"+houseId;

		$.get(apiCall, function(res){
			console.log(res);
			$("#content h4").html("<h4>House Details: </h4>");
			$("#houseInfo").css("border", "2px solid black");
			$("#houseName").html("Name: "+res.name);
			$("#houseWords").html("Words: " + res.words);
			$("#houseTitles").html("Titles: ").append(function(){
				for (var i = 0; i < res.titles.length; i++){
					if(i == res.titles.length-1){
						$("#houseTitles").append(res.titles[i]+".")
					}
					else{
						$("#houseTitles").append(res.titles[i] + ", ");
					}
				}
			});
		}, 'json');
	});
})
