const base = {
    get() {
        return {
            url : "http://localhost:8080/zhouchengjinxiaocun/",
            name: "zhouchengjinxiaocun",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/zhouchengjinxiaocun/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "福泰轴承股份有限公司进销存系统"
        } 
    }
}
export default base
