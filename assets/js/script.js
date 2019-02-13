$(document).ready(function(){
	var projects = [{title: "REACT Book Search App",
                     href: "https://github.com/ajam2617/BookSearch",
                     src: "assets/images/Booksearch.png"},
                    {title: "REACT Game",
                     href: "https://github.com/saranyamohandas/ClickyGame",
                     src: "assets/images/clickygame.png"},
                    {title: "Mongo NewsScraper",
                     href: "https://github.com/saranyamohandas/NewsScraper",
                     src: "assets/images/newspaperUI.png"},
                    {title: "Eat-da-burger",
                     href: "https://github.com/saranyamohandas/burger.git",
                     src: "assets/images/burger_app.png"},
                    {title: "Sparrow_1.0",
                     href: "https://github.com/JacksonSabol/Sparrow-Tasker.git",
                     src: "assets/images/sparrow.png"},
                    {title: "FriendFinder",
                     href: "https://github.com/saranyamohandas/FriendFinder.git",
                     src: "assets/images/friendfinder.png"},
                    {title: "Bamazon",
                     href: "https://github.com/saranyamohandas/bamazon.git",
                     src: "assets/images/bamazoncust1.png"},
                    {title: "GifTastic",
                     href: "https://github.com/saranyamohandas/GifTastic",
                     src: "assets/images/gifTastic.png"},
                    {title: "Train Scheduler",
                     href: "https://github.com/saranyamohandas/Train-Scheduler",
                     src: "assets/images/train_scheduler.png"},
                    {title: "Game of thrones RPG",
                     href: "https://saranyamohandas.github.io/unit-4-game",
                     src: "assets/images/game.png"},
                    {title: "Trivia Game",
                     href: "https://saranyamohandas.github.io/TriviaGame",
                     src: "assets/images/trivia_game.png"},
                    {title: "Word Guess Game",
                     href: "https://saranyamohandas.github.io/Word-Guess-Game",
                     src: "assets/images/Word_guess_game.png"},
                    {title: "Word Guess Game",
                     href: "https://saranyamohandas.github.io/Word-Guess-Game",
                     src: "assets/images/Word_guess_game.png"}
                   ];

    var target = $("#project");
    var parentRow = $("<div>"); 
    parentRow.addClass("row");
    
    var colCount = 0;
    var newRow = true;
    
    console.log(projects)


    for(i=0;i<projects.length;i++){
    	console.log("inside for")
    	if(colCount < 4){
            addCurrRow(projects[i]);
    		//newRow = false;
            console.log(colCount)
    		
    		colCount ++;

    	} else if (colCount >= 4){
    		colCount = 0;
    		addNewRow(projects[i])
            
        }

        

    }
    
    function addCurrRow(obj){
            createChildCol(obj);
            
    };
    
    function addNewRow(obj){
        parentRow = $("<div>"); 
        parentRow.addClass("row");
        colCount ++
        createChildCol(obj);
               
    }
    
    function createChildCol(obj){
        var childCol = $("<div>");
        childCol.addClass("col");
        var caption = $("<div>");
        caption.addClass("caption");
        var para = $("<p>");
        var link = $("<a>");
        var img = $("<img>");
        link.attr("href",projects[i].href);
        img.addClass("img-thumbnail");
        img.attr("src",projects[i].src);
        link.append(img);
        para.text(projects[i].title);
        caption.append(para);
        childCol.append(link,caption)
        parentRow.append(childCol);
        target.append(parentRow);
        
    }
})