![Next secure download logo](https://github.com/nicnocquee/next-secure-download/blob/main/public/next-secure-download-icon-small.png?raw=true)

# About

This repo contains the basic [Next.js](https://nextjs.org) project that will allow you to create a public password-protected file download link. The file will be protected using basic authentication.

# Motivation

I needed a solution to make a file publicly downloadable, but

- ✅ it should be **FREE**.
- ✅ the files are password-protected.
- ✅ the files can be directly downloaded, no download page.
- ✅ the files can be downloaded from script or command line.

I couldn't find anything that meets those requirements. So I made this repo by storing the files in private GitHub repository and serving them through free hosting like Vercel or Netlify, both of which are FREE.

# Demo

1. Check out [this demo website](https://next-secure-download.netlify.app) which was deployed to Netlify.
2. Click the "Download secret file" link.
3. Use `admin` and `supersecret` as User and Password, respectively.

You can also directly download the file from the browser by opening this link [https://next-secure-download.netlify.app/api/download/secret.json](https://next-secure-download.netlify.app/api/download/secret.json). Enter `admin` and `supersecret` as User and Password, respectively.

And since the file is protected using basic authentication, you can also download the file directly from command line using curl:

```shell
curl -OJ "https://admin:supersecret@next-secure-download.netlify.app/api/download/secret.json"
```

# Quick Start

In this example, I'm using Netlify to deploy the project. You can use any other hosting service like Vercel, or even your own server.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/nicnocquee/next-secure-download)

1. Click the "Deploy" button above to deploy this project to your Netlify account. Please register with Netlify if you haven't.
2. Fill up `ADMIN_USERNAME` and `ADMIN_PASSWORD` environment variables with the username and password you want to use to protect your file.
3. Then follow the rest of the instructions until the project is deployed. **Make sure the repository that will be created is private!**
4. Once it's deployed, test it by visiting the project's URL. Then click the "Download secret file" link. You should be prompted with username and password dialogue.
5. To change, remove, or add the file that you want to protect, first clone the repository of your project.
6. Put the file to be downloaded in `files` directory.
7. Commit the file to your repository then push to Github.
8. Netlify will automatically build your project and your file will be available for download with the username and password you defined.
9. Your file then can be downloaded from `https://your-netlify-deployment-url/api/download/the-file-name-here` URL.

# Use cases

- Securely store and serve a configuration file for your app.
- Share files with others privately.

# Code overview

The not-so-secret sauce is inside the `app/api/download/[file_name]/route.ts` and `middleware.ts`. In `middleware.ts`, the app will check the credentials. In `app/api/download/[file_name]/route.ts`, the app will find and return the file. That's it.

# Notes

1. It goes without saying that the files remain secret as long as your repository is private!
2. Do not forget to assign values to `ADMIN_USERNAME` and `ADMIN_PASSWORD` environment variables, or else the files can be freely downloaded.
3. If you change the username and password, you need to redeploy the deployment in the hosting service.
4. Of course you can [deploy the project to your own server](https://nextjs.org/docs/deployment#other-hosting-options).
5. This solution is FREE as long as GitHub and the hosting service remains having FREE plans. 😆

# License

MIT

# Info

I'm making a book about [Pull Requests Best Practices. Boost Your Team's Efficiency: Master the Art of Writing & Reviewing Pull Requests!
](https://pr.nico.fyi). Check it out!
