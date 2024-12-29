import express from "express"
import pg  from "pg";

const app = express();
const PORT = 3000;
app.set('view engine', 'ejs');
app.use(express.static("public"))
app.use(express.json()) // body-parser is now deprecated as of Express 4.16+
app.use(express.urlencoded({ extended: true }))


//routes
app.get('/', (req, res) => {
    res.render('index', {
        books: [
          {
            title: 'All The Light We Cannot See',
            author: 'Anthony Doerr',
            votes: '1,988,288',
            rating: '1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique.',
            image: 'https://pixlr.com/images/generator/how-to-generate.webp'
          },
          {
            title: 'Where The Crawdads Sing',
            author: 'Delia Owens',
            votes: '1,988,288',
            rating: '4',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique.',
            image: 'https://cdn.pixabay.com/photo/2024/01/31/18/39/vibrant-8544591_1280.png'
          },
          {
            title: 'Rich People Problems',
            author: 'Kevin Kwan',
            votes: '1,988,288',
            rating: '3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique.',
            image: 'rich-people-problems.jpg'
          },
          {
            title: 'Where The Crawdads Sing',
            author: 'Delia Owens',
            votes: '1,988,288',
            rating: '0',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique.',
            image: 'https://cdn.pixabay.com/photo/2024/01/31/18/39/vibrant-8544591_1280.png'
          },
          {
            title: 'Rich People Problems',
            author: 'Kevin Kwan',
            votes: '1,988,288',
            rating: '2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique.',
            image: 'rich-people-problems.jpg'
          }

        ]
      });
  });
app.listen(PORT,(error)=>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
})