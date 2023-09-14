<template>
    <div class="text-center">
        <v-dialog v-model="dialog" width="600">
            <v-card>
                <v-card-title class="text-h6 grey lighten-2 mb-1">
                    Filters
                    <v-spacer></v-spacer>

                    <v-btn fab icon small @click="closeDialog">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-card-title>
                <div class="pa-2 mb-1">
                    <div class="text-subtitle-2">Type of place</div>
                    <div class="text-caption">A home all to yourself. Monthly prices don't include fees or taxes.</div>
                </div>
                <v-row class="ma-0 pa-0">
                    <v-col class="col-11 ma-0 pa-0">
                        <v-tabs class="priceTabs" v-model="filterTabs" hide-slider>
                            <v-tab active-class="secondary" :key="1">
                                <div class="text-style">
                                    <div class="font-weight-bold pb-1">Any Type</div>
                                    <div>₹2,19,444 avg</div>
                                </div>
                            </v-tab>
                            <v-tab active-class="secondary" :key="2">
                                <div class="text-style">
                                    <div class="font-weight-bold pb-1">Room</div>
                                    <div>₹49,455 avg</div>
                                </div>
                            </v-tab>
                            <v-tab active-class="secondary" :key="3">
                                <div class="text-style">
                                    <div class="font-weight-bold pb-1">Entire home</div>
                                    <div>₹4,45,567 avg</div>
                                </div>
                            </v-tab>
                        </v-tabs>
                    </v-col>
                </v-row>
                <v-divider class="mt-4 mb-2"></v-divider>
                <div class="text-subtitle-2 pa-2 mb-1">Price Range</div>
                <!-- <v-tabs-items v-model="filterTabs">
                    <v-tab-item v-for="n in 3" :key="n">
                        {{ n }}
                    </v-tab-item>
                </v-tabs-items> -->

                <div class="mr-2 ml-2">
                    <v-range-slider track-color="gray" color="black" v-model="sliderVal" @change="updateInputValues"
                        step="1" :min="minSliderVal" :max="maxSliderVal"></v-range-slider>
                </div>
                <div>
                    <v-row class="d-flex justify-center align-center">
                        <v-col class="col-5 d-flex justify-center align-center">
                            <v-text-field v-model="minInputSliderVal" @change="updateSliderValue" label="minimum" outlined
                                prepend-inner-icon="mdi-currency-rupee" dense></v-text-field>
                        </v-col>
                        <span class="d-flex justify-center align-center mb-6"> - </span>
                        <v-col class="col-5 d-flex justify-center align-center">
                            <v-text-field v-model="maxInputSliderVal" @change="updateSliderValue" label="maximum" outlined
                                prepend-inner-icon="mdi-currency-rupee" dense></v-text-field>
                        </v-col>
                    </v-row>


                </div>

                <v-divider class="mt-4 mb-2"></v-divider>
                <div class="text-subtitle-2 pa-2 mb-1">Rooms and beds</div>

                <div class="text-caption ml-2 mt-2">Bedrooms</div>
                <div class="ml-2">
                    <v-chip-group mandatory active-class="chip-color">
                        <v-chip>Any</v-chip>
                        <v-chip class="chip-group" v-for="i in 8" :key="i">
                            <span v-if="i !== 8">
                                {{ i }}</span>
                            <span v-else>
                                {{ i }}+</span>
                        </v-chip>
                    </v-chip-group>
                </div>

                <div class="text-caption ml-2 mt-2">Beds</div>
                <div class="ml-2 ">
                    <v-chip-group mandatory active-class="chip-color">
                        <v-chip>Any</v-chip>
                        <v-chip class="chip-group" v-for="i in 8" :key="i">
                            <span v-if="i !== 8">
                                {{ i }}</span>
                            <span v-else>
                                {{ i }}+</span>
                        </v-chip>
                    </v-chip-group>
                </div>

                <div class="text-caption ml-2 mt-2">Bathrooms</div>
                <div class="ml-2 ">
                    <v-chip-group mandatory active-class="chip-color">
                        <v-chip active>Any</v-chip>
                        <v-chip class="chip-group" v-for="i in 8" :key="i">
                            <span v-if="i !== 8">
                                {{ i }}</span>
                            <span v-else>
                                {{ i }}+</span>
                        </v-chip>
                    </v-chip-group>
                </div>

                <v-divider class="mt-4 mb-2"></v-divider>
                <div class="text-subtitle-2 pa-2 mb-1">Property Type</div>
                <v-item-group multiple v-model="propertyTypeValue">
                    <v-container>
                        <v-row>
                            <v-col v-for="property in propertyType" :key="property.name">
                                <v-item v-slot="{ active, toggle }">
                                    <v-card :class="active ? 'property-active-style' : 'property-style'" @click="toggle">
                                        <v-card-title>
                                            <v-icon>{{ property.icon }}</v-icon>
                                        </v-card-title>
                                        <v-card-subtitle class="pt-3">
                                            {{ property.name }}
                                        </v-card-subtitle>

                                    </v-card>
                                </v-item>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-item-group>

                <v-divider class="mt-4"></v-divider>
                <div class="text-subtitle-2 pa-2 mb-1">Amenities</div>
                <v-container>
                    <div class="text-caption font-weight-bold ma-2">Essential</div>
                    <v-row class="ma-0 pa-0 ml-2">
                        <v-col class="ma-0 pa-0 pt-2" cols="6" v-for="aments in amenitiesList.Essential" :key="aments">
                            <v-checkbox hide-details multiple color="black" class="ma-0 pa-0"
                                v-model="selectedEssentialAmenities" :value="aments">
                                <template v-slot:label>
                                    <span class="text-caption">{{ aments }}</span>
                                </template>
                            </v-checkbox>
                        </v-col>
                    </v-row>
                    <v-sheet v-if="!hideValue">
                        <div class="text-caption font-weight-bold ma-2">Feature {{ hideValue }}</div>
                        <v-row class="ma-0 pa-0 ml-2">
                            <v-col class="ma-0 pa-0 pt-2" cols="6" v-for="aments in amenitiesList.Feature" :key="aments">
                                <v-checkbox hide-details multiple color="black" class="ma-0 pa-0"
                                    v-model="selectedFeatureAmenities" :label="aments" :value="aments">
                                    <template v-slot:label>
                                        <span class="text-caption">{{ aments }}</span>
                                    </template></v-checkbox>
                            </v-col>
                        </v-row>
                        <div class="text-caption font-weight-bold ma-2">Locaion</div>
                        <v-row class="ma-0 pa-0 ml-2">
                            <v-col class="ma-0 pa-0 pt-2" cols="6" v-for="aments in amenitiesList.Locaion" :key="aments">
                                <v-checkbox hide-details multiple color="black" class="ma-0 pa-0"
                                    v-model="selectedLocaionAmenities" :label="aments" :value="aments">
                                    <template v-slot:label>
                                        <span class="text-caption">{{ aments }}</span>
                                    </template></v-checkbox>
                            </v-col>
                        </v-row>
                        <div class="text-caption font-weight-bold ma-2">Safety</div>
                        <v-row class="ma-0 pa-0 ml-2">
                            <v-col class="ma-0 pa-0 pt-2" cols="6" v-for="aments in amenitiesList.Safety" :key="aments">
                                <v-checkbox hide-details multiple color="black" class="ma-0 pa-0"
                                    v-model="selectedSafetyAmenities" :label="aments" :value="aments">
                                    <template v-slot:label>
                                        <span class="text-caption">{{ aments }}</span>
                                    </template></v-checkbox>
                            </v-col>
                        </v-row>

                    </v-sheet>
                    <div class="mt-3">
                        <v-btn small plain class="text-capitalize text-decoration-underline font-weight-bold"
                            @click="hideValue = !(hideValue)">
                            <span v-if="hideValue">Show more</span>
                            <span v-else>Show less</span>
                        </v-btn>
                    </div>
                </v-container>

                <v-divider class="mt-4"></v-divider>
                <div class="text-subtitle-2 pa-2 mb-1">Booking Options</div>
                <v-container>
                    <v-row>
                        <v-col cols="10" class="pb-0 mb-0">
                            <div class="text-subtitle-2">Instant Book</div>
                            <div class="text-caption">Listings you can book without waiting for host approval</div>
                        </v-col>
                        <v-col cols="2" class="pb-0 mb-0">
                        <v-switch v-model="instantBook" color="black"></v-switch>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="10" class="pt-0 mt-0">
                            <div class="text-subtitle-2">Self check-in</div>
                            <div class="text-caption">Easy access to the property once you arrive</div>
                        </v-col>
                        <v-col cols="2" class="pt-0 mt-0">
                            <v-switch v-model="selfcheck" color="black"></v-switch>
                        </v-col>
                    </v-row>
                </v-container>

                <v-divider class="mt-4"></v-divider>
                <div class="text-subtitle-2 pa-2 mb-1">Accessibility features</div>
                <v-container>
                    <div class="text-caption font-weight-bold ma-2">Guest entrance and parking</div>
                    <v-row class="ma-0 pa-0 ml-2">
                        <v-col class="ma-0 pa-0 pt-2" cols="6"
                            v-for="feature in accessibilityFeatures['Guest entrance and parking']" :key="feature">
                            <v-checkbox hide-details multiple color="black" class="ma-0 pa-0"
                                v-model="selectedGuestAccessibility" :value="feature">
                                <template v-slot:label>
                                    <span class="text-caption">{{ feature }}</span>
                                </template>
                            </v-checkbox>
                        </v-col>
                    </v-row>
                    <v-sheet v-if="!hideFeatureValue">
                        <div class="text-caption font-weight-bold ma-2">Bedroom</div>
                        <v-row class="ma-0 pa-0 ml-2">
                            <v-col class="ma-0 pa-0 pt-2" cols="6" v-for="feature in accessibilityFeatures.Bedroom"
                                :key="feature">
                                <v-checkbox hide-details multiple color="black" class="ma-0 pa-0"
                                    v-model="selectedBedroomAccessibility" :label="feature" :value="feature">
                                    <template v-slot:label>
                                        <span class="text-caption">{{ feature }}</span>
                                    </template></v-checkbox>
                            </v-col>
                        </v-row>
                        <div class="text-caption font-weight-bold ma-2">Bathroom</div>
                        <v-row class="ma-0 pa-0 ml-2">
                            <v-col class="ma-0 pa-0 pt-2" cols="6" v-for="feature in accessibilityFeatures.Bathroom"
                                :key="feature">
                                <v-checkbox hide-details multiple color="black" class="ma-0 pa-0"
                                    v-model="selectedBathroomAccessibility" :label="feature" :value="feature">
                                    <template v-slot:label>
                                        <span class="text-caption">{{ feature }}</span>
                                    </template></v-checkbox>
                            </v-col>
                        </v-row>
                        <div class="text-caption font-weight-bold ma-2">Adaptive equipment</div>
                        <v-row class="ma-0 pa-0 ml-2">
                            <v-col class="ma-0 pa-0 pt-2" cols="6"
                                v-for="feature in accessibilityFeatures['Adaptive equipment']" :key="feature">
                                <v-checkbox hide-details multiple color="black" class="ma-0 pa-0"
                                    v-model="selectedAdaptiveAccessibility" :label="feature" :value="feature">
                                    <template v-slot:label>
                                        <span class="text-caption">{{ feature }}</span>
                                    </template></v-checkbox>
                            </v-col>
                        </v-row>
                    </v-sheet>
                    <div class="mt-3">
                        <v-btn small plain class="text-capitalize text-decoration-underline font-weight-bold"
                            @click="hideFeatureValue = !(hideFeatureValue)">
                            <span v-if="hideFeatureValue">Show more</span>
                            <span v-else>Show less</span>
                        </v-btn>
                    </div>
                </v-container>
                <v-divider class="mt-4 mb-2"></v-divider>
                <div class="text-subtitle-2 pa-2 mb-1">Host language</div>
                <v-container>
                    <v-row class="ma-0 pa-0 ml-2">
                        <v-col class="ma-0 pa-0 pt-2" cols="6" v-for="(lang, indx) in hostlanguage" :key="lang"
                            v-show="!(hideLangValue && indx > 3)">
                            <v-checkbox hide-details multiple color="black" class="ma-0 pa-0"
                                v-model="selectedHostLanguages" :label="lang" :value="lang">
                                <template v-slot:label>
                                    <span class="text-caption">{{ lang }}</span>
                                </template></v-checkbox>
                        </v-col>
                    </v-row>
                    <div class="mt-3">
                        <v-btn small plain class="text-capitalize text-decoration-underline font-weight-bold"
                            @click="hideLangValue = !(hideLangValue)">
                            <span v-if="hideLangValue">Show more</span>
                            <span v-else>Show less</span>
                        </v-btn>
                    </div>
                </v-container>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-btn plain small class="text-capitalize text-decoration-underline font-weight-bold">
                        Clear all
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn dark class="text-capitalize" @click="dialog = false">
                       Show {{ filterResult }}&nbsp; <span v-if="filterResult === 1"> home </span> <span v-else> homes</span>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script setup>
