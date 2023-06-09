const { createApp } = Vue;

createApp({
    data() {
        return {
            title: 'ToBooList',
            newTask: '',

            tasks:[
                {
                    text: 'Svegliarsi',
                    done: false,
                    edit_enabled: false
                },
                {
                    text: 'Spegnere la sveglia',
                    done: false,
                    edit_enabled: false
                },
                {
                    text: 'Girarsi',
                    done: false,
                    edit_enabled: false
                },
                {
                    text: 'Tornare a dormire',
                    done: false,
                    edit_enabled: false
                },
                {
                    text: 'Farsi prendere dallo schiacciante senso di colpa',
                    done: false,
                    edit_enabled: false
                },
                {
                    text: 'Prendere coscienza dell\' obbligo sociale che ti impone fare cose',
                    done: false,
                    edit_enabled: false
                },
                {
                    text: 'Fare cose',
                    done: false,
                    edit_enabled: false
                }
            ]
        }
    },
    methods: {

        
        changeTaskStatus(index){
            this.tasks[index].done = !this.tasks[index].done;
        },

        
        deleteTask(index){
            this.tasks.splice(index, 1);
        },

        
        addTask(){

           
            let obj = {
                text: this.newTask,
                done: false
            }

        
        this.tasks.push(obj);

        
        this.newTask = '';
        },

       
        editTask(index){
            this.tasks[index].edit_enabled = !this.tasks[index].edit_enabled;
        }
        
    },
}).mount('#app');