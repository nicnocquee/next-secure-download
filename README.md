# About

This repo contains the basic Next.js project that will allow you to create a password-protected file download. The file will be protected using basic authentication.

# Demo

1. Check out [this demo website](https://next-basic-auth-download.vercel.app/) deployed in Vercel.
2. Click the "Download download.json" link.
3. Use `admin` and `supersecret` as User and Password, respectively.

# How to use

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fnicnocquee%2Fnext-basic-auth-download.git&env=ADMIN_USERNAME,ADMIN_PASSWORD,FILE_NAME&envDescription=Use%20ADMIN_USERNAME%20and%20ADMIN_PASSWORD%20for%20the%20basic%20authentication.%20FILE_NAME%20is%20the%20name%20of%20the%20file%20that%20will%20be%20downloaded.&demo-title=Password%20Protected%20File%20Download&demo-url=https%3A%2F%2Fnext-basic-auth-download.vercel.app%2F)

1. Click the "Deploy" button above to deploy this project to your Vercel account. Please register with Vercel if you haven't.
2. Fill up `ADMIN_USERNAME` and `ADMIN_PASSWORD` environment variables with the username and password you want to use to protect your file.
3. Then follow the rest of the instructions until the project is deployed. At the end of the deployment process, a repository should be created for you in Github.
4. Once it's deployed, test it by visiting the project's URL. Then click the "Download download.json" file. You should be prompted with username and password dialog.
5. To change the file that you want to protect, clone the repository of your project.
6. Put the file to be downloaded in `files` directory.
7. Add an environment variable in your project in Vercel called `FILE_NAME` with the name of your file as the value.
8. Commit the file to your repository then push to Github.
9. Vercel will automatically build your project and your file will be available for download with the username and password you defined.
