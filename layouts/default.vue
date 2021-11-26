<template>
  <div class="container">
      <header>
          <h1>TrustHousing.nl</h1> 
          <p>bring back trust in the student housing market </p>
      </header>
      <Nuxt />
  </div>
</template>

<style>
html {
  font-family:
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

header,
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-items: center;
}
.step-card {
  padding: 20px;
  margin: 40px auto;
  max-width: 600px;
  border: solid 2px #dddddd;
}
.step-title {
  margin: 10px 0;
  font-size: 1.75rem;
  font-weight: bold;
}
.step-body {
  margin-bottom: 20px;
  min-height: 350px;
}
.step-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  font-size: 1rem;
}
button {
  display: block;
  padding: 15px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 4px;
}
button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
button.btn-primary {
  background-color: #064faf;
  color: #fff;
}
button.btn-secondary {
  color: #064faf;
}
button.btn-next {
  order: 3;
}
button.btn-back {
  order: 1;
}
.current-steps {
  padding: 10px;
  border-radius: 15px;
  background-color: #eaeaea;
  margin-right: 10px;
  margin-left: auto;
  order: 2;
}
/* From Input & Error */
.form-input {
  display: block;
  margin-bottom: 15px;
}
.form-input label {
  font-weight: 600;
}
.form-input span {
  color: #ff2626;
  font-size: 0.9rem;
  display: block;
}
.form-input .input-control[type='text'],
.form-input .input-control[type='email'] {
  height: 45px;
  padding: 10px;
  width: 100%;
  background-color: #ffffff;
  border: solid 1px #dddddd;
  border-radius: 4px;
}
.form-input .input-control[type='checkbox'] {
  margin-right: 5px;
}
.form-input .input-control.has-error {
  border-color: #ff2626;
}

</style>
