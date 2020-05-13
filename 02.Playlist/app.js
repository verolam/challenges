
/*  Playlist App
---------------------------------*/

let playlist = [
  { name:   "Balavoine",
    title : "Mon fils, ma bataille",
    year:   1980
  }
]


/* Function display Playlist
---------------------------------*/
function displayPlaylist(){
 
  console.log(playlist);

}


/* Function add Playlist
---------------------------------*/
// The argument passed to the function is an Object
let msg = ""; // to display a msg if arg is empty

function addPlaylist(arg){
  if (arg.name == ""){
    alert("name is empty"); 
    msg = "true";
  }

  if (arg.title == ""){
   alert("title is empty"); 
   msg = "true";
  }

  if (arg.date == ""){
    alert("date is empty"); 
    msg = "true";
   }

  if (msg === ""){
    playlist.push(arg);
 }
}
 
// Call of the function addPlaylist()
  addPlaylist({
    name:   "Balavoine",
    title : "Sauver l'amour",
    year:   1985
  })

  addPlaylist({
    name: "Balavoine",
    title : "Le Chanteur",
    year: 1978  
  }) 

 // Call of the function displayPlaylist() 
  displayPlaylist();


