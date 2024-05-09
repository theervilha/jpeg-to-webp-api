# JPEG to WEBP Simple API

Simple API that receives a JPEG image url in the index route and return its buffer as WEBP

## Usage

Make a **GET Request** putting JPEG image url in **url** parameter. Like this:

https://jpeg-to-webp.vercel.app/?url=https://thispersondoesnotexist.com

The response will be a WEBP buffer.

## Running the code in your system

**I recommend using Ubuntu or WSL**. On Windows, you may encounter problems with the 'sharp' library in installation.

In your folder, open the terminal and clone the project:

```git clone https://github.com/theervilha/jpeg-to-webp-api.git .```

Install npm packages

`npm install`

Run the API:

`node index.js`

Now you are ready to use in your localhost. [Try opening this url](http://localhost:5000/?url=https://thispersondoesnotexist.com)

#### Have fun!
