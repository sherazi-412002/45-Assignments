
function make_album(artist:string, title:string, tracks?:number){
    const album:{artistName:string, albumTitle:string, noOfTracks?:number}={

        artistName : artist,
        albumTitle : title,
    }

    if (tracks !== undefined){
        album.noOfTracks = tracks
    }

    return album;
}

console.log(make_album('Name 1','Album Title 1'));
console.log(make_album('Name 2','Album Title 2'));
console.log(make_album('Name 3','Album Title 3',10));
