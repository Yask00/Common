`git init` (стартира repo в дадена папка)
`copy NUL index.html` (създава празен файл)

git status

* STAGING
```
git add index.html / git rm --cached index.html
```
```
git add .
```
* COMMITING
```
git commit -m "message"
```
* SEEING COMMITS
```
git log --oneline
```

* UNDOING THINGS
```
git checkout <id> // READONLY
```
or
```
git checkout master
```
```
git revert <id>
```
```
git reset <id>
```

* BRANCHING
```
git branch branchname (създава нов бранч)
```
```
git branch -a (листва всички бранчове)
```
```
git checkout feature-1 (избира този за текущ)
```
```
git branch -D feature-1 изтрива бранча)
```

Push the branch on github :

`$ git push origin [name_of_your_new_branch]`

* MERGIN BRANCHES
```git checkout master```
```git merge feature-1```
```SHIFT + :```
```wq```

* PUSHING

```
git push <url of repo> master
git push origin branchname
```

* PULLING
```git pull origin master
git pull <path> master (дърпаме ако има ъпдейти)
git push <path> <branch>```

