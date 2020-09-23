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
1、git log 查看提交历史
2、git reset
	git reset --hard commit_id
	git reset --hard HEAD^ 
	┌────┐
	│HEAD│
	└────┘
	   │
	   └──> ○ append GPL
	        │
	        ○ add distributed
	        │
	        ○ wrote a readme file
	改为指向add distributed：
	┌────┐
	│HEAD│
	└────┘
	   │
	   │    ○ append GPL
	   │    │
	   └──> ○ add distributed
	        │
	        ○ wrote a readme file		
3、git reflog 查看命令历史
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
  	git reset -- 
```
  		
