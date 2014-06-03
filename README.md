## 安装工具

```bash
npm install -g scrat
```

如果 ``mac`` 上安装遇到权限问题，请看[这里](https://github.com/scrat-team/scrat/issues/3)。安装完成后，执行 ``scrat -v`` 查看版本，确认是否安装成功。

## 下载示例

```bash
git clone https://github.com/scrat-team/project.git
```

## 运行项目

1. 进入项目目录

    ```bash
    cd project
    ```

1. 构建项目

    ```bash
    scrat release
    ```

1. 启动调试服务器

    ```bash
    scrat server start
    ```

1. 浏览页面 http://localhost:8082/

## 开发调试

1. 进入项目目录

    ```bash
    cd porject
    ```

1. 构建并监听文件变化（-w或--watch参数），文件修改后浏览器自动刷新（-L或--live参数）

    ```bash
    scrat release -wL
    ```

1. 打开新的命令窗口，启动调试服务器

    ```bash
    scrat server start
    ```

## 发布上线

1. 进入项目目录

    ```bash
    cd project
    ```

1. 构建，并且：
    * 使用独立编译缓存（-u或--unique参数，同一台机器多人编译时需要此参数）
    * 优化（-o或--optimize参数）
    * 校验（-l或--lint参数）
    * 静态资源加md5戳（-m或--md5参数）
    * combo请求（-p或--pack参数）
    * 将结果发布到output目录下（-d或--dest参数）

    ```bash
    scrat release -uolmpd ./output
    ```

1. 将output目录下的文件打成tar包用于线上部署

    ```bash
    tar zcvf output.tar.gz ./output
    ```

