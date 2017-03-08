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

function traverseBookmarks(bookmarkTreeNodes) {
	
	alert("did it");

}