<template>
  <div class="landing">
    <div class="cb-wrapper">
      <div class="container">
        <header>
          <div class="company-message">
            <h1><span class="primary">Discover</span></h1>
            <h4>
              How many can save money and get one step ahead of your competition
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati tempore reiciendis distinctio dolorem, alias quis!
              <!-- <div class="typewriter">
                <span>Eius magnam doloremque nostrum! </span>
              </div> -->
            </h4>
            <button class="btn btn-start">Start Now</button>
          </div>
          <div class="company-banner">
            <!-- <img src="@/assets/photo/undraw_logistics.svg" alt="" /> -->
          </div>
        </header>
      </div>
    </div>
    <div class="feature">
      <div class="feature-header">
        <h3>
          <span class="secondary">PERSE</span><span class="primary">MOVE</span>
        </h3>
        <h2><strong>A better way to send package</strong></h2>
        <h5 class="text-newline">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
          voluptatum cupiditate veritatis in accusamus quisquam.
        </h5>
      </div>
      <div class="feature-body">
        <div class="feature-item-wrapper">
          <div class="feature-body-item">
            <div class="f-icon">
              <a href=""><img src="@/assets/icons/global.svg" alt="" /></a>
            </div>
            <div class="fbi-description">
              <h6>Competitive exchange rates</h6>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p>
            </div>
          </div>

          <div class="feature-body-item">
            <div class="f-icon">
              <a href=""><img src="@/assets/icons/balance.svg" alt="" /></a>
            </div>
            <div class="fbi-description">
              <h6>Competitive exchange rates</h6>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p>
            </div>
          </div>
          <div class="feature-body-item">
            <div class="f-icon">
              <a href=""><img src="@/assets/icons/balance.svg" alt="" /></a>
            </div>
            <div class="fbi-description">
              <h6>Mobile notifications</h6>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p>
            </div>
          </div>
          <div class="feature-body-item">
            <div class="f-icon">
              <a href=""><img src="@/assets/icons/balance.svg" alt="" /></a>
            </div>
            <div class="fbi-description">
              <h6>No hidden fee</h6>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="service">
      <div class="service-container">
        <ul>
          <li>
            <div class="overlay-img">
              <div class="icon-container one">
                <img
                  src="@/assets/icons/logistics-delivery-truck-in-movement.svg"
                  alt=""
                />
              </div>
              <h5>Fast Delivery</h5>
              <p class="service-desc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit,
                autem.
              </p>
            </div>
          </li>
          <li>
            <div class="icon-container two">
              <img src="@/assets/icons/24-hours-delivery.svg" alt="" />
            </div>
            <h5 class="service-title">24/7 Operation Process</h5>
            <p class="service-desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit,
              autem.
            </p>
          </li>
          <li>
            <div class="icon-container three">
              <img src="@/assets/icons/offer.svg" alt="" />
            </div>
            <h5 class="service-title">Affortable Rates</h5>
            <p class="service-desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit,
              autem.
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="partner-wrapper">
      <div class="container">
        <div class="partner-container">
          <div class="partner-title">
            <h1>Our Partners</h1>
          </div>
          <div class="partner-item">
            <img src="@/assets/icons/offer.svg" alt="" />
            <img src="@/assets/icons/offer.svg" alt="" />
            <img src="@/assets/icons/offer.svg" alt="" />
            <img src="@/assets/icons/offer.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="book-wrapper">
      <h2>Get Your Free Consultation</h2>
      <ul class="links">
        <li>
          <a href="#"><img src="@/assets/icons/twitter.svg" alt="" /> </a>
          <p>Twitter</p>
        </li>
        <li>
          <a href="https://www.facebook.com/persemoveph/"
            ><img src="@/assets/icons/fb.svg" alt="" />
          </a>
          <p>Facebook</p>
        </li>
        <li>
          <a href="#"><img src="@/assets/icons/ig.svg" alt="" /> </a>
          <p>Instagram</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ScrollOut from "scroll-out";
export default {
  mounted() {
    this.so = ScrollOut({
      scope: this.$el,
    });
    ScrollOut({
      targets: [".feature", ".icon-container"],
      offset: 400,
    });
  },
  destroyed() {
    this.so.teardown();
  },
};
</script>

<style>
</style>