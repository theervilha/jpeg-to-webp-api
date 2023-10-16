const express = require("express");
const axios = require('axios')
const sharp = require('sharp')

const app = express();
app.use(express.json())


app.get("/", async (req, res) => {    
    url = req.query.url
    
    // Get image buffer from url
    const response = await axios.get(url,  { responseType: 'arraybuffer' })
    const buffer = Buffer.from(response.data, "utf-8")

    webp_buffer = await convert_buffer_to_webp(buffer)

    res.setHeader('Content-Type', 'image/webp');
    res.send(webp_buffer);
})

async function convert_buffer_to_webp(buffer) {
    image = await sharp(buffer)
    buffer = await image.webp()
        // Resize to use in my application
        .resize(512, 512, {
            fit: sharp.fit.inside,
            withoutEnlargement: true,
        }) 
        .toBuffer()
    return buffer
}

app.listen(5000, () => {
    console.log('Listening on port 5000.')
})

module.exports = app;