# About

This repo contains the basic Next.js project that will allow you to create a public password-protected file download link. The file will be protected using basic authentication.

# Motivation

I needed a solution to make some files publicly downloadable but

✅ it should be **FREE**.

✅ the files can be directly downloaded, no download page.

✅ the files can be downloaded from script or command line.

I couldn't find anything that meets those requirements. So I made this repo by storing the files in private GitHub repository and serving them through Vercel, both of which are FREE.

# Demo

1. Check out [this demo website](https://next-basic-auth-download.vercel.app/) deployed in Vercel.
2. Click the "Download secret file" link.
3. Use `admin` and `supersecret` as User and Password, respectively.

You can also directly download the file from the browser by opening this link [https://next-basic-auth-download.vercel.app/api/download/secret.json](https://next-basic-auth-download.vercel.app/api/download/secret.json). Enter `admin` and `supersecret` as User and Password, respectively.

And since the file is protected using basic authentication, you can also download the file directly from command line using curl:

```shell
curl -OJ "https://admin:supersecret@next-basic-auth-download.vercel.app/api/download/secret.json"
```

# How to use

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fnicnocquee%2Fnext-basic-auth-download.git&env=ADMIN_USERNAME,ADMIN_PASSWORD&envDescription=Use%20ADMIN_USERNAME%20and%20ADMIN_PASSWORD%20for%20the%20basic%20authentication.&demo-title=Password%20Protected%20File%20Download&demo-url=https%3A%2F%2Fnext-basic-auth-download.vercel.app%2F)

1. Click the "Deploy" button above to deploy this project to your Vercel account. Please register with Vercel if you haven't.
2. Fill up `ADMIN_USERNAME` and `ADMIN_PASSWORD` environment variables with the username and password you want to use to protect your file.
3. Then follow the rest of the instructions until the project is deployed. Make sure the repository that will be created is private!
4. Once it's deployed, test it by visiting the project's URL. Then click the "Download secret file" link. You should be prompted with username and password dialogue.
5. To change, remove, or add the file that you want to protect, first clone the repository of your project.
6. Put the file to be downloaded in `files` directory.
7. Commit the file to your repository then push to Github.
8. Vercel will automatically build your project and your file will be available for download with the username and password you defined.

# Notes

1. It goes without saying that the files remain secret as long as your repository is private!
2. Do not forget to assign values to `ADMIN_USERNAME` and `ADMIN_PASSWORD` environment variables, or else the files can be freely downloaded.
3. If you change the username and password, you need to redeploy the deployment in vercel.
4. Of course you can [deploy the project to your own server](https://nextjs.org/docs/deployment#other-hosting-options).
