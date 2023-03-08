
这是一个 react-native-windows 的练习项目，请勿用于其他用途！

> 当前时间：2023年3月5日, react native 0.71

[react-native-windows](https://microsoft.github.io/react-native-windows/)

## react native 目前支持的平台：

- Android
- Expo Go
- iOS
- macOS
  - 仅支持到 react native 0.64 & macOS 10.14
- tvOS
- Web
- Windows

# [开发流程](https://microsoft.github.io/react-native-windows/docs/getting-started#install-react-native-for-windows)

1. 初始化项目
    - `npx react-native init <projectName> --template react-native@^0.71.0`
1. 进入项目
    - `cd projectName`
1. 安装 Windows 扩展
    - 注意：当前操作会覆盖 `metro.config.js` 中一些配置，如有需要，请提前备份
    - `npx react-native-windows-init --overwrite`
1. [开发前检查必要的运行环境](https://microsoft.github.io/react-native-windows/docs/rnw-dependencies)
    - 注意：除 windows 10/11 外，其他的开发依赖大概需要 45G，非文档中的 15G ！！！
    - 下载的依赖包括
      - python 3
      - chocolatey 
      - 一堆 c/cpp 依赖
      - .net/c# 依赖
      - windows sdk
      - visual studio 2022
      - 其他
    - visual studio 2022 这玩意真的很卡，但是需要用来设置 Windows UI 的版本，偶尔还是要打开一下，顺便吐槽，各种 sdk 的版本匹配检查是在开发编译命令之后，刚开始很容易被各种报错折磨，太浪费时间
    - PowerShell run
  ```shell
  Set-ExecutionPolicy Unrestricted -Scope Process -Force;
  iex (New-Object System.Net.WebClient).DownloadString('https://aka.ms/rnw-vs2022-deps.ps1');

  ```
1. 安装 nodejs 依赖
    - 推荐使用 yarn 
    - `yarn install` 或者 `yarn` 
1. 启动开发服务
    - `npx react-native run-windows`
1. 应用打包与安装
    - `npx react-native run-windows --arch x64 --release --logging`
    - `npx react-native run-windows --arch x64 --release --no-packager --no-deploy --logging`
    - 打包输出目录在 `./windows/AppPackages/xxx` 下，格式为 `.msix` 和 `.appxsym`,
    - 签名问题暂时没有处理，应用无法安装
    - 可通过 windows store 下载安装 MSIX HERO 来安装运行未签名的应用
    - 暂时没找到生成通用 `exe` 或者 `nsis` 安装包的方法
    - 其他内容见 ci 持续集成

## vscode 相关
### 插件： 
[React Native Tools](https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native)

### debug 配置
> `.vscode/launch.json`

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug Windows",
      "cwd": "${workspaceFolder}",
      "type": "reactnative",
      "request": "launch",
      "platform": "windows"
    }
  ]
}
```


# github ci 持续集成配置
https://microsoft.github.io/react-native-windows/docs/setup-ci

。。。待补充

## react native 可用的包：

https://reactnative.directory/

https://microsoft.github.io/react-native-windows/docs/supported-community-modules

## React Navigation

[React Navigation](https://reactnavigation.org/)

[React Navigation 6.x 中文介绍](https://juejin.cn/post/7009526375606386718#heading-0)