import { onMounted, ref, defineProps, watch } from 'vue'

const dialog = ref(false)
const filterTabs = ref()
const sliderVal = ref([0, 99999])
const maxSliderVal = ref(99999)
const minSliderVal = ref(0)
const maxInputSliderVal = ref(maxSliderVal.value)
const minInputSliderVal = ref(minSliderVal.value)
const propertyTypeValue = ref()

const selectedEssentialAmenities = ref([])
const selectedFeatureAmenities = ref([])
const selectedLocaionAmenities = ref([])
const selectedSafetyAmenities = ref([])

const selectedGuestAccessibility = ref([])
const selectedBedroomAccessibility = ref([])
const selectedBathroomAccessibility = ref([])
const selectedAdaptiveAccessibility = ref([])

const selectedHostLanguages = ref([])
const hideValue = ref(true)
const hideFeatureValue = ref(true)
const hideLangValue = ref(true)
const instantBook = ref()
const selfcheck = ref()
const filterResult = ref(100)

const propertyType = [
    { name: "House", icon: "mdi-home-outline" },
    { name: "Flat", icon: "mdi-domain" },
    { name: "Guest House", icon: "mdi-home-variant-outline" },
    { name: "Hotel", icon: "mdi-office-building-outline" },
]

const amenitiesList = ref(
    {
        Essential: [
            "Wifi",
            "Kitchen",
            "Washing machine",
            "Dryer",
            "Air conditioning",
            "Heating",
            "Dedicated workspace",
            "TV",
            "Hair dryer",
            "Iron"
        ],
        Feature: ["Pool",
            "Hot tub",
            "Free parking",
            "EV charger",
            "Cot",
            "Gym",
            "BBQ grill",
            "Breakfast",
            "Indoor fireplace",
            "Smoking allowed"],
        Locaion: [
            "Ski-in/ski-out"
        ],
        Safety: [

            "Smoke alarm",
            "Carbon monoxide alarm"
        ]

    }
)

