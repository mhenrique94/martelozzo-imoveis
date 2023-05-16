<template>
  <div class="main-navbar">
    <span class="text-h3 pl-4 logotipo">Martelozzo</span>
    <input type="checkbox" id="hamburger-input" class="burger-shower" />
    <label id="hamburger-menu" for="hamburger-input">
      <nav id="sidebar-menu">
        <ul class="sm-items">
          <li class="white--text">
            <a href="#inicio">Inicio</a>
          </li>
          <li class="white--text"><a href="#portfolio"> Portfolio</a></li>
          <li class="brown white--text"><a href="#contato">Contato</a></li>
          <li class="brown white--text">
            <a href="#who-we-are">Quem somos</a>
          </li>
        </ul>
      </nav>
    </label>
    <div class="overlay"></div>
  </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Cabin&display=swap");
.main-navbar {
  position: sticky;
  top: 0;
  background-color: white;
  height: 64px;
  display: flex;
  align-items: center;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.35s, visibility 0.35s, height 0.35s;
  overflow: hidden;
  background: black;
  z-index: -1;
}

#main-menu {
  display: block;
  height: 100px;
  width: 100%;
  margin: 0px;
  z-index: 9;
}

#main-menu ul {
  max-width: 800px;
  width: 100%;
  height: 100%;
  margin: 0px auto;
  padding: 0px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  z-index: 9;
}

#main-menu li {
  list-style-type: none;
  font-size: 2rem;
}

#main-menu a {
  font-size: 1.5rem;
  text-decoration: none;
}

#main-menu a:hover {
  text-decoration: underline;
}

#hamburger-input {
  display: none;
}

#hamburger-menu {
  position: fixed;
  right: 16px;
  top: 8px;
  width: 50px;
  height: 40px;
  display: none;
  border: none;
  padding: 0px;
  margin: 0px;
  background: linear-gradient(
    to bottom,
    black,
    black 20%,
    white 20%,
    white 40%,
    black 40%,
    black 60%,
    white 60%,
    white 80%,
    black 80%,
    black 100%
  );
}

#hamburger-menu #sidebar-menu {
  visibility: hidden;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 50%;
  transition: 0.3s;
  padding: 0px 10px;
  box-sizing: border-box;
  z-index: 50000;
}

#hamburger-menu .sm-items {
  display: flex;
  flex-direction: column;
  background-color: #2d2b2b;
}

#hamburger-menu li {
  list-style-type: none;
  line-height: 3rem;
  width: 100%;
  color: whitesmoke;
  padding-left: 16px;
}

#hamburger-menu li:hover {
  background-color: #100f0f;
}

#hamburger-menu a {
  color: whitesmoke;
  text-decoration: none;
}

#hamburger-menu a:hover {
  text-decoration: underline;
}

#hamburger-input:checked + #hamburger-menu #sidebar-menu {
  visibility: visible;
}
#hamburger-input:checked ~ .overlay {
  visibility: visible;
  opacity: 0.4;
}

@media screen and (max-width: 600px) {
  #main-menu {
    display: none;
  }
  #hamburger-menu {
    display: inline;
  }
}
</style>
