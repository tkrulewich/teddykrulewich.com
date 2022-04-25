#!/bin/sh

echo "Switching to branch master"
git checkout master

echo "Building app"
npm run build

echo "Deploying files to server"
rsync -avP build/ teddy@teddykrulewich.com:/var/www/teddykrulewich.com/
echo "Deployment complete"
