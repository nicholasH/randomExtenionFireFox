document.addEventListener("click", function(e) {



  if (e.target.classList.contains("link")) {
	  console.log("test")
      var gettingTree = browser.bookmarks.getTree();
	  gettingTree.then(traverseBookmarks);
  }
  else if(e.target.classList.contains("clear")){
	    
		browser.tabs.reload();
		window.close();

  }
  else{
	  return;
  }

  //var chosenPage = "https://" + e.target.textContent;


});
var folderArray = [];
function traverseBookmarks(bookmarkTreeNodes) {
	
	for(var i=0;i<bookmarkTreeNodes.length;i++) {
		
		
			if(bookmarkTreeNodes[i].title == "testFolder"){
				console.log("found it "+i);
				getRandomLink(bookmarkTreeNodes[i].children);
				return;
			}
		
		
		if(bookmarkTreeNodes[i].children) {
			traverseBookmarks(bookmarkTreeNodes[i].children);
			folderArray.push(bookmarkTreeNodes[i]);
		} 
			
	}	

}


function getRandomLink(bookmarkTreeNodes){
	ran =  Math.floor(Math.random() * (bookmarkTreeNodes.length));
	ranUrl = bookmarkTreeNodes[ran].url;
	browser.tabs.create({ url: ranUrl });
	
}