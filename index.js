// // Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
  { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
  { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
  { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
  { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
  { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
  { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
  { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
  { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
  { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
  { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
  { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
  // Feel free to add even more songs
  { title: "Praise The Lord (Da Shine)", artist: "A$AP Rocky", genre: "Hip-Hop" },
  { title: "Starlight", artist: "Dave", genre: "Hip-Hop" },
  { title: "God's Plan", artist: "Drake", genre: "Pop" },
  { title: "Poetic Justice", artist: "Kendrick Lamar", genre: "Hip-Hop" },
  { title: "Wherever I Go", artist: "Brent Faiyaz", genre: "R&B" },
];

// // Object containing each Guardian's preferred genre
const guardians = {
  "Star-Lord": "Rock",
    "Gamora": "Pop",
    // Add preferences for Drax, Rocket, and Groot
    "Drax": "Hip-Hop",
    "Rocket": "R&B",
    "Groot": "Rock",
};
console.log(guardians)

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    // Your code here

  const playlists = Object.fromEntries(
      Object.entries(guardians).map(([guardian, genre]) => {
          const playlist = songs.filter(song => song.genre === genre);
          return [guardian, playlist];
      })
  );
console.log(playlists)

  // Reference to the #playlists div
  const playlistsDiv = document.getElementById('playlists');

  for (const guardian in playlists) {
      // Made a new div element to hold the playlist
      const playlistDiv = document.createElement('el');
      playlistDiv.classList.add('playlist');

      // Header element for the guardian's name
      const header = document.createElement('h2');
      header.textContent = guardian;

      // Appended the header for the playlist div
      playlistDiv.appendChild(header);

      // Created an unordered list to hold the songs
      const ul = document.createElement('ul');

      playlists[guardian].forEach(song => {
          // Created a list item for each song
          const li = document.createElement('li');
          li.textContent = `${song.title} - ${song.genre}`;

          // Appended the list item to the unordered list
          ul.appendChild(li);
      });

      // Appended the unordered list to the playlist div
      playlistDiv.appendChild(ul);

      // Appended the playlist div to the #playlists div
      playlistsDiv.appendChild(playlistDiv);
  }
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);



