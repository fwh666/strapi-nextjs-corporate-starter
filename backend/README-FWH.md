# 备注说明
1. 先启动后端服务
2. 后端生成apiToken， 一个只读，一个创建。用于前端服务访问用

## 如何在Vercel部署strapi后端服务
1. 
NODE_ENV=production yarn develop
NODE_ENV=production yarn build
2. NODE_ENV=production yarn start
3. 如何配置build，outdir，install，deployment
4. 是否需要提前配置环境信息，还是Vercel端配置上
5. 命令是否需要覆盖操作
6. 直接： yarn develop&& yarn build
7. 打包用develop 部署用build
8. npm install sqlite3 && npm install  修改为： 8. npm install sqlite3 && npm run build
9. npm run start 
10. 设置输出目录/vercel/output.   build  install start
11. 再render.com中标准输出： npm install&& npm run build    npm run develop  
