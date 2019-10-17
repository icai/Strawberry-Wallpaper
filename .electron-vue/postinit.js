const path = require('path')
const fs= require('fs')
// 检测是否有用户配置文件，没有的话根据模板生成一个
const userConfigPath = path.resolve(__dirname,'../.user-config.js')

if(!fs.existsSync(userConfigPath)){
  fs.copyFileSync(path.resolve(__dirname,'../user-config.template.js'), userConfigPath)
}