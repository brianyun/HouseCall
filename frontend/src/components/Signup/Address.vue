<template>
  <v-layout column mt-4>
    <v-flex mt-4>
      <h3>주소</h3>
    </v-flex>

    <v-layout row justify-space-between ml-2 mr-2>
      <v-flex xs8>
        <v-text-field placeholder solo></v-text-field>
      </v-flex>

      <v-flex xs3>
        <v-btn outline="true" @click="addressNumber">우편번호</v-btn>
        <!-- <v-dialog v-model="dialog">
          <v-btn slot="activator" color="red lighten-2" dark>Click Me</v-btn>

          <v-card>
            <v-card-title class="headline grey lighten-2" primary-title>Privacy Policy</v-card-title>

            <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" flat @click="dialog = false">I accept</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>-->
      </v-flex>
    </v-layout>

    <v-flex>
      <v-text-field placeholder="나머지 주소를 기입하세요." solo></v-text-field>
    </v-flex>
  </v-layout>
</template>



<script>
export default {};
</script>

<style scoped>
</style>