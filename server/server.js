const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

// Load env variables
dotenv.config({ path: "./.env" });

async function startServer() {
  // Connect to MongoDB Atlas
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("🍃 Connected to MongoDB Atlas successfully");

  const server = new ApolloServer({
    typeDefs,
    resolvers,

    // Enable GraphiQL GUI
    introspection: true,
    playground: true,
  });

  await server.start();
  const app = express();

  server.applyMiddleware({ app });

  app.use((req, res) => {
    res.type("html").send(html);
  });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

startServer();

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Christianity Website Server</title>
    <link rel="icon" href="https://res.cloudinary.com/dlw9hjlzv/image/upload/v1685306257/BIBLE/cross_cgnpm5.ico" type="image/x-icon">

    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
   
   
    <style>
      
    @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
    
    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz@6..12&display=swap');


      html {
        font-family: 'Nunito Sans', sans-serif;
        font-weight: 500;
        font-size: calc(42rem / 16);
      }
      body {
        background: #FFFFFF;
        color: #000000;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
        text-align: center;
        flex-direction: column;
      }
    </style>


  </head>
  <body>
    <section>

    <img src="https://res.cloudinary.com/dlw9hjlzv/image/upload/v1685306254/BIBLE/cross_qbjzmn.png" alt="Droid P.A Logo" width="100" height="100">


    <p>🚀 Christianity Website -- Christianity Server 🍃</p>
    </section>
  </body>
</html>
`;
