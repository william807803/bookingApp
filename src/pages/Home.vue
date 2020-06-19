<template>
  <div style="display:flex;margin-top:50px;">
    <div style="width:400px;display:flex;justify-content: flex-end;">
      <!-- <p>You are logged in as {{ user.username }}.</p> -->
      <Menu active-name="1">
        <MenuItem name="1" to="/myProfile">My Profile</MenuItem>
        <MenuItem name="2" to="/addressBook">Address Book</MenuItem>
        <Submenu name="Booking History">
          <template slot="title">Booking History</template>
          <MenuItem name="3" to="/bookingHistory/0">Upcoming</MenuItem>
          <MenuItem name="4" to="/bookingHistory/1">Completed</MenuItem>
          <MenuItem name="5" to="/bookingHistory/2">Canceled</MenuItem>
        </Submenu>
        <MenuItem name="6" to="/paymentsDetails">Payments Details</MenuItem>
        <MenuItem name="7" to="/updatePassword">Update Password</MenuItem>
        <MenuItem name="8" to="/signOut">Log out</MenuItem>
      </Menu>
    </div>
    <div style="margin:10px 40px 40px 40px;">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      user: state => state.auth.user
    })
  }
};
</script>
