
function saveOptions(e) {
  browser.storage.local.set({
    colour: document.getElementById("selectFolderName").value
  });
  e.preventDefault();
  updateStatus();
}

function updateStatus(){
	
	var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
	
	
}

function restoreOptions() {
  var gettingItem = browser.storage.local.get('colour');
  gettingItem.then((res) => {
    document.querySelector("#colour").value = res.colour || 'Firefox red';
  });
  getFolders();
  
  
}
//Todo Get so All folders are Found
function getFolders(){
	browser.bookmarks.getTree(function(bookmarkTreeNodes) {
		var select = document.getElementById("selectFolderName");
		var op = bookmarkTreeNodes[0].children;
		var op2 = op[1].children;
		
				
		for(var i = 0; i < op2.length; i++) {
			var opt = op2[i];
			console.log(opt);
			
			var el = document.createElement("option");
			el.textContent = opt.title;
			el.value = opt.title;
			select.appendChild(el);

		}
		
	});	
	
	
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);


/*



// Saves options to chrome.storage
function save_options() {
  var folderName = document.getElementById('folderName').value;
  console.log("folername "+folderName);
  browser.storage.local.set({
    name: folderName,
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
	document.getElementById('currentFolder').value = folderName;
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// get folder stored in chrome.storage.
// populates the folder options from folders in the bookmark bar 
// todo make find all folders 
function restore_options() {
  browser.storage.local.get( "name", function(items) {
	  
	console.log("item "+items.name);
    document.getElementById('currentFolder').value = items.name;
	
	
	browser.bookmarks.getTree(function(bookmarkTreeNodes) {
		var select = document.getElementById("selectFolderName");
		var op = bookmarkTreeNodes[0].children;
		console.log(op);
		var op2 = op[0].children;
		console.log(op2);
				
		for(var i = 0; i < op2.length; i++) {
			var opt = op2[i];
			if(op2[i].children) {
				
				var el = document.createElement("option");
				el.textContent = opt.title;
				el.value = opt;
				select.appendChild(el);
				
			} 

		}
		
	});

  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
	
	
*/