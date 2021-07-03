cd projects\flexible-spinner
call ng build --prod
cd ../../node_modules
call del rmdir /F /Q /S "flexible-spinner"
cd ..
xcopy /s dist node_modules