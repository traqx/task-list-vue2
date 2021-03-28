<template>
    <v-list>
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title>
                    <v-text-field
                        v-model="text"
                        label="Add task"
                        @keyup.enter="createTask"
                    />
                </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Task } from "@/model/task";

@Component({
    components: {},
})
export default class TaskForm extends Vue {
    public text = "";

    public createTask(): void {
        const newTask: Task = {
            text: this.text,
            completed: false,
        };

        this.$emit("new-task", newTask);
        this.text = "";
    }
}
</script>