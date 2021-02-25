set DIR = %~dp0
cd %DIR%
sass input.scss:style.css --style expanded
