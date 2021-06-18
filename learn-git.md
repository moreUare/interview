
## 远程仓库
# Git 
## 创建一个版本库

### 初始化一个Git仓库，git init 

### 添加文件到Git仓库，分两步
1、 使用git add <file> 将文件添加到暂存区
2、 使用git commit -m <message>
### 将file从暂存区移除 git restore

## 版本控制

### 检查仓库当前状态

git status    
git diff 查看修改内容

### 版本库
`stage`暂存区 `master`分支 `HEAD`指针  
![版本库](https://static.liaoxuefeng.com/files/attachments/919020037470528/0 "git版本库")

### 版本回退
1. git log 查看提交历史  
2. git reset   
	git reset --hard commit_id  
	git reset --hard HEAD^    
	```
	┌────┐
	│HEAD│
	└────┘
	   │
	   └──> ○ append GPL
	        │
	        ○ add distributed
	        │
	        ○ wrote a readme file
	//改为指向add distributed：
	┌────┐
	│HEAD│
	└────┘
	   │
	   │    ○ append GPL
	   │    │
	   └──> ○ add distributed
	        │
	        ○ wrote a readme file	
	```	
3. git reflog 查看命令历史
## 让这个文件回到最近一次git commit或git add时的状态
>>>撤销工作区的修改 git checkout -- <file>
>>>撤销暂存区的修改 git reset HEAD <file>
### Tip1
 	1.没有git add时，用git checkout -- file 将工作区的修改恢复到暂存区的内容

	2.已经git add时，先git reset HEAD <file>回退到1.，再按1.操作

	3.已经git commit时，用git reset回退版本
### Tip2 最新版本的git已经使用git restore 代替了原来的reset和checkout命令
	git resotre readme //（使用 "git restore <文件>..." 丢弃工作区的改动）

  	(use **"git restore <file>..."** to discard changes in working directory)

	git restore --staged <file>  //（使用 "git restore --staged <文件>..." 以取消暂存）

  	(use **"git restore --staged <file>..."** to unstage)
```
  	git restore <file> 
  	git restore --staged <file>
  	git reset --hard
```
## 关联一个远程库
***ssh***  
```git remote add origin git@github.com:moreUare/learngit.git```   
***http***  
```git remote add origin https://github.com/moreUare/learngit.git```   
关联后，使用命令`git push -u origin master`   
***由于远程库是空的，我们第一次推送master分支时，加上了-u参数，Git不但会把本地的master分支内容推送的远程新的master分支，还会把本地的master分支和远程的master分支关联起来，在以后的推送或者拉取时就可以简化命令。***
```git push <远程主机名> <本地分支名>:<远程分支名>```
如果本地分支名与远程分支名相同，则可以省略冒号
```git push <远程主机名> <本地分支名>```
 

## 克隆远程库
```git clone git@github.com:moreUare/learngit.git```
```git clone https://github.com/moreUare/learngit.git```
	
## 管理分支 `switch`  
查看分支： `git branch`  
创建分支： `git branch <file>`  
切换分支： `git switch <file>`  
创建 + 切换分支： `git switch -c <file>`  
合并某分支到当前分支： `git merge <name>`  
删除分支: `git branch -d <name>`  

***git checkout命令加上-b参数表示创建并切换***

## 查看分支合并情况		
`git log --graph`    
`git log --graph --pretty=oneline --abbrev-commit`		

## 禁用Fast forward 合并后的历史有分支
`--no-ff`   
`git merge --no-ff -m "merge with no-ff" dev`   

## 修复master分支BUG
> master分支出现急需修复的BUG，dev分支当前有没完成的任务不能提交。
1. 储存工作区：在dev工作区 `git stash`
2. 在master分支上创建分支issue-101
3. 修改BUG，提交
4. 切换到master分支，完成合并，最后删除issue-101
5. 切换到dev分支 
```
* git stash list 查看stash存储的工作区  
* git stash apply 恢复   
* git stash drop 删除stash  
* git stash pop 恢复的同时删除stash  
* git stash apply stash@{0} 恢复到指定的stash  
```
6. 修复dev分支上的BUG
* 提交后使用命令 `git cherry-pick commitID`

## 删除一个没有被合并过的分支   
`git branch -D <name>`

## 远程仓库管理
`master 主分支` `dev开发分支`

`git switch -c origin/dev`
### 从远程获取代码并合并本地的版本 `git pull `
`git pull <远程主机名> <远程分支名>:<本地分支名>`
`git branch --set-upstream <branch-name> <origin/branch-name>指定本地dev分支与远程dev分支的链接`

因此，多人协作的工作模式通常是这样：

首先，可以试图用git push origin <branch-name>推送自己的修改；

如果推送失败，则因为远程分支比你的本地更新，需要先用git pull试图合并；

如果合并有冲突，则解决冲突，并在本地提交；

没有冲突或者解决掉冲突后，再用git push origin <branch-name>推送就能成功！

实际开发中,master分支主要用与生产环境的发布使用(比如线上正式环境，线上测试环境),比较稳定，合并权限管控比较严格，一般都是只有leader才有合并的权限。

dev分支主要用户测试环境使用，大家平时都在上面干活，大家都有合并权限，合并比较随意。

>实际情况大家在开发需求的时候，会创建自己的功能分支，然后往dev分支和master分支合并，多人协作，合并分支时，冲突是可能会产生的，这是不可避免的，不过情况会比较少，除非两人同时修改了同个文件相同位置的内容。

### git pull
`git pull origin dev` 相当于`git fetch origin dev` //从远程主机的master分支拉取最新内容 及 `git merge //将拉取下来的最新内容合并到当前所在的分支中FETCH_HEAD`


## 标签管理
tag可以代替commitID 
### 创建标签
创建标签：`git tag <tagName>` 	
删除标签：`git tag -d <tagName>` 	 
查看标签：`git tag`	  	
给之前的提交打tag： `git tag <tagName> <commitID> `	  
查看标签信息: `git show <tagName>`	  
推送标签到远程：`git push origin <tagName>`	  
推送所有未推送的本地标签：`git push origin --tag`	 	 
如果标签已经推送到远程，要删除远程标签就麻烦一点，先从本地删除: `git push origin :refs/tags/<tagName>`	  
标签按字母排序

***如果两人同时向远程仓库push产生冲突，可能也许网速慢的会被reject***
## git 每天更新
1. 查看远程仓库 `git remote -v`
2. 从远程获取最新版本到本地
 `git fetch origin master:temp`
3. 比较本地的仓库与远程仓库的区别
 `git diff temp`
4. 合并temp分支到master分支
 `git merge temp`
* 若有冲突则需手动解决冲突的文件（git status 可以告诉我们冲突的文件），然后提交
* git add .
* git commit -m 'conflict fixed'
5. 可删除分支 git branch -d temp
6. git pull origin master 相当于git fetch 和 git merge



