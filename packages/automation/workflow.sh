ECHO off
:begin
ECHO Select a task:
ECHO =============
ECHO -
ECHO 1. Execute only git add . 
ECHO 2. Execute add and commit
ECHO 3. Execute add, commit and push to current branch
:: The below command is to init , set remote ,add, commit and push
ECHO 4. Complete operation 
ECHO 4. Exit script
ECHO -
:: Using variable and user input instead of CHOICE as it is not working for some reason
SET /p op=Type option:
IF "%op%"=="1" goto op1
IF "%op%"=="2" goto op2
IF "%op%"=="3" goto op3
IF "%op%"=="4" goto op4

ECHO Please Pick an option:

:op1
ECHO Running git add .
CALL git add .
EXIT /B

:op2
ECHO Running git add .
CALL git add .
ECHO Running git commit
SET /p msg=Type commit message:
CALL git commit -m "%msg%"
EXIT /B

:op3
ECHO Running git add .
CALL git add .
ECHO Running git commit
SET /p msg=Type commit message:
CALL git commit -m "%msg%"
ECHO Running git push
CALL git push
EXIT /B

:op4
ECHO Execution terminated
EXIT /B

:exit
@exit