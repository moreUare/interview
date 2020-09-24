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
关联后，使用命令git push -u origin master  

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
* 提交后使用命令 git cherry-pick commitID

## 删除一个没有被合并过的分支   
`git branch -D <name>`



