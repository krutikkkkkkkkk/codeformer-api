//install express
//install dotenv
import express from 'express'
import Replicate from 'replicate'
import dotenv from 'dotenv'
dotenv.config()
let PORT = 3000 || process.env.PORT;

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
}
)

//take image url as url parameter
app.get('/api', (req, res) => {
  const image = req.query.image
  
  try {
    const decodedUrl = decodeURIComponent(image);
    // Additional validation or processing (optional)
    res.send(`Image URL is ${decodedUrl}`);
  } catch (error) {
    console.error('Error processing image URL:', error);
    res.status(400).send('Invalid image URL format');
  }
});


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
}
)


// const replicate = new Replicate({
//   auth: process.env.REPLICATE_API_TOKEN,
//   userAgent: 'https://www.npmjs.com/package/create-replicate'
// })
// const model = 'sczhou/codeformer:7de2ea26c616d5bf2245ad0d5e24f0ff9a6204578a5c876db53142edd9d2cd56'
// const input = {
//   image: 'https://replicate.delivery/mgxm/7534e8f1-ee01-4d66-ae40-36343e5eb44a/003.png',
//   upscale: 2,
//   face_upsample: true,
//   background_enhance: true,
//   codeformer_fidelity: '0.1',
// }

// console.log({ model, input })
// console.log('Running...')
// const output = await replicate.run(model, { input })
// console.log('Done!', output)
