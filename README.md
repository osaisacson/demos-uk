# Demos-UK

Overview of who your political representative is, what they're doing and how well their actions match your opinions.

## Stack

Uses react/node/sass and deploys with Heroku.
Infrastructure based on this example: https://www.youtube.com/watch?v=eHWK4Pu6dmE

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development purposes. These instructions also lets you quickly deploy the project through Heroku.

### Prerequisites

You'll need Git, Heroku and Node.js to get crackin.

First check if you have all the prerequisites and that they are good and well:

```
git --version
node --version
npm --version
heroku --version
```

...if the above gets any errors then fix them through the relevant solution below:

#### Git - for version control

```
git --version
```

...if you don’t have git installed already, this will prompt you to install it.

#### Node.js

```
brew install node
```

#### Heroku - for easy deployment

```
brew tap heroku/brew && brew install heroku
heroku login
```

### Original setup

1. Clone this git repository to your local machine. Stand in the parent folder where you want the project to live and write:

```
git clone https://github.com/osaisacson/demos-uk.git
```

...this will create a 'demos-uk' folder with latest code from github.

2. Initialize git

```
cd demos-uk
git init
```

Be sure to initialize the Git repository in your app’s root directory. If your app is in a subdirectory of your repository, it won’t run when it is pushed to Heroku.
Your app’s code is now tracked in a local git repository. It has not yet been pushed to any remote servers.

3. Install npm's.

```
npm install (from root)
npm install (from client)
```

### Heroku deployment - When using this project as a template

ONLY if you're using this project as a template for a brand new project, otherwise this is already done (only once per project) so don't do it.

1. Create Heroku instance
   From root:

```
cd .. (to move to root)
heroku create -b https://github.com/osaisacson/name-of-project.git
```

2. Rename Heroku from the default to your project name

```
heroku apps:rename name-of-project
```

3. Clear buildpacks so Heroku autodetects when you push changes

```
heroku buildpacks:clear
```

...otherwise the first time you push to heroku you will get an error of 'App not compatible with buildpack'. Clearing it like this fixes that.

4. Go to https://www.heroku.com and find your project, then - Deploy/Deployment Method/Github and connect to the name of your matching github repository.

5. Go to Automatic Deploys just underneath where you just were. Keep the default master branch as the one to deploy, and then click 'Enable Automatic Deploys'.

Now every push to master will automatically deploy a new version of the app. Yay.

Note that the free version of heroku uses dynos that rest inbetween visits, so the app may take up to a minute to load when it's been sleeping. To fix this pay Heroku 7USD/month for an upgraded, non sleeping dyno.

### Work, work, workin.

1. Create a new branch

```
git checkout -b your-new-branch
```

2. Start local
   Open a separate window in your terminal, then from root:

```
npm run dev
```

...this concurrently runs the server and client and will open a window with the project in your browser.

3. Make changes, then:

```
git add .
git commit -m "commit message"
git push
make a PR on https://github.com/osaisacson/demos-uk from your branch to the master branch
```

### Build, build, buildin

1. Go to https://github.com/osaisacson/demos-uk

2. Approve a PR and merge it to the master branch - this will automatically build the app on Heroku (setup for this is in step 4-5 under the heroku deployment section above)

3. Give it a minute, then check out the heroku address of your app to see that it built successfully with the changes from the PR.

```
https://demos-uk.herokuapp.com/
```

## Useful commands

Check your git settings so all looks well.

```
git config --list
```

You can use the git remote command to confirm that a remote named heroku has been set for your app:

```
git remote -v
```

## Author

- **Osa Gambas Isacson**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
