---
draft: false
id: Git CMDLine Ref
title: Git CMDLine Ref
hide_title: false
hide_table_of_contents: false
sidebar_label: Git CMDLine Ref
sidebar_position: 3
toc_max_heading_level: 4 
pagination_label: Git CMDLine Ref
tags: [Git, Command Line Ref]
custom_edit_url: https://github.com/facebook/docusaurus/edit/main/docs/api-doc-markdown.md
description: Git command line refernce.
---

## Document Control

- Created: 23/05/06
- Last Updated: 23/05/06

## Repo Status

```powershell showLineNumbers
# make sure to change location to the local git repo folder.
# Get git status update, this will tell you the status of commits, if you need to add un-tracked files, or push\pull updates.
git status
```

## Stage files

```powershell showLineNumbers
# Add untracked file to git for commit (stage the file).
git add 'file name'
```

## Un-stage files

```powershell showLineNumbers
# To unstage (remove) all files that have not been committed, -f = Force, -d = Directory
git reset -f -d
```

## Commit staged files

```powershell showLineNumbers
# Commit staged changes to repo.
git commit -m "COMMENT TO DESCRIBE THE INTENTION OF THE COMMIT"

# Stage all changes and commit with comment, -a = all changes, -m = main branch.
git commit -a -m "COMMENT TO DESCRIBE THE INTENTION OF THE COMMIT"
```
## Push changes to remote Repo

```powershell showLineNumbers

# Push your commited changes to remote repo.
Git push
```

## Un-do recent commit

```powershell showLineNumbers
# To undo the most recent commit - A Git commit should not be reversed if you already pushed it to the remote repository.
git reset HEAD~1
```
## Merge branch into main\master
```powershell showLineNumbers
# When you are ready to add your changes to the default branch, you merge the feature branch into it
git checkout 'default-branch'
git merge 'feature-branch'
```