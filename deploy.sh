#!/bin/ksh

clear
echo Building prototype ...
rm -rf public/images/*
rm -rf public/javascripts/*
rm -rf public/stylesheets/*

cp -R app/assets/images/ public/images/
cp -R app/assets/javascripts/ public/javascripts/
cp -R app/assets/stylesheets/ public/stylesheets/

echo Deploying prototype ...
#git checkout master
#git add *
#git commit -m "Latest build"
#git push origin master

 
