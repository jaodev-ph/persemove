<template>
  <div class="type-writter-wrapper">
    <span class="txt-type"> </span>
    <div class="containner">
      <div class="img-wrapper">
        <img :src="`${this.img}`" alt=""/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["txtElement", "words", "wait"],
  data() {
    return {
      timer: "",
      wordIndex: 0,
      isDeleting: false,
      txt: "",
      img: "",
    };
  },
  created() {
    this.timer = setInterval(this.type, 300);
  },
  methods: {
    type() {
      const current = this.wordIndex % this.words.length;
      const wordvalue = this.words[current].item;
      const imgUrl = this.words[current].img;
      if (this.isDeleting) {
        this.txt = wordvalue.substring(0, this.txt.length - 1);
      } else {
        this.txt = wordvalue.substring(0, this.txt.length + 1);
      }
      const txtElement = document.querySelector(".txt-type");
      txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

      let typeSpeed = 200;
      if (this.isDeleting) {
        typeSpeed / 10;
      }
      if (!this.isDeleting && wordvalue === this.txt) {
        typeSpeed = this.wait;
        this.isDeleting = true;
      }
      if (this.isDeleting && this.txt == "") {
        this.isDeleting = false;
        this.wordIndex++;
      }
      if (this.isDeleting === false) {
        this.img = imgUrl;
      }
    },
  },
};
</script>

