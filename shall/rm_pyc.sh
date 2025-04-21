#!/bin/bash

# 先把衝突的檔案移除
git rm --cached __pycache__/flask_server.cpython-310.pyc

# 接著加個 .gitignore 規則，避免以後再發生
echo "__pycache__/" >> .gitignore
echo "*.pyc" >> .gitignore

# 把變更加進來
git add .gitignore
git commit -m "fix: remove pycache and ignore .pyc files"