const accessibilityFeatures = ref({
    "Guest entrance and parking": ["Step-free guest entrance",
        "Guest entrance wider than 32 inches (81 centimetres)",
        "Accessible parking spot",
        "Step-free path to the guest entrance",],
    "Bedroom": [
        "Step-free bedroom access",
        "Bedroom entrance wider than 32 inches (81 centimetres)",],
    "Bathroom": [
        "Step-free bathroom access",
        "Bathroom entrance wider than 32 inches (81 centimetres)",
        "Shower grab bar",
        "Toilet grab bar",
        "Step-free shower",
        "Shower or bath chair",],
    "Adaptive equipment"
        : ["Ceiling or mobile hoist",]
})

const hostlanguage = ref(
    [
        "English",
        "French",
        "German",
        "Japanese",
        "Italian",
        "Russian",
        "Spanish",
        "Chinese (Simplified)",
        "Arabic",
        "Hindi",
        "Portuguese",
        "Dutch",
        "Bengali",
        "Punjabi",
        "Hebrew",
        "Tagalog",
        "Swedish",
    ]
)


const props = defineProps([
    "isDialogOpen"
])



const closeDialog = () => {
    dialog.value = false
}

const updateInputValues = () => {
    minInputSliderVal.value = sliderVal.value[0]
    maxInputSliderVal.value = sliderVal.value[1]
    console.log("value slider changes", sliderVal.value, minInputSliderVal.value)
}
const updateSliderValue = () => {
    sliderVal.value = [minInputSliderVal.value, maxInputSliderVal.value]

    console.log("value changes", sliderVal.value, minInputSliderVal.value)
}
watch(
    () => props.isDialogOpen,
    () => {
        console.log("props change", props.isDialogOpen)
        dialog.value = true
    }, { deep: true })

onMounted(() => {
    console.log(dialog.value, props.isDialogOpen)
})

</script>

<style scoped>
.priceTabs {
    border: 1px solid black;
    width: fit-content;
    border-radius: 10px;
    overflow: hidden;
    margin: auto;
    display: flex;
    justify-content: center;
}

.text-style {
    text-transform: none !important;
    font-size: smaller;
    font-weight: normal;

}

.chip-color {
    color: white;
    background: black;
}

.chip-group {
    width: 50px;
    justify-content: center;
}

.active-tab {
    color: white !important;
}

.property-style {
    border: 1px solid rgba(128, 128, 128, 0.224);
    border-radius: 10px;
}

.property-style:hover {
    border: 1px solid black;
}

.property-active-style {
    border: 2px solid black;
    border-radius: 10px;
}
</style>