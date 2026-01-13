Welcome to my personal portfolio, built with React and Vite. This site showcases my journey as a Full-Stack Developer and Data Science enthusiast, highlighting my skills in building modern, data-driven web applications. Here you can explore my key projects, from AI-powered agricultural systems to financial data tools, which reflect my passion for creating scalable and intelligent software solutions.

## Adding Images

To add images to the portfolio:

1. Place your image files in the `src/assets/images` directory
2. Import the image in your component:
   ```javascript
   import myImage from './assets/images/Portfolio_Img.png';
   ```
3. Use the image in your JSX:
   ```jsx
   <img src={myImage} alt="A quick look at my front page of the portfolio" />
   ```

Alternatively, you can place images in the `public` folder and reference them directly:
   ```jsx
   <img src="/images/Portfolio_Img.png" alt="A quick look at my front page of the portfolio" />
   ```

**Note**: Make sure to replace `Portfolio_Img.png` with the actual filename of your image. If your image has spaces in the filename, either rename it to remove spaces or escape them properly.
