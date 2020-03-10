(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{287:function(t,s,a){"use strict";a.r(s);var e=a(11),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"jenkins-运维"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jenkins-运维"}},[t._v("#")]),t._v(" Jenkins 运维")]),t._v(" "),a("blockquote",[a("p",[t._v("环境要求")]),t._v(" "),a("ul",[a("li",[t._v("JDK：JDK7+，官网推荐是 JDK 8")]),t._v(" "),a("li",[t._v("Jenkins：2.190.1")])])]),t._v(" "),a("h2",{attrs:{id:"jenkins-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jenkins-简介"}},[t._v("#")]),t._v(" Jenkins 简介")]),t._v(" "),a("h3",{attrs:{id:"jenkins-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jenkins-是什么"}},[t._v("#")]),t._v(" Jenkins 是什么")]),t._v(" "),a("p",[t._v("Jenkins 是一款开源 CI&CD 软件，用于自动化各种任务，包括构建、测试和部署软件。")]),t._v(" "),a("p",[t._v("Jenkins 支持各种运行方式，可通过系统包、Docker 或者通过一个独立的 Java 程序。")]),t._v(" "),a("h3",{attrs:{id:"ci-cd-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ci-cd-是什么"}},[t._v("#")]),t._v(" CI/CD 是什么")]),t._v(" "),a("p",[t._v("CI(Continuous integration，中文意思是持续集成)是一种软件开发时间。持续集成强调开发人员提交了新代码之后，立刻进行构建、（单元）测试。根据测试结果，我们可以确定新代码和原有代码能否正确地集成在一起。借用网络图片对 CI 加以理解。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://dunwu.test.upcdn.net/snap/20200310174528.png",alt:"img"}})]),t._v(" "),a("p",[t._v("CD(Continuous Delivery， 中文意思持续交付)是在持续集成的基础上，将集成后的代码部署到更贴近真实运行环境(类生产环境)中。比如，我们完成单元测试后，可以把代码部署到连接数据库的 Staging 环境中更多的测试。如果代码没有问题，可以继续手动部署到生产环境。下图反应的是 CI/CD 的大概工作模式。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://dunwu.test.upcdn.net/snap/20200310174544.png",alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:"jenkins-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jenkins-安装"}},[t._v("#")]),t._v(" Jenkins 安装")]),t._v(" "),a("blockquote",[a("p",[t._v("更详细内容请参考："),a("a",{attrs:{href:"https://jenkins.io/zh/doc/book/installing/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jenkins 官方安装文档"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"war-包部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#war-包部署"}},[t._v("#")]),t._v(" War 包部署")]),t._v(" "),a("p",[t._v("安装步骤如下：")]),t._v(" "),a("p",[t._v("（1）下载并解压到本地")]),t._v(" "),a("p",[t._v("进入"),a("a",{attrs:{href:"https://jenkins.io/zh/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网下载地址"),a("OutboundLink")],1),t._v("，选择合适的版本下载。")]),t._v(" "),a("p",[t._v("我选择的是最新稳定 war 版本 2.89.4：http://mirrors.jenkins.io/war-stable/latest/jenkins.war")]),t._v(" "),a("p",[t._v("我个人喜欢存放在："),a("code",[t._v("/opt/software/jenkins")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p /opt/software/jenkins\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" -O /opt/software/jenkins/jenkins.war http://mirrors.jenkins.io/war-stable/latest/jenkins.wa\n")])])]),a("p",[t._v("（2）启动")]),t._v(" "),a("p",[t._v("如果你和我一样，选择 war 版本，那么你可以将 war 移到 Tomcat 的 webapps 目录下，通过 Tomcat 来启动。")]),t._v(" "),a("p",[t._v("当然，也可以通过 "),a("code",[t._v("java -jar")]),t._v(" 方式来启动。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /opt/software/jenkins\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nohup")]),t._v(" java -jar jenkins.war --httpPort"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" nohup.out "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("&1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n")])])]),a("h3",{attrs:{id:"rpm-包部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rpm-包部署"}},[t._v("#")]),t._v(" rpm 包部署")]),t._v(" "),a("p",[t._v("（1）下载安装")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rpm")]),t._v(" --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" jenkins\n")])])]),a("p",[t._v("（2）启动")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("systemctl start jenkins\n")])])]),a("h3",{attrs:{id:"访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问"}},[t._v("#")]),t._v(" 访问")]),t._v(" "),a("ol",[a("li",[t._v("打开浏览器进入链接 "),a("code",[t._v("http://localhost:8080")]),t._v(".")]),t._v(" "),a("li",[t._v("按照说明完成安装.")])]),t._v(" "),a("h2",{attrs:{id:"jenkins-基本使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jenkins-基本使用"}},[t._v("#")]),t._v(" Jenkins 基本使用")]),t._v(" "),a("p",[t._v("Jenkins 是一个强大的 CI 工具，虽然本身使用 Java 开发，但也能用来做其他语言开发的项目 CI。下面讲解如何使用 Jenkins 创建一个构建任务。")]),t._v(" "),a("p",[t._v("登录 Jenkins， 点击左侧的新建，创建新的构建任务。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https:////upload-images.jianshu.io/upload_images/6464255-22b3c49af599565d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/374/format/webp",alt:"img"}})]),t._v(" "),a("p",[t._v("跳转到如下界面。任务名称可以自行设定，但需要全局唯一。输入名称后选择构建一个自由风格的软件项目(其他选项不作介绍)。并点击下方的确定按钮即创建了一个构建任务。之后会自动跳转到该 job 的配置页面。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https:////upload-images.jianshu.io/upload_images/6464255-0febc0bc4ca3cadd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1044/format/webp",alt:"img"}})]),t._v(" "),a("p",[t._v("新建自由风格的软件项目")]),t._v(" "),a("p",[t._v('下图是构建任务设置界面，可以看到上方的几个选项**"General", "源码管理"， "构建触发器"，"构建环境"， "构建"， "构建后操作"**。下面逐一介绍。')]),t._v(" "),a("p",[a("img",{attrs:{src:"https:////upload-images.jianshu.io/upload_images/6464255-77998a3e6a70b83f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1032/format/webp",alt:"img"}})]),t._v(" "),a("h3",{attrs:{id:"general"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#general"}},[t._v("#")]),t._v(" General")]),t._v(" "),a("p",[t._v("General 是构建任务的一些基本配置。名称，描述之类的。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://dunwu.test.upcdn.net/snap/20200310221814.png",alt:""}})]),t._v(" "),a("p",[t._v("重要配置项：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Description")]),t._v("：对构建任务的描述。")]),t._v(" "),a("li",[a("strong",[t._v("Discard old builds")]),t._v('：服务器资源是有限的，有时候保存了太多的历史构建，会导致 Jenkins 速度变慢，并且服务器硬盘资源也会被占满。当然下方的"保持构建天数" 和 保持构建的最大个数是可以自定义的，需要根据实际情况确定一个合理的值。')])]),t._v(" "),a("p",[t._v("点击右方的问号图标可以查看帮助信息。")]),t._v(" "),a("h3",{attrs:{id:"source-code-management"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#source-code-management"}},[t._v("#")]),t._v(" Source Code Management")]),t._v(" "),a("p",[a("strong",[t._v("Source Code Management")]),t._v("，即源码管理，就是配置你代码的存放位置。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://dunwu.test.upcdn.net/snap/20200310222110.png",alt:""}})]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Git:")]),t._v(" 支持主流的 Github 和 Gitlab 代码仓库。因我们的研发团队使用的是 gitlab，所以下面我只会对该项进行介绍。")]),t._v(" "),a("li",[a("strong",[t._v("Repository URL")]),t._v("：仓库地址。")]),t._v(" "),a("li",[a("strong",[t._v("Credentials")]),t._v('：凭证。可以使用 HTTP 方式的用户名密码，也可以是 RSA 文件。 但要通过后面的"ADD"按钮添加凭证。')]),t._v(" "),a("li",[a("strong",[t._v("Branches to build")]),t._v("：构建的分支。"),a("code",[t._v("*/master")]),t._v(" 表示 master 分支，也可以设置为其他分支。")]),t._v(" "),a("li",[a("strong",[t._v("Repository browser")]),t._v("：你所使用的代码仓库管理工具，如 Github、Gitlab.")]),t._v(" "),a("li",[a("strong",[t._v("Subversion")]),t._v("：即 SVN，这里不作介绍。")])]),t._v(" "),a("h3",{attrs:{id:"build-triggers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-triggers"}},[t._v("#")]),t._v(" Build Triggers")]),t._v(" "),a("p",[a("strong",[t._v("Build Triggers")]),t._v("，即构建触发器，用于构建任务的触发器。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://dunwu.test.upcdn.net/snap/20200310222608.png",alt:""}})]),t._v(" "),a("p",[t._v("配置说明：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Trigger builds remotely (e.g., from scripts)")]),t._v("：触发远程构建(例如，使用脚本)。该选项会提供一个接口，可以用来在代码层面触发构建。")]),t._v(" "),a("li",[a("strong",[t._v("Build after other projects are built")]),t._v('：该选项意思是"在其他项目构建后再构建"。')]),t._v(" "),a("li",[a("strong",[t._v("Build periodically")]),t._v("：周期性的构建。就是每隔一段时间进行构建。日程表类似 linux crontab 书写格式。如："),a("code",[t._v("H/30 * * * *")]),t._v("，表示每隔 30 分钟进行一次构建。")]),t._v(" "),a("li",[t._v("**Build when a change is pushed to GitLab：**当有 git push 到 Gitlab 仓库，即触发构建。后面会有一个触发构建的地址，一般被称为 webhooks。需要将这个地址配置到 gitlab 中，webhooks 如何配置后面介绍。这个是常用的构建触发器。")]),t._v(" "),a("li",[t._v("**Poll SCM：**该选项是配合上面这个选项使用的。当代码仓库发生改动，jenkins 并不知道。需要配置这个选项，周期性的去检查代码仓库是否发生改动。")])]),t._v(" "),a("h3",{attrs:{id:"build-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-environment"}},[t._v("#")]),t._v(" Build Environment")]),t._v(" "),a("p",[a("strong",[t._v("Build Environment")]),t._v("，即构建环境，配置构建前的一些准备工作，如指定构建工具。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://dunwu.test.upcdn.net/snap/20200310223004.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"build"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build"}},[t._v("#")]),t._v(" Build")]),t._v(" "),a("p",[t._v("Build，即构建。")]),t._v(" "),a("p",[t._v("点击下图中的 Add build step 按钮，会弹出一个构建任务菜单，可以根据实际需要来选择。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://dunwu.test.upcdn.net/snap/20200310223241.png",alt:""}})]),t._v(" "),a("p",[t._v("【说明】")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Copy artifacts from another project")]),t._v("：从其他项目获取构建。一般当本任务有上游任务，需要获取上游任务的构件时使用。比如：有个 Java Web 项目，需要依赖于上一个前端构建任务输出的静态文件压缩包。")]),t._v(" "),a("li",[t._v("Eexcute NodeJS script：执行 Nodejs 脚本。默认支持 nodejs、npm 命令。")]),t._v(" "),a("li",[a("strong",[t._v("Eexcute shell")]),t._v("： 执行 shell 脚本。用于 Linux 环境。")]),t._v(" "),a("li",[a("strong",[t._v("Execute Windows batch command")]),t._v("：执行 batch 脚本。用于 Windows 环境。")]),t._v(" "),a("li",[a("strong",[t._v("Invoke Ant")]),t._v("：Ant 是一款 java 项目构建工具。")]),t._v(" "),a("li",[a("strong",[t._v("Invoke Gradle script")]),t._v("：Gradle 构建项目。")]),t._v(" "),a("li",[a("strong",[t._v("Invoke top-level Maven targets")]),t._v("：Maven 构建项目。")])]),t._v(" "),a("h3",{attrs:{id:"post-build-actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#post-build-actions"}},[t._v("#")]),t._v(" Post-build Actions")]),t._v(" "),a("p",[a("strong",[t._v("Post-build Actions")]),t._v("，即构建后操作，用于构建完本项目的一些后续操作，比如生成相应的代码测试报告。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://dunwu.test.upcdn.net/snap/20200310224106.png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"http://dunwu.test.upcdn.net/snap/20200310224254.png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"http://dunwu.test.upcdn.net/snap/20200310224331.png",alt:""}})]),t._v(" "),a("p",[t._v("个人较常用的配置：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Archive the artifacts")]),t._v("：归档构件。")]),t._v(" "),a("li",[a("strong",[t._v("Build other projects")]),t._v("：构建其他项目。")]),t._v(" "),a("li",[a("strong",[t._v("Trigger parameterized build on other projects")]),t._v("：构建其他项目，并传输构建参数。")]),t._v(" "),a("li",[a("strong",[t._v("Publish JUnit test result report")]),t._v("：发布 Junit 测试报告。")]),t._v(" "),a("li",[a("strong",[t._v("E-mail Notification")]),t._v("：邮件通知，构建完成后发邮件到指定的邮箱。")])]),t._v(" "),a("hr"),t._v(" "),a("p",[a("strong",[t._v("以上配置完成后，点击保存即可。")])]),t._v(" "),a("h3",{attrs:{id:"开始构建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始构建"}},[t._v("#")]),t._v(" 开始构建")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://dunwu.test.upcdn.net/snap/20200310224927.png",alt:""}})]),t._v(" "),a("p",[t._v("如上图所示，一切配置好后，即可点击 "),a("strong",[t._v("Build Now")]),t._v(" 开始构建。")]),t._v(" "),a("h3",{attrs:{id:"构建结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建结果"}},[t._v("#")]),t._v(" 构建结果")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://dunwu.test.upcdn.net/snap/20200310225234.png",alt:""}})]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("构建状态")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Successful 蓝色")]),t._v("：构建完成，并且被认为是稳定的。")]),t._v(" "),a("li",[a("strong",[t._v("Unstable 黄色")]),t._v("：构建完成，但被认为是不稳定的。")]),t._v(" "),a("li",[a("strong",[t._v("Failed 红色")]),t._v("：构建失败。")]),t._v(" "),a("li",[a("strong",[t._v("Disable 灰色")]),t._v("：构建已禁用")])])]),t._v(" "),a("li",[a("strong",[t._v("构建稳定性")]),t._v(" "),a("ul",[a("li",[t._v("构建稳定性用天气表示："),a("strong",[t._v("晴、晴转多云、多云、小雨、雷阵雨")]),t._v("。天气越好表示构建越稳定，反之亦然。")])])]),t._v(" "),a("li",[t._v("构建历史界面\n"),a("ul",[a("li",[a("strong",[t._v("console output")]),t._v("：输出构建的日志信息")])])])]),t._v(" "),a("h2",{attrs:{id:"其他相关配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他相关配置"}},[t._v("#")]),t._v(" 其他相关配置")]),t._v(" "),a("h3",{attrs:{id:"ssh-server-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssh-server-配置"}},[t._v("#")]),t._v(" SSH Server 配置")]),t._v(" "),a("p",[t._v("登录 jenkins -> 系统管理 -> 系统设置")]),t._v(" "),a("p",[t._v("配置请看下图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https:////upload-images.jianshu.io/upload_images/6464255-15476f9e273daa58.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1108/format/webp",alt:"img"}})]),t._v(" "),a("p",[t._v("重要配置：")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("SSH Servers:")]),t._v(" 由于 jenkins 服务器公钥文件我已经配置好，所以之后新增 SSH Servers 只需要配置这一项即可。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Name：")]),t._v(" 自定义，需要全局唯一。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("HostName:")]),t._v(" 主机名，直接用 ip 地址即可。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Username:")]),t._v(" 新增 Server 的用户名，这里配置的是 root。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Remote Directory:")]),t._v(" 远程目录。jenkins 服务器发送文件给新增的 server 默认是在这个目录。")])])]),t._v(" "),a("h3",{attrs:{id:"配置-gitlab-webhooks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-gitlab-webhooks"}},[t._v("#")]),t._v(" 配置 Gitlab webhooks")]),t._v(" "),a("p",[t._v("在 gitlab 的 project 页面 打开"),a("strong",[t._v("settings")]),t._v("，再打开 "),a("strong",[t._v("web hooks")]),t._v(' 。点击**"ADD WEB HOOK"** 添加 webhook。把之前 jenkins 配置中的那个 url 添加到这里，添加完成后，点击**"TEST HOOK"**进行测试，如果显示 SUCCESS 则表示添加成功。')]),t._v(" "),a("p",[a("img",{attrs:{src:"https:////upload-images.jianshu.io/upload_images/6464255-9f8d04a1400556f9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/246/format/webp",alt:"img"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https:////upload-images.jianshu.io/upload_images/6464255-154a62db330c819b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/240/format/webp",alt:"img"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https:////upload-images.jianshu.io/upload_images/6464255-e4d1ea1e1dbde812.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1036/format/webp",alt:"img"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https:////upload-images.jianshu.io/upload_images/6464255-c7a687207b2c26fc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1106/format/webp",alt:"img"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https:////upload-images.jianshu.io/upload_images/6464255-ce8ae810bc2cb0d4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1154/format/webp",alt:"img"}})]),t._v(" "),a("p",[t._v("配置 phpunit.xml")]),t._v(" "),a("p",[t._v('phpunit.xml 是 phpunit 这个工具用来单元测试所需要的配置文件。这个文件的名称同样也是可以自定义的，但是要在"build.xml"中配置好名字就行。默认情况下，用"phpunit.xml", 则不需要在"build.xml"中配置文件名。')]),t._v(" "),a("p",[a("img",{attrs:{src:"https:////upload-images.jianshu.io/upload_images/6464255-aa212d3b3eaff548.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/798/format/webp",alt:"img"}})]),t._v(" "),a("p",[t._v("build.xml 中 phpunit 配置")]),t._v(" "),a("p",[t._v("fileset dir 指定单元测试文件所在路径，include 指定包含哪些文件，支持通配符匹配。当然也可以用 exclude 关键字指定不包含的文件。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https:////upload-images.jianshu.io/upload_images/6464255-dbc0084f6d50a240.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1200/format/webp",alt:"img"}})]),t._v(" "),a("h3",{attrs:{id:"jenkins-权限管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jenkins-权限管理"}},[t._v("#")]),t._v(" jenkins 权限管理")]),t._v(" "),a("p",[t._v("由于 jenkins 默认的权限管理体系不支持用户组或角色的配置，因此需要安装第三发插件来支持角色的配置，本文将使用 Role Strategy Plugin。基于这个插件的权限管理设置请参考这篇文章:"),a("a",{attrs:{href:"https://link.jianshu.com?t=http%3A%2F%2Fblog.csdn.net%2Fruss44%2Farticle%2Fdetails%2F52276222",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://blog.csdn.net/russ44/article/details/52276222"),a("OutboundLink")],1),t._v("，这里不作详细介绍。")]),t._v(" "),a("p",[t._v("至此，就可以用 jenkins 周而复始的进行 CI 了，当然 jenkins 是一个强大的工具，功能绝不仅仅是以上这些，其他方面要是以后用到，我会更新到这篇文章中。有疑问欢迎在下方留言。")]),t._v(" "),a("h2",{attrs:{id:"jenkins-faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jenkins-faq"}},[t._v("#")]),t._v(" Jenkins FAQ")]),t._v(" "),a("h3",{attrs:{id:"登录密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#登录密码"}},[t._v("#")]),t._v(" 登录密码")]),t._v(" "),a("p",[t._v("如果不知道初始登录密码，可以通过以下方式查看：")]),t._v(" "),a("p",[t._v("执行命令 "),a("code",[t._v("cat /root/.jenkins/secrets/initialAdminPassword")]),t._v("，打印出来的即是初始登录密码。")]),t._v(" "),a("h3",{attrs:{id:"忘记密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#忘记密码"}},[t._v("#")]),t._v(" 忘记密码")]),t._v(" "),a("p",[t._v("1.执行 "),a("code",[t._v("vim /root/.jenkins/config.xml")]),t._v(" ，删除以下内容")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("useSecurity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("true"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("useSecurity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("authorizationStrategy")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hudson.security.FullControlOnceLoggedInAuthorizationStrategy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("denyAnonymousReadAccess")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("true"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("denyAnonymousReadAccess")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("authorizationStrategy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("securityRealm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hudson.security.HudsonPrivateSecurityRealm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("disableSignup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("true"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("disableSignup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("enableCaptcha")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("false"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("enableCaptcha")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("securityRealm")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("2.重启 Jenkins 服务；")]),t._v(" "),a("p",[t._v("3.进入首页>“系统管理”>“Configure Global Security”；")]),t._v(" "),a("p",[t._v("4.勾选“启用安全”；")]),t._v(" "),a("p",[t._v("5.点选“Jenkins 专有用户数据库”，并点击“保存”；")]),t._v(" "),a("p",[t._v("6.重新点击首页>“系统管理”,发现此时出现“管理用户”；")]),t._v(" "),a("p",[t._v("7.点击进入展示“用户列表”；")]),t._v(" "),a("p",[t._v("8.点击右侧进入修改密码页面，修改后即可重新登录。")]),t._v(" "),a("h3",{attrs:{id:"卡在-check-页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#卡在-check-页面"}},[t._v("#")]),t._v(" 卡在 check 页面")]),t._v(" "),a("p",[a("strong",[t._v("现象")]),t._v("：输入密码后，卡在 check 页面")]),t._v(" "),a("p",[a("strong",[t._v("原因")]),t._v("：jenkins 在安装插件前总是尝试连接 www.google.com，来判断网络是否连通。谷歌的网站在大陆是连不上的，所以会出现这个问题。")]),t._v(" "),a("p",[a("strong",[t._v("解决方案")]),t._v("：执行"),a("code",[t._v("vim /root/.jenkins/updates/default.json")]),t._v("，将 "),a("code",[t._v("connectionCheckUrl")]),t._v(" 后的 "),a("code",[t._v("www.google.com")]),t._v(" 改为 "),a("code",[t._v("www.baidu.com")]),t._v(" 。然后重启即可。")]),t._v(" "),a("p",[t._v("或者直接执行命令：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" -i "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'s/www.google.com/www.baidu.com/g'")]),t._v(" /root/.jenkins/updates/default.json\n")])])]),a("h3",{attrs:{id:"卡在-getting-startted-页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#卡在-getting-startted-页面"}},[t._v("#")]),t._v(" 卡在 getting startted 页面")]),t._v(" "),a("p",[a("strong",[t._v("现象")]),t._v("：卡在 getting startted 页面")]),t._v(" "),a("p",[a("strong",[t._v("原因")]),t._v("：jenkins 默认的插件下载服务器地址在国外，如果不翻墙下载不了。")]),t._v(" "),a("p",[a("strong",[t._v("解决方案")]),t._v("：执行"),a("code",[t._v("vim /root/.jenkins/hudson.model.UpdateCenter.xml")]),t._v("，将 "),a("code",[t._v("<url>")]),t._v(" 改为 "),a("code",[t._v("http://mirror.xmission.com/jenkins/updates/update-center.json")]),t._v(" 。然后重启即可。")]),t._v(" "),a("p",[t._v("或者直接执行命令：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" -i "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/^<url>/s/.*/<url>http:\\/\\/mirror.xmission.com\\/jenkins\\/updates\\/update-center.json<\\/url>/g'")]),t._v(" /root/.jenkins/hudson.model.UpdateCenter.xml\n")])])]),a("h3",{attrs:{id:"以-root-用户运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#以-root-用户运行"}},[t._v("#")]),t._v(" 以 root 用户运行")]),t._v(" "),a("p",[t._v("（1）修改 jenkins 用户")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /etc/sysconfig/jenkins\n")])])]),a("p",[t._v("修改用户")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$JENKINS_USER")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"root"')]),t._v("\n")])])]),a("p",[t._v("（2）修改 "),a("code",[t._v("Jenkins")]),t._v(" 相关文件夹用户权限")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" -R root:root /var/lib/jenkins\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" -R root:root /var/cache/jenkins\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" -R root:root /var/log/jenkins\n")])])]),a("p",[t._v("（3）重启 Jenkins")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("systemctl restart jenkins\n")])])]),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("官方")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://jenkins.io/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jenkins 官网"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://jenkins.io/zh/doc/tutorials/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jenkins 中文文档"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("引申")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/dunwu/OS",target:"_blank",rel:"noopener noreferrer"}},[t._v("操作系统、运维部署总结系列"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("文章")])]),t._v(" "),a("ul",[a("li",[t._v("https://jenkins.io/doc/pipeline/tour/getting-started/")]),t._v(" "),a("li",[t._v("https://www.cnblogs.com/austinspark-jessylu/p/6894944.html")]),t._v(" "),a("li",[t._v("http://blog.csdn.net/jlminghui/article/details/54952148")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.jianshu.com/p/5f671aca2b5a",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jenkins 详细教程"),a("OutboundLink")],1)])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);