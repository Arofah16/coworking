<template>
    <section
    :style="{
        background:
          'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),' +
          'url(' +
          require('@/assets/room.jpg') +
          ')',
        'background-position': 'center',
        'background-repeat': 'no-repeat',
        'background-size': 'cover',
        height: '100vh',
      }"
      class="px-5"
    >
        <v-row style="align-items: center; height: 100%;">
            <v-col cols="12" offside-md="15">
                <h1 style="font-size: 3em; color:white;" >
                    Reimagine Your <br> Workspace
                </h1>
                <p style="color:white;">
                    Whether you’re an established enterprise <br />
                    or a growing startup, discover flexible <br />
                    spaces and solutions to move <br />
                    your business forward.
                </p>

                <v-btn>BOOK NOW</v-btn>

            </v-col>
        </v-row>

    </section>

</template>