<template>
  <mdb-container  fluid>
    <mdb-row>
      <mdb-col md="3">
        <v-navigation-drawer
        stateless
        value="true"
        >
        <v-list>
          <v-list-tile @click="showEmpCreate(value)">
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>
              Home
            </v-list-tile-title>
          </v-list-tile>

          <v-list-group
            prepend-icon="account_circle"
            value="true"
          >
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title>Users</v-list-tile-title>
              </v-list-tile>
            </template>
            <v-list-group
              no-action
              sub-group
              value="true"
            >
              <template v-slot:activator>
                <v-list-tile>
                  <v-list-tile-title>Admin</v-list-tile-title>
                </v-list-tile>
              </template>

              <v-list-tile
                v-for="(admin, i) in admins"
                :key="i"
                @click=""
              >
                <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
                <v-list-tile-action>
                  <v-icon v-text="admin[1]"></v-icon>
                </v-list-tile-action>
              </v-list-tile>
            </v-list-group>

            <v-list-group
              sub-group
              no-action
            >
              <template v-slot:activator>
                <v-list-tile>
                  <v-list-tile-title>Employees</v-list-tile-title>
                </v-list-tile>
              </template>
              <v-list-tile
                v-for="(crud, i) in cruds"
                :key="i"
                @click="showEmpCreate(i)"
              >
                <v-list-tile-title v-text="crud[0]"></v-list-tile-title>
                <v-list-tile-action>
                  <v-icon v-text="crud[1]"></v-icon>
                </v-list-tile-action>
              </v-list-tile>
            </v-list-group>
          </v-list-group>
        </v-list>
      </v-navigation-drawer>
      </mdb-col>
      <mdb-col md="9">
        <DashboardHome v-if="isDashboard"></DashboardHome>
        <EmpCreate v-if="isEmpCreate"></EmpCreate>
        <EmpRead v-if="isEmpRead"/>
        <EmpUpdate v-if="isEmpUpdate"/>
        <EmpDelete v-if="isEmpDelete"/>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbBtn
} from 'mdbvue';
import DashboardHome from '@/components/DashboardHome.vue';
import EmpCreate from '@/components/EmpCreate.vue';
import EmpRead from '@/components/EmpRead.vue';
import EmpUpdate from '@/components/EmpUpdate.vue';
import EmpDelete from '@/components/EmpDelete.vue';
  export default {
    components: {
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbBtn,
      EmpCreate,
      EmpRead,
      EmpUpdate,
      EmpDelete,
      DashboardHome,
      Chart
    },
    data () {
      return {
        isDashboard: true,
        isEmpCreate: false,
        isEmpRead: false,
        isEmpUpdate: false,
        isEmpDelete: false,
        admins: [
        ['Management', 'people_outline'],
        ['Settings', 'settings']
      ],
      cruds: [
        ['Create', 'add'],
        ['View', 'insert_drive_file'],
        ['Update', 'update'],
        ['Delete', 'delete']
      ]
      }
    },
    methods: {
      showEmpCreate(some) {
        if (some == '0') {
          this.isEmpCreate = true;
          this.isEmpRead   = false;
          this.isEmpUpdate = false;
          this.isEmpDelete = false;
          this.isDashboard = false;
        } else if (some == '1') {
          this.isEmpCreate = false;
          this.isEmpRead   = true;
          this.isEmpUpdate = false;
          this.isEmpDelete = false;
          this.isDashboard = false;

        } else if (some == '2') {
          this.isEmpCreate = false;
          this.isEmpRead   = false;
          this.isEmpUpdate = true;
          this.isEmpDelete = false;
          this.isDashboard = false;

        } else if (some == '3') {
          this.isEmpCreate = false;
          this.isEmpRead   = false;
          this.isEmpUpdate = false;
          this.isEmpDelete = true;
          this.isDashboard = false;

        } else {
          this.isDashboard = true;
          this.isEmpCreate = false;
          this.isEmpRead   = false;
          this.isEmpUpdate = false;
          this.isEmpDelete = false;
        }
        console.log(some);
      }
    },
  }
</script>