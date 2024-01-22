---
title: 'ubuntu设置中文环境'
date: 2024-01-22 12:27:26
tags: []
published: true
hideInList: false
feature: 
isTop: false
---

# 操作步骤
1. 检查当前环境：执行
    ```
    echo $LANG
    ```
    > 注：如果屏幕显示en_US.UTF-8，说明是英语环境(有中文字符文件时会乱码)，需要切换到中文环境，中文环境下会显示zh_CN.UTF-8。

2. 安装中文语言包：执行
    ```
    apt-get update && apt-get install language-pack-zh-hans
    ```
3. 更改 locale：执行
    ```
    vim /etc/default/locale
    ```
    ,用以下内容直接覆盖
    ```
    LANG="zh_CN.UTF-8"
    LANGUAGE="zh_CN:zh"
    LC_NUMERIC="zh_CN"
    LC_TIME="zh_CN"
    LC_MONETARY="zh_CN"
    LC_PAPER="zh_CN"
    LC_NAME="zh_CN"
    LC_ADDRESS="zh_CN"
    LC_TELEPHONE="zh_CN"
    LC_MEASUREMENT="zh_CN"
    LC_IDENTIFICATION="zh_CN"
    LC_ALL="zh_CN.UTF-8"
    ```
4. 更改 environment：执行
    ```
    vim /etc/environment
    ```
    ,用以下内容覆盖(注：原来可能有首行“PATH=...”,如果有的话，不要动，另起一行追加即可)
    ```
    LANG="zh_CN.UTF-8"
    LANGUAGE="zh_CN:zh"
    LC_NUMERIC="zh_CN"
    LC_TIME="zh_CN"
    LC_MONETARY="zh_CN"
    LC_PAPER="zh_CN"
    LC_NAME="zh_CN"
    LC_ADDRESS="zh_CN"
    LC_TELEPHONE="zh_CN"
    LC_MEASUREMENT="zh_CN"
    LC_IDENTIFICATION="zh_CN"
    LC_ALL="zh_CN.UTF-8"
    ```
5. 重启：执行
    ```
    reboot
    ```
6. 如果第1步还不生效，可执行
    ```
    vi ~/.bashrc
    ```
7. 将下面的语句添加到文件的最后一行
    ```
    export LANG=zh_CN.utf8
    ```
