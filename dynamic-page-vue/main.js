let pageData = { 
    members : [
                {
                    name:'Yen',
                    gender:'Female'
                },
                {
                    name:'Samy',
                    gender:'Male'
                },
                {
                    name:'Bill',
                    gender:'Unknown'
                }]
};

const app = Vue.createApp({
    data(){
        return pageData;
    }
});

app.mount("#app");