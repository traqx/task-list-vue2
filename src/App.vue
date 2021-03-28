<template>
    <v-app class="app">
        <v-card>
            <div>
                <v-app-bar>
                    <v-toolbar-title>Tasks</v-toolbar-title>
                </v-app-bar>
            </div>
            <v-main>
                <task-form @new-task="addTask($event)" />
                <task-list :tasks="tasks" />
            </v-main>
        </v-card>
    </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TaskList from "@/components/TaskList.vue";
import TaskForm from "@/components/TaskForm.vue";
import { Task } from "@/model/task";

@Component({
    components: { TaskList, TaskForm },
})
export default class App extends Vue {
    public tasks: Task[] = [];

    public addTask(task: Task): void {
        this.tasks.push(task);
    }
}
</script>

<style scoped>
.app {
    max-width: 400pt;
    margin: 0 auto;
    text-align: center;
}
</style>