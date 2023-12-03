@echo off
REM Simplest solution possible
echo Bundling JS files
copy /b number.js+array.js+object.js+base64.js+json.js+interval_timeout.js+console.js polyfill.js
echo Done.