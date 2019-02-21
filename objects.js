var playlist = { Song1: "Gladiadora",
                 Song2: "First Year Of Equinox"}
                 
function updatePlaylist(playlist, artistName, songTitle){
  return (Object.assign({}, playlist, { [artistName]: songTitle}))
}