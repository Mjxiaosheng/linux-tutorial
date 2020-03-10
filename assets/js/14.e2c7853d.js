(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{246:function(e,t,s){"use strict";s.r(t);var a=s(11),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"kubernetes-应用指南"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-应用指南"}},[e._v("#")]),e._v(" Kubernetes 应用指南")]),e._v(" "),s("blockquote",[s("p",[e._v("Kubernetes 是谷歌开源的容器集群管理系统 是用于自动部署，扩展和管理 Docker 应用程序的开源系统，简称 K8S。")]),e._v(" "),s("p",[e._v("关键词： "),s("code",[e._v("docker")])])]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E4%B8%80k8s-%E7%AE%80%E4%BB%8B"}},[e._v("一、K8S 简介")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#%E4%BA%8Ck8s-%E5%91%BD%E4%BB%A4"}},[e._v("二、K8S 命令")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99"}},[e._v("参考资料")])])]),e._v(" "),s("h2",{attrs:{id:"一、k8s-简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、k8s-简介"}},[e._v("#")]),e._v(" 一、K8S 简介")]),e._v(" "),s("p",[e._v("K8S 主控组件（Master） 包含三个进程，都运行在集群中的某个节上，通常这个节点被称为 master 节点。这些进程包括："),s("code",[e._v("kube-apiserver")]),e._v("、"),s("code",[e._v("kube-controller-manager")]),e._v(" 和 "),s("code",[e._v("kube-scheduler")]),e._v("。")]),e._v(" "),s("p",[e._v("集群中的每个非 master 节点都运行两个进程：")]),e._v(" "),s("ul",[s("li",[e._v("kubelet，和 master 节点进行通信。")]),e._v(" "),s("li",[e._v("kube-proxy，一种网络代理，将 Kubernetes 的网络服务代理到每个节点上。")])]),e._v(" "),s("h3",{attrs:{id:"k8s-功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#k8s-功能"}},[e._v("#")]),e._v(" K8S 功能")]),e._v(" "),s("ul",[s("li",[e._v("基于容器的应用部署、维护和滚动升级")]),e._v(" "),s("li",[e._v("负载均衡和服务发现")]),e._v(" "),s("li",[e._v("跨机器和跨地区的集群调度")]),e._v(" "),s("li",[e._v("自动伸缩")]),e._v(" "),s("li",[e._v("无状态服务和有状态服务")]),e._v(" "),s("li",[e._v("广泛的 Volume 支持")]),e._v(" "),s("li",[e._v("插件机制保证扩展性")])]),e._v(" "),s("h3",{attrs:{id:"k8s-核心组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#k8s-核心组件"}},[e._v("#")]),e._v(" K8S 核心组件")]),e._v(" "),s("p",[e._v("Kubernetes 主要由以下几个核心组件组成：")]),e._v(" "),s("ul",[s("li",[e._v("etcd 保存了整个集群的状态；")]),e._v(" "),s("li",[e._v("apiserver 提供了资源操作的唯一入口，并提供认证、授权、访问控制、API 注册和发现等机制；")]),e._v(" "),s("li",[e._v("controller manager 负责维护集群的状态，比如故障检测、自动扩展、滚动更新等；")]),e._v(" "),s("li",[e._v("scheduler 负责资源的调度，按照预定的调度策略将 Pod 调度到相应的机器上；")]),e._v(" "),s("li",[e._v("kubelet 负责维护容器的生命周期，同时也负责 Volume（CVI）和网络（CNI）的管理；")]),e._v(" "),s("li",[e._v("Container runtime 负责镜像管理以及 Pod 和容器的真正运行（CRI）；")]),e._v(" "),s("li",[e._v("kube-proxy 负责为 Service 提供 cluster 内部的服务发现和负载均衡")])]),e._v(" "),s("p",[s("img",{attrs:{src:"https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LDAOok5ngY4pc1lEDes%2F-LpOIkR-zouVcB8QsFj_%2F-LpOIpZIYxaDoF-FJMZk%2Farchitecture.png?generation=1569161437087842&alt=media",alt:"img"}})]),e._v(" "),s("h3",{attrs:{id:"k8s-核心概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#k8s-核心概念"}},[e._v("#")]),e._v(" K8S 核心概念")]),e._v(" "),s("p",[e._v("K8S 包含若干抽象用来表示系统状态，包括：已部署的容器化应用和负载、与它们相关的网络和磁盘资源以及有关集群正在运行的其他操作的信息。")]),e._v(" "),s("p",[s("br"),s("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/os/kubernetes/pod.svg!zp",alt:"img"}}),s("br")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("Pod")]),e._v(" - K8S 使用 Pod 来管理容器，每个 Pod 可以包含一个或多个紧密关联的容器。Pod 是一组紧密关联的容器集合，它们共享 PID、IPC、Network 和 UTS namespace，是 K8S 调度的基本单位。Pod 内的多个容器共享网络和文件系统，可以通过进程间通信和文件共享这种简单高效的方式组合完成服务。")]),e._v(" "),s("li",[s("code",[e._v("Node")]),e._v(" - Node 是 Pod 真正运行的主机，可以是物理机，也可以是虚拟机。为了管理 Pod，每个 Node 节点上至少要运行 container runtime（比如 docker 或者 rkt）、"),s("code",[e._v("kubelet")]),e._v(" 和 "),s("code",[e._v("kube-proxy")]),e._v(" 服务。")]),e._v(" "),s("li",[s("code",[e._v("Namespace")]),e._v(" - Namespace 是对一组资源和对象的抽象集合，比如可以用来将系统内部的对象划分为不同的项目组或用户组。常见的 pods, services, replication controllers 和 deployments 等都是属于某一个 namespace 的（默认是 default），而 node, persistentVolumes 等则不属于任何 namespace。")]),e._v(" "),s("li",[s("code",[e._v("Service")]),e._v(" - Service 是应用服务的抽象，通过 labels 为应用提供负载均衡和服务发现。匹配 labels 的 Pod IP 和端口列表组成 endpoints，由 kube-proxy 负责将服务 IP 负载均衡到这些 endpoints 上。每个 Service 都会自动分配一个 cluster IP（仅在集群内部可访问的虚拟地址）和 DNS 名，其他容器可以通过该地址或 DNS 来访问服务，而不需要了解后端容器的运行。")]),e._v(" "),s("li",[s("code",[e._v("Label")]),e._v(" - Label 是识别 K8S 对象的标签，以 key/value 的方式附加到对象上（key 最长不能超过 63 字节，value 可以为空，也可以是不超过 253 字节的字符串）。Label 不提供唯一性，并且实际上经常是很多对象（如 Pods）都使用相同的 label 来标志具体的应用。Label 定义好后其他对象可以使用 Label Selector 来选择一组相同 label 的对象（比如 ReplicaSet 和 Service 用 label 来选择一组 Pod）。Label Selector 支持以下几种方式：\n"),s("ul",[s("li",[e._v("等式，如 "),s("code",[e._v("app=nginx")]),e._v(" 和 "),s("code",[e._v("env!=production")])]),e._v(" "),s("li",[e._v("集合，如 "),s("code",[e._v("env in (production, qa)")])]),e._v(" "),s("li",[e._v("多个 label（它们之间是 AND 关系），如 "),s("code",[e._v("app=nginx,env=test")])])])]),e._v(" "),s("li",[s("code",[e._v("Annotations")]),e._v(" - Annotations 是 key/value 形式附加于对象的注解。不同于 Labels 用于标志和选择对象，Annotations 则是用来记录一些附加信息，用来辅助应用部署、安全策略以及调度策略等。比如 deployment 使用 annotations 来记录 rolling update 的状态。")])]),e._v(" "),s("h2",{attrs:{id:"二、k8s-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、k8s-命令"}},[e._v("#")]),e._v(" 二、K8S 命令")]),e._v(" "),s("h3",{attrs:{id:"客户端配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#客户端配置"}},[e._v("#")]),e._v(" 客户端配置")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Setup autocomplete in bash; bash-completion package should be installed first")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("source")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("kubectl completion "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("bash")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# View Kubernetes config")]),e._v("\nkubectl config view\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# View specific config items by json path")]),e._v("\nkubectl config view -o "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("jsonpath")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'{.users[?(@.name == \"k8s\")].user.password}'")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Set credentials for foo.kuberntes.com")]),e._v("\nkubectl config set-credentials kubeuser/foo.kubernetes.com --username"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("kubeuser --password"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("kubepassword\n")])])]),s("h3",{attrs:{id:"查找资源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查找资源"}},[e._v("#")]),e._v(" 查找资源")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# List all services in the namespace")]),e._v("\nkubectl get services\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# List all pods in all namespaces in wide format")]),e._v("\nkubectl get pods -o wide --all-namespaces\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# List all pods in json (or yaml) format")]),e._v("\nkubectl get pods -o json\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Describe resource details (node, pod, svc)")]),e._v("\nkubectl describe nodes my-node\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# List services sorted by name")]),e._v("\nkubectl get services --sort-by"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(".metadata.name\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# List pods sorted by restart count")]),e._v("\nkubectl get pods --sort-by"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'.status.containerStatuses[0].restartCount'")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Rolling update pods for frontend-v1")]),e._v("\nkubectl rolling-update frontend-v1 -f frontend-v2.json\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Scale a replicaset named 'foo' to 3")]),e._v("\nkubectl scale --replicas"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" rs/foo\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v('# Scale a resource specified in "foo.yaml" to 3')]),e._v("\nkubectl scale --replicas"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" -f foo.yaml\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Execute a command in every pod / replica")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[e._v("i")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("do")]),e._v(" kubectl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("exec")]),e._v(" foo-"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$i")]),e._v(" -- "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sh")]),e._v(" -c "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'echo "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("hostname")]),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" > /usr/share/nginx/html/index.html'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("done")]),e._v("\n")])])]),s("h3",{attrs:{id:"资源管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#资源管理"}},[e._v("#")]),e._v(" 资源管理")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Get documentation for pod or service")]),e._v("\nkubectl explain pods,svc\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Create resource(s) like pods, services or daemonsets")]),e._v("\nkubectl create -f ./my-manifest.yaml\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Apply a configuration to a resource")]),e._v("\nkubectl apply -f ./my-manifest.yaml\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Start a single instance of Nginx")]),e._v("\nkubectl run nginx --image"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("nginx\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Create a secret with several keys")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<<")]),e._v("EOF "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" kubectl create -f -\napiVersion: v1\nkind: Secret\nmetadata:\n name: mysecret\ntype: Opaque\ndata:\n password: "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"s33msi4"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" base64"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("\n username: "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"jane"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" base64"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("\nEOF\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Delete a resource")]),e._v("\nkubectl delete -f ./my-manifest.yaml\n")])])]),s("h3",{attrs:{id:"监控和日志"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#监控和日志"}},[e._v("#")]),e._v(" 监控和日志")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Deploy Heapster from Github repository")]),e._v("\nkubectl create -f deploy/kube-config/standalone/\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Show metrics for nodes")]),e._v("\nkubectl "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("top")]),e._v(" node\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Show metrics for pods")]),e._v("\nkubectl "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("top")]),e._v(" pod\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Show metrics for a given pod and its containers")]),e._v("\nkubectl "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("top")]),e._v(" pod pod_name --containers\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Dump pod logs (stdout)")]),e._v("\nkubectl logs pod_name\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Stream pod container logs (stdout, multi-container case)")]),e._v("\nkubectl logs -f pod_name -c my-container\n")])])]),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("官方")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/kubernetes/kubernetes",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes Github"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://kubernetes.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes 官网"),s("OutboundLink")],1)])])]),e._v(" "),s("li",[s("strong",[e._v("教程")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://jimmysong.io/kubernetes-handbook/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes 中文指南"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/rootsongjc/kubernetes-handbook",target:"_blank",rel:"noopener noreferrer"}},[e._v("kubernetes-handbook"),s("OutboundLink")],1)])])]),e._v(" "),s("li",[s("strong",[e._v("文章")]),e._v(" "),s("ul",[s("li",[e._v("https://github.com/LeCoupa/awesome-cheatsheets/blob/master/tools/kubernetes.sh")])])]),e._v(" "),s("li",[s("strong",[e._v("更多资源")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/ramitsurana/awesome-kubernetes",target:"_blank",rel:"noopener noreferrer"}},[e._v("awesome-kubernetes"),s("OutboundLink")],1)])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);