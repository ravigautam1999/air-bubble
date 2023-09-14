<template>
    <v-sheet>
        <v-card>
            <v-row class="pt-2 mt-2">
                <v-col class="col-3">
                    A
                </v-col>
                <v-col class="colo-6 d-flex justify-center align-center flex-column">
                    <v-card flat class="overflow-hidden">
                        <v-tabs v-model="selectedMenuTab" grow>
                            <v-tab v-for="mItem in menuTabItems" :key="mItem">{{ mItem }}
                            </v-tab>
                        </v-tabs>


                    </v-card>
                    <v-tabs-items v-if="true" class="mt-2" style="width: inherit;" v-model="selectedMenuTab">
                        <v-tab-item v-for="mItem in menuTabItems" :key="mItem">
                            <v-card class="secondary ma-2 rounded-pill" >
                                <v-card-text class="error rounded-pill">
                                    <v-row class="error rounded-pill">
                                    <v-col class="d-flex flex-column rounded-pill primary">
                                        <span>Where</span>
                                        <span>Search destinations</span>
                                    </v-col>
                                    <v-col class="d-flex flex-row">

                                        <v-col class="d-flex flex-column mt-0 pt-0 rounded-pill primary">
                                            <span>Check in</span>
                                            <span>Add dates</span>
                                        </v-col>
                                        <v-col class="d-flex flex-column mt-0 pt-0 rounded-pill primary">
                                            <span>Check out</span>
                                            <span>Add dates</span>
                                        </v-col>

                                    </v-col>
                                    <v-col class="d-flex flex-row rounded-pill primary">
                                        <v-col class="d-flex flex-column mt-0 pt-0">
                                            <span>Who</span>
                                            <span>Add guests</span>
                                        </v-col>
                                        <v-col class="d-flex flex-column mt-0 pt-0">
                                            <v-btn x-small class="rounded-pill">Search</v-btn>
                                        </v-col>
                                    </v-col>
                                </v-row>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                    </v-tabs-items>
                </v-col>
                <v-col class="col-3 d-flex justify-end">

                    c </v-col>
            </v-row>
        </v-card>
    </v-sheet>
</template>
<script>
export default {
    data() {
        return {
            selectedMenuTab: null,
            menuTabItems: ["Stays", "Experiences", "Online Experiences"]
        }
    }
}
</script>