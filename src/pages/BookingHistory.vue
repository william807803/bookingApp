<template>
  <div>
    <div class="status">{{statusLabels[status]}} Bookings</div>
    <div>
      <Card v-for="history in filterHistories" :key="history.id" style="width:500px;margin-top:20px;">
        <p slot="title" class="title">
          <span>{{history.name}}</span>
        </p>
        <a href="#" slot="extra">
          <span class="detail">Service description ></span>
        </a>
        <div class="content">
          <div class="left">
            <div class="first-row">
              <div style="width:120px;">
                <div class="label">Contact Name</div>
                <div>{{history.contactName}}</div>
              </div>
              <div>
                <div class="label">Contact Number</div>
                <div>{{history.contactNumber}}</div>
              </div>
            </div>
            <div>
              <div class="label">Service Address</div>
              <div>{{history.serviceAddress}}</div>
            </div>
            <div>
              <div class="label">Service Time</div>
              <div>{{history.ServiceTime}}</div>
            </div>
          </div>
          <div class="right">
            <div style="color:#ff9900">Full Refund</div>
            <div>Amount Paid</div>
            <div>${{history.paid}}</div>
            <div>Amount Paid</div>
            <div>${{history.paid}}</div>
          </div>
        </div>
        <div class="footer">
          <div class="line"></div>
          <div style="text-align:right;">Booking Canceled</div>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      statusLabels: ["Upcoming", "Completed", "Canceled"],
      status: 0,
      histories: [
        {
          id: 1,
          name: "Interior Lightning Service 1",
          contactName: "Tom Bruce",
          contactNumber: "0488 888 888",
          serviceAddress: "12 West St. Canley Vale NSW 2166",
          ServiceTime: "Morning 8AM-11AM, 11 December 2019",
          paid: 50,
          refunded: 50,
          status: 0
        },
        {
          id: 2,
          name: "Interior Lightning Service 2",
          contactName: "Tom Bruce",
          contactNumber: "0488 888 888",
          serviceAddress: "12 West St. Canley Vale NSW 2166",
          ServiceTime: "Morning 8AM-11AM, 11 December 2019",
          paid: 50,
          refunded: 50,
          status: 1
        },
        {
          id: 3,
          name: "Interior Lightning Service 3",
          contactName: "Tom Bruce",
          contactNumber: "0488 888 888",
          serviceAddress: "12 West St. Canley Vale NSW 2166",
          ServiceTime: "Morning 8AM-11AM, 11 December 2019",
          paid: 50,
          refunded: 50,
          status: 2
        },
        {
          id: 4,
          name: "Interior Lightning Service 4",
          contactName: "Tom Bruce",
          contactNumber: "0488 888 888",
          serviceAddress: "12 West St. Canley Vale NSW 2166",
          ServiceTime: "Morning 8AM-11AM, 11 December 2019",
          paid: 50,
          refunded: 50,
          status: 0
        },
        {
          id: 5,
          name: "Interior Lightning Service 5",
          contactName: "Tom Bruce",
          contactNumber: "0488 888 888",
          serviceAddress: "12 West St. Canley Vale NSW 2166",
          ServiceTime: "Morning 8AM-11AM, 11 December 2019",
          paid: 50,
          refunded: 50,
          status: 1
        },
        {
          id: 6,
          name: "Interior Lightning Service 6",
          contactName: "Tom Bruce",
          contactNumber: "0488 888 888",
          serviceAddress: "12 West St. Canley Vale NSW 2166",
          ServiceTime: "Morning 8AM-11AM, 11 December 2019",
          paid: 50,
          refunded: 50,
          status: 2
        }
      ]
    };
  },
  computed: {
    filterHistories() {
      return this.histories.filter(ele => ele.status == this.status);
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.status = to.params.status;
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.status = to.params.status;
    next();
  }
};
</script>

<style scoped>
.status {
  color: gray;
  font-size: 18px;
  font-weight: bold;
}
.line {
  background: #dddddd;
  width: 100%;
  height: 3px;
  margin: 20px 0px 5px 0;
}
.content {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
}
.first-row {
  display: flex;
}
.title {
  display: flex;
  justify-content: space-between;
}
.detail {
  font-size: 14px;
  color: #ff9900;
  font-weight: bold;
}
.label {
  color: gray;
}
</style>