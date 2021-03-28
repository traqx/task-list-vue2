<template>
    <v-list>
        <v-list-item v-for="(task, index) in list" :key="index">
            <v-list-item-action>
                <v-checkbox v-model="task.completed"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
                {{ task.text }}
            </v-list-item-content>
            <v-btn icon @click="$emit('delete', task)">
                <v-icon>mdi-delete</v-icon>
            </v-btn>
        </v-list-item>
    </v-list>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Task } from "@/model/task";

@Component({
    components: {},
})
export default class TaskList extends Vue {
    @Prop({
        required: true,
    })
    public tasks!: Task[];

    public get list(): Task[] {
        return this.tasks;
    }
}
</script>

<style scoped>
.done {
    text-decoration: line-through;
}
</style>