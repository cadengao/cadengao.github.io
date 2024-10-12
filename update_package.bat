@echo off
setlocal enabledelayedexpansion

rem 获取当前脚本所在目录
set "current_dir=%~dp0"

rem 切换到当前目录
cd /d "%current_dir%" || exit /b

rem 遍历所有 package_* 目录
for /d %%D in (package_*) do (
    rem 从目录名称中提取 UUID (去掉前缀 package_)
    set "dirname=%%~nD"
    set "uuid=!dirname:package_=!"

    rem 输出找到的 UUID
    echo Found UUID: !uuid!

    rem 将目录重命名为 package
    ren "%%D" "package"

    rem 修改 index.html 和 service-worker.js 和 manifest.webmanifest 文件
    for %%F in (index.html service-worker.js manifest.webmanifest package\CadenBase.staticwebassets.runtime.json package\uno-config.js) do (
        if exist "%%F" (
            echo Processing %%F
            set "file=%%F"
            set "temp_file=%%F.tmp"

            rem 使用 PowerShell 进行文本替换
            powershell -Command "(Get-Content '!file!') -replace 'package_!uuid!', 'package' | Set-Content '!temp_file!'"

            rem 替换原文件
            move /y "!temp_file!" "!file!" >nul
        )
    )
)

rem 替换 favicon.ico 文件
if exist "favicon.ico" (
    echo Replacing favicon.ico
    copy /y "package\Assets\custom\favicon.ico" "favicon.ico" >nul
)

rem 将 package\Assets\custom\package 目录下的所有文件覆盖到 package 目录下
set "source_dir=package\Assets\custom\package"
set "dest_dir=package"

if exist "!source_dir!" (
    echo Copying files from !source_dir! to !dest_dir!
    xcopy "!source_dir!\*" "!dest_dir!\" /E /Y /I
) else (
    echo Source directory !source_dir! does not exist.
    exit /b 1  rem 若源目录不存在，返回错误码 1
)

rem 检查是否有错误发生
if ERRORLEVEL 1 (
    echo An error occurred during the script execution.
    pause  rem 如果有错误，保持窗口打开以查看错误信息
) else (
    echo Script executed successfully. Closing window.
    exit /b 0  rem 正常退出
)

endlocal
