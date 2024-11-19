const movies =[
    {
        "id": 1,
        "title": "The Dark Knight",
        "description": "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
        "genre": ["Action", "Crime", "Drama"],
        "rating": 9.0,
        "release_date": "2008-07-18",
        "poster": "https://i.pinimg.com/736x/5f/fe/79/5ffe79003530da912a82acac80be1426.jpg",
        "modalBg":"https://i.pinimg.com/736x/6b/be/7e/6bbe7e8dc64af7b3fdd30be86039e33f.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=EXeTwQWrcwY",
        "runtime": 152
      },
      {
        "id": 2,
        "title": "Inception",
        "description": "A thief who enters the dreams of others to steal secrets from their subconscious is given the inverse task of planting an idea into the mind of a CEO.",
        "genre": ["Action", "Adventure", "Sci-Fi"],
        "rating": 8.8,
        "release_date": "2010-07-16",
        "poster": "https://i.pinimg.com/736x/e8/34/93/e8349338743f7064fee899ce4b034c55.jpg",
        "modalBg":"https://i.pinimg.com/736x/fa/20/85/fa2085a086003ebe5cccafeeeaf9952e.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=YoHD9XEInc0",
        "runtime": 148
      },
      {
        "id": 3,
        "title": "The Shawshank Redemption",
        "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        "genre": ["Drama"],
        "rating": 9.3,
        "release_date": "1994-09-22",
        "poster": "https://i.pinimg.com/736x/bb/0e/f9/bb0ef99b7d71bb27e22f57d2156b7b5d.jpg",
        "modalBg":"https://i.pinimg.com/736x/9a/7c/3b/9a7c3b314ffb88781e69688622886895.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=6hB3S9bIaco",
        "runtime": 142
      },
      {
        "id": 4,
        "title": "The Matrix",
        "description": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        "genre": ["Action", "Sci-Fi"],
        "rating": 8.7,
        "release_date": "1999-03-31",
        "poster": "https://i.pinimg.com/736x/18/d7/4e/18d74ef46e722828f75cca91b009f4a5.jpg",
        "modalBg":"https://i.pinimg.com/736x/01/e0/cd/01e0cd3bfe0bb8510d8a776636c4540c.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=vKQi3bBA1y8",
        "runtime": 136
      },
      {
        "id": 5,
        "title": "Interstellar",
        "description": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "genre": ["Adventure", "Drama", "Sci-Fi"],
        "rating": 8.6,
        "release_date": "2014-11-07",
        "poster": "https://i.pinimg.com/736x/0b/34/ce/0b34ce2145b475247577a5d438a199b0.jpg",
        "modalBg":"https://i.pinimg.com/736x/fb/b4/f5/fbb4f5af1e4f376a210f761765fa9ba4.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=zSWdZVtXT7E",
        "runtime": 169
      },
      {
        "id": 6,
        "title": "The Godfather",
        "description": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        "genre": ["Crime", "Drama"],
        "rating": 9.2,
        "release_date": "1972-03-24",
        "poster": "https://i.pinimg.com/736x/11/99/dc/1199dc6273680f175fd9b06c9c36d08a.jpg",
        "modalBg":"https://i.pinimg.com/736x/27/16/ee/2716ee42d6eac041f5d4e1a8630b3dc0.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=sY1S34973zA",
        "runtime": 175
      },
      {
        "id": 7,
        "title": "Avengers: Endgame",
        "description": "After the devastating events of Avengers: Infinity War (2018), the Avengers assemble once again to reverse Thanos' actions and restore balance to the universe.",
        "genre": ["Action", "Adventure", "Sci-Fi"],
        "rating": 8.4,
        "release_date": "2019-04-26",
        "poster": "https://i.pinimg.com/736x/ff/a4/ac/ffa4acfb9370992ddb8818f10c0e028e.jpg",
        "modalBg":"https://i.pinimg.com/736x/2f/80/3d/2f803d48c3048a03f183534025aa7920.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=TcMBFSGVi1c",
        "runtime": 181
      },
      {
        "id": 8,
        "title": "The Lion King",
        "description": "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
        "genre": ["Animation", "Adventure", "Drama"],
        "rating": 8.5,
        "release_date": "1994-06-15",
        "poster": "https://i.pinimg.com/736x/fd/0c/44/fd0c44fd41b80385b1a21999a42195f9.jpg",
        "modalBg":"https://i.pinimg.com/736x/a8/81/42/a88142292f2bde7bbbc0f4192063a164.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=7TavVZMewpY",
        "runtime": 88
      },
      {
        "id": 9,
        "title": "Parasite",
        "description": "All unemployed, Ki-taek’s family takes peculiar interest in the wealthy and glamorous Park family that they are hired to serve.",
        "genre": ["Comedy", "Drama", "Thriller"],
        "rating": 8.6,
        "release_date": "2019-05-30",
        "poster": "https://i.pinimg.com/736x/a9/7d/26/a97d26449214bb756c75b4ed88d7b06e.jpg",
        "modalBg":"https://i.pinimg.com/474x/15/5b/39/155b392dec8c10e8e4240b5b05288e1c.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=5xH0HfJHsaY",
        "runtime": 132
      },
      {
        "id": 10,
        "title": "Spider-Man: No Way Home",
        "description": "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear.",
        "genre": ["Action", "Adventure", "Sci-Fi"],
        "rating": 8.3,
        "release_date": "2021-12-17",
        "poster": "https://i.pinimg.com/736x/b3/64/71/b36471519fbddde3346067c1d7ad0127.jpg",
        "modalBg":"https://i.pinimg.com/736x/b2/a7/17/b2a717d3b4b3d7ac6f36823245bf6704.jpg",
        "trailer_url": "https://www.youtube.com/watch?v=JfVOs4VSpmA",
        "runtime": 148
      }
]
  
export default movies